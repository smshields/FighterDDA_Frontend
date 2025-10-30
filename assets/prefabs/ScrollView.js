
// You can write more code here

/* START OF COMPILED CODE */

import ScrollViewComponent from "../../src/components/ScrollViewComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollView extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "viewport_box";

		// viewport_background
		const viewport_background = scene.add.rectangle(0, 0, 590, 240);
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
		thisScrollViewComponent.viewport_background = viewport_background;
		thisScrollViewComponent.content = content;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
