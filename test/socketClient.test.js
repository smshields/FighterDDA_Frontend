/**
 * Unit tests for SocketClient using a scripted fake WebSocket — no network.
 */

import test from "node:test";
import assert from "node:assert";

import SocketClient from "../src/net/SocketClient.js";

class FakeWebSocket {
    constructor(url) {
        this.url = url;
        this.sent = [];
        this.closed = false;
        FakeWebSocket.last = this;
    }
    send(frame) { this.sent.push(frame); }
    close() { this.closed = true; if (this.onclose) this.onclose(); }
    // test drivers
    open() { this.onopen(); }
    receive(obj) { this.onmessage({ data: JSON.stringify(obj) }); }
}

function makeClient() {
    const client = new SocketClient("ws://test/ws", (url) => new FakeWebSocket(url));
    const connected = client.connect();
    return { client, ws: FakeWebSocket.last, connected };
}

test("queues sends until open, then flushes in order", async () => {
    const { client, ws, connected } = makeClient();

    client.send({ type: "register-player" });
    client.send({ type: "start-game" });
    assert.strictEqual(ws.sent.length, 0, "nothing sent before open");

    ws.open();
    await connected;
    assert.deepStrictEqual(ws.sent.map((f) => JSON.parse(f).type), ["register-player", "start-game"]);

    client.send({ type: "choose-action" });
    assert.strictEqual(ws.sent.length, 3, "post-open sends go straight through");
});

test("dispatches messages to type handlers and onAny", async () => {
    const { client, ws, connected } = makeClient();
    ws.open();
    await connected;

    const seen = [];
    const all = [];
    client.on("tick", (msg) => seen.push(msg));
    client.on("tick", (msg) => seen.push(msg)); // multiple handlers allowed
    client.onAny((msg) => all.push(msg.type));

    ws.receive({ type: "tick", timeStep: 5 });
    ws.receive({ type: "game-ended" });

    assert.strictEqual(seen.length, 2);
    assert.strictEqual(seen[0].timeStep, 5);
    assert.deepStrictEqual(all, ["tick", "game-ended"]);
});

test("close event dispatches socket-closed", async () => {
    const { client, ws, connected } = makeClient();
    ws.open();
    await connected;

    let closed = false;
    client.on("socket-closed", () => { closed = true; });
    ws.close();
    assert.strictEqual(closed, true);
    assert.strictEqual(client.isOpen, false);
});

test("unparseable frames are ignored without throwing", async () => {
    const { client, ws, connected } = makeClient();
    ws.open();
    await connected;
    client.on("tick", () => { throw new Error("should not dispatch"); });
    assert.doesNotThrow(() => ws.onmessage({ data: "not json{{" }));
});
