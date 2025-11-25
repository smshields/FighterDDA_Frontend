
// You can write more code here
/** I hardcoded way too much of this due to an over-reliance on the editor.
 * In the future, I would dynamically load characters and locations from the top-down
 * instead of manually linking components to json. This is prototype code and I 
 * realize there is a much better way of handling this. Alas, I'm too far in and
 * don't plan on extending this past this research project so I'm going to leave it
 * as is for now.
 */

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
import CharacterModelUIMapItem from "../helpers/CharacterModelUIMapItem.js";
import CharacterModel from "../models/CharacterModel.js";
/* END-USER-IMPORTS */

export default class CharacterManagerComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CharacterManagerComponent"] = this;

		/* START-USER-CTR-CODE */

    	/** @type {Phaser.Scene} */
    	this.scene = gameObject.scene;

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.p1_warrior_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p1_mage_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p1_priest_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p1_rogue_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p2_warrior_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p2_mage_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p2_priest_ui = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.p2_rogue_ui = null;


		// === Internal Properties ===

		this.characterUIModelMap = [];

		this.socketInitialized = false;

		this.p1_warrior_model = new CharacterModel();
		this.p1_mage_model = new CharacterModel();
		this.p1_priest_model = new CharacterModel();
		this.p1_rogue_model = new CharacterModel();

		this.p2_warrior_model = new CharacterModel();
		this.p2_mage_model = new CharacterModel();
		this.p2_priest_model = new CharacterModel();
		this.p2_rogue_model = new CharacterModel();

		this.p1_warrior_label = "p1_warrior";
		this.p1_mage_label = "p1_mage";
		this.p1_priest_label = "p1_priest";
		this.p1_rogue_label = "p1_rogue";

		this.p2_warrior_label = "p2_warrior";
		this.p2_mage_label = "p2_mage";
		this.p2_priest_label = "p2_priest";
		this.p2_rogue_label = "p2_rogue";

		this.p1_warrior_status_bar_ui = null;
		this.p1_mage_status_bar_ui = null;
		this.p1_rogue_status_bar_ui = null;
		this.p1_priest_status_bar_ui = null;						

		this.p2_warrior_status_bar_ui = null;
		this.p2_mage_status_bar_ui = null;
		this.p2_rogue_status_bar_ui = null;
		this.p2_priest_status_bar_ui = null;

		this.characters = [];

		this.gameObject.characterManagerComponent = this;

		/* END-USER-CTR-CODE */
	}

	/** @returns {CharacterManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__CharacterManagerComponent"];
	}


	/* START-USER-CODE */

	//character lookup
	//TODO - I should build a lookup map instead of checking every time.
	lookupCharacterUIFromModel(character){
		let characterUI = null;
		//get by team
		if(character.playerNum == 1){
			switch(character.characterName.toLowerCase()){
				case 'warrior':{
					characterUI = this.p1_warrior_ui;
					break;
				}
				case 'mage':{
					characterUI = this.p1_mage_ui;
					break;
				}
				case 'priest':{
					characterUI = this.p1_priest_ui;
					break;
				}
				case 'rogue':{
					characterUI = this.p1_rogue_ui;
					break;
				}
				default:{
					throw new Error('Invalid character name! ' + character.characterName);
				}
			}
		} else {
			switch(character.characterName.toLowerCase()){
				case 'warrior':{
					characterUI = this.p2_warrior_ui;
					break;
				}
				case 'mage':{
					characterUI = this.p2_mage_ui;
					break;
				}
				case 'priest':{
					characterUI = this.p2_priest_ui;
					break;
				}
				case 'rogue':{
					characterUI = this.p2_rogue_ui;
					break;
				}
				default:{
					throw new Error('Invalid character name! ' + character.characterName);
				}
			}
		}
		return characterUI;
	}

	initializeCharacterModels(){
		//if we have data from the server, use that. If not, use stubs for testing
		if(this.scene.gameManager.socketInitialized){
			//TODO: implement socket logic, probably move this to a game manager
		} else {
			//use stubs in assets for testing
			let jsonString = '_json';

			this.p1_warrior_model.updateFromJson(this.scene.cache.json.get(this.p1_warrior_label + jsonString));
			this.p1_mage_model.updateFromJson(this.scene.cache.json.get(this.p1_mage_label + jsonString));
			this.p1_rogue_model.updateFromJson(this.scene.cache.json.get(this.p1_rogue_label + jsonString));
			this.p1_priest_model.updateFromJson(this.scene.cache.json.get(this.p1_priest_label + jsonString));
			this.p2_mage_model.updateFromJson(this.scene.cache.json.get(this.p2_mage_label + jsonString));
			this.p2_warrior_model.updateFromJson(this.scene.cache.json.get(this.p2_warrior_label + jsonString));
			this.p2_rogue_model.updateFromJson(this.scene.cache.json.get(this.p2_rogue_label + jsonString));
			this.p2_priest_model.updateFromJson(this.scene.cache.json.get(this.p2_priest_label + jsonString));

			this.characters = [
				this.p1_warrior_model,
				this.p1_mage_model,
				this.p1_rogue_model,
				this.p1_priest_model,
				this.p2_mage_model,
				this.p2_warrior_model,
				this.p2_rogue_model,
				this.p2_priest_model
			]			
		}
	}

	initializeCharacterUIModelMap(){
		//error check assignment of all UI elements
		if(
			!this.p1_warrior_ui ||
			!this.p1_mage_ui ||
			!this.p1_rogue_ui ||
			!this.p1_priest_ui ||
			!this.p2_warrior_ui ||
			!this.p2_mage_ui ||
			!this.p2_rogue_ui ||
			!this.p2_priest_ui
		){
			throw new Error("ERROR: Character UI elements not assigned in editor.");
		} else {
			//set statusUI bars for easier reference
			this.p1_warrior_status_bar_ui = this.p1_warrior_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p1_mage_status_bar_ui = this.p1_mage_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p1_rogue_status_bar_ui = this.p1_rogue_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p1_priest_status_bar_ui = this.p1_priest_ui.characterViewComponent.status_bar.statusBarViewComponent;						

			this.p2_warrior_status_bar_ui = this.p2_warrior_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p2_mage_status_bar_ui = this.p2_mage_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p2_rogue_status_bar_ui = this.p2_rogue_ui.characterViewComponent.status_bar.statusBarViewComponent;
			this.p2_priest_status_bar_ui = this.p2_priest_ui.characterViewComponent.status_bar.statusBarViewComponent;
		}


		//initialize model properties
		this.initializeCharacterModels();



		//create map
		this.characterUIModelMap.push(
			new CharacterModelUIMapItem(this.p1_warrior_label, this.p1_warrior_model, this.p1_warrior_ui, this.p1_warrior_status_bar_ui),
			new CharacterModelUIMapItem(this.p1_mage_label, this.p1_mage_model, this.p1_mage_ui, this.p1_mage_status_bar_ui),
			new CharacterModelUIMapItem(this.p1_priest_label, this.p1_priest_model, this.p1_priest_ui, this.p1_priest_status_bar_ui),
			new CharacterModelUIMapItem(this.p1_rogue_label, this.p1_rogue_model, this.p1_rogue_ui, this.p1_rogue_status_bar_ui),
			new CharacterModelUIMapItem(this.p2_warrior_label, this.p2_warrior_model, this.p2_warrior_ui, this.p2_warrior_status_bar_ui),
			new CharacterModelUIMapItem(this.p2_mage_label, this.p2_mage_model, this.p2_mage_ui, this.p2_mage_status_bar_ui),
			new CharacterModelUIMapItem(this.p2_priest_label, this.p2_priest_model, this.p2_priest_ui, this.p2_priest_status_bar_ui),
			new CharacterModelUIMapItem(this.p2_rogue_label, this.p2_rogue_model, this.p2_rogue_ui, this.p2_rogue_status_bar_ui)
		);
	}

	preload(){

	}

	start() {
		this.gameObject.characterManagerComponent = this;

		this.initializeCharacterUIModelMap();

		for(let mapItem of this.characterUIModelMap){
			mapItem.ui.characterViewComponent.init(mapItem);
		}

	}

	//Update character model
	updateCharacterModel(){}

	//Update character view based on model
	updateCharacterView(){}

	//Update character views based on models
	updateCharacterViews(){}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */




