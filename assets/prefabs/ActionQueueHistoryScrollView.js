
// You can write more code here

/* START OF COMPILED CODE */

import ScrollViewComponent from "../../src/components/ScrollViewComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionQueueHistoryScrollView extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action_queue_history_scrollview";

		// viewport
		const viewport = scene.add.rectangle(0, 0, 685, 235);
		viewport.name = "viewport";
		viewport.setOrigin(0, 0);
		viewport.isFilled = true;
		viewport.isStroked = true;
		viewport.strokeColor = 0;
		viewport.lineWidth = 5;
		this.add(viewport);

		// content
		const content = scene.add.container(0, 0);
		content.name = "content";
		this.add(content);

		// this (components)
		const thisScrollViewComponent = new ScrollViewComponent(this);
		thisScrollViewComponent.viewport_x = 1220;
		thisScrollViewComponent.viewport_y = 830;
		thisScrollViewComponent.viewport_width = 685;
		thisScrollViewComponent.viewport_height = 235;
		thisScrollViewComponent.viewport_background = viewport;
		thisScrollViewComponent.content = content;
		thisScrollViewComponent.name = "action_queue_history";

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
