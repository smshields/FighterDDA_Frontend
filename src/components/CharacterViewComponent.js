
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

		/** @type {Phaser.GameObjects.GameObject} */
		this.gravestone = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.character_sprite = null;

		// === Internal Properties ===

		this.characterModel = null;

		/* END-USER-CTR-CODE */
	}

	/** @returns {CharacterViewComponent} */
	static getComponent(gameObject) {
		return gameObject["__CharacterViewComponent"];
	}


	/* START-USER-CODE */

	start(){
		// === References ===
		this.gameObject.characterViewComponent = this;
	}

	init(characterModelUIMapItem){
		this.setCharacterModel(characterModelUIMapItem.model);
		this.updateCharacterName(this.characterModel.characterName);
		this.updateIsDead(this.characterModel.isDead);
		
	}

	setCharacterModel(characterModel){
		this.characterModel = characterModel;
	}

	updateCharacterName(characterName){
		console.log(this.gameObject);
		this.status_bar.statusBarViewComponent.updateCharacterName(characterName);
	}

	updateIsDead(isDead){
		console.log(this.gameObject);

		this.gameObject.characterViewComponent.gravestone.setActive(isDead);
		this.gameObject.characterViewComponent.gravestone.setVisible(isDead);
		this.gameObject.characterViewComponent.character_sprite.setActive(!isDead);
		this.gameObject.characterViewComponent.character_sprite.setVisible(!isDead);

		if(isDead){
			this.updateCharacterName(this.characterModel.characterName + " (DEAD)");
		}
	}

	updateHealthMeter(){
		let maxHP = this.characterModel.currentStats.totalHP;
		let currentHP = this.characterModel.currentStats.totalHP;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
