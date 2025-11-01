
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionQueueNextCharacterItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action_queue_next_character_item";

		// action_queue_next_character_background
		const action_queue_next_character_background = scene.add.rectangle(0, 0, 100, 100);
		action_queue_next_character_background.name = "action_queue_next_character_background";
		action_queue_next_character_background.setOrigin(0, 0);
		action_queue_next_character_background.isFilled = true;
		action_queue_next_character_background.fillColor = 11842740;
		this.add(action_queue_next_character_background);

		// action_queue_next_character
		const action_queue_next_character = scene.add.image(50, 50, "warrior");
		action_queue_next_character.name = "action_queue_next_character";
		action_queue_next_character.scaleX = 0.75;
		action_queue_next_character.scaleY = 0.75;
		this.add(action_queue_next_character);

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
