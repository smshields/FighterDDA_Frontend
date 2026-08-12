
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { hpChangeText, isHealOutcome } from "../../src/helpers/formatters.js";
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

		// acting_rogue
		const acting_rogue = scene.add.image(82, 49, "rogue");
		acting_rogue.name = "acting_rogue";
		acting_rogue.scaleX = 0.7404133658820242;
		acting_rogue.scaleY = 0.7404133658820242;
		this.add(acting_rogue);

		// acting_mage
		const acting_mage = scene.add.image(82, 48, "mage");
		acting_mage.name = "acting_mage";
		acting_mage.scaleX = 0.7426623253532969;
		acting_mage.scaleY = 0.7426623253532969;
		this.add(acting_mage);

		// acting_priest
		const acting_priest = scene.add.image(82, 50, "priest");
		acting_priest.name = "acting_priest";
		acting_priest.scaleX = 0.7771024619391912;
		acting_priest.scaleY = 0.7771024619391912;
		this.add(acting_priest);

		// acting_warrior
		const acting_warrior = scene.add.image(86, 49, "warrior");
		acting_warrior.name = "acting_warrior";
		acting_warrior.scaleX = 0.7706626955341499;
		acting_warrior.scaleY = 0.7706626955341499;
		this.add(acting_warrior);

		// target_warrior
		const target_warrior = scene.add.image(287, 35, "warrior");
		target_warrior.name = "target_warrior";
		target_warrior.scaleX = 0.6;
		target_warrior.scaleY = 0.6;
		this.add(target_warrior);

		// target_mage
		const target_mage = scene.add.image(388, 33, "mage");
		target_mage.name = "target_mage";
		target_mage.scaleX = 0.5572884243423961;
		target_mage.scaleY = 0.5572884243423961;
		this.add(target_mage);

		// target_priest
		const target_priest = scene.add.image(485, 35, "priest");
		target_priest.name = "target_priest";
		target_priest.scaleX = 0.6;
		target_priest.scaleY = 0.6;
		this.add(target_priest);

		// target_rogue
		const target_rogue = scene.add.image(583, 35, "rogue");
		target_rogue.name = "target_rogue";
		target_rogue.scaleX = 0.5516703891877117;
		target_rogue.scaleY = 0.5516703891877117;
		this.add(target_rogue);

		// target_warrior_damage
		const target_warrior_damage = scene.add.bitmapText(288, 82, "vcr_osd_mono", "100");
		target_warrior_damage.name = "target_warrior_damage";
		target_warrior_damage.setOrigin(0.5, 0.5);
		target_warrior_damage.text = "100";
		target_warrior_damage.fontSize = -26;
		target_warrior_damage.dropShadowX = 2;
		target_warrior_damage.dropShadowY = 5;
		target_warrior_damage.dropShadowColor = 15269888;
		this.add(target_warrior_damage);

		// target_rogue_damage
		const target_rogue_damage = scene.add.bitmapText(581, 81, "vcr_osd_mono", "100");
		target_rogue_damage.name = "target_rogue_damage";
		target_rogue_damage.setOrigin(0.5, 0.5);
		target_rogue_damage.text = "100";
		target_rogue_damage.fontSize = -26;
		target_rogue_damage.dropShadowX = 2;
		target_rogue_damage.dropShadowY = 5;
		target_rogue_damage.dropShadowColor = 15269888;
		this.add(target_rogue_damage);

		// target_priest_damage
		const target_priest_damage = scene.add.bitmapText(483, 81, "vcr_osd_mono", "100");
		target_priest_damage.name = "target_priest_damage";
		target_priest_damage.setOrigin(0.5, 0.5);
		target_priest_damage.text = "100";
		target_priest_damage.fontSize = -26;
		target_priest_damage.dropShadowX = 2;
		target_priest_damage.dropShadowY = 5;
		target_priest_damage.dropShadowColor = 15269888;
		this.add(target_priest_damage);

		// target_mage_damage
		const target_mage_damage = scene.add.bitmapText(386, 81, "vcr_osd_mono", "100");
		target_mage_damage.name = "target_mage_damage";
		target_mage_damage.setOrigin(0.5, 0.5);
		target_mage_damage.text = "100";
		target_mage_damage.fontSize = -26;
		target_mage_damage.dropShadowX = 2;
		target_mage_damage.dropShadowY = 5;
		target_mage_damage.dropShadowColor = 694786;
		this.add(target_mage_damage);

		// attack
		const attack = scene.add.image(153, 10, "attack_icon");
		attack.name = "attack";
		attack.scaleX = 0.175;
		attack.scaleY = 0.175;
		attack.setOrigin(0, 0);
		this.add(attack);

		// defend
		const defend = scene.add.image(190, 46, "defend_icon");
		defend.name = "defend";
		defend.scaleX = 0.175;
		defend.scaleY = 0.175;
		this.add(defend);

		// heal
		const heal = scene.add.image(189, 47, "heal_icon");
		heal.name = "heal";
		heal.scaleX = 0.175;
		heal.scaleY = 0.175;
		this.add(heal);

		// magicAttack
		const magicAttack = scene.add.image(189, 47, "mattack_icon");
		magicAttack.name = "magicAttack";
		magicAttack.scaleX = 0.175;
		magicAttack.scaleY = 0.175;
		this.add(magicAttack);

		// multiAttack
		const multiAttack = scene.add.image(189, 47, "multiattack_icon");
		multiAttack.name = "multiAttack";
		multiAttack.scaleX = 0.175;
		multiAttack.scaleY = 0.175;
		this.add(multiAttack);

		// multiHeal
		const multiHeal = scene.add.image(189, 47, "multiheal_icon");
		multiHeal.name = "multiHeal";
		multiHeal.scaleX = 0.175;
		multiHeal.scaleY = 0.175;
		this.add(multiHeal);

		// multiMagicAttack
		const multiMagicAttack = scene.add.image(189, 47, "multimattack_icon");
		multiMagicAttack.name = "multiMagicAttack";
		multiMagicAttack.scaleX = 0.175;
		multiMagicAttack.scaleY = 0.175;
		this.add(multiMagicAttack);

		// target_warrior_died
		const target_warrior_died = scene.add.image(254, 84, "gravestone");
		target_warrior_died.name = "target_warrior_died";
		target_warrior_died.scaleX = 0.06170053659180336;
		target_warrior_died.scaleY = 0.06170053659180336;
		this.add(target_warrior_died);

		// target_mage_died
		const target_mage_died = scene.add.image(353, 84, "gravestone");
		target_mage_died.name = "target_mage_died";
		target_mage_died.scaleX = 0.06170053659180336;
		target_mage_died.scaleY = 0.06170053659180336;
		this.add(target_mage_died);

		// target_priest_died
		const target_priest_died = scene.add.image(448, 84, "gravestone");
		target_priest_died.name = "target_priest_died";
		target_priest_died.scaleX = 0.06170053659180336;
		target_priest_died.scaleY = 0.06170053659180336;
		this.add(target_priest_died);

		// target_rogue_died
		const target_rogue_died = scene.add.image(548, 84, "gravestone");
		target_rogue_died.name = "target_rogue_died";
		target_rogue_died.scaleX = 0.06170053659180336;
		target_rogue_died.scaleY = 0.06170053659180336;
		this.add(target_rogue_died);

		/* START-USER-CTR-CODE */

		//build maps - characters to UI
		this.warriorMap = new ActionQueueHistoryItem.HistoryItemMap('warrior', acting_warrior, target_warrior, target_warrior_died, target_warrior_damage);
		this.mageMap = new ActionQueueHistoryItem.HistoryItemMap('mage', acting_mage, target_mage, target_mage_died, target_mage_damage);
		this.priestMap = new ActionQueueHistoryItem.HistoryItemMap('priest', acting_priest, target_priest, target_priest_died, target_priest_damage);
		this.rogueMap = new ActionQueueHistoryItem.HistoryItemMap('rogue', acting_rogue, target_rogue, target_rogue_died, target_rogue_damage);
		
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	width = 675;
	/** @type {number} */
	height = 100;

	/* START-USER-CODE */

	//internal class for easier mapping of ui elements to a string reference
	static HistoryItemMap = class {
		constructor(characterName, actorGO, targetGO, diedGO, damageGO) {
			this.characterName = characterName;
			this.actor = actorGO;
			this.target = targetGO;
			this.died = diedGO;
			this.damage = damageGO;
		}
	}

	static TEAM_TINTS = Object.freeze({ 1: 0xaab8ff, 2: 0xffaaaa });
	static DAMAGE_TINT = 0xff6666;
	static HEAL_TINT = 0x7bd88f;
	static ACTION_ICON_NAMES = Object.freeze([
		"attack", "defend", "heal", "magicAttack", "multiAttack", "multiHeal", "multiMagicAttack",
	]);

	characterMaps() {
		return {
			warrior: this.warriorMap,
			mage: this.mageMap,
			priest: this.priestMap,
			rogue: this.rogueMap,
		};
	}

	setElementVisible(element, visible) {
		element.setVisible(visible);
		element.setActive(visible);
	}

	/**
	 * Populate this row from one executed action off the wire
	 * (see FighterDDA-Server adapter.executedActionToWire):
	 *   { name, actorPlayerNum, actorName, timeExecuted,
	 *     targetOutcomes: [{ playerNum, characterName, hpChange, defeated }] }
	 */
	setFromExecutedAction(executedAction) {
		const maps = this.characterMaps();

		//hide everything, then reveal what this action used
		for (const map of Object.values(maps)) {
			this.setElementVisible(map.actor, false);
			this.setElementVisible(map.target, false);
			this.setElementVisible(map.died, false);
			this.setElementVisible(map.damage, false);
		}
		for (const iconName of ActionQueueHistoryItem.ACTION_ICON_NAMES) {
			const icon = this.getByName(iconName);
			if (icon) {
				this.setElementVisible(icon, false);
			}
		}

		//actor sprite, team-tinted, facing center like the battle field
		const actorMap = maps[String(executedAction.actorName).toLowerCase()];
		if (actorMap) {
			this.setElementVisible(actorMap.actor, true);
			actorMap.actor.setTint(ActionQueueHistoryItem.TEAM_TINTS[executedAction.actorPlayerNum] || 0xffffff);
			actorMap.actor.setFlipX(executedAction.actorPlayerNum === 2);
		}

		//action icon (elements are named with the wire action names)
		const icon = this.getByName(executedAction.name);
		if (icon) {
			this.setElementVisible(icon, true);
		}

		//per-target outcome: sprite, damage/heal number, gravestone
		for (const outcome of executedAction.targetOutcomes || []) {
			const map = maps[String(outcome.characterName).toLowerCase()];
			if (!map) {
				continue;
			}
			this.setElementVisible(map.target, true);
			map.target.setTint(ActionQueueHistoryItem.TEAM_TINTS[outcome.playerNum] || 0xffffff);
			map.target.setFlipX(outcome.playerNum === 2);

			const text = hpChangeText(executedAction.name, outcome);
			if (text !== "") {
				this.setElementVisible(map.damage, true);
				map.damage.setText(text);
				map.damage.setTint(isHealOutcome(executedAction.name, outcome)
					? ActionQueueHistoryItem.HEAL_TINT
					: ActionQueueHistoryItem.DAMAGE_TINT);
			}

			if (outcome.defeated) {
				this.setElementVisible(map.died, true);
			}
		}
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
