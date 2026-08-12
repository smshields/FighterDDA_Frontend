# FighterDDA Frontend

Phaser 4 (Editor v4) client for the FighterDDA research platform. Renders the
4v4 ATB battle and, in networked mode, plays against the server-authoritative
simulation run by the sibling **FighterDDA-Server** repo.

## Modes

- **Stub mode (default)**: open `index.html` over HTTP with no query params —
  the battle UI drives itself from the JSON fixtures in `assets/data/`
  (the original demo behavior, unchanged).
- **Networked mode**: serve the app and add query params:
  - `?net=1` — connect to `ws(s)://<page host>/ws` (i.e. FighterDDA-Server
    serving this app), create a casual room, and auto-start vs. the AI.
  - `?server=ws://localhost:3004/ws` — explicit server URL (dev).
  - `&room=CODE` — join an experimenter-created room instead of creating one;
    the experimenter starts the game.

## Networking layer

- [src/net/SocketClient.js](src/net/SocketClient.js) — transport: JSON frames,
  per-type dispatch, pre-open send queue. WebSocket impl is injectable for tests.
- [src/net/BattleNetController.js](src/net/BattleNetController.js) — protocol
  state (room, seat, pending prompt) and decision pre-validation. No Phaser
  imports; fully unit-tested.
- `GameManagerComponent` bridges the controller to the scene FSM
  (`WAITING_FOR_SERVER` / `LOADING_ACTION` / … / `GAME_OVER`), snapshots flow
  into `CharacterManagerComponent.applySnapshot` and the NEXT queue.

## Tests

```
npm test
```

Node's built-in test runner (`node:test`). Suites: model deserialization and
target-scope mapping, SocketClient transport, BattleNetController protocol,
and an end-to-end test that plays a full scripted game against the REAL
FighterDDA-Server + simulation when that repo is checked out as a sibling
(skips otherwise). No browser or Phaser needed — the net layer is Phaser-free
by design.

---

## Phaser Editor template notes

This project was created from the Phaser Editor v4 JavaScript template:

* It is coded in JavaScript.
* It includes a VS Code project configuration (`jsconfig.json` file) and the type definitions (in the `types/` folder).
* Script nodes are logic objects. You can add a script node to the scene or a game object, for extending it with custom data and behavior.
* This project includes the script libraries: [@phaserjs/editor-scripts-base](https://github.com/phaserjs/editor-scripts-base)
