
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
		this.updateIsDead();
		this.updateIsDefending();
		this.updateHealthBar();
		this.updateActionBar();

	}

	updateHealthBar(){
		let currentHp = this.characterModel.currentStats.currentHp;
		let totalHp = this.characterModel.currentStats.maxHp;

		this.status_bar.statusBarViewComponent.updateHealthBar(currentHp, totalHp);
	}

	updateActionBar(){
		let currentActionMeter = this.characterModel.currentActionMeter;
		let maxActionMeter = this.characterModel.maxActionMeter;

		if(this.characterModel.isDead){
			currentActionMeter = 0;
		}

		//turn on character bounce if action is ready
		let bounceIsEnabled = currentActionMeter >= maxActionMeter;
		this.character_sprite.objectBounceAnimation.setEnabled(bounceIsEnabled);

		this.status_bar.statusBarViewComponent.updateActionBar(currentActionMeter, maxActionMeter);
	}

	setCharacterModel(characterModel){
		this.characterModel = characterModel;
	}

	updateCharacterName(characterName){
		this.status_bar.statusBarViewComponent.updateCharacterName(characterName);
	}

	updateIsDead(){
		let isDead = this.characterModel.isDead;

		this.gameObject.characterViewComponent.gravestone.setActive(isDead);
		this.gameObject.characterViewComponent.gravestone.setVisible(isDead);
		this.gameObject.characterViewComponent.character_sprite.setActive(!isDead);
		this.gameObject.characterViewComponent.character_sprite.setVisible(!isDead);

		if(isDead){
			this.updateCharacterName(this.characterModel.characterName + " (DEAD)");
			this.updateIsDefending(false);
		}
	}

	updateIsDefending(){
		let isDefending = this.characterModel.isDefending;
		let isDead = this.characterModel.isDead;

		if(isDead){
			isDefending = false;
		}

		this.gameObject.characterViewComponent.defending.setActive(isDefending);
		this.gameObject.characterViewComponent.defending.setVisible(isDefending);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
