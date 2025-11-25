
// You can write more code here
import ActionModel from "../models/ActionModel.js";
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
			WAITING_FOR_TARGET_INPUT: "WAITING_FOR_TARGET_INPUT"
		});

		this.readyToAct = [];

		//TODO: This naming is confusing when I am also managing a gamestate with game logic data.
		this.currentState = this.States.PREPARING_GAME_DATA;

		this.selectedAction = "NONE";
		this.selectedActionModel = null;
		this.actingCharacter = null;




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
		//TODO: Disable Target scrollview

		//get the current character from ready to act
		if(!this.actingCharacter){
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

	targetSelected(targetModel) {
		//TODO: MAKE SURE YOU NULL OUT this.actingCharacter
	}

	returnToActionSelect(){
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

		if(this.currentState == this.States.WAITING_FOR_ACTION_INPUT){

		}

		if (this.currentState == this.States.LOADING_TARGETS){
			this.loadTarget();
		}

		if(this.currentState == this.States.WAITING_FOR_TARGET_INPUT){

		}


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
