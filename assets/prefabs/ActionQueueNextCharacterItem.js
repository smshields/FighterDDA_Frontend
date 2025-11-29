
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
		const warrior = scene.add.image(50, 48, "warrior");
		warrior.name = "warrior";
		warrior.scaleX = 0.75;
		warrior.scaleY = 0.75;
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

		// magicAttack
		const magicAttack = scene.add.image(80, 81, "mattack_icon");
		magicAttack.name = "magicAttack";
		magicAttack.scaleX = 0.075;
		magicAttack.scaleY = 0.075;
		this.add(magicAttack);

		// multiAttack
		const multiAttack = scene.add.image(80, 81, "multiattack_icon");
		multiAttack.name = "multiAttack";
		multiAttack.scaleX = 0.075;
		multiAttack.scaleY = 0.075;
		this.add(multiAttack);

		// multiHeal
		const multiHeal = scene.add.image(80, 81, "multiheal_icon");
		multiHeal.name = "multiHeal";
		multiHeal.scaleX = 0.075;
		multiHeal.scaleY = 0.075;
		this.add(multiHeal);

		// multiMagicAttack
		const multiMagicAttack = scene.add.image(80, 81, "multimattack_icon");
		multiMagicAttack.name = "multiMagicAttack";
		multiMagicAttack.scaleX = 0.075;
		multiMagicAttack.scaleY = 0.075;
		this.add(multiMagicAttack);

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
		thisNextActionQueueView.multi_attack = multiAttack;
		thisNextActionQueueView.magic_attack = magicAttack;
		thisNextActionQueueView.multi_magic_attack = multiMagicAttack;
		thisNextActionQueueView.heal = heal;
		thisNextActionQueueView.multi_heal = multiHeal;
		thisNextActionQueueView.question = question;

		/* START-USER-CTR-CODE */
		//character sprites
		this.warrior = warrior;
		this.mage = mage;
		this.priest = priest;
		this.rogue = rogue;

		this.characterSprites = [
			this.warrior,
			this.mage,
			this.priest,
			this.rogue
		];

		//action sprites
		this.attack = attack;
		this.multiAttack = multiAttack;
		this.magicAttack = magicAttack;
		this.multiMagicAttack = multiMagicAttack;
		this.heal = heal;
		this.multiHeal = multiHeal;
		this.defend = defend;
		this.question = question;

		this.actionSprites = [
			this.attack,
			this.multiAttack,
			this.magicAttack,
			this.multiMagicAttack,
			this.heal,
			this.multiHeal,
			this.defend,
			this.question
		];

		//color references 
		//TODO: Need constants file for these
		this.p1Color = 0x7285ff;
		this.p2Color = 0xff7777;

		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	width = 100;
	/** @type {number} */
	height = 100;

	/* START-USER-CODE */

	setCharacterSprite(characterModel) {
		let spriteName = characterModel.characterName.toLowerCase();

		for (let characterSprite of this.characterSprites) {
			//show sprite
			if (characterSprite.name.toLowerCase() == spriteName) {
				characterSprite.setVisible(true);
				characterSprite.setActive(true);
				//add glow, direction
				if (characterModel.playerNum == 1) {
					//reverse direction
					characterSprite.setFlipX(true);
					//add P1 glow
					characterSprite.enableFilters()
						.filters.internal.addGlow(this.p1Color, 4, 0, 2, false, 0.1, 10)
						.setPaddingOverride(null);
				} else {
					//add P2 glow
					characterSprite.enableFilters()
						.filters.internal.addGlow(this.p2Color, 4, 0, 2, false, 0.1, 10)
						.setPaddingOverride(null);
				}

			} else {
				characterSprite.setVisible(false);
				characterSprite.setActive(false);
			}
		}
	}

	setActionSprite(actionModel) {
		let spriteName = actionModel.name.toLowerCase();

		for (let actionSprite of this.actionSprites) {
			//if it's the player, show them the action they selected
			if (actionModel.actor.playerNum == 1) {
				if (actionSprite.name.toLowerCase() == spriteName) {
					actionSprite.setVisible(true);
					actionSprite.setActive(true);
				} else {
					actionSprite.setVisible(false);
					actionSprite.setActive(false);
				}
			//if it's the computer, show a question mark
			} else {
				if (actionSprite.name.toLowerCase() == "question") {
					actionSprite.setVisible(true);
					actionSprite.setActive(true);
				} else {
					actionSprite.setVisible(false);
					actionSprite.setActive(false);
				}
			}
		}
	}



	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
