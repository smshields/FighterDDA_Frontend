
// You can write more code here

/* START OF COMPILED CODE */

import ScrollViewComponent from "../../src/components/ScrollViewComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionQueueNextScrollView extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// viewport_background
		const viewport_background = scene.add.rectangle(5, 5, 100, 230);
		viewport_background.name = "viewport_background";
		viewport_background.setOrigin(0, 0);
		viewport_background.isFilled = true;
		this.add(viewport_background);

		// content
		const content = scene.add.container(0, 0);
		content.name = "content";
		this.add(content);

		// this (components)
		const thisScrollViewComponent = new ScrollViewComponent(this);
		thisScrollViewComponent.viewport_x = 1105;
		thisScrollViewComponent.viewport_y = 830;
		thisScrollViewComponent.viewport_width = 110;
		thisScrollViewComponent.viewport_height = 235;
		thisScrollViewComponent.viewport_background = viewport_background;
		thisScrollViewComponent.content = content;
		thisScrollViewComponent.name = "action_queue_next";

		/* START-USER-CTR-CODE */
		this.scrollViewComponent = thisScrollViewComponent;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	//TODO: I'm using these in all scrollview components - should make a super class to avoid rewriting

	updateScrollPanel(items) {
		const worldTransform = new Phaser.GameObjects.Components.TransformMatrix();
		this.viewport_background.getWorldTransformMatrix(worldTransform);

		// center in world space (independent of origin)
		const centerX = this.viewport_x + (this.viewport_width / 2);
		const centerY = this.viewport_y + (this.viewport_height / 2);

		this.panel = this.scene.updateScrollView(this.name, centerX, centerY, this.viewport_width, this.viewport_height, items);
		console.log("REACHED SCROLL VIEW COMPONENT NAQ");
		console.log(items);
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
