
// You can write more code here
import ActionModel from "../models/ActionModel.js";
import SocketClient from "../net/SocketClient.js";
import BattleNetController from "../net/BattleNetController.js";
//TODO: I should be storing more game state into the object for cleaner logging.

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
import GameState from "../models/GameStateModel.js";
/* END-USER-IMPORTS */

export default class GameManagerComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__GameManagerComponent"] = this;

		/* START-USER-CTR-CODE */
		// === Inspector Properties ===
		/** @type {Phaser.GameObjects.GameObject} */
		this.character_manager = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.action_menu = null;

		/** @type {Phaser.GameObjects.Container} */
		this.target_menu = null;

		// === Internal Properties ===

		this.gameState = new GameState();
		this.gameObject.gameManagerComponent = this;

		this.States = Object.freeze({
			START: "START",
			PREPARING_GAME_DATA: "PREPARING_GAME_DATA",
			LOADING_ACTION: "LOADING_ACTION",
			WAITING_FOR_ACTION_INPUT: "WAITING_FOR_ACTION_INPUT",
			LOADING_TARGETS: "LOADING_TARGETS",
			WAITING_FOR_TARGET_INPUT: "WAITING_FOR_TARGET_INPUT",
			WAITING_FOR_SERVER: "WAITING_FOR_SERVER",
			GAME_OVER: "GAME_OVER"
		});

		this.readyToAct = [];

		//TODO: This naming is confusing when I am also managing a gamestate with game logic data.
		this.currentState = this.States.PREPARING_GAME_DATA;

		this.selectedAction = "NONE";
		this.selectedActionModel = null;
		this.actingCharacter = null;

		this.socketInitialized = false;

		//networking (socket mode only; null in stub mode)
		this.netController = null;
		this.notificationText = null;

		/* END-USER-CTR-CODE */
	}

	/** @returns {GameManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__GameManagerComponent"];
	}


	/* START-USER-CODE */

	awake() {
		//Networking must initialize before ANY component's start() runs —
		//CharacterManagerComponent.start branches on socketInitialized to decide
		//between server snapshots and the local JSON stubs.
		this.initNetworking();
	}

	start() {
		this.syncCharacterManagerWithGameState();

	}

	/**
	 * Socket mode is opt-in via URL params so the stub demo keeps working:
	 *   ?net=1            connect to ws(s)://<page host>/ws (served by FighterDDA-Server)
	 *   ?server=ws://...  connect to an explicit server URL
	 *   &room=CODE        join an existing room (experimenter flow) instead of
	 *                     creating a casual room and auto-starting.
	 */
	initNetworking() {
		const params = new URLSearchParams(window.location.search);
		const explicitServer = params.get("server");
		if (!explicitServer && !params.get("net")) {
			return; //stub mode — existing local demo behavior
		}

		const protocol = window.location.protocol === "https:" ? "wss" : "ws";
		const url = explicitServer || (protocol + "://" + window.location.host + "/ws");
		const roomCode = params.get("room");

		this.socketInitialized = true;
		this.currentState = this.States.WAITING_FOR_SERVER;
		this.setNotification("CONNECTING...");

		const socket = new SocketClient(url);
		this.netController = new BattleNetController(socket, {
			onSession: (msg) => {
				this.setNotification("ROOM " + msg.code.toUpperCase() + " - STARTING...");
				//Casual room MVP: start immediately. Experimenter rooms are
				//joined via ?room= and started from the experimenter view.
				this.netController.startGame();
			},
			onJoined: (msg) => {
				this.setNotification("JOINED ROOM " + msg.code.toUpperCase() + " - WAITING FOR START...");
			},
			onGameStarted: (msg) => {
				this.gameState.gameOver = false;
				this.applySnapshot(msg.snapshot);
				this.setNotification("BATTLE START!");
			},
			onTick: (msg) => {
				this.applySnapshot(msg.snapshot);
			},
			onActionRequired: (msg) => this.handleActionRequired(msg),
			onActionAccepted: (msg) => {
				if (this.netController.playerNum === msg.playerNum) {
					this.setNotification("ACTION QUEUED - WAITING...");
					this.currentState = this.States.WAITING_FOR_SERVER;
				}
			},
			onActionRejected: (msg) => {
				this.setNotification("INVALID ACTION: " + msg.error);
				//The server still holds the prompt open; re-enter the selection
				//flow from it (actingCharacter was cleared optimistically).
				if (this.netController.pendingPrompt) {
					this.handleActionRequired(this.netController.pendingPrompt);
				}
			},
			onGameEnded: (msg) => this.handleGameEnded(msg),
			onSessionEnded: () => this.setNotification("SESSION ENDED"),
			onError: (msg) => this.setNotification("ERROR: " + msg.error),
		});

		socket.connect()
			.then(() => {
				if (roomCode) {
					this.netController.joinPlayer(roomCode);
				} else {
					this.netController.registerPlayer();
				}
			})
			.catch(() => this.setNotification("CONNECTION FAILED: " + url));
	}

	/** Ingest a server snapshot: characters + pending action queue. */
	applySnapshot(snapshot) {
		if (!snapshot) {
			return;
		}
		this.character_manager.characterManagerComponent.applySnapshot(snapshot.characters);
		this.scene.nextActionQueueManager.setQueueFromWire(snapshot.nextActions);
	}

	/** The server needs OUR decision: enter the action-selection flow. */
	handleActionRequired(msg) {
		if (this.netController.playerNum !== msg.playerNum) {
			this.setNotification("WAITING FOR OPPONENT...");
			return;
		}

		this.applySnapshot(msg.snapshot);

		const characterManager = this.character_manager.characterManagerComponent;
		this.actingCharacter = characterManager.lookupModel(msg.actor.playerNum, msg.actor.characterName);
		this.setNotification("SELECT ACTION FOR " + msg.actor.characterName.toUpperCase());
		this.currentState = this.States.LOADING_ACTION;
	}

	handleGameEnded(msg) {
		this.gameState.gameOver = true;
		this.currentState = this.States.GAME_OVER;
		this.scene.targetPanel.disablePanel();
		this.scene.actionPanel.disablePanel();

		if (msg.draw) {
			this.setNotification("DRAW!");
		} else if (this.netController.playerNum === null) {
			this.setNotification("PLAYER " + msg.loserPlayerNum + " DEFEATED!");
		} else if (msg.loserPlayerNum === this.netController.playerNum) {
			this.setNotification("DEFEAT...");
		} else {
			this.setNotification("VICTORY!");
		}
	}

	/** Set the top notification banner text (lazy lookup: the bitmap text is
	 *  nested inside an unnamed container from editorCreate). */
	setNotification(text) {
		if (!this.notificationText) {
			for (const child of this.scene.children.list) {
				if (child.list) {
					const found = child.list.find((o) => o.name === "notification");
					if (found) {
						this.notificationText = found;
						break;
					}
				}
			}
		}
		if (this.notificationText) {
			this.notificationText.text = text;
		}
	}

	update() {
		this.processTick();
	}

	//sync character manager with gamestate
	syncCharacterManagerWithGameState() {
		this.gameState.characters = this.character_manager.characterManagerComponent.characters;
	}

	prepareGameData() {
		console.log("STATE: PREPARING GAME DATA");

		this.syncCharacterManagerWithGameState();
		if (this.currentState == this.States.PREPARING_GAME_DATA) {
			//build readyToAct array
			for (let character of this.gameState.characters) {
				if (character.isReadyForPlayerAction) {
					this.readyToAct.push(character);
				}
			}

			//build next action queue view
			let nextActionQueueManager = this.scene.nextActionQueueManager;
			nextActionQueueManager.updateNextActionQueue();
			nextActionQueueManager.updateScrollPanel(nextActionQueueManager.nextActionQueue);
		}
		//move to next state

		//Action ready to enqueue
		if (this.readyToAct.length > 0) {
			this.currentState = this.States.LOADING_ACTION;
		}
		//No actions to enqueue, actions to execute

		//No actions to enqueue or execute
	}

	loadAction() {
		console.log("STATE: LOADING ACTION");
		//TODO: Disable Target scrollview

		//get the current character from ready to act
		if (!this.actingCharacter) {
			this.actingCharacter = this.readyToAct.shift();
		}

		//TODO: Handle CPU action
		let actions = [];
		for (let actionKey in this.actingCharacter.availableActions) {
			if (this.actingCharacter.availableActions[actionKey]) {
				actions.push(actionKey);
			}
		}
		let actionScrollView = this.action_menu.getByName('action_scrollview');
		actionScrollView.scrollViewComponent.updateScrollPanel(actions);

		//TODO: Handle building action model and saving to gamestate
		this.selectedActionModel = new ActionModel();
		this.selectedActionModel.actor = this.actingCharacter;

		this.scene.targetPanel.disablePanel();
		this.scene.actionPanel.enablePanel();


		this.currentState = this.States.WAITING_FOR_ACTION_INPUT;
	}

	loadTarget() {
		console.log("STATE: LOADING TARGET");

		//Enable/Disable Panels
		this.scene.targetPanel.enablePanel();
		this.scene.actionPanel.disablePanel();

		//get models of valid targets
		let targetString = this.selectedActionModel.getValidTargetsFromAction(this.selectedAction);
		let characters = this.character_manager.characterManagerComponent.characters;
		let actor = this.selectedActionModel.actor;
		let targetCharacters = this.selectedActionModel.getCharacterModelsFromTargets(actor, targetString, characters);
		this.selectedActionModel.targets = targetCharacters;

		//build scrollview
		let targetScrollview = this.target_menu.getByName('target_scrollview');
		targetScrollview.scrollViewComponent.updateScrollPanel(targetCharacters);

		//set state
		this.currentState = this.States.WAITING_FOR_TARGET_INPUT;
		//TODO: NEXT, ALL TARGET ITEMS
	}

	actionSelected(actionName) {
		//TODO: should load this in a reference ahead of time.
		//this.scene.actionPanel.disablePanel();

		this.selectedAction = actionName;
		this.selectedActionModel.name = actionName;

		this.currentState = this.States.LOADING_TARGETS;
		//TODO: load targets based on action, character team,


	}

	/**
	 * Terminal step of the selection flow: the player confirmed a target for
	 * this.selectedAction. Single-target actions pass the chosen CharacterModel;
	 * multi-target items pass (null, true) — the server computes the full
	 * living set, clients never pick subsets.
	 */
	targetSelected(targetModel, isMulti = false) {
		if (this.currentState !== this.States.WAITING_FOR_TARGET_INPUT) {
			return;
		}

		const characterManager = this.character_manager.characterManagerComponent;

		if (this.socketInitialized) {
			const targetName = isMulti ? undefined : targetModel.characterName;
			const result = this.netController.chooseAction(this.selectedAction, targetName);
			if (!result.ok) {
				this.setNotification("INVALID: " + result.error);
				return;
			}
			this.setNotification("WAITING...");
			this.currentState = this.States.WAITING_FOR_SERVER;
		} else {
			//stub mode: log the decision and loop back to the demo prompt
			console.log("DECISION: " + this.selectedAction + " -> " +
				(isMulti ? "ALL" : targetModel.characterName));
			this.currentState = this.States.PREPARING_GAME_DATA;
		}

		//reset selection state and UI
		characterManager.disableAllTargetingArrows();
		this.scene.targetPanel.disablePanel();
		this.scene.actionPanel.disablePanel();

		let targetScrollview = this.target_menu.getByName('target_scrollview');
		targetScrollview.scrollViewComponent.updateScrollPanel([]);
		let actionScrollView = this.action_menu.getByName('action_scrollview');
		actionScrollView.scrollViewComponent.updateScrollPanel([]);

		this.actingCharacter = null;
		this.selectedAction = "NONE";
		this.selectedActionModel = null;
	}

	returnToActionSelect() {
		//this.scene.targetPanel.disablePanel();
		this.scene.actionPanel.enablePanel();
		let targetScrollview = this.target_menu.getByName('target_scrollview');
		targetScrollview.scrollViewComponent.updateScrollPanel([]);
		let actionScrollView = this.action_menu.getByName('action_scrollview');
		actionScrollView.scrollViewComponent.updateScrollPanel([]);
		this.selectedAction = "NONE";
		this.selectedActionModel.name = "NONE";

		this.loadAction();
	}

	processTick() {
		//console.log(this.currentState);
		//Prepare Game Data for runtime
		if (this.currentState == this.States.PREPARING_GAME_DATA) {
			this.prepareGameData();
		}

		//If actions are ready to enqueue, set up UI
		if (this.currentState == this.States.LOADING_ACTION) {
			this.loadAction();
		}

		if (this.currentState == this.States.WAITING_FOR_ACTION_INPUT) {

		}

		if (this.currentState == this.States.LOADING_TARGETS) {
			this.loadTarget();
		}

		if (this.currentState == this.States.WAITING_FOR_TARGET_INPUT) {

		}


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
