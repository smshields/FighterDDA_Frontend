
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action_item";

		// action_text
		const action_text = scene.add.bitmapText(0, 0, "vcr_osd_mono_bold", "Action");
		action_text.name = "action_text";
		action_text.setOrigin(0.5, 0.5);
		action_text.text = "Action";
		action_text.fontSize = -32;
		this.add(action_text);

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
