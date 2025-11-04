
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionQueueHistoryItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action_queue_history_item";

		// action_queue_history_item_background
		const action_queue_history_item_background = scene.add.rectangle(0, 0, 675, 100);
		action_queue_history_item_background.name = "action_queue_history_item_background";
		action_queue_history_item_background.setOrigin(0, 0);
		action_queue_history_item_background.isFilled = true;
		action_queue_history_item_background.fillColor = 11842740;
		this.add(action_queue_history_item_background);

		// acting_character
		const acting_character = scene.add.image(45, 10, "warrior");
		acting_character.name = "acting_character";
		acting_character.scaleX = 0.75;
		acting_character.scaleY = 0.75;
		acting_character.setOrigin(0, 0);
		this.add(acting_character);

		// action_icon
		const action_icon = scene.add.image(153, 10, "attack_icon");
		action_icon.name = "action_icon";
		action_icon.scaleX = 0.17777045335026118;
		action_icon.scaleY = 0.17777045335026118;
		action_icon.setOrigin(0, 0);
		this.add(action_icon);

		// character_1
		const character_1 = scene.add.image(255, 5, "warrior");
		character_1.name = "character_1";
		character_1.scaleX = 0.6;
		character_1.scaleY = 0.6;
		character_1.setOrigin(0, 0);
		this.add(character_1);

		// character_2
		const character_2 = scene.add.image(360, 0, "mage");
		character_2.name = "character_2";
		character_2.scaleX = 0.6;
		character_2.scaleY = 0.6;
		character_2.setOrigin(0, 0);
		this.add(character_2);

		// character_3
		const character_3 = scene.add.image(450, 5, "priest");
		character_3.name = "character_3";
		character_3.scaleX = 0.6;
		character_3.scaleY = 0.6;
		character_3.setOrigin(0, 0);
		this.add(character_3);

		// character_4
		const character_4 = scene.add.image(560, 0, "rogue");
		character_4.name = "character_4";
		character_4.scaleX = 0.6;
		character_4.scaleY = 0.6;
		character_4.setOrigin(0, 0);
		this.add(character_4);

		// character_1_damage
		const character_1_damage = scene.add.bitmapText(288, 82, "vcr_osd_mono", "100");
		character_1_damage.name = "character_1_damage";
		character_1_damage.setOrigin(0.5, 0.5);
		character_1_damage.text = "100";
		character_1_damage.fontSize = -26;
		character_1_damage.dropShadowX = 2;
		character_1_damage.dropShadowY = 5;
		character_1_damage.dropShadowColor = 15269888;
		this.add(character_1_damage);

		// character_4_damage
		const character_4_damage = scene.add.bitmapText(581, 81, "vcr_osd_mono", "100");
		character_4_damage.name = "character_4_damage";
		character_4_damage.setOrigin(0.5, 0.5);
		character_4_damage.text = "100";
		character_4_damage.fontSize = -26;
		character_4_damage.dropShadowX = 2;
		character_4_damage.dropShadowY = 5;
		character_4_damage.dropShadowColor = 15269888;
		this.add(character_4_damage);

		// character_3_damage
		const character_3_damage = scene.add.bitmapText(477, 81, "vcr_osd_mono", "100");
		character_3_damage.name = "character_3_damage";
		character_3_damage.setOrigin(0.5, 0.5);
		character_3_damage.text = "100";
		character_3_damage.fontSize = -26;
		character_3_damage.dropShadowX = 2;
		character_3_damage.dropShadowY = 5;
		character_3_damage.dropShadowColor = 15269888;
		this.add(character_3_damage);

		// character_2_damage
		const character_2_damage = scene.add.bitmapText(386, 81, "vcr_osd_mono", "100");
		character_2_damage.name = "character_2_damage";
		character_2_damage.setOrigin(0.5, 0.5);
		character_2_damage.text = "100";
		character_2_damage.fontSize = -26;
		character_2_damage.dropShadowX = 2;
		character_2_damage.dropShadowY = 5;
		character_2_damage.dropShadowColor = 694786;
		this.add(character_2_damage);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	width = 675;
	/** @type {number} */
	height = 100;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
