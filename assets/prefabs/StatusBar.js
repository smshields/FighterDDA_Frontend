
// You can write more code here

/* START OF COMPILED CODE */

import StatusBarViewComponent from "../../src/components/StatusBarViewComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatusBar extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// character_status_background
		const character_status_background = scene.add.rectangle(165, 55, 350, 128);
		character_status_background.name = "character_status_background";
		character_status_background.isFilled = true;
		character_status_background.isStroked = true;
		character_status_background.strokeColor = 0;
		character_status_background.lineWidth = 5;
		this.add(character_status_background);

		// character_name_label
		const character_name_label = scene.add.bitmapText(165, 10, "vcr_osd_mono_bold", "Character Name");
		character_name_label.name = "character_name_label";
		character_name_label.setOrigin(0.5, 0.5);
		character_name_label.text = "Character Name";
		character_name_label.fontSize = -32;
		this.add(character_name_label);

		// health_meter_label
		const health_meter_label = scene.add.bitmapText(60, 50, "vcr_osd_mono", "HEALTH");
		health_meter_label.name = "health_meter_label";
		health_meter_label.setOrigin(0.5, 0.5);
		health_meter_label.text = "HEALTH";
		health_meter_label.fontSize = -32;
		this.add(health_meter_label);

		// action_meter_label
		const action_meter_label = scene.add.bitmapText(60, 90, "vcr_osd_mono", "ACTION");
		action_meter_label.name = "action_meter_label";
		action_meter_label.setOrigin(0.5, 0.5);
		action_meter_label.text = "ACTION";
		action_meter_label.fontSize = -32;
		this.add(action_meter_label);

		// health_meter_background
		const health_meter_background = scene.add.rectangle(230, 52, 210, 30);
		health_meter_background.name = "health_meter_background";
		health_meter_background.isFilled = true;
		health_meter_background.fillColor = 0;
		this.add(health_meter_background);

		// action_meter_background
		const action_meter_background = scene.add.rectangle(230, 92, 210, 30);
		action_meter_background.name = "action_meter_background";
		action_meter_background.isFilled = true;
		action_meter_background.fillColor = 0;
		this.add(action_meter_background);

		// health_meter
		const health_meter = scene.add.rectangle(130, 40, 200, 24);
		health_meter.name = "health_meter";
		health_meter.setOrigin(0, 0);
		health_meter.isFilled = true;
		health_meter.fillColor = 3589693;
		this.add(health_meter);

		// action_meter
		const action_meter = scene.add.rectangle(130, 80, 200, 24);
		action_meter.name = "action_meter";
		action_meter.setOrigin(0, 0);
		action_meter.isFilled = true;
		action_meter.fillColor = 4666093;
		this.add(action_meter);

		// this (components)
		const thisStatusBarViewComponent = new StatusBarViewComponent(this);
		thisStatusBarViewComponent.hp_meter_fill = health_meter;
		thisStatusBarViewComponent.hp_meter_background = health_meter_background;
		thisStatusBarViewComponent.character_name = character_name_label;
		thisStatusBarViewComponent.action_meter_fill = action_meter;
		thisStatusBarViewComponent.action_meter_background = action_meter_background;
		thisStatusBarViewComponent.status_bar_background = character_status_background;

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
