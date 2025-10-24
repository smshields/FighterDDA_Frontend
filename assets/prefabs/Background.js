
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Background extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		this.name = "background";

		// backgroundtile5
		const backgroundtile5 = scene.add.image(65, 25, "backgroundtile5");
		backgroundtile5.scaleX = 0.25;
		backgroundtile5.scaleY = 0.25;
		backgroundtile5.flipX = true;
		this.add(backgroundtile5);

		// backgroundtile4
		const backgroundtile4 = scene.add.image(315, 25, "backgroundtile4");
		backgroundtile4.scaleX = 0.25;
		backgroundtile4.scaleY = 0.25;
		this.add(backgroundtile4);

		// backgroundtile2
		const backgroundtile2 = scene.add.image(825, 25, "backgroundtile2");
		backgroundtile2.scaleX = 0.25;
		backgroundtile2.scaleY = 0.25;
		this.add(backgroundtile2);

		// backgroundtile3
		const backgroundtile3 = scene.add.image(570, 25, "backgroundtile3");
		backgroundtile3.scaleX = 0.25;
		backgroundtile3.scaleY = 0.25;
		this.add(backgroundtile3);

		// backgroundtile
		const backgroundtile = scene.add.image(1080, 25, "backgroundtile");
		backgroundtile.scaleX = 0.25;
		backgroundtile.scaleY = 0.25;
		backgroundtile.flipX = true;
		this.add(backgroundtile);

		// backgroundtile_1
		const backgroundtile_1 = scene.add.image(65, 280, "backgroundtile5");
		backgroundtile_1.scaleX = 0.25;
		backgroundtile_1.scaleY = 0.25;
		backgroundtile_1.flipX = true;
		this.add(backgroundtile_1);

		// backgroundtile_2
		const backgroundtile_2 = scene.add.image(315, 280, "backgroundtile4");
		backgroundtile_2.scaleX = 0.25;
		backgroundtile_2.scaleY = 0.25;
		backgroundtile_2.flipX = true;
		this.add(backgroundtile_2);

		// backgroundtile_3
		const backgroundtile_3 = scene.add.image(1335, 25, "backgroundtile2");
		backgroundtile_3.scaleX = 0.25;
		backgroundtile_3.scaleY = 0.25;
		backgroundtile_3.flipX = true;
		this.add(backgroundtile_3);

		// backgroundtile_4
		const backgroundtile_4 = scene.add.image(570, 280, "backgroundtile3");
		backgroundtile_4.scaleX = 0.25;
		backgroundtile_4.scaleY = 0.25;
		backgroundtile_4.flipX = true;
		this.add(backgroundtile_4);

		// backgroundtile_5
		const backgroundtile_5 = scene.add.image(1080, 280, "backgroundtile");
		backgroundtile_5.scaleX = 0.25;
		backgroundtile_5.scaleY = 0.25;
		backgroundtile_5.flipX = true;
		this.add(backgroundtile_5);

		// backgroundtile_6
		const backgroundtile_6 = scene.add.image(65, 535, "backgroundtile5");
		backgroundtile_6.scaleX = 0.25;
		backgroundtile_6.scaleY = 0.25;
		backgroundtile_6.flipX = true;
		this.add(backgroundtile_6);

		// backgroundtile_8
		const backgroundtile_8 = scene.add.image(1335, 280, "backgroundtile2");
		backgroundtile_8.scaleX = 0.25;
		backgroundtile_8.scaleY = 0.25;
		backgroundtile_8.flipX = true;
		this.add(backgroundtile_8);

		// backgroundtile_9
		const backgroundtile_9 = scene.add.image(570, 535, "backgroundtile3");
		backgroundtile_9.scaleX = 0.25;
		backgroundtile_9.scaleY = 0.25;
		backgroundtile_9.flipX = true;
		this.add(backgroundtile_9);

		// backgroundtile_10
		const backgroundtile_10 = scene.add.image(1080, 535, "backgroundtile");
		backgroundtile_10.scaleX = 0.25;
		backgroundtile_10.scaleY = 0.25;
		backgroundtile_10.flipX = true;
		this.add(backgroundtile_10);

		// backgroundtile_11
		const backgroundtile_11 = scene.add.image(65, 790, "backgroundtile5");
		backgroundtile_11.scaleX = 0.25;
		backgroundtile_11.scaleY = 0.25;
		backgroundtile_11.flipX = true;
		this.add(backgroundtile_11);

		// backgroundtile_12
		const backgroundtile_12 = scene.add.image(315, 790, "backgroundtile4");
		backgroundtile_12.scaleX = 0.25;
		backgroundtile_12.scaleY = 0.25;
		this.add(backgroundtile_12);

		// backgroundtile_13
		const backgroundtile_13 = scene.add.image(1335, 535, "backgroundtile2");
		backgroundtile_13.scaleX = 0.25;
		backgroundtile_13.scaleY = 0.25;
		this.add(backgroundtile_13);

		// backgroundtile_14
		const backgroundtile_14 = scene.add.image(570, 790, "backgroundtile3");
		backgroundtile_14.scaleX = 0.25;
		backgroundtile_14.scaleY = 0.25;
		backgroundtile_14.flipX = true;
		this.add(backgroundtile_14);

		// backgroundtile_15
		const backgroundtile_15 = scene.add.image(1080, 790, "backgroundtile");
		backgroundtile_15.scaleX = 0.25;
		backgroundtile_15.scaleY = 0.25;
		backgroundtile_15.flipX = true;
		this.add(backgroundtile_15);

		// backgroundtile_16
		const backgroundtile_16 = scene.add.image(65, 1045, "backgroundtile5");
		backgroundtile_16.scaleX = 0.25;
		backgroundtile_16.scaleY = 0.25;
		this.add(backgroundtile_16);

		// backgroundtile_17
		const backgroundtile_17 = scene.add.image(315, 1045, "backgroundtile4");
		backgroundtile_17.scaleX = 0.25;
		backgroundtile_17.scaleY = 0.25;
		this.add(backgroundtile_17);

		// backgroundtile_18
		const backgroundtile_18 = scene.add.image(825, 1045, "backgroundtile2");
		backgroundtile_18.scaleX = 0.25;
		backgroundtile_18.scaleY = 0.25;
		this.add(backgroundtile_18);

		// backgroundtile_19
		const backgroundtile_19 = scene.add.image(570, 1045, "backgroundtile3");
		backgroundtile_19.scaleX = 0.25;
		backgroundtile_19.scaleY = 0.25;
		this.add(backgroundtile_19);

		// backgroundtile_20
		const backgroundtile_20 = scene.add.image(1080, 1045, "backgroundtile");
		backgroundtile_20.scaleX = 0.25;
		backgroundtile_20.scaleY = 0.25;
		this.add(backgroundtile_20);

		// backgroundtile_21
		const backgroundtile_21 = scene.add.image(825, 280, "backgroundtile3");
		backgroundtile_21.scaleX = 0.25;
		backgroundtile_21.scaleY = 0.25;
		backgroundtile_21.flipX = true;
		this.add(backgroundtile_21);

		// backgroundtile_22
		const backgroundtile_22 = scene.add.image(1590, 535, "backgroundtile3");
		backgroundtile_22.scaleX = 0.25;
		backgroundtile_22.scaleY = 0.25;
		backgroundtile_22.flipX = true;
		this.add(backgroundtile_22);

		// backgroundtile_24
		const backgroundtile_24 = scene.add.image(825, 535, "backgroundtile");
		backgroundtile_24.scaleX = 0.25;
		backgroundtile_24.scaleY = 0.25;
		this.add(backgroundtile_24);

		// backgroundtile_25
		const backgroundtile_25 = scene.add.image(825, 790, "backgroundtile2");
		backgroundtile_25.scaleX = 0.25;
		backgroundtile_25.scaleY = 0.25;
		this.add(backgroundtile_25);

		// backgroundtile_26
		const backgroundtile_26 = scene.add.image(1335, 790, "backgroundtile3");
		backgroundtile_26.scaleX = 0.25;
		backgroundtile_26.scaleY = 0.25;
		backgroundtile_26.flipX = true;
		this.add(backgroundtile_26);

		// backgroundtile_27
		const backgroundtile_27 = scene.add.image(1590, 790, "backgroundtile4");
		backgroundtile_27.scaleX = 0.25;
		backgroundtile_27.scaleY = 0.25;
		backgroundtile_27.flipX = true;
		this.add(backgroundtile_27);

		// backgroundtile_7
		const backgroundtile_7 = scene.add.image(1590, 30, "backgroundtile4");
		backgroundtile_7.scaleX = 0.25;
		backgroundtile_7.scaleY = 0.25;
		backgroundtile_7.flipX = true;
		this.add(backgroundtile_7);

		// backgroundtile_28
		const backgroundtile_28 = scene.add.image(315, 535, "backgroundtile3");
		backgroundtile_28.scaleX = 0.25;
		backgroundtile_28.scaleY = 0.25;
		backgroundtile_28.flipX = true;
		this.add(backgroundtile_28);

		// backgroundtile_29
		const backgroundtile_29 = scene.add.image(1590, 280, "backgroundtile");
		backgroundtile_29.scaleX = 0.25;
		backgroundtile_29.scaleY = 0.25;
		this.add(backgroundtile_29);

		// backgroundtile_30
		const backgroundtile_30 = scene.add.image(1845, 30, "backgroundtile");
		backgroundtile_30.scaleX = 0.25;
		backgroundtile_30.scaleY = 0.25;
		backgroundtile_30.flipX = true;
		this.add(backgroundtile_30);

		// backgroundtile_31
		const backgroundtile_31 = scene.add.image(1845, 285, "backgroundtile");
		backgroundtile_31.scaleX = 0.25;
		backgroundtile_31.scaleY = 0.25;
		backgroundtile_31.flipX = true;
		this.add(backgroundtile_31);

		// backgroundtile_32
		const backgroundtile_32 = scene.add.image(1845, 540, "backgroundtile");
		backgroundtile_32.scaleX = 0.25;
		backgroundtile_32.scaleY = 0.25;
		backgroundtile_32.flipX = true;
		this.add(backgroundtile_32);

		// backgroundtile_33
		const backgroundtile_33 = scene.add.image(1845, 790, "backgroundtile");
		backgroundtile_33.scaleX = 0.25;
		backgroundtile_33.scaleY = 0.25;
		backgroundtile_33.flipX = true;
		this.add(backgroundtile_33);

		// backgroundtile_34
		const backgroundtile_34 = scene.add.image(1845, 1045, "backgroundtile");
		backgroundtile_34.scaleX = 0.25;
		backgroundtile_34.scaleY = 0.25;
		this.add(backgroundtile_34);

		// backgroundtile_35
		const backgroundtile_35 = scene.add.image(1335, 1045, "backgroundtile3");
		backgroundtile_35.scaleX = 0.25;
		backgroundtile_35.scaleY = 0.25;
		backgroundtile_35.flipX = true;
		this.add(backgroundtile_35);

		// backgroundtile_36
		const backgroundtile_36 = scene.add.image(1590, 1045, "backgroundtile4");
		backgroundtile_36.scaleX = 0.25;
		backgroundtile_36.scaleY = 0.25;
		backgroundtile_36.flipX = true;
		this.add(backgroundtile_36);

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
