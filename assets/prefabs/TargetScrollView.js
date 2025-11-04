
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
		this.scrollViewComponent.buildScrollPanel();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
