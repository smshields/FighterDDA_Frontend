// You can write more code here

/* START OF COMPILED CODE */

import StatusBar from "../../assets/prefabs/StatusBar.js";
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

		// background
		const background = this.add.layer();
		background.name = "background";

		// backgroundtile5
		const backgroundtile5 = this.add.image(120, 120, "backgroundtile5");
		backgroundtile5.scaleX = 0.25;
		backgroundtile5.scaleY = 0.25;
		backgroundtile5.flipX = true;
		background.add(backgroundtile5);

		// backgroundtile4
		const backgroundtile4 = this.add.image(370, 120, "backgroundtile4");
		backgroundtile4.scaleX = 0.25;
		backgroundtile4.scaleY = 0.25;
		background.add(backgroundtile4);

		// backgroundtile2
		const backgroundtile2 = this.add.image(880, 120, "backgroundtile2");
		backgroundtile2.scaleX = 0.25;
		backgroundtile2.scaleY = 0.25;
		background.add(backgroundtile2);

		// backgroundtile3
		const backgroundtile3 = this.add.image(625, 120, "backgroundtile3");
		backgroundtile3.scaleX = 0.25;
		backgroundtile3.scaleY = 0.25;
		background.add(backgroundtile3);

		// backgroundtile
		const backgroundtile = this.add.image(1135, 120, "backgroundtile");
		backgroundtile.scaleX = 0.25;
		backgroundtile.scaleY = 0.25;
		backgroundtile.flipX = true;
		background.add(backgroundtile);

		// backgroundtile_1
		const backgroundtile_1 = this.add.image(120, 375, "backgroundtile5");
		backgroundtile_1.scaleX = 0.25;
		backgroundtile_1.scaleY = 0.25;
		backgroundtile_1.flipX = true;
		background.add(backgroundtile_1);

		// backgroundtile_2
		const backgroundtile_2 = this.add.image(370, 375, "backgroundtile4");
		backgroundtile_2.scaleX = 0.25;
		backgroundtile_2.scaleY = 0.25;
		backgroundtile_2.flipX = true;
		background.add(backgroundtile_2);

		// backgroundtile_3
		const backgroundtile_3 = this.add.image(1390, 120, "backgroundtile2");
		backgroundtile_3.scaleX = 0.25;
		backgroundtile_3.scaleY = 0.25;
		backgroundtile_3.flipX = true;
		background.add(backgroundtile_3);

		// backgroundtile_4
		const backgroundtile_4 = this.add.image(625, 375, "backgroundtile3");
		backgroundtile_4.scaleX = 0.25;
		backgroundtile_4.scaleY = 0.25;
		backgroundtile_4.flipX = true;
		background.add(backgroundtile_4);

		// backgroundtile_5
		const backgroundtile_5 = this.add.image(1135, 375, "backgroundtile");
		backgroundtile_5.scaleX = 0.25;
		backgroundtile_5.scaleY = 0.25;
		backgroundtile_5.flipX = true;
		background.add(backgroundtile_5);

		// backgroundtile_6
		const backgroundtile_6 = this.add.image(120, 630, "backgroundtile5");
		backgroundtile_6.scaleX = 0.25;
		backgroundtile_6.scaleY = 0.25;
		backgroundtile_6.flipX = true;
		background.add(backgroundtile_6);

		// backgroundtile_8
		const backgroundtile_8 = this.add.image(1390, 375, "backgroundtile2");
		backgroundtile_8.scaleX = 0.25;
		backgroundtile_8.scaleY = 0.25;
		backgroundtile_8.flipX = true;
		background.add(backgroundtile_8);

		// backgroundtile_9
		const backgroundtile_9 = this.add.image(625, 630, "backgroundtile3");
		backgroundtile_9.scaleX = 0.25;
		backgroundtile_9.scaleY = 0.25;
		backgroundtile_9.flipX = true;
		background.add(backgroundtile_9);

		// backgroundtile_10
		const backgroundtile_10 = this.add.image(1135, 630, "backgroundtile");
		backgroundtile_10.scaleX = 0.25;
		backgroundtile_10.scaleY = 0.25;
		backgroundtile_10.flipX = true;
		background.add(backgroundtile_10);

		// backgroundtile_11
		const backgroundtile_11 = this.add.image(120, 885, "backgroundtile5");
		backgroundtile_11.scaleX = 0.25;
		backgroundtile_11.scaleY = 0.25;
		backgroundtile_11.flipX = true;
		background.add(backgroundtile_11);

		// backgroundtile_12
		const backgroundtile_12 = this.add.image(370, 885, "backgroundtile4");
		backgroundtile_12.scaleX = 0.25;
		backgroundtile_12.scaleY = 0.25;
		background.add(backgroundtile_12);

		// backgroundtile_13
		const backgroundtile_13 = this.add.image(1390, 630, "backgroundtile2");
		backgroundtile_13.scaleX = 0.25;
		backgroundtile_13.scaleY = 0.25;
		background.add(backgroundtile_13);

		// backgroundtile_14
		const backgroundtile_14 = this.add.image(625, 885, "backgroundtile3");
		backgroundtile_14.scaleX = 0.25;
		backgroundtile_14.scaleY = 0.25;
		backgroundtile_14.flipX = true;
		background.add(backgroundtile_14);

		// backgroundtile_15
		const backgroundtile_15 = this.add.image(1135, 885, "backgroundtile");
		backgroundtile_15.scaleX = 0.25;
		backgroundtile_15.scaleY = 0.25;
		backgroundtile_15.flipX = true;
		background.add(backgroundtile_15);

		// backgroundtile_16
		const backgroundtile_16 = this.add.image(120, 1140, "backgroundtile5");
		backgroundtile_16.scaleX = 0.25;
		backgroundtile_16.scaleY = 0.25;
		background.add(backgroundtile_16);

		// backgroundtile_17
		const backgroundtile_17 = this.add.image(370, 1140, "backgroundtile4");
		backgroundtile_17.scaleX = 0.25;
		backgroundtile_17.scaleY = 0.25;
		background.add(backgroundtile_17);

		// backgroundtile_18
		const backgroundtile_18 = this.add.image(880, 1140, "backgroundtile2");
		backgroundtile_18.scaleX = 0.25;
		backgroundtile_18.scaleY = 0.25;
		background.add(backgroundtile_18);

		// backgroundtile_19
		const backgroundtile_19 = this.add.image(625, 1140, "backgroundtile3");
		backgroundtile_19.scaleX = 0.25;
		backgroundtile_19.scaleY = 0.25;
		background.add(backgroundtile_19);

		// backgroundtile_20
		const backgroundtile_20 = this.add.image(1135, 1140, "backgroundtile");
		backgroundtile_20.scaleX = 0.25;
		backgroundtile_20.scaleY = 0.25;
		background.add(backgroundtile_20);

		// backgroundtile_21
		const backgroundtile_21 = this.add.image(880, 375, "backgroundtile3");
		backgroundtile_21.scaleX = 0.25;
		backgroundtile_21.scaleY = 0.25;
		backgroundtile_21.flipX = true;
		background.add(backgroundtile_21);

		// backgroundtile_22
		const backgroundtile_22 = this.add.image(1645, 620, "backgroundtile3");
		backgroundtile_22.scaleX = 0.25;
		backgroundtile_22.scaleY = 0.25;
		backgroundtile_22.flipX = true;
		background.add(backgroundtile_22);

		// backgroundtile_23
		const backgroundtile_23 = this.add.image(575, 1135, "backgroundtile3");
		backgroundtile_23.scaleX = 0.25;
		backgroundtile_23.scaleY = 0.25;
		background.add(backgroundtile_23);

		// backgroundtile_24
		const backgroundtile_24 = this.add.image(880, 630, "backgroundtile");
		backgroundtile_24.scaleX = 0.25;
		backgroundtile_24.scaleY = 0.25;
		background.add(backgroundtile_24);

		// backgroundtile_25
		const backgroundtile_25 = this.add.image(880, 885, "backgroundtile2");
		backgroundtile_25.scaleX = 0.25;
		backgroundtile_25.scaleY = 0.25;
		background.add(backgroundtile_25);

		// backgroundtile_26
		const backgroundtile_26 = this.add.image(1390, 875, "backgroundtile3");
		backgroundtile_26.scaleX = 0.25;
		backgroundtile_26.scaleY = 0.25;
		backgroundtile_26.flipX = true;
		background.add(backgroundtile_26);

		// backgroundtile_27
		const backgroundtile_27 = this.add.image(1645, 875, "backgroundtile4");
		backgroundtile_27.scaleX = 0.25;
		backgroundtile_27.scaleY = 0.25;
		backgroundtile_27.flipX = true;
		background.add(backgroundtile_27);

		// backgroundtile_7
		const backgroundtile_7 = this.add.image(1645, 125, "backgroundtile4");
		backgroundtile_7.scaleX = 0.25;
		backgroundtile_7.scaleY = 0.25;
		backgroundtile_7.flipX = true;
		background.add(backgroundtile_7);

		// backgroundtile_28
		const backgroundtile_28 = this.add.image(370, 630, "backgroundtile3");
		backgroundtile_28.scaleX = 0.25;
		backgroundtile_28.scaleY = 0.25;
		backgroundtile_28.flipX = true;
		background.add(backgroundtile_28);

		// backgroundtile_29
		const backgroundtile_29 = this.add.image(1645, 375, "backgroundtile");
		backgroundtile_29.scaleX = 0.25;
		backgroundtile_29.scaleY = 0.25;
		background.add(backgroundtile_29);

		// backgroundtile_30
		const backgroundtile_30 = this.add.image(1900, 125, "backgroundtile");
		backgroundtile_30.scaleX = 0.25;
		backgroundtile_30.scaleY = 0.25;
		backgroundtile_30.flipX = true;
		background.add(backgroundtile_30);

		// backgroundtile_31
		const backgroundtile_31 = this.add.image(1900, 380, "backgroundtile");
		backgroundtile_31.scaleX = 0.25;
		backgroundtile_31.scaleY = 0.25;
		backgroundtile_31.flipX = true;
		background.add(backgroundtile_31);

		// backgroundtile_32
		const backgroundtile_32 = this.add.image(1900, 635, "backgroundtile");
		backgroundtile_32.scaleX = 0.25;
		backgroundtile_32.scaleY = 0.25;
		backgroundtile_32.flipX = true;
		background.add(backgroundtile_32);

		// backgroundtile_33
		const backgroundtile_33 = this.add.image(1900, 890, "backgroundtile");
		backgroundtile_33.scaleX = 0.25;
		backgroundtile_33.scaleY = 0.25;
		backgroundtile_33.flipX = true;
		background.add(backgroundtile_33);

		// backgroundtile_34
		const backgroundtile_34 = this.add.image(1900, 1145, "backgroundtile");
		backgroundtile_34.scaleX = 0.25;
		backgroundtile_34.scaleY = 0.25;
		background.add(backgroundtile_34);

		// backgroundtile_35
		const backgroundtile_35 = this.add.image(1390, 1130, "backgroundtile3");
		backgroundtile_35.scaleX = 0.25;
		backgroundtile_35.scaleY = 0.25;
		backgroundtile_35.flipX = true;
		background.add(backgroundtile_35);

		// backgroundtile_36
		const backgroundtile_36 = this.add.image(1645, 1130, "backgroundtile4");
		backgroundtile_36.scaleX = 0.25;
		backgroundtile_36.scaleY = 0.25;
		backgroundtile_36.flipX = true;
		background.add(backgroundtile_36);

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
		const action_queue_history_title = this.add.bitmapText(85, 5, "vcr_osd_mono_bold", "ACTION QUEUE HISTORY");
		action_queue_history_title.name = "action_queue_history_title";
		action_queue_history_title.text = "ACTION QUEUE HISTORY";
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
		const action_menu_title = this.add.bitmapText(10, 20, "vcr_osd_mono_bold", "SELECT CHARACTER ACTION\n");
		action_menu_title.name = "action_menu_title";
		action_menu_title.text = "SELECT CHARACTER ACTION\n";
		action_menu_title.fontSize = -40;
		action_menu_title.align = 1;
		action_menu.add(action_menu_title);

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
		target_title_background.lineWidth = 5;
		target_menu.add(target_title_background);

		// target_title
		const target_title = this.add.bitmapText(60, 10, "vcr_osd_mono_bold", "SELECT TARGET");
		target_title.name = "target_title";
		target_title.text = "SELECT TARGET";
		target_title.fontSize = -40;
		target_title.align = 1;
		target_menu.add(target_title);

		// rogue_target
		const rogue_target = this.add.container(40, 245);
		rogue_target.name = "rogue_target";
		target_menu.add(rogue_target);

		// rogue_target_label
		const rogue_target_label = this.add.bitmapText(30, 0, "vcr_osd_mono_bold", "ENEMY ROGUE");
		rogue_target_label.name = "rogue_target_label";
		rogue_target_label.text = "ENEMY ROGUE";
		rogue_target_label.fontSize = -40;
		rogue_target_label.align = 1;
		rogue_target.add(rogue_target_label);

		// rogue_target_arrow
		const rogue_target_arrow = this.add.image(0, 20, "selection_arrow");
		rogue_target_arrow.name = "rogue_target_arrow";
		rogue_target_arrow.scaleX = 0.684678102714157;
		rogue_target_arrow.scaleY = 0.684678102714157;
		rogue_target.add(rogue_target_arrow);

		// priest_target
		const priest_target = this.add.container(40, 185);
		priest_target.name = "priest_target";
		target_menu.add(priest_target);

		// priest_target_label
		const priest_target_label = this.add.bitmapText(30, 0, "vcr_osd_mono_bold", "ENEMY PRIEST");
		priest_target_label.name = "priest_target_label";
		priest_target_label.text = "ENEMY PRIEST";
		priest_target_label.fontSize = -40;
		priest_target_label.align = 1;
		priest_target.add(priest_target_label);

		// priest_target_arrow
		const priest_target_arrow = this.add.image(0, 20, "selection_arrow");
		priest_target_arrow.name = "priest_target_arrow";
		priest_target_arrow.scaleX = 0.684678102714157;
		priest_target_arrow.scaleY = 0.684678102714157;
		priest_target.add(priest_target_arrow);

		// mage_target
		const mage_target = this.add.container(40, 125);
		mage_target.name = "mage_target";
		target_menu.add(mage_target);

		// mage_target_label
		const mage_target_label = this.add.bitmapText(30, 0, "vcr_osd_mono_bold", "ENEMY MAGE");
		mage_target_label.text = "ENEMY MAGE";
		mage_target_label.fontSize = -40;
		mage_target_label.align = 1;
		mage_target.add(mage_target_label);

		// mage_target_arrow
		const mage_target_arrow = this.add.image(0, 20, "selection_arrow");
		mage_target_arrow.name = "mage_target_arrow";
		mage_target_arrow.scaleX = 0.684678102714157;
		mage_target_arrow.scaleY = 0.684678102714157;
		mage_target.add(mage_target_arrow);

		// warrior_target
		const warrior_target = this.add.container(40, 65);
		warrior_target.name = "warrior_target";
		target_menu.add(warrior_target);

		// warrior_target_arrow
		const warrior_target_arrow = this.add.image(0, 20, "selection_arrow");
		warrior_target_arrow.name = "warrior_target_arrow";
		warrior_target_arrow.scaleX = 0.684678102714157;
		warrior_target_arrow.scaleY = 0.684678102714157;
		warrior_target.add(warrior_target_arrow);

		// warrior_target_label
		const warrior_target_label = this.add.bitmapText(30, 0, "vcr_osd_mono_bold", "ENEMY WARRIOR");
		warrior_target_label.name = "warrior_target_label";
		warrior_target_label.text = "ENEMY WARRIOR";
		warrior_target_label.fontSize = -40;
		warrior_target_label.align = 1;
		warrior_target.add(warrior_target_label);

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

		// glowFx_2
		p1_rogue_sprite.postFX.addGlow(7505407, 4, 0, false, 0.1, 10);

		// p1_rogue_status_bar
		const p1_rogue_status_bar = new StatusBar(this, 0, 0);
		p1_rogue_status_bar.name = "p1_rogue_status_bar";
		p1_Rogue.add(p1_rogue_status_bar);

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

		// glowFx
		p1_priest_sprite.postFX.addGlow(7505407, 4, 0, false, 0.1, 10);

		// p1_priest_status_bar
		const p1_priest_status_bar = new StatusBar(this, 0, 0);
		p1_priest_status_bar.name = "p1_priest_status_bar";
		p1_Priest.add(p1_priest_status_bar);

		// p1_Mage
		const p1_Mage = this.add.container(-220, 65);
		p1_Mage.name = "p1_Mage";
		p1_team.add(p1_Mage);

		// p1_mage_sprite
		const p1_mage_sprite = this.add.image(515, 55, "mage");
		p1_mage_sprite.name = "p1_mage_sprite";
		p1_mage_sprite.flipX = true;
		p1_Mage.add(p1_mage_sprite);

		// glowFx_1
		p1_mage_sprite.postFX.addGlow(7505407, 4, 0, false, 0.1, 10);

		// p1_mage_status_bar
		const p1_mage_status_bar = new StatusBar(this, 0, 0);
		p1_mage_status_bar.name = "p1_mage_status_bar";
		p1_Mage.add(p1_mage_status_bar);

		// p1_warrior
		const p1_warrior = this.add.container(-220, 405);
		p1_warrior.name = "p1_warrior";
		p1_team.add(p1_warrior);

		// p1_warrior_sprite
		const p1_warrior_sprite = this.add.image(520, 55, "warrior");
		p1_warrior_sprite.name = "p1_warrior_sprite";
		p1_warrior_sprite.flipX = true;
		p1_warrior.add(p1_warrior_sprite);

		// glowFx_3
		p1_warrior_sprite.postFX.addGlow(7505407, 4, 0, false, 0.1, 10);

		// p1_warrior_status_bar
		const p1_warrior_status_bar = new StatusBar(this, 0, 0);
		p1_warrior_status_bar.name = "p1_warrior_status_bar";
		p1_warrior.add(p1_warrior_status_bar);

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

		// glowFx_6
		p2_rogue_sprite.postFX.addGlow(16742263, 4, 0, false, 0.1, 10);

		// p2_rogue_status_bar
		const p2_rogue_status_bar = new StatusBar(this, 185, 0);
		p2_rogue_status_bar.name = "p2_rogue_status_bar";
		p2_rogue.add(p2_rogue_status_bar);

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

		// glowFx_7
		p2_priest_sprite.postFX.addGlow(16742263, 4, 0, false, 0.1, 10);

		// p2_priest_status_bar
		const p2_priest_status_bar = new StatusBar(this, 185, 0);
		p2_priest_status_bar.name = "p2_priest_status_bar";
		p2_priest.add(p2_priest_status_bar);

		// p2_mage
		const p2_mage = this.add.container(0, 170);
		p2_mage.name = "p2_mage";
		p2_team.add(p2_mage);

		// p2_mage_sprite
		const p2_mage_sprite = this.add.image(0, 50, "mage");
		p2_mage_sprite.name = "p2_mage_sprite";
		p2_mage.add(p2_mage_sprite);

		// glowFx_8
		p2_mage_sprite.postFX.addGlow(16742263, 4, 0, false, 0.1, 10);

		// p2_mage_status_bar
		const p2_mage_status_bar = new StatusBar(this, 185, 0);
		p2_mage_status_bar.name = "p2_mage_status_bar";
		p2_mage.add(p2_mage_status_bar);

		// p2_warrior
		const p2_warrior = this.add.container(5, 510);
		p2_warrior.name = "p2_warrior";
		p2_team.add(p2_warrior);

		// p2_warrior_sprite
		const p2_warrior_sprite = this.add.image(0, 50, "warrior");
		p2_warrior_sprite.name = "p2_warrior_sprite";
		p2_warrior.add(p2_warrior_sprite);

		// glowFx_9
		p2_warrior_sprite.postFX.addGlow(16742263, 4, 0, false, 0.1, 10);

		// p2_warrior_status_bar
		const p2_warrior_status_bar = new StatusBar(this, 180, 0);
		p2_warrior_status_bar.name = "p2_warrior_status_bar";
		p2_warrior.add(p2_warrior_status_bar);

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

		// p1_warrior_sprite (components)
		const p1_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p1_warrior_sprite);
		p1_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p1_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";
		p1_warrior_spriteObjectBounceAnimation.posDelay = 250;

		// p2_warrior_sprite (components)
		const p2_warrior_spriteObjectBounceAnimation = new ObjectBounceAnimation(p2_warrior_sprite);
		p2_warrior_spriteObjectBounceAnimation.posEase = "Expo.easeIn";
		p2_warrior_spriteObjectBounceAnimation.scaleEase = "Expo.easeIn";
		p2_warrior_spriteObjectBounceAnimation.posDelay = 250;

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

    create() {

        this.editorCreate();


    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here