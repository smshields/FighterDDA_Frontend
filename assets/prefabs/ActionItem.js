
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action";

		// action_name_background
		const action_name_background = scene.add.rectangle(0, 0, 570, 50);
		action_name_background.setOrigin(0, 0);
		action_name_background.isFilled = true;
		this.add(action_name_background);

		// action_name
		const action_name = scene.add.bitmapText(295, 25, "vcr_osd_mono_bold", "Action");
		action_name.name = "action_name";
		action_name.setOrigin(0.5, 0.5);
		action_name.text = "Action";
		action_name.fontSize = -40;
		action_name.align = 1;
		this.add(action_name);

		// action_arrow
		const action_arrow = scene.add.image(15, 5, "selection_arrow");
		action_arrow.scaleX = 0.5;
		action_arrow.scaleY = 0.5;
		action_arrow.setOrigin(0, 0);
		this.add(action_arrow);

		// action_hover_arrow
		const action_hover_arrow = scene.add.image(60, 5, "selection_arrow_pressed");
		action_hover_arrow.name = "action_hover_arrow";
		action_hover_arrow.scaleX = 0.5;
		action_hover_arrow.scaleY = 0.5;
		action_hover_arrow.setOrigin(0, 0);
		this.add(action_hover_arrow);

		// selection_arrow_selected
		const selection_arrow_selected = scene.add.image(545, 25, "selection_arrow_selected");
		selection_arrow_selected.scaleX = 0.5;
		selection_arrow_selected.scaleY = 0.5;
		this.add(selection_arrow_selected);

		/* START-USER-CTR-CODE */
		console.log('REACHED!!!!');
		let bounds = this.getBounds();
		console.log(bounds);
		let hitZone = this.scene.add.zone(0, 0, bounds.width, bounds.height)
			.setOrigin(0)
  			.setInteractive({ useHandCursor: true });
		this.add(hitZone);

		hitZone.on('pointerover', () => action_name_background.fillColor = 0x777777);
		hitZone.on('pointerout', () => action_name_background.fillColor = 0xffffff);
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	action_width = 0;
	/** @type {number} */
	action_height = 0;

	/* START-USER-CODE */


	addHoverListener(){

	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
