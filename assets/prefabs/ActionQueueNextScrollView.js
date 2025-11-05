
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


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
