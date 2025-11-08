
// You can write more code here

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
			SELECTING_TARGET: "SELECTING_TARGET"
		});

		this.readyToAct = [];

		//TODO: This naming is confusing when I am also managing a gamestate with game logic data.
		this.currentState = this.States.PREPARING_GAME_DATA;
		



		/* END-USER-CTR-CODE */
	}

	/** @returns {GameManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__GameManagerComponent"];
	}


	/* START-USER-CODE */

	start() {
		this.syncCharacterManagerWithGameState();

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

		//get the current character from ready to act
		let character = this.readyToAct.shift();

		let targetScrollview = this.target_menu.getByName('target_scrollview');
		targetScrollview.setEnabled(false);

		//TODO: Handle CPU action
		let actions = [];
		for (let actionKey in character.availableActions) {
			if (character.availableActions[actionKey]) {
				actions.push(actionKey);
			}
		}
		let actionScrollView = this.action_menu.getByName('action_scrollview');
		actionScrollView.scrollViewComponent.updateScrollPanel(actions);

		//TODO: Handle building action model and saving to gamestate

		this.currentState = this.States.WAITING_FOR_ACTION_INPUT;
	}

	actionSelected(actionName) {
		//TODO: should load this in a reference ahead of time.

		
		let actionPanel = this.scene.actionPanel;
		console.log(actionPanel);
		this.recursiveDisable(actionPanel);

		this.currentState = this.States.LOADING_TARGETS;
		//TODO: load targets based on action, character team,

		

	}

	recursiveDisable(gameObject){
		console.log("REACHED DISABLE");
		if(gameObject.children){
			for(let child of gameObject.children){
				child.disableInteractive();
				this.recursiveDisable(child);
			}
		}
		return;
	}

	processTick() {
		console.log(this.currentState);
		//Prepare Game Data for runtime
		if (this.currentState == this.States.PREPARING_GAME_DATA) {
			this.prepareGameData();
		}

		//If actions are ready to enqueue, set up UI
		if (this.currentState == this.States.LOADING_ACTION) {
			this.loadAction();
		}

		if(this.currentState = this.States.WAITING_FOR_ACTION_INPUT){

		}


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
