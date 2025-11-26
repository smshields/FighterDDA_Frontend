
// You can write more code here

/* START OF COMPILED CODE */

import ScrollViewComponent from "../../src/components/ScrollViewComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetScrollView extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "target_scrollview";

		// content
		const content = scene.add.container(0, 0);
		content.name = "content";
		this.add(content);

		// viewport
		const viewport = scene.add.rectangle(0, 0, 439, 240);
		viewport.name = "viewport";
		viewport.setOrigin(0, 0);
		viewport.isFilled = true;
		this.add(viewport);

		// this (components)
		const thisScrollViewComponent = new ScrollViewComponent(this);
		thisScrollViewComponent.viewport_x = 635;
		thisScrollViewComponent.viewport_y = 825;
		thisScrollViewComponent.viewport_width = 438;
		thisScrollViewComponent.viewport_height = 240;
		thisScrollViewComponent.viewport_background = viewport;
		thisScrollViewComponent.content = content;
		thisScrollViewComponent.name = "target_scrollview";

		/* START-USER-CTR-CODE */
		this.scrollViewComponent = thisScrollViewComponent;
		this.background = viewport;
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	is_enabled = false;

	/* START-USER-CODE */

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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
