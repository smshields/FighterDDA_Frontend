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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 128, 128);
		rectangle_1.scaleX = 15;
		rectangle_1.scaleY = 8.5;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11974326;

		// warrior_p1
		const warrior_p1 = this.add.image(220, 230, "warrior");
		warrior_p1.flipX = true;

		// warrior_p2
		const warrior_p2 = this.add.image(1640, 230, "warrior");

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