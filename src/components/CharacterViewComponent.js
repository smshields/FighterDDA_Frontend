
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CharacterViewComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CharacterViewComponent"] = this;

		/* START-USER-CTR-CODE */
		// === References ===
		gameObject.characterViewComponent = this;

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.status_bar = null;

		// === Internal Properties ===

		this.characterModel = null;

		/* END-USER-CTR-CODE */
	}

	/** @returns {CharacterViewComponent} */
	static getComponent(gameObject) {
		return gameObject["__CharacterViewComponent"];
	}


	/* START-USER-CODE */

	setCharacterModel(characterModel){
		this.characterModel = characterModel;
	}

	updateCharacterName(characterName){
		this.gameObject.statusBarViewComponent.updateCharacterName(characterName);
	}

	updateHealthMeter(){
		let maxHP = this.characterModel.currentStats.totalHP;
		let currentHP = this.characterModel.currentStats.totalHP;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
