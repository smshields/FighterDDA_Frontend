// You can write more code here

/* START OF COMPILED CODE */

import Background from "../../assets/prefabs/Background.js";
import ActionQueueHistoryScrollView from "../../assets/prefabs/ActionQueueHistoryScrollView.js";
import ActionQueueNextScrollView from "../../assets/prefabs/ActionQueueNextScrollView.js";
import TargetScrollView from "../../assets/prefabs/TargetScrollView.js";
import CharacterViewComponent from "../components/CharacterViewComponent.js";
import ObjectBounceAnimation from "../components/ObjectBounceAnimation.js";
import StatusBar from "../../assets/prefabs/StatusBar.js";
import CharacterManagerComponent from "../components/CharacterManagerComponent.js";
import ScrollView from "../../assets/prefabs/ScrollView.js";
import ScrollViewComponent from "../components/ScrollViewComponent.js";
/* START-USER-IMPORTS */
import ActionItem from "../../assets/prefabs/ActionItem.js";
import ActionQueueNextCharacterItem from "../../assets/prefabs/ActionQueueNextCharacterItem.js";
import ActionQueueHistoryItem from "../../assets/prefabs/ActionQueueHistoryItem.js";
import TargetItem from "../../assets/prefabs/TargetItem.js";
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
		const background = new Background(this);
		this.add.existing(background);
		background.name = "background";

		// action_queue_container
		const action_queue_container = this.add.container(1100, 770);

		// action_queue_background
		const action_queue_background = this.add.rectangle(0, 0, 810, 300);
		action_queue_background.name = "action_queue_background";
		action_queue_background.setOrigin(0, 0);
		action_queue_background.isFilled = true;
		action_queue_background.isStroked = true;
		action_queue_background.strokeColor = 0;
		action_queue_background.lineWidth = 10;
		action_queue_container.add(action_queue_background);

		// action_queue_history
		const action_queue_history = this.add.container(120, 5);
		action_queue_history.name = "action_queue_history";
		action_queue_container.add(action_queue_history);

		// action_queue_history_title_background
		const action_queue_history_title_background = this.add.rectangle(0, 0, 685, 50);
		action_queue_history_title_background.name = "action_queue_history_title_background";
		action_queue_history_title_background.setOrigin(0, 0);
		action_queue_history_title_background.isFilled = true;
		action_queue_history_title_background.fillColor = 11842740;
		action_queue_history_title_background.isStroked = true;
		action_queue_history_title_background.strokeColor = 0;
		action_queue_history_title_background.lineWidth = 5;
		action_queue_history.add(action_queue_history_title_background);

		// action_queue_history_title
		const action_queue_history_title = this.add.bitmapText(340, 25, "vcr_osd_mono_bold", "ACTION HISTORY");
		action_queue_history_title.name = "action_queue_history_title";
		action_queue_history_title.setOrigin(0.5, 0.5);
		action_queue_history_title.text = "ACTION HISTORY";
		action_queue_history_title.fontSize = -40;
		action_queue_history_title.align = 1;
		action_queue_history.add(action_queue_history_title);

		// action_queue_history_background
		const action_queue_history_background = this.add.rectangle(0, 55, 685, 235);
		action_queue_history_background.name = "action_queue_history_background";
		action_queue_history_background.setOrigin(0, 0);
		action_queue_history_background.isFilled = true;
		action_queue_history_background.isStroked = true;
		action_queue_history_background.strokeColor = 0;
		action_queue_history_background.lineWidth = 5;
		action_queue_history.add(action_queue_history_background);

		// action_queue_history_scrollview
		const action_queue_history_scrollview = new ActionQueueHistoryScrollView(this, 0, 55);
		action_queue_history_scrollview.name = "action_queue_history_scrollview";
		action_queue_history.add(action_queue_history_scrollview);

		// action_queue_next
		const action_queue_next = this.add.container(5, 5);
		action_queue_next.name = "action_queue_next";
		action_queue_container.add(action_queue_next);

		// action_queue_next_title_background
		const action_queue_next_title_background = this.add.rectangle(0, 0, 110, 50);
		action_queue_next_title_background.name = "action_queue_next_title_background";
		action_queue_next_title_background.setOrigin(0, 0);
		action_queue_next_title_background.isFilled = true;
		action_queue_next_title_background.fillColor = 11842740;
		action_queue_next_title_background.isStroked = true;
		action_queue_next_title_background.strokeColor = 0;
		action_queue_next_title_background.lineWidth = 5;
		action_queue_next.add(action_queue_next_title_background);

		// action_queue_next_background
		const action_queue_next_background = this.add.rectangle(0, 55, 110, 235);
		action_queue_next_background.name = "action_queue_next_background";
		action_queue_next_background.setOrigin(0, 0);
		action_queue_next_background.isFilled = true;
		action_queue_next_background.isStroked = true;
		action_queue_next_background.strokeColor = 0;
		action_queue_next_background.lineWidth = 5;
		action_queue_next.add(action_queue_next_background);

		// action_queue_next_title
		const action_queue_next_title = this.add.bitmapText(5, 5, "vcr_osd_mono_bold", "NEXT");
		action_queue_next_title.name = "action_queue_next_title";
		action_queue_next_title.text = "NEXT";
		action_queue_next_title.fontSize = -40;
		action_queue_next_title.align = 1;
		action_queue_next.add(action_queue_next_title);

		// action_queue_next_scrollview
		const action_queue_next_scrollview = new ActionQueueNextScrollView(this, 0, 55);
		action_queue_next_scrollview.name = "action_queue_next_scrollview";
		action_queue_next.add(action_queue_next_scrollview);

		// target_menu
		const target_menu = this.add.container(630, 770);
		target_menu.name = "target_menu";

		// target_menu_background
		const target_menu_background = this.add.rectangle(0, 0, 450, 300);
		target_menu_background.name = "target_menu_background";
		target_menu_background.setOrigin(0, 0);
		target_menu_background.isFilled = true;
		target_menu_background.isStroked = true;
		target_menu_background.strokeColor = 0;
		target_menu_background.lineWidth = 10;
		target_menu.add(target_menu_background);

		// target_title_background
		const target_title_background = this.add.rectangle(5, 5, 440, 50);
		target_title_background.name = "target_title_background";
		target_title_background.setOrigin(0, 0);
		target_title_background.isFilled = true;
		target_title_background.fillColor = 11842740;
		target_title_background.isStroked = true;
		target_title_background.strokeColor = 0;
		target_title_background.lineWidth = 3.5;
		target_menu.add(target_title_background);

		// target_title
		const target_title = this.add.bitmapText(60, 10, "vcr_osd_mono_bold", "SELECT TARGET");
		target_title.name = "target_title";
		target_title.text = "SELECT TARGET";
		target_title.fontSize = -40;
		target_title.align = 1;
		target_menu.add(target_title);

		// target_scrollview
		const target_scrollview = new TargetScrollView(this, 5, 55);
		target_scrollview.name = "target_scrollview";
		target_menu.add(target_scrollview);

		// p1_team
		const p1_team = this.add.container(220, 230);
		p1_team.name = "p1_team";

		// p1_Rogue
		const p1_Rogue = this.add.container(-220, -105);
		p1_Rogue.name = "p1_Rogue";
		p1_team.add(p1_Rogue);

		// p1_rogue_sprite
		const p1_rogue_sprite = this.add.image(515, 55, "rogue");
		p1_rogue_sprite.name = "p1_rogue_sprite";
		p1_rogue_sprite.flipX = true;
		p1_Rogue.add(p1_rogue_sprite);

		// p1_rogue_status_bar
		const p1_rogue_status_bar = new StatusBar(this, 0, 0);
		p1_rogue_status_bar.name = "p1_rogue_status_bar";
		p1_Rogue.add(p1_rogue_status_bar);

		// p1_rogue_gravestone
		const p1_rogue_gravestone = this.add.image(515, 55, "gravestone");
		p1_rogue_gravestone.name = "p1_rogue_gravestone";
		p1_rogue_gravestone.scaleX = 0.26717669100700636;
		p1_rogue_gravestone.scaleY = 0.26717669100700636;
		p1_Rogue.add(p1_rogue_gravestone);

		// p1_rogue_defend
		const p1_rogue_defend = this.add.image(580, 80, "defend");
		p1_rogue_defend.name = "p1_rogue_defend";
		p1_rogue_defend.scaleX = 0.2788076925413643;
		p1_rogue_defend.scaleY = 0.2788076925413643;
		p1_Rogue.add(p1_rogue_defend);

		// p1_Priest
		const p1_Priest = this.add.container(-220, 230);
		p1_Priest.name = "p1_Priest";
		p1_team.add(p1_Priest);

		// p1_priest_sprite
		const p1_priest_sprite = this.add.image(515, 60, "priest");
		p1_priest_sprite.name = "p1_priest_sprite";
		p1_priest_sprite.flipX = true;
		p1_priest_sprite.alpha = 0.9;
		p1_priest_sprite.alphaTopLeft = 0.9;
		p1_priest_sprite.alphaTopRight = 0.9;
		p1_priest_sprite.alphaBottomLeft = 0.9;
		p1_priest_sprite.alphaBottomRight = 0.9;
		p1_Priest.add(p1_priest_sprite);

		// p1_priest_status_bar
		const p1_priest_status_bar = new StatusBar(this, 0, 0);
		p1_priest_status_bar.name = "p1_priest_status_bar";
		p1_Priest.add(p1_priest_status_bar);

		// p1_priest_gravestone
		const p1_priest_gravestone = this.add.image(515, 55, "gravestone");
		p1_priest_gravestone.name = "p1_priest_gravestone";
		p1_priest_gravestone.scaleX = 0.26717669100700636;
		p1_priest_gravestone.scaleY = 0.26717669100700636;
		p1_Priest.add(p1_priest_gravestone);

		// p1_priest_defend
		const p1_priest_defend = this.add.image(580, 80, "defend");
		p1_priest_defend.name = "p1_priest_defend";
		p1_priest_defend.scaleX = 0.2788076925413643;
		p1_priest_defend.scaleY = 0.2788076925413643;
		p1_Priest.add(p1_priest_defend);

		// p1_Mage
		const p1_Mage = this.add.container(-220, 65);
		p1_Mage.name = "p1_Mage";
		p1_team.add(p1_Mage);

		// p1_mage_sprite
		const p1_mage_sprite = this.add.image(515, 55, "mage");
		p1_mage_sprite.name = "p1_mage_sprite";
		p1_mage_sprite.flipX = true;
		p1_Mage.add(p1_mage_sprite);

		// p1_mage_status_bar
		const p1_mage_status_bar = new StatusBar(this, 0, 0);
		p1_mage_status_bar.name = "p1_mage_status_bar";
		p1_Mage.add(p1_mage_status_bar);

		// p1_mage_gravestone
		const p1_mage_gravestone = this.add.image(515, 55, "gravestone");
		p1_mage_gravestone.name = "p1_mage_gravestone";
		p1_mage_gravestone.scaleX = 0.26717669100700636;
		p1_mage_gravestone.scaleY = 0.26717669100700636;
		p1_Mage.add(p1_mage_gravestone);

		// p1_mage_defend
		const p1_mage_defend = this.add.image(580, 80, "defend");
		p1_mage_defend.name = "p1_mage_defend";
		p1_mage_defend.scaleX = 0.2788076925413643;
		p1_mage_defend.scaleY = 0.2788076925413643;
		p1_Mage.add(p1_mage_defend);

		// p1_warrior
		const p1_warrior = this.add.container(-220, 405);
		p1_warrior.name = "p1_warrior";
		p1_team.add(p1_warrior);

		// p1_warrior_sprite
		const p1_warrior_sprite = this.add.image(520, 55, "warrior");
		p1_warrior_sprite.name = "p1_warrior_sprite";
		p1_warrior_sprite.flipX = true;
		p1_warrior.add(p1_warrior_sprite);

		// p1_warrior_status_bar
		const p1_warrior_status_bar = new StatusBar(this, 0, 0);
		p1_warrior_status_bar.name = "p1_warrior_status_bar";
		p1_warrior.add(p1_warrior_status_bar);

		// p1_warrior_gravestone
		const p1_warrior_gravestone = this.add.image(515, 50, "gravestone");
		p1_warrior_gravestone.name = "p1_warrior_gravestone";
		p1_warrior_gravestone.scaleX = 0.26717669100700636;
		p1_warrior_gravestone.scaleY = 0.26717669100700636;
		p1_warrior.add(p1_warrior_gravestone);

		// p1_warrior_defend
		const p1_warrior_defend = this.add.image(580, 75, "defend");
		p1_warrior_defend.name = "p1_warrior_defend";
		p1_warrior_defend.scaleX = 0.2788076925413643;
		p1_warrior_defend.scaleY = 0.2788076925413643;
		p1_warrior.add(p1_warrior_defend);

		// p2_team
		const p2_team = this.add.container(1400, 125);
		p2_team.name = "p2_team";

		// p2_rogue
		const p2_rogue = this.add.container(0, 0);
		p2_rogue.name = "p2_rogue";
		p2_team.add(p2_rogue);

		// p2_rogue_sprite
		const p2_rogue_sprite = this.add.image(0, 50, "rogue");
		p2_rogue_sprite.name = "p2_rogue_sprite";
		p2_rogue.add(p2_rogue_sprite);

		// p2_rogue_status_bar
		const p2_rogue_status_bar = new StatusBar(this, 185, 0);
		p2_rogue_status_bar.name = "p2_rogue_status_bar";
		p2_rogue.add(p2_rogue_status_bar);

		// p2_rogue_gravestone
		const p2_rogue_gravestone = this.add.image(0, 50, "gravestone");
		p2_rogue_gravestone.name = "p2_rogue_gravestone";
		p2_rogue_gravestone.scaleX = 0.26717669100700636;
		p2_rogue_gravestone.scaleY = 0.26717669100700636;
		p2_rogue.add(p2_rogue_gravestone);

		// p2_rogue_defend
		const p2_rogue_defend = this.add.image(-60, 75, "defend");
		p2_rogue_defend.name = "p2_rogue_defend";
		p2_rogue_defend.scaleX = 0.2788076925413643;
		p2_rogue_defend.scaleY = 0.2788076925413643;
		p2_rogue.add(p2_rogue_defend);

		// p2_priest
		const p2_priest = this.add.container(0, 335);
		p2_priest.name = "p2_priest";
		p2_team.add(p2_priest);

		// p2_priest_sprite
		const p2_priest_sprite = this.add.image(0, 55, "priest");
		p2_priest_sprite.name = "p2_priest_sprite";
		p2_priest_sprite.alpha = 0.9;
		p2_priest_sprite.alphaTopLeft = 0.9;
		p2_priest_sprite.alphaTopRight = 0.9;
		p2_priest_sprite.alphaBottomLeft = 0.9;
		p2_priest_sprite.alphaBottomRight = 0.9;
		p2_priest.add(p2_priest_sprite);

		// p2_priest_status_bar
		const p2_priest_status_bar = new StatusBar(this, 185, 0);
		p2_priest_status_bar.name = "p2_priest_status_bar";
		p2_priest.add(p2_priest_status_bar);

		// p2_priest_gravestone
		const p2_priest_gravestone = this.add.image(5, 55, "gravestone");
		p2_priest_gravestone.name = "p2_priest_gravestone";
		p2_priest_gravestone.scaleX = 0.26717669100700636;
		p2_priest_gravestone.scaleY = 0.26717669100700636;
		p2_priest.add(p2_priest_gravestone);

		// p2_priest_defend
		const p2_priest_defend = this.add.image(-55, 75, "defend");
		p2_priest_defend.name = "p2_priest_defend";
		p2_priest_defend.scaleX = 0.2788076925413643;
		p2_priest_defend.scaleY = 0.2788076925413643;
		p2_priest.add(p2_priest_defend);

		// p2_mage
		const p2_mage = this.add.container(0, 170);
		p2_mage.name = "p2_mage";
		p2_team.add(p2_mage);

		// p2_mage_sprite
		const p2_mage_sprite = this.add.image(0, 50, "mage");
		p2_mage_sprite.name = "p2_mage_sprite";
		p2_mage.add(p2_mage_sprite);

		// p2_mage_status_bar
		const p2_mage_status_bar = new StatusBar(this, 185, 0);
		p2_mage_status_bar.name = "p2_mage_status_bar";
		p2_mage.add(p2_mage_status_bar);

		// p2_mage_gravestone
		const p2_mage_gravestone = this.add.image(0, 50, "gravestone");
		p2_mage_gravestone.name = "p2_mage_gravestone";
		p2_mage_gravestone.scaleX = 0.26717669100700636;
		p2_mage_gravestone.scaleY = 0.26717669100700636;
		p2_mage.add(p2_mage_gravestone);

		// p2_mage_defend
		const p2_mage_defend = this.add.image(-60, 75, "defend");
		p2_mage_defend.name = "p2_mage_defend";
		p2_mage_defend.scaleX = 0.2788076925413643;
		p2_mage_defend.scaleY = 0.2788076925413643;
		p2_mage.add(p2_mage_defend);

		// p2_warrior
		const p2_warrior = this.add.container(5, 510);
		p2_warrior.name = "p2_warrior";
		p2_team.add(p2_warrior);

		// p2_warrior_sprite
		const p2_warrior_sprite = this.add.image(0, 50, "warrior");
		p2_warrior_sprite.name = "p2_warrior_sprite";
		p2_warrior.add(p2_warrior_sprite);

		// p2_warrior_status_bar
		const p2_warrior_status_bar = new StatusBar(this, 180, 0);
		p2_warrior_status_bar.name = "p2_warrior_status_bar";
		p2_warrior.add(p2_warrior_status_bar);

		// p2_warrior_gravestone
		const p2_warrior_gravestone = this.add.image(0, 45, "gravestone");
		p2_warrior_gravestone.name = "p2_warrior_gravestone";
		p2_warrior_gravestone.scaleX = 0.26717669100700636;
		p2_warrior_gravestone.scaleY = 0.26717669100700636;
		p2_warrior.add(p2_warrior_gravestone);

		// p2_warrior_defend
		const p2_warrior_defend = this.add.image(-60, 70, "defend");
		p2_warrior_defend.name = "p2_warrior_defend";
		p2_warrior_defend.scaleX = 0.2788076925413643;
		p2_warrior_defend.scaleY = 0.2788076925413643;
		p2_warrior.add(p2_warrior_defend);

		// notifications
		const notifications = this.add.container(10, 10);

		// notification_background
		const notification_background = this.add.rectangle(0, 0, 1900, 90);
		notification_background.name = "notification_background";
		notification_background.setOrigin(0, 0);
		notification_background.isFilled = true;
		notification_background.isStroked = true;
		notification_background.strokeColor = 0;
		notification_background.lineWidth = 10;
		notifications.add(notification_background);

		// notification
		const notification = this.add.bitmapText(65, 10, "vcr_osd_mono_bold", "THIS IS A SAMPLE NOTIFICATION. DAMAGE TAKEN!");
		notification.name = "notification";
		notification.text = "THIS IS A SAMPLE NOTIFICATION. DAMAGE TAKEN!";
		notification.fontSize = -64;
		notification.align = 1;
		notifications.add(notification);

		// character_manager
		const character_manager = this.add.container(0, 0);
		character_manager.name = "character_manager";

		// action_menu
		const action_menu = this.add.container(10, 760);
		action_menu.name = "action_menu";

		// action_buttons_container
		const action_buttons_container = this.add.container(841, 0);
		action_buttons_container.name = "action_buttons_container";
		action_menu.add(action_buttons_container);

		// action_menu_background
		const action_menu_background = this.add.rectangle(0, 10, 600, 300);
		action_menu_background.name = "action_menu_background";
		action_menu_background.setOrigin(0, 0);
		action_menu_background.isFilled = true;
		action_menu_background.isStroked = true;
		action_menu_background.strokeColor = 0;
		action_menu_background.lineWidth = 10;
		action_menu.add(action_menu_background);

		// action_menu_title_background
		const action_menu_title_background = this.add.rectangle(5, 15, 590, 50);
		action_menu_title_background.name = "action_menu_title_background";
		action_menu_title_background.setOrigin(0, 0);
		action_menu_title_background.isFilled = true;
		action_menu_title_background.fillColor = 11842740;
		action_menu_title_background.isStroked = true;
		action_menu_title_background.strokeColor = 0;
		action_menu_title_background.lineWidth = 5;
		action_menu.add(action_menu_title_background);

		// action_menu_title
		const action_menu_title = this.add.bitmapText(305, 40, "vcr_osd_mono_bold", "SELECT ACTION\n");
		action_menu_title.name = "action_menu_title";
		action_menu_title.setOrigin(0.5, 0.5);
		action_menu_title.text = "SELECT ACTION\n";
		action_menu_title.fontSize = -40;
		action_menu_title.align = 1;
		action_menu.add(action_menu_title);

		// action_scrollview
		const action_scrollview = new ScrollView(this, 5, 65);
		action_scrollview.name = "action_scrollview";
		action_scrollview.scaleX = 1;
		action_scrollview.scaleY = 1;
		action_menu.add(action_scrollview);

		// p1_Rogue (components)
		const p1_RogueCharacterViewComponent = new CharacterViewComponent(p1_Rogue);
		p1_RogueCharacterViewComponent.status_bar = p1_rogue_status_bar;
		p1_RogueCharacterViewComponent.gravestone = p1_rogue_gravestone;
		p1_RogueCharacterViewComponent.character_sprite = p1_rogue_sprite;
		p1_RogueCharacterViewComponent.defending = p1_rogue_defend;

		// p1_rogue_sprite (components)
		const p1_rogue_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_rogue_sprite);
		p1_rogue_spriteObjectBounceAnimation.active = false;
		p1_rogue_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_rogue_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_Priest (components)
		const p1_PriestCharacterViewComponent = new CharacterViewComponent(p1_Priest);
		p1_PriestCharacterViewComponent.status_bar = p1_priest_status_bar;
		p1_PriestCharacterViewComponent.gravestone = p1_priest_gravestone;
		p1_PriestCharacterViewComponent.character_sprite = p1_priest_sprite;
		p1_PriestCharacterViewComponent.defending = p1_priest_defend;

		// p1_priest_sprite (components)
		const p1_priest_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_priest_sprite);
		p1_priest_spriteObjectBounceAnimation.active = false;
		p1_priest_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_priest_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_Mage (components)
		const p1_MageCharacterViewComponent = new CharacterViewComponent(p1_Mage);
		p1_MageCharacterViewComponent.status_bar = p1_mage_status_bar;
		p1_MageCharacterViewComponent.gravestone = p1_mage_gravestone;
		p1_MageCharacterViewComponent.character_sprite = p1_mage_sprite;
		p1_MageCharacterViewComponent.defending = p1_mage_defend;

		// p1_mage_sprite (components)
		const p1_mage_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_mage_sprite);
		p1_mage_spriteObjectBounceAnimation.active = false;
		p1_mage_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_mage_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_warrior (components)
		const p1_warriorCharacterViewComponent = new CharacterViewComponent(p1_warrior);
		p1_warriorCharacterViewComponent.status_bar = p1_warrior_status_bar;
		p1_warriorCharacterViewComponent.gravestone = p1_warrior_gravestone;
		p1_warriorCharacterViewComponent.character_sprite = p1_warrior_sprite;
		p1_warriorCharacterViewComponent.defending = p1_warrior_defend;

		// p1_warrior_sprite (components)
		const p1_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_warrior_sprite);
		p1_warrior_spriteObjectBounceAnimation.active = false;
		p1_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_rogue (components)
		const p2_rogueCharacterViewComponent = new CharacterViewComponent(p2_rogue);
		p2_rogueCharacterViewComponent.status_bar = p2_rogue_status_bar;
		p2_rogueCharacterViewComponent.gravestone = p2_rogue_gravestone;
		p2_rogueCharacterViewComponent.character_sprite = p2_rogue_sprite;
		p2_rogueCharacterViewComponent.defending = p2_rogue_defend;

		// p2_rogue_sprite (components)
		const p2_rogue_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_rogue_sprite);
		p2_rogue_spriteObjectBounceAnimation.active = false;
		p2_rogue_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_rogue_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_priest (components)
		const p2_priestCharacterViewComponent = new CharacterViewComponent(p2_priest);
		p2_priestCharacterViewComponent.status_bar = p2_priest_status_bar;
		p2_priestCharacterViewComponent.gravestone = p2_priest_gravestone;
		p2_priestCharacterViewComponent.character_sprite = p2_priest_sprite;
		p2_priestCharacterViewComponent.defending = p2_priest_defend;

		// p2_priest_sprite (components)
		const p2_priest_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_priest_sprite);
		p2_priest_spriteObjectBounceAnimation.active = false;
		p2_priest_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_priest_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_mage (components)
		const p2_mageCharacterViewComponent = new CharacterViewComponent(p2_mage);
		p2_mageCharacterViewComponent.status_bar = p2_mage_status_bar;
		p2_mageCharacterViewComponent.gravestone = p2_mage_gravestone;
		p2_mageCharacterViewComponent.character_sprite = p2_mage_sprite;
		p2_mageCharacterViewComponent.defending = p2_mage_defend;

		// p2_mage_sprite (components)
		const p2_mage_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_mage_sprite);
		p2_mage_spriteObjectBounceAnimation.active = false;
		p2_mage_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_mage_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_warrior (components)
		const p2_warriorCharacterViewComponent = new CharacterViewComponent(p2_warrior);
		p2_warriorCharacterViewComponent.status_bar = p2_warrior_status_bar;
		p2_warriorCharacterViewComponent.gravestone = p2_warrior_gravestone;
		p2_warriorCharacterViewComponent.character_sprite = p2_warrior_sprite;
		p2_warriorCharacterViewComponent.defending = p2_warrior_defend;

		// p2_warrior_sprite (components)
		const p2_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_warrior_sprite);
		p2_warrior_spriteObjectBounceAnimation.active = false;
		p2_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// character_manager (components)
		const character_managerCharacterManagerComponent = new CharacterManagerComponent(character_manager);
		character_managerCharacterManagerComponent.p1_warrior_ui = p1_warrior;
		character_managerCharacterManagerComponent.p1_mage_ui = p1_Mage;
		character_managerCharacterManagerComponent.p1_priest_ui = p1_Priest;
		character_managerCharacterManagerComponent.p1_rogue_ui = p1_Rogue;
		character_managerCharacterManagerComponent.p2_warrior_ui = p2_warrior;
		character_managerCharacterManagerComponent.p2_mage_ui = p2_mage;
		character_managerCharacterManagerComponent.p2_priest_ui = p2_priest;
		character_managerCharacterManagerComponent.p2_rogue_ui = p2_rogue;

		// action_scrollview (components)
		const action_scrollviewScrollViewComponent = ScrollViewComponent.getComponent(action_scrollview);
		action_scrollviewScrollViewComponent.viewport_x = 295;
		action_scrollviewScrollViewComponent.viewport_y = 120;
		action_scrollviewScrollViewComponent.viewport_width = 590;
		action_scrollviewScrollViewComponent.viewport_height = 230;
		action_scrollviewScrollViewComponent.name = "action_scrollview";

		this.p1_warrior_sprite = p1_warrior_sprite;
		this.p2_warrior_sprite = p2_warrior_sprite;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	p1_warrior_sprite;
	/** @type {Phaser.GameObjects.Image} */
	p2_warrior_sprite;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.load.start();

		this.load.json('p1_warrior_json', 'assets/data/character_json_stubs/P1Warrior.json');
		this.load.json('p1_mage_json', 'assets/data/character_json_stubs/P1Mage.json');
		this.load.json('p1_rogue_json', 'assets/data/character_json_stubs/P1Rogue.JSON');
		this.load.json('p1_priest_json', 'assets/data/character_json_stubs/P1Priest.JSON');

		this.load.json('p2_warrior_json', 'assets/data/character_json_stubs/P2Warrior.json');
		this.load.json('p2_mage_json', 'assets/data/character_json_stubs/P2Mage.json');
		this.load.json('p2_rogue_json', 'assets/data/character_json_stubs/P2Rogue.JSON');
		this.load.json('p2_priest_json', 'assets/data/character_json_stubs/P2Priest.JSON');

		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/v4.0.0-alpha/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI'
		});



	}

	create() {

		this.editorCreate();





	}

	//NOTES: "Item" prefabs must have assigned values for width/height that can be used to force sizing in usage of the scrollviews.
	//There is some hardcoding around placement - I didn't take the time to figure out procedural meethods of getting these set up but am cutting corners for time's sake.
	//x, y are the placement of the scrollview container, and width/height are as well - so I'm pretty sure I can eventually cut these out.
	//width used in beginning of for loop only works because container width is pretty much equal to item width, I'd prefer to use the item properties later.()

	createActionScrollViewContent(scene, x, y, width, height) {

		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		console.log(x, y);

		let items = ['Attack', 'Defend', 'Heal', 'Magic Attack', 'Multi Attack', 'Multi Magic Attack', 'Multi Heal', 'Attack 2', 'Attack 3', 'Attack 4', 'Attack 5'];

		for (let i = 0; i < items.length; i += 1) {
			let actionItem = new ActionItem(scene, -width / 2.075, -(25)); //HARDCODED - Half of the height of the ActionItem Prefab
			actionItem.setSize(actionItem.width, actionItem.height);
			const testAction = scene.add.container(0, 0, [actionItem]).setSize(actionItem.width, actionItem.height);

			content.add(
				testAction
			);
		}

		return content;
	}

	createTargetScrollViewContent(scene, x, y, width, height) {

		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		let items = ['Attack', 'Defend', 'Heal', 'Magic Attack', 'Multi Attack'];

		for (let i = 0; i < items.length; i += 1) {
			let targetItem = new TargetItem(scene, -width / 2.0, -(25)); //HARDCODED - Half of the height of the TargetItem Prefab
			targetItem.setSize(targetItem.width, targetItem.height);
			const testAction = scene.add.container(0, 0, [targetItem]).setSize(targetItem.width, targetItem.height);

			content.add(
				testAction
			);
		}

		return content;
	}

	createQueueHistoryScrollViewContent(scene, x, y, width, height) {

		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		console.log(x, y);

		let items = ['Attack', 'Defend', 'Heal', 'Magic Attack', 'Multi Attack', 'Multi Magic Attack', 'Multi Heal', 'Attack 2', 'Attack 3', 'Attack 4', 'Attack 5'];

		for (let i = 0; i < items.length; i += 1) {
			let actionHistoryItem = new ActionQueueHistoryItem(scene, -width / 2.025, -(50)); //HARDCODED - Half of the height of the ActionItem Prefab
			actionHistoryItem.setSize(actionHistoryItem.width, actionHistoryItem.height);
			const testAction = scene.add.container(0, 0, [actionHistoryItem]).setSize(actionHistoryItem.width, actionHistoryItem.height);

			content.add(
				testAction
			);
		}

		return content;
	}


	createQueueNextScrollViewContent(scene, x, y, width, height) {

		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		let items = ['character1', 'character2', 'character3', 'character4', 'character5', 'character6', 'character7'];

		for (let i = 0; i < items.length; i += 1) {
			let actionQueueNextCharacterItem = new ActionQueueNextCharacterItem(scene, -(width / 2.2), -(50));
			actionQueueNextCharacterItem.setSize(actionQueueNextCharacterItem.width, actionQueueNextCharacterItem.height); //HARDCODED
			const testAction = scene.add.container(0, 0, [actionQueueNextCharacterItem]).setSize(actionQueueNextCharacterItem.width, actionQueueNextCharacterItem.height);

			content.add(
				testAction,
				0,
				"center",
				{ left: 0, right: 0, top: 0, bottom: 0 },
				false
			);
		}
		return content;
	}

	createScrollView(name, x, y, width, height) {


		const background = this.rexUI.add.roundRectangle(0, 0, 0, 0, 6, 0xeeeeee);
		const track = this.rexUI.add.roundRectangle(0, 0, 4, height, 2, 0x666666);
		const thumb = this.rexUI.add.roundRectangle(0, 0, 8, 24, 6, 0x333333);

		//decide content creation method
		let contentCreateFunction = null;
		switch (name) {
			case 'action_queue_next': {
				contentCreateFunction = this.createQueueNextScrollViewContent;
				break;
			}
			case 'action_queue_history': {
				contentCreateFunction = this.createQueueHistoryScrollViewContent;
				break;
			}
			case 'action_scrollview': {
				contentCreateFunction = this.createActionScrollViewContent;
				break;
			}
			case 'target_scrollview': {
				contentCreateFunction = this.createTargetScrollViewContent;
				break;
			}
			default: {
				throw new Error('Invalid scrollview instantiation name provided! ' + name);
				break;
			}
		}

		const panel = this.rexUI.add.scrollablePanel({
			width: width,
			height: height,
			background: background,
			panel: {
				child: contentCreateFunction(this, x, y, width, height),
				mask: { mask: true, padding: 1 },
				childOrigin0: true
			},
			slider: {
				track: track,
				thumb: thumb,
				position: "right",
				adaptThumbSize: true,
				hideUnscrollableSlider: false
			},
			mouseWheelScroller: { focus: false, speed: 0.1 },
			scrollDetectionMode: 1
		});

		panel.layout();

		this.add.container(panel);
		this.panel = panel;

		panel.setOrigin(x, y);
		panel.setPosition(x, y);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here