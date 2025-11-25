
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollViewComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ScrollViewComponent"] = this;

		/* START-USER-CTR-CODE */

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.container = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.viewport_background = null;

		// === Internal Properties ===
		this.content = null;

		this.scene = this.gameObject.scene;

		this.items = ['Attack', 'Defend', 'Heal', 'Magic Attack', 'Multi Attack', 'Multi Magic Attack', 'Multi Heal', 'Attack 2', 'Attack 3', 'Attack 4', 'Attack 5'];

		this.panel = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {ScrollViewComponent} */
	static getComponent(gameObject) {
		return gameObject["__ScrollViewComponent"];
	}

	/** @type {number} */
	viewport_x = 0;
	/** @type {number} */
	viewport_y = 0;
	/** @type {number} */
	viewport_width = 0;
	/** @type {number} */
	viewport_height = 0;
	/** @type {string} */
	name = "";

	/* START-USER-CODE */

	start() {
		//set up reference for convienience 
		this.gameObject.scrollViewComponent = this;
		this.buildScrollPanel();
	}

	updateScrollPanel(items) {
		const worldTransform = new Phaser.GameObjects.Components.TransformMatrix();
		this.viewport_background.getWorldTransformMatrix(worldTransform);

		// center in world space (independent of origin)
		const centerX = this.viewport_x + (this.viewport_width / 2);
		const centerY = this.viewport_y + (this.viewport_height / 2);

		this.panel = this.scene.updateScrollView(this.name, centerX, centerY, this.viewport_width, this.viewport_height, items);

	}

	//TODO: Refactor out positioning calculations
	buildScrollPanel() {

		const worldTransform = new Phaser.GameObjects.Components.TransformMatrix();
		this.viewport_background.getWorldTransformMatrix(worldTransform);

		const bounds = this.viewport_background.getBounds();

		// center in world space (independent of origin)
		const centerX = this.viewport_x + (this.viewport_width / 2);
		const centerY = this.viewport_y + (this.viewport_height / 2);

		this.panel = this.scene.createScrollView(this.name, centerX, centerY, this.viewport_width, this.viewport_height);

	}



	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
