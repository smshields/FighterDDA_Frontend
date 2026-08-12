/**
 * BattleNetController — the game-protocol brain between SocketClient and the
 * Phaser scene. Owns room/prompt state and decision building; the scene
 * supplies view callbacks. Kept free of Phaser imports so it is unit-testable
 * in Node.
 *
 * Server protocol (FighterDDA-Server, docs in that repo's README):
 *   out: register-player | join-player | join-player2 | join-observer |
 *        start-game | choose-action { actionType, targetName? } | reclaim-player
 *   in:  session | joined-* | game-configured | game-started |
 *        tick { snapshot, executedActions, directorActions } |
 *        action-required { playerNum, actor, singleTargetOptions, snapshot } |
 *        action-accepted | action-rejected | game-ended | session-ended | error
 *
 * Single-target actions (attack, magicAttack, heal) need a targetName from the
 * prompt's singleTargetOptions; multi-target actions and defend send no target
 * (the server computes the legal set — clients cannot choose subsets).
 */

const SINGLE_TARGET_ACTIONS = Object.freeze(["attack", "magicAttack", "heal"]);

export default class BattleNetController {

    /**
     * @param {object} socket - SocketClient (or compatible: on/send).
     * @param {object} callbacks - view hooks, all optional:
     *   onSession, onJoined, onGameStarted, onTick, onActionRequired,
     *   onActionAccepted, onActionRejected, onGameEnded, onSessionEnded, onError.
     */
    constructor(socket, callbacks = {}) {
        this.socket = socket;
        this.callbacks = callbacks;

        this.roomCode = null;
        this.role = null;        // 'player' | 'player2' | 'observer'
        this.playerNum = null;   // 1 | 2 | null (observer)
        this.gameRunning = false;
        this.pendingPrompt = null; // last action-required not yet accepted

        this.wireHandlers();
    }

    emit(name, payload) {
        if (typeof this.callbacks[name] === "function") {
            this.callbacks[name](payload);
        }
    }

    wireHandlers() {
        this.socket.on("session", (msg) => {
            this.roomCode = msg.code;
            this.role = msg.role === "experimenter" ? "observer" : msg.role;
            this.playerNum = msg.role === "player" ? 1 : null;
            this.emit("onSession", msg);
        });

        for (const type of ["joined-player", "joined-player2", "joined-observer", "reclaimed"]) {
            this.socket.on(type, (msg) => {
                this.roomCode = msg.code;
                this.role = type === "joined-player2" ? "player2"
                    : type === "joined-observer" ? "observer" : "player";
                this.playerNum = this.role === "player" ? 1 : this.role === "player2" ? 2 : null;
                this.emit("onJoined", msg);
            });
        }

        this.socket.on("game-started", (msg) => {
            this.gameRunning = true;
            this.pendingPrompt = null;
            this.emit("onGameStarted", msg);
        });

        this.socket.on("tick", (msg) => this.emit("onTick", msg));

        this.socket.on("action-required", (msg) => {
            // Prompts for the OTHER human seat are informational only.
            if (this.playerNum !== null && msg.playerNum === this.playerNum) {
                this.pendingPrompt = msg;
            }
            this.emit("onActionRequired", msg);
        });

        this.socket.on("action-accepted", (msg) => {
            if (this.playerNum !== null && msg.playerNum === this.playerNum) {
                this.pendingPrompt = null;
            }
            this.emit("onActionAccepted", msg);
        });

        this.socket.on("action-rejected", (msg) => this.emit("onActionRejected", msg));

        this.socket.on("game-ended", (msg) => {
            this.gameRunning = false;
            this.pendingPrompt = null;
            this.emit("onGameEnded", msg);
        });

        this.socket.on("session-ended", (msg) => {
            this.gameRunning = false;
            this.roomCode = null;
            this.emit("onSessionEnded", msg);
        });

        for (const type of ["error", "join-failed", "reclaim-failed"]) {
            this.socket.on(type, (msg) => this.emit("onError", msg));
        }
    }

    /** Create a casual room as player 1. */
    registerPlayer() {
        this.socket.send({ type: "register-player" });
    }

    /** Join an existing room's player-1 seat. */
    joinPlayer(code) {
        this.socket.send({ type: "join-player", code });
    }

    /** Join an existing room's player-2 seat (PvP). */
    joinPlayer2(code) {
        this.socket.send({ type: "join-player2", code });
    }

    /** Reattach to a room after a disconnect. */
    reclaim(code) {
        this.socket.send({ type: "reclaim-player", code });
    }

    startGame() {
        this.socket.send({ type: "start-game" });
    }

    /**
     * Validate a decision against the pending prompt and send it.
     * Returns { ok: true } or { ok: false, error } WITHOUT sending when the
     * decision could never be accepted (pre-validation for immediate UI
     * feedback; the server remains authoritative).
     */
    chooseAction(actionType, targetName) {
        const prompt = this.pendingPrompt;
        if (!prompt) {
            return { ok: false, error: "No action is currently required." };
        }
        if (!prompt.actor.availableActions[actionType]) {
            return { ok: false, error: `${prompt.actor.characterName} cannot use ${actionType}.` };
        }

        if (SINGLE_TARGET_ACTIONS.includes(actionType)) {
            const options = prompt.singleTargetOptions[actionType] || [];
            if (!targetName || !options.includes(targetName)) {
                return { ok: false, error: `'${targetName}' is not a valid target for ${actionType}.` };
            }
            this.socket.send({ type: "choose-action", actionType, targetName });
        } else {
            this.socket.send({ type: "choose-action", actionType });
        }
        return { ok: true };
    }
}

export { SINGLE_TARGET_ACTIONS };
