
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatusBar extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(165, 55, 350, 128);
		rectangle_4.isFilled = true;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 0;
		rectangle_4.lineWidth = 5;
		this.add(rectangle_4);

		// bitmaptext_1
		const bitmaptext_1 = scene.add.bitmapText(25, 0, "vcr_osd_mono_bold", "Character Name");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Character Name";
		bitmaptext_1.fontSize = -32;
		this.add(bitmaptext_1);

		// bitmaptext_2
		const bitmaptext_2 = scene.add.bitmapText(0, 35, "vcr_osd_mono", "HEALTH");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "HEALTH";
		bitmaptext_2.fontSize = -32;
		this.add(bitmaptext_2);

		// bitmaptext
		const bitmaptext = scene.add.bitmapText(0, 75, "vcr_osd_mono", "ACTION");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "ACTION";
		bitmaptext.fontSize = -32;
		this.add(bitmaptext);

		// rectangle_5
		const rectangle_5 = scene.add.rectangle(230, 52, 210, 30);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 0;
		this.add(rectangle_5);

		// rectangle
		const rectangle = scene.add.rectangle(230, 92, 210, 30);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		this.add(rectangle);

		// rectangle_6
		const rectangle_6 = scene.add.rectangle(230, 52, 200, 24);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 3589693;
		this.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = scene.add.rectangle(230, 92, 200, 24);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 4666093;
		this.add(rectangle_7);

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
