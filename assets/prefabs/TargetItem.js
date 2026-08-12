
// You can write more code here
//NOTE: You MUST call set methods for item contents after instantiation.

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "target_item";

		// target_name_background
		const target_name_background = scene.add.rectangle(0, 0, 425, 50);
		target_name_background.name = "target_name_background";
		target_name_background.setOrigin(0, 0);
		target_name_background.isFilled = true;
		this.add(target_name_background);

		// target_name
		const target_name = scene.add.bitmapText(252, 25, "vcr_osd_mono_bold", "Target\n");
		target_name.name = "target_name";
		target_name.setOrigin(0.5, 0.5);
		target_name.text = "Target\n";
		target_name.fontSize = -40;
		target_name.align = 1;
		this.add(target_name);

		// target_arrow
		const target_arrow = scene.add.image(15, 5, "selection_arrow");
		target_arrow.name = "target_arrow";
		target_arrow.scaleX = 0.5;
		target_arrow.scaleY = 0.5;
		target_arrow.setOrigin(0, 0);
		this.add(target_arrow);

		// target_hover_arrow
		const target_hover_arrow = scene.add.image(60, 5, "selection_arrow_pressed");
		target_hover_arrow.name = "target_hover_arrow";
		target_hover_arrow.scaleX = 0.5;
		target_hover_arrow.scaleY = 0.5;
		target_hover_arrow.setOrigin(0, 0);
		this.add(target_hover_arrow);

		// back_arrow
		const back_arrow = scene.add.image(13, 5, "selection_arrow");
		back_arrow.name = "back_arrow";
		back_arrow.scaleX = 0.5;
		back_arrow.scaleY = 0.5;
		back_arrow.setOrigin(0, 0);
		back_arrow.flipX = true;
		this.add(back_arrow);

		// back_hover_arrow
		const back_hover_arrow = scene.add.image(13, 5, "selection_arrow_pressed");
		back_hover_arrow.name = "back_hover_arrow";
		back_hover_arrow.scaleX = 0.5;
		back_hover_arrow.scaleY = 0.5;
		back_hover_arrow.setOrigin(0, 0);
		back_hover_arrow.flipX = true;
		this.add(back_hover_arrow);

		/* START-USER-CTR-CODE */
		this.targetModel = {};

		let bounds = this.getBounds();
		let hitZone = this.scene.add.zone(0, 0, bounds.width, bounds.height)
			.setOrigin(0)
			.setInteractive({ useHandCursor: true });
		this.add(hitZone);

		this.target_hover_arrow = target_hover_arrow;
		this.target_arrow = target_arrow;
		this.target_name = target_name;
		this.target_name_background = target_name_background;
		this.back_arrow = back_arrow;
		this.back_hover_arrow = back_hover_arrow;

		hitZone.on('pointerover', this.onHover);
		hitZone.on('pointerout', this.onLeaveHover);
		hitZone.on('pointerdown', this.onPointerDown);
		hitZone.on('pointerup', this.onPointerUp);

		//initialize with no mouse input
		this.target_arrow.setActive(true);
		this.target_arrow.setVisible(true);
		this.target_hover_arrow.setActive(false);
		this.target_hover_arrow.setVisible(false);
		this.target_name_background.fillColor = 0xffffff;

		//default: no back arrow
		this.back_arrow.setActive(false);
		this.back_arrow.setVisible(false);
		this.back_hover_arrow.setActive(false);
		this.back_hover_arrow.setVisible(false);

		this.isBackArrow = false;

		//use to disable unwanted events
		this.isDisabled = false;

		this.characterManager = this.scene.characterManager;
		this.gameManager = this.scene.gameManager
		this.characterUI = {};

		this.isMulti = false;
		this.multiTargetModels = [];
		this.multiTargetModelUIs = [];
		this.actionModel = {};

		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	height = 50;
	/** @type {number} */
	width = 425;

	/* START-USER-CODE */
	//Bad naming, also does some setup. Perhaps "init" later on.
	setTargetModel(targetModel) {
		this.targetModel = targetModel;
		this.setTargetNameText(this.targetModel);
		this.characterUI = this.scene.characterManager.lookupCharacterUIFromModel(this.targetModel).characterViewComponent;
	}

	//Contains information about the action happening, used to set up multi/single configurations
	setActionModel(actionModel) {
		this.actionModel = actionModel;
	}

	setTargetNameText() {
		if (this.isMulti) {
			if (this.isAlly) {
				this.targetName = "ALL ALLIES";
			} else {
				this.targetName = "ALL ENEMIES";
			}
			this.target_name.text = this.targetName;
		} else {
			this.targetName = "P" + this.targetModel.playerNum + " " + this.targetModel.characterName;
			if (this.targetModel.playerNum != 0 && this.targetModel.characterName != "") {
				this.target_name.text = this.targetName;
			} else {
				this.target_name.text = "UNDEFINED";
			}
		}
	}

	//sets multi target array, looks up UIs for all of them
	setMultiTargetModels(targetModels) {
		this.multiTargetModels = targetModels;
		for (let character of this.multiTargetModels) {
			this.multiTargetModelUIs.push(this.scene.characterManager.lookupCharacterUIFromModel(character).characterViewComponent);
		}
	}

	setAsMultiItem(multiTargetModels, isAlly) {
		this.isMulti = true;
		this.isAlly = isAlly;
		this.setMultiTargetModels(multiTargetModels);
		this.setTargetNameText();
	}

	//instantiates the item as a back arrow, returning to action selection
	setAsBackItem() {
		this.isBackArrow = true;

		this.target_name.text = "BACK";

		//enable back arrow
		this.back_arrow.setActive(true);
		this.back_arrow.setVisible(true);

		//disable normal arrow
		this.target_arrow.setActive(false);
		this.target_arrow.setVisible(false);
		this.target_hover_arrow.setActive(false);
		this.target_hover_arrow.setVisible(false);

	}

	onPointerDown() {
		let targetItem = this.parentContainer
		console.log("REACHED POINTER DOWN");

		if (targetItem.isBackArrow) {
			targetItem.gameManager.returnToActionSelect();

		}
	}

	onPointerUp() {
		//`this` is the hit zone; the container carries the state.
		let targetItem = this.parentContainer;

		if (targetItem.isDisabled || targetItem.isBackArrow) {
			return;
		}

		//clear hover highlights before handing the choice to the game manager
		targetItem.onLeaveHover.call(this);

		targetItem.scene.audioManager?.play("buttonSelect");
		let targetModel = targetItem.isMulti ? null : targetItem.targetModel;
		targetItem.gameManager.targetSelected(targetModel, targetItem.isMulti);
	}

	onHover() {

		//handle references to refer to the container UI
		let targetItem = this.parentContainer;

		if (!targetItem.isDisabled) {
			targetItem.scene.audioManager?.play("buttonHover");
		}

		if (!targetItem.isDisabled && !targetItem.isBackArrow) {
			targetItem.target_arrow.setActive(false);
			targetItem.target_arrow.setVisible(false);
			targetItem.target_hover_arrow.setActive(true);
			targetItem.target_hover_arrow.setVisible(true);
			targetItem.target_name_background.fillColor = 0x777777;

			if (targetItem.isMulti) {
				//update arrows for all valid targets
				for (let characterUI of targetItem.multiTargetModelUIs) {
					characterUI.enableTargetingArrow();
				}
			} else {
				//update arrow for single valid target
				targetItem.characterUI.enableTargetingArrow();
			}

		}

		if (targetItem.isBackArrow) {
			//disable back arrow
			targetItem.back_arrow.setActive(false);
			targetItem.back_arrow.setVisible(false);

			//enable back hover arrow
			targetItem.back_hover_arrow.setActive(true);
			targetItem.back_hover_arrow.setVisible(true);

			//disable normal arrow (safety, probably can remove)
			targetItem.target_arrow.setActive(false);
			targetItem.target_arrow.setVisible(false);
			targetItem.target_hover_arrow.setActive(false);
			targetItem.target_hover_arrow.setVisible(false);
		}
	}

	onLeaveHover() {
		let targetItem = this.parentContainer;

		if (!targetItem.isDisabled && !targetItem.isBackArrow) {
			targetItem.target_arrow.setActive(true);
			targetItem.target_arrow.setVisible(true);
			targetItem.target_hover_arrow.setActive(false);
			targetItem.target_hover_arrow.setVisible(false);
			targetItem.target_name_background.fillColor = 0xffffff;

			if (targetItem.isMulti) {
				//update arrows for all valid targets
				for (let characterUI of targetItem.multiTargetModelUIs) {
					characterUI.disableTargetingArrow();
				}
			} else {
				//update arrow for single valid target
				targetItem.characterUI.disableTargetingArrow();
			}
		}

		if (targetItem.isBackArrow) {
			//enable back arrow
			targetItem.back_arrow.setActive(true);
			targetItem.back_arrow.setVisible(true);

			//disable back hover arrow
			targetItem.back_hover_arrow.setActive(false);
			targetItem.back_hover_arrow.setVisible(false);

			//disable normal arrow (safety, probably can remove)
			targetItem.target_arrow.setActive(false);
			targetItem.target_arrow.setVisible(false);
			targetItem.target_hover_arrow.setActive(false);
			targetItem.target_hover_arrow.setVisible(false);
		}
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
