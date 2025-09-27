// You can write more code here

/* START OF COMPILED CODE */

import ObjectBounceAnimation from "../components/ObjectBounceAnimation.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Battle extends Phaser.Scene {

	constructor() {
		super("Battle");

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.rectangle(0, 0, 128, 128);
		background.scaleX = 15;
		background.scaleY = 8.45;
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 11974326;

		// action_menu
		const action_menu = this.add.container(10, 760);

		// action_menu_background
		const action_menu_background = this.add.rectangle(0, 10, 600, 300);
		action_menu_background.setOrigin(0, 0);
		action_menu_background.isFilled = true;
		action_menu_background.isStroked = true;
		action_menu_background.strokeColor = 0;
		action_menu_background.lineWidth = 10;
		action_menu.add(action_menu_background);

		// action_buttons_container
		const action_buttons_container = this.add.container(841, 0);
		action_menu.add(action_buttons_container);

		// action_menu_label_background
		const action_menu_label_background = this.add.rectangle(5, 15, 590, 50);
		action_menu_label_background.setOrigin(0, 0);
		action_menu_label_background.isFilled = true;
		action_menu_label_background.fillColor = 11842740;
		action_menu_label_background.isStroked = true;
		action_menu_label_background.strokeColor = 0;
		action_menu_label_background.lineWidth = 5;
		action_menu.add(action_menu_label_background);

		// action_menu_label
		const action_menu_label = this.add.bitmapText(10, 20, "vcr_osd_mono_bold", "SELECT CHARACTER ACTION\n");
		action_menu_label.text = "SELECT CHARACTER ACTION\n";
		action_menu_label.fontSize = -40;
		action_menu_label.align = 1;
		action_menu.add(action_menu_label);

		// characters_p1
		const characters_p1 = this.add.container(220, 230);

		// warrior_p1
		const warrior_p1 = this.add.image(200, -20, "warrior");
		warrior_p1.flipX = true;
		characters_p1.add(warrior_p1);

		// mage_p1
		const mage_p1 = this.add.image(195, 120, "mage");
		mage_p1.flipX = true;
		characters_p1.add(mage_p1);

		// priest_p1
		const priest_p1 = this.add.image(200, 255, "priest");
		priest_p1.flipX = true;
		characters_p1.add(priest_p1);

		// rogue_p1
		const rogue_p1 = this.add.image(195, 400, "rogue");
		rogue_p1.flipX = true;
		characters_p1.add(rogue_p1);

		// characters_p2
		const characters_p2 = this.add.container(1640, 230);

		// warrior_p2
		const warrior_p2 = this.add.image(-140, -5, "warrior");
		characters_p2.add(warrior_p2);

		// mage_p2
		const mage_p2 = this.add.image(-140, 135, "mage");
		characters_p2.add(mage_p2);

		// priest_p2
		const priest_p2 = this.add.image(-145, 270, "priest");
		characters_p2.add(priest_p2);

		// rogue_p2
		const rogue_p2 = this.add.image(-135, 415, "rogue");
		characters_p2.add(rogue_p2);

		// target_menu
		const target_menu = this.add.container(-100, 0);

		// target_menu_background
		const target_menu_background = this.add.rectangle(730, 770, 450, 300);
		target_menu_background.setOrigin(0, 0);
		target_menu_background.isFilled = true;
		target_menu_background.isStroked = true;
		target_menu_background.strokeColor = 0;
		target_menu_background.lineWidth = 10;
		target_menu.add(target_menu_background);

		// target_selection_arrow
		const target_selection_arrow = this.add.image(770, 855, "selection_arrow");
		target_selection_arrow.scaleX = 0.684678102714157;
		target_selection_arrow.scaleY = 0.684678102714157;
		target_menu.add(target_selection_arrow);

		// action_menu_label_background_1
		const action_menu_label_background_1 = this.add.rectangle(735, 775, 440, 50);
		action_menu_label_background_1.setOrigin(0, 0);
		action_menu_label_background_1.isFilled = true;
		action_menu_label_background_1.fillColor = 11842740;
		action_menu_label_background_1.isStroked = true;
		action_menu_label_background_1.strokeColor = 0;
		action_menu_label_background_1.lineWidth = 5;
		target_menu.add(action_menu_label_background_1);

		// action_menu_label_1
		const action_menu_label_1 = this.add.bitmapText(790, 780, "vcr_osd_mono_bold", "SELECT TARGET");
		action_menu_label_1.text = "SELECT TARGET";
		action_menu_label_1.fontSize = -40;
		action_menu_label_1.align = 1;
		target_menu.add(action_menu_label_1);

		// action_menu_label_2
		const action_menu_label_2 = this.add.bitmapText(800, 835, "vcr_osd_mono_bold", "ENEMY WARRIOR");
		action_menu_label_2.text = "ENEMY WARRIOR";
		action_menu_label_2.fontSize = -40;
		action_menu_label_2.align = 1;
		target_menu.add(action_menu_label_2);

		// action_menu_label_3
		const action_menu_label_3 = this.add.bitmapText(800, 1015, "vcr_osd_mono_bold", "ENEMY ROGUE");
		action_menu_label_3.text = "ENEMY ROGUE";
		action_menu_label_3.fontSize = -40;
		action_menu_label_3.align = 1;
		target_menu.add(action_menu_label_3);

		// action_menu_label_4
		const action_menu_label_4 = this.add.bitmapText(800, 955, "vcr_osd_mono_bold", "ENEMY PRIEST");
		action_menu_label_4.text = "ENEMY PRIEST";
		action_menu_label_4.fontSize = -40;
		action_menu_label_4.align = 1;
		target_menu.add(action_menu_label_4);

		// action_menu_label_5
		const action_menu_label_5 = this.add.bitmapText(800, 895, "vcr_osd_mono_bold", "ENEMY MAGE");
		action_menu_label_5.text = "ENEMY MAGE";
		action_menu_label_5.fontSize = -40;
		action_menu_label_5.align = 1;
		target_menu.add(action_menu_label_5);

		// target_selection_arrow_1
		const target_selection_arrow_1 = this.add.image(770, 915, "selection_arrow");
		target_selection_arrow_1.scaleX = 0.684678102714157;
		target_selection_arrow_1.scaleY = 0.684678102714157;
		target_menu.add(target_selection_arrow_1);

		// target_selection_arrow_2
		const target_selection_arrow_2 = this.add.image(770, 975, "selection_arrow");
		target_selection_arrow_2.scaleX = 0.684678102714157;
		target_selection_arrow_2.scaleY = 0.684678102714157;
		target_menu.add(target_selection_arrow_2);

		// target_selection_arrow_3
		const target_selection_arrow_3 = this.add.image(770, 1035, "selection_arrow");
		target_selection_arrow_3.scaleX = 0.684678102714157;
		target_selection_arrow_3.scaleY = 0.684678102714157;
		target_menu.add(target_selection_arrow_3);

		// notification_background
		const notification_background = this.add.rectangle(10, 10, 1900, 90);
		notification_background.setOrigin(0, 0);
		notification_background.isFilled = true;
		notification_background.isStroked = true;
		notification_background.strokeColor = 0;
		notification_background.lineWidth = 10;

		// notification_background_1
		const notification_background_1 = this.add.rectangle(1100, 770, 810, 300);
		notification_background_1.setOrigin(0, 0);
		notification_background_1.isFilled = true;
		notification_background_1.isStroked = true;
		notification_background_1.strokeColor = 0;
		notification_background_1.lineWidth = 10;

		// action_menu_label_6
		const action_menu_label_6 = this.add.bitmapText(75, 20, "vcr_osd_mono_bold", "THIS IS A SAMPLE NOTIFICATION. DAMAGE TAKEN!");
		action_menu_label_6.text = "THIS IS A SAMPLE NOTIFICATION. DAMAGE TAKEN!";
		action_menu_label_6.fontSize = -64;
		action_menu_label_6.align = 1;

		// action_menu_label_background_2
		const action_menu_label_background_2 = this.add.rectangle(1105, 775, 800, 50);
		action_menu_label_background_2.setOrigin(0, 0);
		action_menu_label_background_2.isFilled = true;
		action_menu_label_background_2.fillColor = 11842740;
		action_menu_label_background_2.isStroked = true;
		action_menu_label_background_2.strokeColor = 0;
		action_menu_label_background_2.lineWidth = 5;

		// action_menu_label_7
		const action_menu_label_7 = this.add.bitmapText(1350, 780, "vcr_osd_mono_bold", "ACTION QUEUE");
		action_menu_label_7.text = "ACTION QUEUE";
		action_menu_label_7.fontSize = -40;
		action_menu_label_7.align = 1;

		// warrior_p1 (components)
		const warrior_p1ObjectBounceAnimation = new ObjectBounceAnimation(warrior_p1);
		warrior_p1ObjectBounceAnimation.mode = "both";
		warrior_p1ObjectBounceAnimation.posEase = "Expo.easeIn";
		warrior_p1ObjectBounceAnimation.scaleEase = "Expo.easeIn";
		warrior_p1ObjectBounceAnimation.posDelay = 250;

		this.warrior_p1 = warrior_p1;
		this.warrior_p2 = warrior_p2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	warrior_p1;
	/** @type {Phaser.GameObjects.Image} */
	warrior_p2;

	/* START-USER-CODE */

    // Write your code here

    create() {

        this.editorCreate();


    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here