/**
 * End-to-end protocol test: the REAL front-end net modules (SocketClient +
 * BattleNetController) against the REAL FighterDDA-Server (and therefore the
 * real vendored simulation), playing a scripted game to completion.
 *
 * Skips when the sibling FighterDDA-Server checkout is absent (CI of this
 * repo alone). Uses Node's global WebSocket (Node >= 22) for SocketClient's
 * default factory. FDDA_TICK_MS=0 fast-forwards the sim's tick pacing —
 * fidelity-neutral per the server's SIMULATION_SPEC.md.
 */

import test from "node:test";
import assert from "node:assert";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import SocketClient from "../src/net/SocketClient.js";
import BattleNetController from "../src/net/BattleNetController.js";

process.env.FDDA_TICK_MS = "0";
process.env.SOCKET_RECLAIM_GRACE_MS = "500";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// This repo may sit beside FighterDDA-Server, or one level down (inside FDDA/).
const SERVER_REPO = [
    path.resolve(HERE, "..", "..", "FighterDDA-Server"),
    path.resolve(HERE, "..", "..", "..", "FighterDDA-Server"),
].find((candidate) => fs.existsSync(path.join(candidate, "src", "game", "net", "index.js")));
const serverAvailable = Boolean(SERVER_REPO);

test("frontend net stack plays a full game against the real server", { skip: !serverAvailable && "FighterDDA-Server checkout not found" }, async () => {
    const require = createRequire(path.join(SERVER_REPO, "package.json"));

    // Stub the DB model so no MongoDB is needed; capture the persisted game.
    const gameLog = require(path.join(SERVER_REPO, "src/game/models/gameLog.js"));
    const saved = [];
    gameLog.saveGame = async (code, gameNumber, doc) => saved.push({ code, gameNumber, doc });

    const { attach } = require(path.join(SERVER_REPO, "src/game/net/index.js"));
    const server = http.createServer();
    attach(server);
    await new Promise((resolve) => server.listen(0, resolve));
    const url = `ws://127.0.0.1:${server.address().port}/ws`;

    const decisions = [];
    let resolveEnd, rejectEnd;
    const gameEnded = new Promise((resolve, reject) => { resolveEnd = resolve; rejectEnd = reject; });
    const failsafe = setTimeout(() => rejectEnd(new Error("game did not finish within 30s")), 30000);

    const socket = new SocketClient(url);
    const controller = new BattleNetController(socket, {
        onSession: () => controller.startGame(),
        onActionRequired: (msg) => {
            if (msg.playerNum !== controller.playerNum) return;
            // Script: first available action, first listed target.
            const actionType = Object.keys(msg.actor.availableActions)
                .find((name) => msg.actor.availableActions[name]);
            const targetName = (msg.singleTargetOptions[actionType] || [])[0];
            const result = controller.chooseAction(actionType, targetName);
            if (!result.ok) rejectEnd(new Error("local validation rejected scripted decision: " + result.error));
            decisions.push({ actionType, targetName });
        },
        onActionRejected: (msg) => rejectEnd(new Error("server rejected decision: " + msg.error)),
        onGameEnded: (msg) => resolveEnd(msg),
        onError: (msg) => rejectEnd(new Error("server error: " + msg.error)),
    });

    try {
        await socket.connect();
        controller.registerPlayer();

        const ended = await gameEnded;
        clearTimeout(failsafe);

        assert.ok([1, 2, -1].includes(ended.loserPlayerNum));
        assert.ok(decisions.length > 0, "the human seat was never prompted");
        assert.strictEqual(controller.gameRunning, false);

        // The server persisted the game with our exact decision stream.
        assert.strictEqual(saved.length, 1);
        assert.strictEqual(saved[0].doc.decisions.length, decisions.length);
        assert.deepStrictEqual(
            saved[0].doc.decisions.map((d) => d.actionType),
            decisions.map((d) => d.actionType)
        );
        assert.ok(saved[0].doc.log.initialLog, "persisted log carries the sim schema");
    } finally {
        clearTimeout(failsafe);
        socket.close();
        await new Promise((resolve) => server.close(resolve));
    }
});
