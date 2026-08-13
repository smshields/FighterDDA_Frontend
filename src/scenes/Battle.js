// You can write more code here

/* START OF COMPILED CODE */

import Background from "../../assets/prefabs/Background.js";
import ActionQueueHistoryScrollView from "../../assets/prefabs/ActionQueueHistoryScrollView.js";
import ActionQueueNextScrollView from "../../assets/prefabs/ActionQueueNextScrollView.js";
import TargetScrollView from "../../assets/prefabs/TargetScrollView.js";
import CharacterViewComponent from "../components/CharacterViewComponent.js";
import ObjectBounceAnimation from "../components/ObjectBounceAnimation.js";
import StatusBar from "../../assets/prefabs/StatusBar.js";
import ScrollView from "../../assets/prefabs/ScrollView.js";
import ScrollViewComponent from "../components/ScrollViewComponent.js";
import NextActionQueueManagerComponent from "../components/NextActionQueueManagerComponent.js";
import CharacterManagerComponent from "../components/CharacterManagerComponent.js";
import GameManagerComponent from "../components/GameManagerComponent.js";
/* START-USER-IMPORTS */
import ActionItem from "../../assets/prefabs/ActionItem.js";
import ActionQueueNextCharacterItem from "../../assets/prefabs/ActionQueueNextCharacterItem.js";
import ActionQueueHistoryItem from "../../assets/prefabs/ActionQueueHistoryItem.js";
import TargetItem from "../../assets/prefabs/TargetItem.js";
import AudioManager from "../audio/AudioManager.js";
import PauseMenu from "../ui/PauseMenu.js";
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

		// p1_rogue_action_arrow
		const p1_rogue_action_arrow = this.add.image(410, 50, "selection_arrow_selected");
		p1_rogue_action_arrow.name = "p1_rogue_action_arrow";
		p1_Rogue.add(p1_rogue_action_arrow);

		// p1_rogue_target_arrow
		const p1_rogue_target_arrow = this.add.image(620, 55, "selection_arrow_selected");
		p1_rogue_target_arrow.name = "p1_rogue_target_arrow";
		p1_rogue_target_arrow.flipX = true;
		p1_Rogue.add(p1_rogue_target_arrow);

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

		// p1_priest_action_arrow
		const p1_priest_action_arrow = this.add.image(405, 55, "selection_arrow_selected");
		p1_priest_action_arrow.name = "p1_priest_action_arrow";
		p1_Priest.add(p1_priest_action_arrow);

		// p1_priest_target_arrow
		const p1_priest_target_arrow = this.add.image(620, 55, "selection_arrow_selected");
		p1_priest_target_arrow.name = "p1_priest_target_arrow";
		p1_priest_target_arrow.flipX = true;
		p1_Priest.add(p1_priest_target_arrow);

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

		// p1_mage_action_arrow
		const p1_mage_action_arrow = this.add.image(415, 50, "selection_arrow_selected");
		p1_mage_action_arrow.name = "p1_mage_action_arrow";
		p1_Mage.add(p1_mage_action_arrow);

		// p1_mage_target_arrow
		const p1_mage_target_arrow = this.add.image(620, 55, "selection_arrow_selected");
		p1_mage_target_arrow.name = "p1_mage_target_arrow";
		p1_mage_target_arrow.flipX = true;
		p1_Mage.add(p1_mage_target_arrow);

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

		// p1_warrior_action_arrow
		const p1_warrior_action_arrow = this.add.image(405, 55, "selection_arrow_selected");
		p1_warrior_action_arrow.name = "p1_warrior_action_arrow";
		p1_warrior.add(p1_warrior_action_arrow);

		// p1_warrior_target_arrow
		const p1_warrior_target_arrow = this.add.image(620, 55, "selection_arrow_selected");
		p1_warrior_target_arrow.name = "p1_warrior_target_arrow";
		p1_warrior_target_arrow.flipX = true;
		p1_warrior.add(p1_warrior_target_arrow);

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

		// p2_rogue_target_arrow
		const p2_rogue_target_arrow = this.add.image(-100, 55, "selection_arrow_selected");
		p2_rogue_target_arrow.name = "p2_rogue_target_arrow";
		p2_rogue.add(p2_rogue_target_arrow);

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

		// p2_priest_target_arrow
		const p2_priest_target_arrow = this.add.image(-100, 55, "selection_arrow_selected");
		p2_priest_target_arrow.name = "p2_priest_target_arrow";
		p2_priest.add(p2_priest_target_arrow);

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

		// p2_mage_target_arrow
		const p2_mage_target_arrow = this.add.image(-100, 55, "selection_arrow_selected");
		p2_mage_target_arrow.name = "p2_mage_target_arrow";
		p2_mage.add(p2_mage_target_arrow);

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

		// p2_warrior_target_arrow
		const p2_warrior_target_arrow = this.add.image(-100, 55, "selection_arrow_selected");
		p2_warrior_target_arrow.name = "p2_warrior_target_arrow";
		p2_warrior.add(p2_warrior_target_arrow);

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
		const notification = this.add.bitmapText(960, 45, "vcr_osd_mono_bold", "SELECT ACTION FOR PRIEST\n");
		notification.name = "notification";
		notification.setOrigin(0.5, 0.5);
		notification.text = "SELECT ACTION FOR PRIEST\n";
		notification.fontSize = -64;
		notification.align = 1;
		notifications.add(notification);

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
		action_scrollview.visible = true;
		action_menu.add(action_scrollview);

		// next_action_queue_manager
		const next_action_queue_manager = this.add.container(0, 0);
		next_action_queue_manager.name = "next_action_queue_manager";

		// character_manager
		const character_manager = this.add.container(0, 0);
		character_manager.name = "character_manager";

		// game_manager
		const game_manager = this.add.container(0, 0);
		game_manager.name = "game_manager";

		// p1_Rogue (components)
		const p1_RogueCharacterViewComponent = new CharacterViewComponent(p1_Rogue);
		p1_RogueCharacterViewComponent.status_bar = p1_rogue_status_bar;
		p1_RogueCharacterViewComponent.gravestone = p1_rogue_gravestone;
		p1_RogueCharacterViewComponent.character_sprite = p1_rogue_sprite;
		p1_RogueCharacterViewComponent.defending = p1_rogue_defend;
		p1_RogueCharacterViewComponent.acting_arrow = p1_rogue_action_arrow;
		p1_RogueCharacterViewComponent.targeting_arrow = p1_rogue_target_arrow;

		// p1_rogue_sprite (components)
		const p1_rogue_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_rogue_sprite);
		p1_rogue_spriteObjectBounceAnimation.active = false;
		p1_rogue_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_rogue_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_rogue_action_arrow (components)
		const p1_rogue_action_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_rogue_action_arrow);
		p1_rogue_action_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_rogue_action_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_rogue_target_arrow (components)
		const p1_rogue_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_rogue_target_arrow);
		p1_rogue_target_arrowObjectBounceAnimation.posDuration = 250;
		p1_rogue_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_rogue_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_Priest (components)
		const p1_PriestCharacterViewComponent = new CharacterViewComponent(p1_Priest);
		p1_PriestCharacterViewComponent.status_bar = p1_priest_status_bar;
		p1_PriestCharacterViewComponent.gravestone = p1_priest_gravestone;
		p1_PriestCharacterViewComponent.character_sprite = p1_priest_sprite;
		p1_PriestCharacterViewComponent.defending = p1_priest_defend;
		p1_PriestCharacterViewComponent.acting_arrow = p1_priest_action_arrow;
		p1_PriestCharacterViewComponent.targeting_arrow = p1_priest_target_arrow;

		// p1_priest_sprite (components)
		const p1_priest_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_priest_sprite);
		p1_priest_spriteObjectBounceAnimation.active = false;
		p1_priest_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_priest_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_priest_action_arrow (components)
		const p1_priest_action_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_priest_action_arrow);
		p1_priest_action_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_priest_action_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_priest_target_arrow (components)
		const p1_priest_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_priest_target_arrow);
		p1_priest_target_arrowObjectBounceAnimation.posDuration = 250;
		p1_priest_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_priest_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_Mage (components)
		const p1_MageCharacterViewComponent = new CharacterViewComponent(p1_Mage);
		p1_MageCharacterViewComponent.status_bar = p1_mage_status_bar;
		p1_MageCharacterViewComponent.gravestone = p1_mage_gravestone;
		p1_MageCharacterViewComponent.character_sprite = p1_mage_sprite;
		p1_MageCharacterViewComponent.defending = p1_mage_defend;
		p1_MageCharacterViewComponent.acting_arrow = p1_mage_action_arrow;
		p1_MageCharacterViewComponent.targeting_arrow = p1_mage_target_arrow;

		// p1_mage_sprite (components)
		const p1_mage_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_mage_sprite);
		p1_mage_spriteObjectBounceAnimation.active = false;
		p1_mage_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_mage_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_mage_action_arrow (components)
		const p1_mage_action_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_mage_action_arrow);
		p1_mage_action_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_mage_action_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_mage_target_arrow (components)
		const p1_mage_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_mage_target_arrow);
		p1_mage_target_arrowObjectBounceAnimation.posDuration = 250;
		p1_mage_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_mage_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_warrior (components)
		const p1_warriorCharacterViewComponent = new CharacterViewComponent(p1_warrior);
		p1_warriorCharacterViewComponent.status_bar = p1_warrior_status_bar;
		p1_warriorCharacterViewComponent.gravestone = p1_warrior_gravestone;
		p1_warriorCharacterViewComponent.character_sprite = p1_warrior_sprite;
		p1_warriorCharacterViewComponent.defending = p1_warrior_defend;
		p1_warriorCharacterViewComponent.acting_arrow = p1_warrior_action_arrow;
		p1_warriorCharacterViewComponent.targeting_arrow = p1_warrior_target_arrow;

		// p1_warrior_sprite (components)
		const p1_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_warrior_sprite);
		p1_warrior_spriteObjectBounceAnimation.active = false;
		p1_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p1_warrior_action_arrow (components)
		const p1_warrior_action_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_warrior_action_arrow);
		p1_warrior_action_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_warrior_action_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p1_warrior_target_arrow (components)
		const p1_warrior_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p1_warrior_target_arrow);
		p1_warrior_target_arrowObjectBounceAnimation.posDuration = 250;
		p1_warrior_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p1_warrior_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p2_rogue (components)
		const p2_rogueCharacterViewComponent = new CharacterViewComponent(p2_rogue);
		p2_rogueCharacterViewComponent.status_bar = p2_rogue_status_bar;
		p2_rogueCharacterViewComponent.gravestone = p2_rogue_gravestone;
		p2_rogueCharacterViewComponent.character_sprite = p2_rogue_sprite;
		p2_rogueCharacterViewComponent.defending = p2_rogue_defend;
		p2_rogueCharacterViewComponent.targeting_arrow = p2_rogue_target_arrow;

		// p2_rogue_sprite (components)
		const p2_rogue_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_rogue_sprite);
		p2_rogue_spriteObjectBounceAnimation.active = false;
		p2_rogue_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_rogue_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_rogue_target_arrow (components)
		const p2_rogue_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p2_rogue_target_arrow);
		p2_rogue_target_arrowObjectBounceAnimation.posDuration = 250;
		p2_rogue_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p2_rogue_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p2_priest (components)
		const p2_priestCharacterViewComponent = new CharacterViewComponent(p2_priest);
		p2_priestCharacterViewComponent.status_bar = p2_priest_status_bar;
		p2_priestCharacterViewComponent.gravestone = p2_priest_gravestone;
		p2_priestCharacterViewComponent.character_sprite = p2_priest_sprite;
		p2_priestCharacterViewComponent.defending = p2_priest_defend;
		p2_priestCharacterViewComponent.targeting_arrow = p2_priest_target_arrow;

		// p2_priest_sprite (components)
		const p2_priest_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_priest_sprite);
		p2_priest_spriteObjectBounceAnimation.active = false;
		p2_priest_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_priest_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_priest_target_arrow (components)
		const p2_priest_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p2_priest_target_arrow);
		p2_priest_target_arrowObjectBounceAnimation.posDuration = 250;
		p2_priest_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p2_priest_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p2_mage (components)
		const p2_mageCharacterViewComponent = new CharacterViewComponent(p2_mage);
		p2_mageCharacterViewComponent.status_bar = p2_mage_status_bar;
		p2_mageCharacterViewComponent.gravestone = p2_mage_gravestone;
		p2_mageCharacterViewComponent.character_sprite = p2_mage_sprite;
		p2_mageCharacterViewComponent.defending = p2_mage_defend;
		p2_mageCharacterViewComponent.targeting_arrow = p2_mage_target_arrow;

		// p2_mage_sprite (components)
		const p2_mage_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_mage_sprite);
		p2_mage_spriteObjectBounceAnimation.active = false;
		p2_mage_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_mage_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_mage_target_arrow (components)
		const p2_mage_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p2_mage_target_arrow);
		p2_mage_target_arrowObjectBounceAnimation.posDuration = 250;
		p2_mage_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p2_mage_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// p2_warrior (components)
		const p2_warriorCharacterViewComponent = new CharacterViewComponent(p2_warrior);
		p2_warriorCharacterViewComponent.status_bar = p2_warrior_status_bar;
		p2_warriorCharacterViewComponent.gravestone = p2_warrior_gravestone;
		p2_warriorCharacterViewComponent.character_sprite = p2_warrior_sprite;
		p2_warriorCharacterViewComponent.defending = p2_warrior_defend;
		p2_warriorCharacterViewComponent.targeting_arrow = p2_warrior_target_arrow;

		// p2_warrior_sprite (components)
		const p2_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_warrior_sprite);
		p2_warrior_spriteObjectBounceAnimation.active = false;
		p2_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";

		// p2_warrior_target_arrow (components)
		const p2_warrior_target_arrowObjectBounceAnimation = new ObjectBounceAnimation(p2_warrior_target_arrow);
		p2_warrior_target_arrowObjectBounceAnimation.posDuration = 250;
		p2_warrior_target_arrowObjectBounceAnimation.scaleXDelta = 0.05;
		p2_warrior_target_arrowObjectBounceAnimation.scaleYDelta = 0;

		// action_scrollview (components)
		const action_scrollviewScrollViewComponent = ScrollViewComponent.getComponent(action_scrollview);
		action_scrollviewScrollViewComponent.viewport_x = 15;
		action_scrollviewScrollViewComponent.viewport_y = 830;
		action_scrollviewScrollViewComponent.viewport_width = 590;
		action_scrollviewScrollViewComponent.viewport_height = 240;
		action_scrollviewScrollViewComponent.name = "action_scrollview";

		// next_action_queue_manager (components)
		const next_action_queue_managerNextActionQueueManagerComponent = new NextActionQueueManagerComponent(next_action_queue_manager);
		next_action_queue_managerNextActionQueueManagerComponent.next_action_queue_scroll_view = action_queue_next_scrollview;

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

		// game_manager (components)
		const game_managerGameManagerComponent = new GameManagerComponent(game_manager);
		game_managerGameManagerComponent.character_manager = character_manager;
		game_managerGameManagerComponent.action_menu = action_menu;
		game_managerGameManagerComponent.target_menu = target_menu;

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

		//character stub loading — extensions must match disk case exactly:
		//production serves from a case-sensitive filesystem (Linux/Caddy)
		this.load.json('p1_warrior_json', 'assets/data/character_json_stubs/P1Warrior.JSON');
		this.load.json('p1_mage_json', 'assets/data/character_json_stubs/P1Mage.JSON');
		this.load.json('p1_rogue_json', 'assets/data/character_json_stubs/P1Rogue.JSON');
		this.load.json('p1_priest_json', 'assets/data/character_json_stubs/P1Priest.JSON');

		this.load.json('p2_warrior_json', 'assets/data/character_json_stubs/P2Warrior.JSON');
		this.load.json('p2_mage_json', 'assets/data/character_json_stubs/P2Mage.JSON');
		this.load.json('p2_rogue_json', 'assets/data/character_json_stubs/P2Rogue.JSON');
		this.load.json('p2_priest_json', 'assets/data/character_json_stubs/P2Priest.JSON');

		//action next stub loading
		this.load.json('action_next_1_json', 'assets/data/action_json_stubs/actionNext1.JSON');
		this.load.json('action_next_2_json', 'assets/data/action_json_stubs/actionNext2.JSON');
		this.load.json('action_next_3_json', 'assets/data/action_json_stubs/actionNext3.JSON');
		this.load.json('action_next_4_json', 'assets/data/action_json_stubs/actionNext4.JSON');


		//rexUI is vendored locally (lib/rexuiplugin.min.js, from phaser4-rex-plugins
		//on npm) — the old raw.githubusercontent alpha-branch URL went 404 and a
		//user study can't depend on a remote CDN anyway.
		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'lib/rexuiplugin.min.js',
			sceneKey: 'rexUI'
		});

		//sound effects + music
		AudioManager.preload(this);
	}

	update() {

	}

	create() {
		this.editorCreate();
		this.gameManager = this.children.getByName('game_manager').gameManagerComponent;
		this.characterManager = this.children.getByName('character_manager').characterManagerComponent;
		this.nextActionQueueManager = this.children.getByName('next_action_queue_manager').nextActionQueueManagerComponent;

		//audio + pause menu (ESC)
		this.audioManager = new AudioManager(this);
		this.audioManager.startMusic();
		this.pauseMenu = new PauseMenu(this);
		this.input.keyboard.on('keydown-ESC', () => this.pauseMenu.toggle());
	}

	createActionScrollViewContent(scene, width, height, actions) {

		return scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

	}

	updateActionScrollViewContent(scene, width, height, items) {
		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		for (let i = 0; i < items.length; i += 1) {
			let actionItem = new ActionItem(scene, -width / 2.075, -(25)); //HARDCODED - Half of the height of the ActionItem Prefab
			actionItem.setActionName(items[i]);
			actionItem.setSize(actionItem.width, actionItem.height);
			const actionContainer = scene.add.container(0, 0, [actionItem]).setSize(actionItem.width, actionItem.height);
			content.add(actionContainer);
		}

		return content;
	}

	//TODO: Update to manage dynamic targets from action object
	updateTargetScrollViewContent(scene, width, height, items) {

		const content = scene.rexUI.add.sizer({
			orientation: 1,
			space: { item: 5 }
		});

		//check if action is multi
		let isMulti = false;
		let isAllies = false;
		if (scene.gameManager.selectedAction) {
			let actionName = scene.gameManager.selectedAction;
			if (actionName == 'multiAttack' || actionName == 'multiMagicAttack') {
				isMulti = true;
			}

			if (actionName == 'multiHeal') {
				isMulti = true;
				isAllies = true;
			}
		}

		//if isMulti, we only add one item that targets all characters on a team.
		//if not, we add items for each valid target.
		if (isMulti && items.length > 0) {
			let targetItem = new TargetItem(scene);
			targetItem.x = -targetItem.width / 2;
			targetItem.y = -targetItem.height / 2;

			targetItem.setAsMultiItem(items, isAllies);
			targetItem.setActionModel(scene.gameManager.selectedActionModel);
			targetItem.setSize(targetItem.width, targetItem.height);
			const targetContainer = scene.add.container(0, 0, [targetItem]).setSize(targetItem.width, targetItem.height);
			content.add(targetContainer);
		} else {
			for (let i = 0; i < items.length; i += 1) {
				let targetItem = new TargetItem(scene);
				targetItem.x = -targetItem.width / 2;
				targetItem.y = -targetItem.height / 2;

				targetItem.setTargetModel(items[i]);
				targetItem.setActionModel(scene.gameManager.selectedActionModel);
				targetItem.setSize(targetItem.width, targetItem.height);
				const targetContainer = scene.add.container(0, 0, [targetItem]).setSize(targetItem.width, targetItem.height);
				content.add(targetContainer);
			}
		}

		//if we have an empty items array, we know we just need to return a clear panel.
		if (items.length > 0) {
			//add back arrow
			let backItem = new TargetItem(scene);
			backItem.x = -backItem.width / 2;
			backItem.y = -backItem.height / 2;
			backItem.setAsBackItem();
			backItem.setSize(backItem.width, backItem.height);
			const backContainer = scene.add.container(0, 0, [backItem]).setSize(backItem.width, backItem.height);
			content.add(backContainer);
		}
		return content;
	}

	//Init targetScrollView as empty
	createTargetScrollViewContent(scene, width, height) {

		return scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

	}

	//init history scroll view as empty; rows are added as actions execute
	createQueueHistoryScrollViewContent(scene, width, height) {

		return scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

	}

	//items = executed actions off the wire, newest first (see GameManager.onTick)
	updateQueueHistoryScrollViewContent(scene, width, height, items) {
		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		for (let i = 0; i < items.length; i += 1) {
			let actionHistoryItem = new ActionQueueHistoryItem(scene, -width / 2.025, -(50)); //HARDCODED - Half of the height of the prefab
			actionHistoryItem.setFromExecutedAction(items[i]);
			actionHistoryItem.setSize(actionHistoryItem.width, actionHistoryItem.height);
			const historyContainer = scene.add.container(0, 0, [actionHistoryItem]).setSize(actionHistoryItem.width, actionHistoryItem.height);
			content.add(historyContainer);
		}

		return content;
	}

	//init next scroll view as empty
	createQueueNextScrollViewContent(scene, width, height) {
		return scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});
	}

	updateQueueNextScrollViewContent(scene, width, height, items) {
		const content = scene.rexUI.add.sizer({
			orientation: 1, // vertical
			space: { item: 5 }
		});

		for (let i = 0; i < items.length; i += 1) {
			let actionQueueNextCharacterItem = new ActionQueueNextCharacterItem(scene);
			actionQueueNextCharacterItem.x = -actionQueueNextCharacterItem.width / 2;
			actionQueueNextCharacterItem.y = -actionQueueNextCharacterItem.height / 2;

			actionQueueNextCharacterItem.setCharacterSprite(items[i].actor);
			actionQueueNextCharacterItem.setActionSprite(items[i]);
			actionQueueNextCharacterItem.setSize(actionQueueNextCharacterItem.width, actionQueueNextCharacterItem.height); //HARDCODED
			const actionQueueNextCharacterContainer = scene.add.container(0, 0, [actionQueueNextCharacterItem]).setSize(actionQueueNextCharacterItem.width, actionQueueNextCharacterItem.height);
			content.add(actionQueueNextCharacterContainer);
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
				child: contentCreateFunction(this, width, height),
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

		let panelRef = this.add.container(panel);
		panelRef.setDepth(-1);

		switch (name) {
			case 'action_queue_next': {
				panel.name = 'action_queue_next';
				this.actionQueueNextPanel = panel;
				break;
			}
			case 'action_queue_history': {
				panel.name = 'action_queue_history';
				this.actionQueueHistoryPanel = panel;
				break;
			}
			case 'action_scrollview': {
				panel.name = 'action_scrollview';
				this.actionPanel = panel;
				this.attachPanelDisabler(this, this.actionPanel);
				break;
			}
			case 'target_scrollview': {
				panel.name = 'target_scrollview';
				this.targetPanel = panel;
				this.attachPanelDisabler(this, this.targetPanel);
				break;
			}
			default: {
				throw new Error('Invalid scrollview instantiation name provided! ' + name);
				break;
			}
		}

		panel.setOrigin(x, y);
		panel.setPosition(x, y);

		return panel;
	}


	updateScrollView(name, x, y, width, height, items) {
		let background = this.rexUI.add.roundRectangle(0, 0, 0, 0, 6, 0xeeeeee);

		const track = this.rexUI.add.roundRectangle(0, 0, 4, height, 2, 0x666666);
		const thumb = this.rexUI.add.roundRectangle(0, 0, 8, 24, 6, 0x333333);

		//decide content creation method
		let contentCreateFunction = null;
		switch (name) {
			case 'action_queue_next': {
				contentCreateFunction = this.updateQueueNextScrollViewContent;
				break;
			}
			case 'action_queue_history': {
				contentCreateFunction = this.updateQueueHistoryScrollViewContent;
				break;
			}
			case 'action_scrollview': {
				contentCreateFunction = this.updateActionScrollViewContent;

				break;
			}
			case 'target_scrollview': {
				contentCreateFunction = this.updateTargetScrollViewContent;
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
				child: contentCreateFunction(this, width, height, items),
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

		panel.x = x;
		panel.y = y;

		switch (name) {
			case 'action_queue_next': {
				this.destroyPanelWithOverlay(this.actionQueueNextPanel);
				panel.name = 'action_queue_next';
				this.actionQueueNextPanel = panel;
				//Unsure if I need a panel disabler here - perhaps when queue is empty?
				break;
			}
			case 'action_queue_history': {
				this.destroyPanelWithOverlay(this.actionQueueHistoryPanel);
				panel.name = 'action_queue_history';
				this.actionQueueHistoryPanel = panel;
				break;
			}
			case 'action_scrollview': {
				this.destroyPanelWithOverlay(this.actionPanel);
				panel.name = 'action_scrollview';
				this.actionPanel = panel;
				this.attachPanelDisabler(this, this.actionPanel);
				break;
			}
			case 'target_scrollview': {
				this.destroyPanelWithOverlay(this.targetPanel);
				panel.name = 'target_scrollview';
				this.targetPanel = panel;
				this.attachPanelDisabler(this, this.targetPanel);
				break;
			}
			default: {
				throw new Error('Invalid scrollview instantiation name provided! ' + name);
				break;
			}
		}

		panel.setOrigin(x, y);
		panel.setPosition(x, y);

		return panel;
	}

	/** Destroy a rexUI panel AND its disabler overlay. The scrim/blocker are
	 *  scene-level objects, not panel children — destroying only the panel
	 *  orphans a possibly-visible blocker that swallows all clicks over the
	 *  menu area (a rebuilt-while-disabled panel could never be used again). */
	destroyPanelWithOverlay(panel) {
		if (!panel) {
			return;
		}
		if (panel._disableScrim) {
			panel._disableScrim.destroy();
		}
		if (panel._disableBlocker) {
			panel._disableBlocker.destroy();
		}
		panel.destroy();
	}

	attachPanelDisabler(scene, panel) {
		const overlayDepth = (panel.depth || 0) + 1;

		const scrim = scene.add
			.rectangle(0, 0, 1, 1, 0x000000, 0.35)
			.setOrigin(0, 0);

		const blocker = scene.add
			.zone(0, 0, 1, 1)
			.setOrigin(0, 0)
			.setInteractive();

		scrim.setDepth(overlayDepth);
		blocker.setDepth(overlayDepth);

		const fx = typeof panel.scrollFactorX === "number" ? panel.scrollFactorX : 0;
		const fy = typeof panel.scrollFactorY === "number" ? panel.scrollFactorY : 0;
		scrim.setScrollFactor(fx, fy);
		blocker.setScrollFactor(fx, fy);

		scrim.setVisible(false);
		blocker.setVisible(false);

		const swallow = (pointer, localX, localY, event) => {
			if (event && typeof event.stopPropagation === "function") {
				event.stopPropagation();
			}
		};

		blocker.on("pointerover", swallow);
		blocker.on("pointermove", swallow);
		blocker.on("pointerdown", swallow);
		blocker.on("pointerup", swallow);
		blocker.on("pointerout", swallow);

		const getAllChildren = () =>
			typeof panel.getAllChildren === "function"
				? panel.getAllChildren()
				: panel.list || [];

		const setChildrenInput = (enabled) => {
			const nodes = getAllChildren();

			for (let i = 0; i < nodes.length; i += 1) {
				const n = nodes[i];
				if (n && n.input) {
					n.input.enabled = enabled;
				}
			}

			if (panel.input) {
				panel.input.enabled = enabled;
			}

			if (typeof panel.setTouchScrollEnable === "function") {
				panel.setTouchScrollEnable(enabled);
			}

			if (typeof panel.setMouseWheelScrollerEnable === "function") {
				panel.setMouseWheelScrollerEnable(enabled);
			}
		};

		// FIXED: use panel's own position, origin, and viewport size
		function syncOverlayToPanel() {
			// These should represent the viewport size after panel.layout()
			let w = panel.width;
			let h = panel.height;

			// Fallback: if layout hasn't run for some reason
			if (!w || !h) {
				if (typeof panel.getInnerBounds === "function") {
					const inner = panel.getInnerBounds();
					w = inner.width;
					h = inner.height;
				}
			}

			if (!w || !h) {
				return; // nothing meaningful we can do
			}

			const ox = typeof panel.originX === "number" ? panel.originX : 0;
			const oy = typeof panel.originY === "number" ? panel.originY : 0;

			// Top-left corner of the viewport in world coordinates
			const x = panel.x - panel.width / 2;
			const y = panel.y - panel.height / 2;

			scrim.setPosition(x, y);
			blocker.setPosition(x, y);
			scrim.setSize(w, h);
			blocker.setSize(w, h);

		}

		panel.disablePanel = () => {
			syncOverlayToPanel();
			setChildrenInput(false);
			scrim.setVisible(true);
			blocker.setVisible(true);
		};

		panel.enablePanel = () => {
			syncOverlayToPanel();
			setChildrenInput(true);
			scrim.setVisible(false);
			blocker.setVisible(false);
		};

		panel._disableScrim = scrim;
		panel._disableBlocker = blocker;
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here