
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

	start(){
		// === References ===
		this.gameObject.statusBarViewComponent = this;
		console.log("reached statusBarViewComponent start");
	}

	updateCharacterName(characterName){
		this.character_name.setText(characterName);
	}

	updateHealthBar(currentHp, maxHp){
		let baseWidth = this.hp_meter_fill.width;
		let widthRatio = currentHp/maxHp;
		this.hp_meter_fill.setScale(widthRatio, 1);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
