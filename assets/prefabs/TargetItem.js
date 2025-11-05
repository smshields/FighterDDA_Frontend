
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "target_item";

		// target_name_background
		const target_name_background = scene.add.rectangle(0, 0, 435, 50);
		target_name_background.name = "target_name_background";
		target_name_background.setOrigin(0, 0);
		target_name_background.isFilled = true;
		this.add(target_name_background);

		// target_name
		const target_name = scene.add.bitmapText(270, 25, "vcr_osd_mono_bold", "Target\n");
		target_name.name = "target_name";
		target_name.setOrigin(0.5, 0.5);
		target_name.text = "Target\n";
		target_name.fontSize = -40;
		target_name.align = 1;
		this.add(target_name);

		// target_arrow
		const target_arrow = scene.add.image(15, 5, "selection_arrow");
		target_arrow.name = "target_arrow";
		target_arrow.scaleX = 0.5;
		target_arrow.scaleY = 0.5;
		target_arrow.setOrigin(0, 0);
		this.add(target_arrow);

		// target_hover_arrow
		const target_hover_arrow = scene.add.image(60, 5, "selection_arrow_pressed");
		target_hover_arrow.name = "target_hover_arrow";
		target_hover_arrow.scaleX = 0.5;
		target_hover_arrow.scaleY = 0.5;
		target_hover_arrow.setOrigin(0, 0);
		this.add(target_hover_arrow);

		/* START-USER-CTR-CODE */
		let bounds = this.getBounds();
		let hitZone = this.scene.add.zone(0, 0, bounds.width, bounds.height)
			.setOrigin(0)
  			.setInteractive({ useHandCursor: true });
		this.add(hitZone);

		hitZone.on('pointerover', () => target_name_background.fillColor = 0x777777);
		hitZone.on('pointerout', () => target_name_background.fillColor = 0xffffff);
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	height = 50;
	/** @type {number} */
	width = 435;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
