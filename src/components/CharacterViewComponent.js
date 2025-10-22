
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

		/** @type {Phaser.GameObjects.GameObject} */
		this.defending = null;

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
		this.updateIsDead(this.characterModel);
		this.updateIsDefending(this.characterModel);

	}

	setCharacterModel(characterModel){
		this.characterModel = characterModel;
	}

	updateCharacterName(characterName){
		this.status_bar.statusBarViewComponent.updateCharacterName(characterName);
	}

	updateIsDead(model){
		let isDead = model.isDead;

		this.gameObject.characterViewComponent.gravestone.setActive(isDead);
		this.gameObject.characterViewComponent.gravestone.setVisible(isDead);
		this.gameObject.characterViewComponent.character_sprite.setActive(!isDead);
		this.gameObject.characterViewComponent.character_sprite.setVisible(!isDead);

		if(isDead){
			this.updateCharacterName(model.characterName + " (DEAD)");
			this.updateIsDefending(false);
		}
	}

	updateIsDefending(model){
		console.log(model);

		let isDefending = model.isDefending;
		let isDead = model.isDead;

		if(isDead){
			isDefending = false;
		}

		this.gameObject.characterViewComponent.defending.setActive(isDefending);
		this.gameObject.characterViewComponent.defending.setVisible(isDefending);
		
	}

	updateHealthMeter(){
		let maxHP = this.characterModel.currentStats.totalHP;
		let currentHP = this.characterModel.currentStats.totalHP;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
