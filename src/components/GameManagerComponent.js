
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
		/* END-USER-CTR-CODE */
	}

	/** @returns {GameManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__GameManagerComponent"];
	}


	/* START-USER-CODE */

	start(){
		let targetScrollview = this.target_menu.getByName('target_scrollview');
		targetScrollview.setEnabled(true);

	}

	processTick(){
		//get gameState from network or stub 

		//update character models from game state

		//for character in state.characters, update
		////check if any characters are ready to act
		let readyToAct = [];
		for(let character in this.gameState.characters){
			if(readyToAct.length <= 0 && character.isReadyForPlayerAcion){
				readyToAct.push(character);
			}
		}

		//process player action
		for(let character in readyToAct){
			//check if player or NPC
			if(!character.isNPC){
				//action loop
				if(!character.isTargeting){
					//update character ui with arrow/character movement 

					//enable action pane with character available actions

					//disable targeting pane
				}

				//target loop

				//move to next character
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
