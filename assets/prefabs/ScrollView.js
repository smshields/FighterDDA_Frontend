
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

		// scroll_background
		const scroll_background = scene.add.image(565, 0, "scroll_container");
		scroll_background.name = "scroll_background";
		scroll_background.scaleX = 0.23620332590609897;
		scroll_background.scaleY = 0.3896956191056863;
		scroll_background.setOrigin(0, 0);
		this.add(scroll_background);

		// scroll_bar
		const scroll_bar = scene.add.rectangle(571, 25, 15, 50);
		scroll_bar.name = "scroll_bar";
		scroll_bar.setOrigin(0, 0);
		scroll_bar.isFilled = true;
		scroll_bar.fillColor = 7434609;
		scroll_bar.isStroked = true;
		scroll_bar.strokeColor = 0;
		scroll_bar.lineWidth = 2;
		this.add(scroll_bar);

		// down_scroll_arrow
		const down_scroll_arrow = scene.add.image(568, 225, "scroll_arrow");
		down_scroll_arrow.name = "down_scroll_arrow";
		down_scroll_arrow.scaleX = 0.05;
		down_scroll_arrow.scaleY = 0.05;
		down_scroll_arrow.setOrigin(0, 0);
		this.add(down_scroll_arrow);

		// up_scroll_arrow
		const up_scroll_arrow = scene.add.image(568, 2, "scroll_arrow");
		up_scroll_arrow.name = "up_scroll_arrow";
		up_scroll_arrow.scaleX = 0.05;
		up_scroll_arrow.scaleY = 0.05;
		up_scroll_arrow.setOrigin(0, 0);
		up_scroll_arrow.flipY = true;
		this.add(up_scroll_arrow);

		// content
		const content = scene.add.container(0, 0);
		content.name = "content";
		this.add(content);

		// this (components)
		const thisScrollViewComponent = new ScrollViewComponent(this);
		thisScrollViewComponent.scrollbar_track = scroll_background;
		thisScrollViewComponent.scrollbar_bar = scroll_bar;
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
