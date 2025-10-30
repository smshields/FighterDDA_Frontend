
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

		/** @type {Phaser.GameObjects.GameObject} */
		this.scrollbar_track = null;

		/** @type {Phaser.GameObjects.GameObject} */
		this.scrollbar_bar = null;

		// === Internal Properties ===
		this.content = null;

		this.scene = this.gameObject.scene;

		this.items = ['Attack', 'Defend', 'Heal', 'Magic Attack', 'Multi Attack', 'Multi Magic Attack', 'Multi Heal', 'Attack 2', 'Attack 3', 'Attack 4', 'Attack 5'];


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

	/* START-USER-CODE */

	start() {
		//set up reference for convienience 
		this.gameObject.scrollViewComponent = this;

		this.buildScrollPanel();

	}

	buildScrollPanel() {

		const width = typeof this.viewport_width === "number" ? this.viewport_width : 300;
		const height = typeof this.viewport_height === "number" ? this.viewport_height : 200;

		const background = this.scene.rexUI.add.roundRectangle(0, 0, 0, 0, 6, 0xeeeeee);
		const track = this.scene.rexUI.add.roundRectangle(0, 0, 4, height, 2, 0x666666);
		const thumb = this.scene.rexUI.add.roundRectangle(0, 0, 8, 24, 4, 0x333333);

		const content = this.scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: {items: 10}
		});

		for (let i = 0; i < this.items.length; i += 1) {
			const label = this.scene.add.text(0, 0, this.items[i], {
				fontFamily: "Arial, sans-serif",
				fontSize: "32px",
				color: "#000000",
				wordWrap: { width: width - 32 }
			});
			content.add(
				label,
				0,                      // proportion
				"left",                 // align
				{ left: 8, right: 8, top: 4, bottom: 4 }, // padding
				false                   // expand
			);
		}
		content.layout();

		const panel = this.scene.rexUI.add.scrollablePanel({
			width: width,
			height: height,
			background: background,
			panel: {
				child: content,
				mask: {mask: true, padding:1},
				childOrigin0: true
			},
			slider: {
				track: track,
				thumb: thumb,
				position: "right",
				adaptThumbSize: true,
				hideUnscrollableSlider: false
			},
			mouseWheelScroller: { focus: false, speed: 0.1 },
			scrollDetectionMode: 1 
		});

		panel.layout();

		this.gameObject.add(panel);
		this.panel = panel;

		panel.setOrigin(this.viewport_x, this.viewport_y);
		panel.setPosition(this.viewport_x, this.viewport_y);

	}


	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
