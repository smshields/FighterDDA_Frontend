
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

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.status_bar = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.gravestone = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.character_sprite = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.defending = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.acting_arrow = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.targeting_arrow = null;

		// === Internal Properties ===

		this.characterModel = null;

		/* END-USER-CTR-CODE */
	}

	/** @returns {CharacterViewComponent} */
	static getComponent(gameObject) {
		return gameObject["__CharacterViewComponent"];
	}


	/* START-USER-CODE */

	start() {
		// === References ===
		this.gameObject.characterViewComponent = this;
	}

	init(characterModelUIMapItem) {
		this.setCharacterModel(characterModelUIMapItem.model);
		this.updateCharacterName(this.characterModel.characterName);
		this.updateIsDead();
		this.updateIsDefending();
		this.updateHealthBar();
		this.updateActionBar();
		this.addCharacterGlow(this.characterModel.playerNum);
		this.updateActingArrow();
		this.disableTargetingArrow();

	}

	addCharacterGlow(playerNum) {
		let color = "";
		if (playerNum == 1) {
			color = 0x7285ff;
		} else {
			color = 0xff7777;
		}
		this.character_sprite
			.enableFilters()
			.filters.internal.addGlow(color, 4, 0, 2, false, 0.1, 10)
			.setPaddingOverride(null);

		this.defending
			.enableFilters()
			.filters.internal.addGlow(color, 4, 0, 4, false, 0.1, 10)
			.setPaddingOverride(null);

	}

	updateActingArrow() {
		let isActing = (this.characterModel.isSelectingAction && this.acting_arrow);
 		if (this.acting_arrow) {
			this.acting_arrow.setActive(isActing);
			this.acting_arrow.setVisible(isActing);
		}
	}

	enableTargetingArrow() {
		this.targeting_arrow.setActive(true);
		this.targeting_arrow.setVisible(true);
	}

	disableTargetingArrow() {
		this.targeting_arrow.setActive(false);
		this.targeting_arrow.setVisible(false);
	}

	updateHealthBar() {
		let currentHp = this.characterModel.currentStats.currentHp;
		let totalHp = this.characterModel.currentStats.maxHp;

		this.status_bar.statusBarViewComponent.updateHealthBar(currentHp, totalHp);
	}

	updateActionBar() {
		let currentActionMeter = this.characterModel.currentActionMeter;
		let maxActionMeter = this.characterModel.maxActionMeter;

		if (this.characterModel.isDead) {
			currentActionMeter = 0;
		}

		//turn on character bounce if action is ready
		let bounceIsEnabled = currentActionMeter >= maxActionMeter;
		this.character_sprite.objectBounceAnimation.setEnabled(bounceIsEnabled);

		this.status_bar.statusBarViewComponent.updateActionBar(currentActionMeter, maxActionMeter);
	}

	setCharacterModel(characterModel) {
		this.characterModel = characterModel;
	}

	updateCharacterName(characterName) {
		this.status_bar.statusBarViewComponent.updateCharacterName(characterName);
	}

	updateIsDead() {
		let isDead = this.characterModel.isDead;

		this.gameObject.characterViewComponent.gravestone.setActive(isDead);
		this.gameObject.characterViewComponent.gravestone.setVisible(isDead);
		this.gameObject.characterViewComponent.character_sprite.setActive(!isDead);
		this.gameObject.characterViewComponent.character_sprite.setVisible(!isDead);

		if (isDead) {
			this.updateCharacterName(this.characterModel.characterName + " (DEAD)");
			this.status_bar.statusBarViewComponent.updateStatusBarBackground(isDead);
			this.updateIsDefending(false);
		} else {
			//symmetric restore: a live refresh loop (server snapshots) must be
			//able to correct a view initialized from stale/stub data
			this.updateCharacterName(this.characterModel.characterName);
			this.status_bar.statusBarViewComponent.updateStatusBarBackground(isDead);
		}
	}

	updateIsDefending() {
		let isDefending = this.characterModel.isDefending;
		let isDead = this.characterModel.isDead;

		if (isDead) {
			isDefending = false;
		}

		this.gameObject.characterViewComponent.defending.setActive(isDefending);
		this.gameObject.characterViewComponent.defending.setVisible(isDefending);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
