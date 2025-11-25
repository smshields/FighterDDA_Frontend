
// You can write more code here

/* START OF COMPILED CODE */

import NextActionQueueView from "../../src/components/NextActionQueueView.js";
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

		// warrior
		const warrior = scene.add.image(8, 8, "warrior");
		warrior.name = "warrior";
		warrior.scaleX = 0.75;
		warrior.scaleY = 0.75;
		warrior.setOrigin(0, 0);
		this.add(warrior);

		// mage
		const mage = scene.add.image(49, 48, "mage");
		mage.name = "mage";
		mage.scaleX = 0.7190564703469677;
		mage.scaleY = 0.7190564703469677;
		this.add(mage);

		// priest
		const priest = scene.add.image(47, 48, "priest");
		priest.name = "priest";
		priest.scaleX = 0.7794386260732288;
		priest.scaleY = 0.7794386260732288;
		this.add(priest);

		// rogue
		const rogue = scene.add.image(51, 47, "rogue");
		rogue.name = "rogue";
		rogue.scaleX = 0.7416216051246244;
		rogue.scaleY = 0.7416216051246244;
		this.add(rogue);

		// attack
		const attack = scene.add.image(80, 81, "attack_icon");
		attack.name = "attack";
		attack.scaleX = 0.075;
		attack.scaleY = 0.07568920531335421;
		this.add(attack);

		// defend
		const defend = scene.add.image(80, 81, "defend_icon");
		defend.name = "defend";
		defend.scaleX = 0.075;
		defend.scaleY = 0.075;
		this.add(defend);

		// heal
		const heal = scene.add.image(80, 81, "heal_icon");
		heal.name = "heal";
		heal.scaleX = 0.075;
		heal.scaleY = 0.075;
		this.add(heal);

		// magic_attack
		const magic_attack = scene.add.image(80, 81, "mattack_icon");
		magic_attack.name = "magic_attack";
		magic_attack.scaleX = 0.075;
		magic_attack.scaleY = 0.075;
		this.add(magic_attack);

		// multi_attack
		const multi_attack = scene.add.image(80, 81, "multiattack_icon");
		multi_attack.name = "multi_attack";
		multi_attack.scaleX = 0.075;
		multi_attack.scaleY = 0.075;
		this.add(multi_attack);

		// multi_heal
		const multi_heal = scene.add.image(80, 81, "multiheal_icon");
		multi_heal.name = "multi_heal";
		multi_heal.scaleX = 0.075;
		multi_heal.scaleY = 0.075;
		this.add(multi_heal);

		// multi_magic_attack
		const multi_magic_attack = scene.add.image(80, 81, "multimattack_icon");
		multi_magic_attack.name = "multi_magic_attack";
		multi_magic_attack.scaleX = 0.075;
		multi_magic_attack.scaleY = 0.075;
		this.add(multi_magic_attack);

		// question
		const question = scene.add.image(80, 81, "question_icon");
		question.name = "question";
		question.scaleX = 0.075;
		question.scaleY = 0.075;
		this.add(question);

		// this (components)
		const thisNextActionQueueView = new NextActionQueueView(this);
		thisNextActionQueueView.warrior = warrior;
		thisNextActionQueueView.mage = mage;
		thisNextActionQueueView.priest = priest;
		thisNextActionQueueView.rogue = rogue;
		thisNextActionQueueView.attack = attack;
		thisNextActionQueueView.defend = defend;
		thisNextActionQueueView.multi_attack = multi_attack;
		thisNextActionQueueView.magic_attack = magic_attack;
		thisNextActionQueueView.multi_magic_attack = multi_magic_attack;
		thisNextActionQueueView.heal = heal;
		thisNextActionQueueView.multi_heal = multi_heal;
		thisNextActionQueueView.question = question;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	width = 100;
	/** @type {number} */
	height = 100;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
