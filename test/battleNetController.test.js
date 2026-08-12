/**
 * Unit tests for BattleNetController — protocol state, callback routing, and
 * decision pre-validation — driven through a fake socket (on/send only).
 */

import test from "node:test";
import assert from "node:assert";

import BattleNetController from "../src/net/BattleNetController.js";

function fakeSocket() {
    const handlers = new Map();
    return {
        sent: [],
        on(type, fn) {
            if (!handlers.has(type)) handlers.set(type, []);
            handlers.get(type).push(fn);
            return this;
        },
        send(msg) { this.sent.push(msg); },
        receive(msg) { (handlers.get(msg.type) || []).forEach((fn) => fn(msg)); },
    };
}

function promptFor(controller, socket, overrides = {}) {
    socket.receive({ type: "session", role: "player", code: "abcd", config: {} });
    socket.receive({ type: "game-started", snapshot: { characters: [] } });
    socket.receive({
        type: "action-required",
        playerNum: 1,
        actor: {
            characterName: "Warrior",
            availableActions: { attack: true, multiAttack: true, defend: true, magicAttack: false, multiMagicAttack: false, heal: false, multiHeal: false },
        },
        singleTargetOptions: { attack: ["Mage", "Priest"] },
        snapshot: { characters: [] },
        ...overrides,
    });
}

test("session and joins set room, role, and playerNum", () => {
    const socket = fakeSocket();
    const events = [];
    const controller = new BattleNetController(socket, {
        onSession: (m) => events.push(["session", m.code]),
        onJoined: (m) => events.push(["joined", m.code]),
    });

    socket.receive({ type: "session", role: "player", code: "abcd" });
    assert.strictEqual(controller.roomCode, "abcd");
    assert.strictEqual(controller.playerNum, 1);

    socket.receive({ type: "joined-player2", code: "efgh" });
    assert.strictEqual(controller.role, "player2");
    assert.strictEqual(controller.playerNum, 2);

    socket.receive({ type: "joined-observer", code: "ijkl" });
    assert.strictEqual(controller.playerNum, null);

    assert.deepStrictEqual(events, [["session", "abcd"], ["joined", "efgh"], ["joined", "ijkl"]]);
});

test("experimenter session maps to observer role with no seat", () => {
    const socket = fakeSocket();
    const controller = new BattleNetController(socket, {});
    socket.receive({ type: "session", role: "experimenter", code: "wxyz" });
    assert.strictEqual(controller.role, "observer");
    assert.strictEqual(controller.playerNum, null);
});

test("single-target action requires a listed target", () => {
    const socket = fakeSocket();
    const controller = new BattleNetController(socket, {});
    promptFor(controller, socket);

    assert.strictEqual(controller.chooseAction("attack").ok, false);
    assert.strictEqual(controller.chooseAction("attack", "Rogue").ok, false);
    assert.strictEqual(socket.sent.length, 0, "invalid decisions never hit the wire");

    const result = controller.chooseAction("attack", "Mage");
    assert.strictEqual(result.ok, true);
    assert.deepStrictEqual(socket.sent.at(-1), { type: "choose-action", actionType: "attack", targetName: "Mage" });
});

test("multi and defend actions send without a target", () => {
    const socket = fakeSocket();
    const controller = new BattleNetController(socket, {});
    promptFor(controller, socket);

    assert.strictEqual(controller.chooseAction("multiAttack").ok, true);
    assert.deepStrictEqual(socket.sent.at(-1), { type: "choose-action", actionType: "multiAttack" });

    assert.strictEqual(controller.chooseAction("defend").ok, true);
    assert.deepStrictEqual(socket.sent.at(-1), { type: "choose-action", actionType: "defend" });
});

test("actions the actor lacks, or with no pending prompt, are rejected locally", () => {
    const socket = fakeSocket();
    const controller = new BattleNetController(socket, {});

    assert.match(controller.chooseAction("attack", "Mage").error, /No action is currently required/);

    promptFor(controller, socket);
    assert.match(controller.chooseAction("heal", "Warrior").error, /cannot use heal/);
});

test("prompt lifecycle: cleared on acceptance, kept for other seats", () => {
    const socket = fakeSocket();
    const controller = new BattleNetController(socket, {});
    promptFor(controller, socket);
    assert.ok(controller.pendingPrompt);

    // Another seat's prompt shouldn't overwrite ours…
    socket.receive({ type: "action-required", playerNum: 2, actor: { availableActions: {} }, singleTargetOptions: {} });
    assert.strictEqual(controller.pendingPrompt.playerNum, 1);

    // …and another seat's acceptance shouldn't clear ours.
    socket.receive({ type: "action-accepted", playerNum: 2, actionType: "defend" });
    assert.ok(controller.pendingPrompt);

    socket.receive({ type: "action-accepted", playerNum: 1, actionType: "attack", targetName: "Mage" });
    assert.strictEqual(controller.pendingPrompt, null);
});

test("game-ended resets running state and routes the result", () => {
    const socket = fakeSocket();
    const results = [];
    const controller = new BattleNetController(socket, { onGameEnded: (m) => results.push(m) });
    promptFor(controller, socket);
    assert.strictEqual(controller.gameRunning, true);

    socket.receive({ type: "game-ended", loserPlayerNum: 2, draw: false });
    assert.strictEqual(controller.gameRunning, false);
    assert.strictEqual(controller.pendingPrompt, null);
    assert.strictEqual(results[0].loserPlayerNum, 2);
});

test("error variants all route to onError", () => {
    const socket = fakeSocket();
    const errors = [];
    new BattleNetController(socket, { onError: (m) => errors.push(m.error) });
    socket.receive({ type: "error", error: "a" });
    socket.receive({ type: "join-failed", error: "b" });
    socket.receive({ type: "reclaim-failed", error: "c" });
    assert.deepStrictEqual(errors, ["a", "b", "c"]);
});
