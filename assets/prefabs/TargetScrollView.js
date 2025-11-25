
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

	//TODO: Logic needs to add a rect from Battle, not here;

	// setEnabled(is_enabled) {
	// 	if (!this.panel) {
	// 		this.panel = this.scene.targetPanel;
	// 	}
	// 	if (this.panel) {
	// 		console.log("REACAHED SET ENABLED " + is_enabled);
	// 		console.log(this.panel);
	// 		this.panel.setActive(!is_enabled);
	// 		this.panel.setVisible(!is_enabled);

	// 		//set background to grey if disabled
	// 		if (!is_enabled) {
	// 			console.log("REACHED DISABLE");
	// 			this.parentContainer.getByName('target_title').setTintFill(0x555555);
	// 			this.background.setFillStyle(0x555555, 1);
	// 			this.scrollViewComponent.updateScrollPanel(null);

	// 		} else { 
	// 			console.log("REACHED ENABLE")
	// 			this.parentContainer.getByName('target_title').setTintFill(0x000000);
	// 			this.background.setFillStyle(0x777777, 1);
	// 		}
	// 	}

	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
