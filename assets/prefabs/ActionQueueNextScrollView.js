
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionQueueNextScrollView extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// viewport_background_1
		const viewport_background_1 = scene.add.rectangle(5, 5, 100, 230);
		viewport_background_1.name = "viewport_background_1";
		viewport_background_1.setOrigin(0, 0);
		viewport_background_1.isFilled = true;
		this.add(viewport_background_1);

		// content_1
		const content_1 = scene.add.container(0, 0);
		content_1.name = "content_1";
		this.add(content_1);

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
