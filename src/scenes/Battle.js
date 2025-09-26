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
		background.scaleY = 8.5;
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 11974326;

		// action_menu
		const action_menu = this.add.container(0, 600);

		// action_menu
		const action_menu = this.add.rectangle(0, 230, 128, 128);
		action_menu.scaleX = 5.563164224190958;
		action_menu.scaleY = 1.9373375897746044;
		action_menu.setOrigin(0, 0);
		action_menu.isFilled = true;
		action_menu.isStroked = true;
		action_menu.strokeColor = 0;
		action_menu.lineWidth = 2;
		action_menu.add(action_menu);

		// action_menu_label_Container
		const action_menu_label_Container = this.add.rectangle(841, 0, 128, 128);
		action_menu_label_Container.scaleX = 4.9556534420716325;
		action_menu_label_Container.scaleY = 1.2436903236788002;
		action_menu_label_Container.isFilled = true;
		action_menu.add(action_menu_label_Container);

		// action_menu_label
		const action_menu_label = this.add.bitmapText(10, 230, "vcr_osd_mono_bold", "SELECT ACTION FOR CHARACTER\n");
		action_menu_label.text = "SELECT ACTION FOR CHARACTER\n";
		action_menu_label.fontSize = -40;
		action_menu.add(action_menu_label);

		// characters_p1
		const characters_p1 = this.add.container(220, 230);

		// warrior_p1
		const warrior_p1 = this.add.image(10, 0, "warrior");
		warrior_p1.flipX = true;
		characters_p1.add(warrior_p1);

		// mage_p1
		const mage_p1 = this.add.image(10, 130, "mage");
		mage_p1.flipX = true;
		characters_p1.add(mage_p1);

		// priest_p1
		const priest_p1 = this.add.image(10, 270, "priest");
		priest_p1.flipX = true;
		characters_p1.add(priest_p1);

		// rogue_p1
		const rogue_p1 = this.add.image(0, 400, "rogue");
		rogue_p1.flipX = true;
		characters_p1.add(rogue_p1);

		// characters_p2
		const characters_p2 = this.add.container(1640, 230);

		// warrior_p2
		const warrior_p2 = this.add.image(0, 0, "warrior");
		characters_p2.add(warrior_p2);

		// mage_p2
		const mage_p2 = this.add.image(10, 140, "mage");
		characters_p2.add(mage_p2);

		// priest_p2
		const priest_p2 = this.add.image(10, 270, "priest");
		characters_p2.add(priest_p2);

		// rogue_p2
		const rogue_p2 = this.add.image(20, 410, "rogue");
		characters_p2.add(rogue_p2);

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