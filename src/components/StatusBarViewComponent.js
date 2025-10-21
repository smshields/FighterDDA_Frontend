
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatusBarViewComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__StatusBarViewComponent"] = this;

		/* START-USER-CTR-CODE */
		// === References ===
		gameObject.statusBarViewComponent = this;

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.hp_meter_fill = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.hp_meter_background = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.character_name = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {StatusBarViewComponent} */
	static getComponent(gameObject) {
		return gameObject["__StatusBarViewComponent"];
	}


	/* START-USER-CODE */

	updateCharacterName(characterName){
		this.character_name.setText(characterName);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
