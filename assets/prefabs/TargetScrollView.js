
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
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	is_enabled = false;

	/* START-USER-CODE */

	setEnabled(is_enabled) {
		if(!this.panel){
			this.panel = this.scene.targetPanel;
		}
		console.log(this.panel);
		if (this.panel) {
			this.panel.setActive(!is_enabled);

			//set background to grey if disabled
			if (!is_enabled) {
				this.panel.backgroundChildren[0].setFillStyle(0xffffff, 1);
				this.panel.clear(true);
			} else {
				this.panel.backgroundChildren[0].setFillStyle(0x777777, 1);
			}
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
