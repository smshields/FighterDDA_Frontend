/**
 * SocketClient — thin wrapper over a WebSocket speaking the FighterDDA-Server
 * protocol (flat JSON messages: { type, ...fields }).
 *
 * Pure plumbing, no game knowledge: JSON encode/decode, per-type handler
 * dispatch, and a send queue so callers may send before the connection opens.
 * The WebSocket implementation is injectable so tests can drive it with a
 * fake; in the browser it defaults to the native WebSocket.
 */
export default class SocketClient {

    /**
     * @param {string} url - websocket URL (e.g. ws://localhost:3004/ws).
     * @param {function(string): WebSocket} [webSocketFactory] - injectable for tests.
     */
    constructor(url, webSocketFactory = (u) => new WebSocket(u)) {
        this.url = url;
        this.webSocketFactory = webSocketFactory;
        this.socket = null;
        this.isOpen = false;
        this.handlers = new Map(); // type -> [fn]
        this.anyHandlers = [];     // fns receiving every message
        this.pendingSends = [];
    }

    /** Open the connection. Resolves on open, rejects on a pre-open error. */
    connect() {
        return new Promise((resolve, reject) => {
            this.socket = this.webSocketFactory(this.url);

            this.socket.onopen = () => {
                this.isOpen = true;
                for (const frame of this.pendingSends) {
                    this.socket.send(frame);
                }
                this.pendingSends = [];
                resolve(this);
            };

            this.socket.onerror = (err) => {
                if (!this.isOpen) {
                    reject(new Error("SocketClient: connection failed to " + this.url));
                } else {
                    this.dispatch({ type: "socket-error", error: String(err && err.message ? err.message : err) });
                }
            };

            this.socket.onclose = () => {
                this.isOpen = false;
                this.dispatch({ type: "socket-closed" });
            };

            this.socket.onmessage = (event) => {
                let message;
                try {
                    message = JSON.parse(event.data);
                } catch (err) {
                    console.warn("SocketClient: unparseable message", event.data);
                    return;
                }
                this.dispatch(message);
            };
        });
    }

    /** Register a handler for a message type. Returns this (chainable). */
    on(type, handler) {
        if (!this.handlers.has(type)) {
            this.handlers.set(type, []);
        }
        this.handlers.get(type).push(handler);
        return this;
    }

    /** Register a handler receiving EVERY message (logging/debug). */
    onAny(handler) {
        this.anyHandlers.push(handler);
        return this;
    }

    dispatch(message) {
        for (const handler of this.anyHandlers) {
            handler(message);
        }
        const typeHandlers = this.handlers.get(message.type) || [];
        for (const handler of typeHandlers) {
            handler(message);
        }
    }

    /** Send a message object; queued if the socket hasn't opened yet. */
    send(message) {
        const frame = JSON.stringify(message);
        if (this.isOpen) {
            this.socket.send(frame);
        } else {
            this.pendingSends.push(frame);
        }
    }

    close() {
        if (this.socket) {
            this.socket.close();
        }
        this.isOpen = false;
    }
}
