
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionItem extends Phaser.GameObjects.Container {

	constructor(scene, x, y, actionName) {
		super(scene, x ?? 0, y ?? 0);

		this.name = "action";

		// action_name_background
		const action_name_background = scene.add.rectangle(0, 0, 570, 50);
		action_name_background.setOrigin(0, 0);
		action_name_background.isFilled = true;
		this.add(action_name_background);

		// action_name
		const action_name = scene.add.bitmapText(295, 25, "vcr_osd_mono_bold", "Action");
		action_name.name = "action_name";
		action_name.setOrigin(0.5, 0.5);
		action_name.text = "Action";
		action_name.fontSize = -40;
		action_name.align = 1;
		this.add(action_name);

		// action_arrow
		const action_arrow = scene.add.image(15, 5, "selection_arrow");
		action_arrow.scaleX = 0.5;
		action_arrow.scaleY = 0.5;
		action_arrow.setOrigin(0, 0);
		this.add(action_arrow);

		// action_hover_arrow
		const action_hover_arrow = scene.add.image(60, 5, "selection_arrow_pressed");
		action_hover_arrow.name = "action_hover_arrow";
		action_hover_arrow.scaleX = 0.5;
		action_hover_arrow.scaleY = 0.5;
		action_hover_arrow.setOrigin(0, 0);
		this.add(action_hover_arrow);

		// selection_arrow_selected
		const selection_arrow_selected = scene.add.image(545, 25, "selection_arrow_selected");
		selection_arrow_selected.scaleX = 0.5;
		selection_arrow_selected.scaleY = 0.5;
		this.add(selection_arrow_selected);

		/* START-USER-CTR-CODE */
		this.actionName = "";

		let bounds = this.getBounds();
		let hitZone = this.scene.add.zone(0, 0, bounds.width, bounds.height)
			.setOrigin(0)
			.setInteractive({ useHandCursor: true });
		this.add(hitZone);

		this.action_hover_arrow = action_hover_arrow;
		this.action_arrow = action_arrow;
		this.action_selected_arrow = selection_arrow_selected;
		this.action_background = action_name_background;
		this.action_name = action_name;

		//TODO: This is weird, because of the scope change I've got to lookup the parent within the method.
		hitZone.on('pointerover', this.onHover);
		hitZone.on('pointerout', this.onLeaveHover);
		hitZone.on('pointerdown', this.onPointerDown);
		hitZone.on('pointerup', this.onPointerUp);

		//initialize with no mouse input
		this.action_arrow.setActive(true);
		this.action_arrow.setVisible(true);
		this.action_selected_arrow.setActive(false);
		this.action_selected_arrow.setVisible(false);
		this.action_hover_arrow.setActive(false);
		this.action_hover_arrow.setVisible(false);
		this.action_background.fillColor = 0xffffff;

		//use to disable unwanted events
		this.isDisabled = false;
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	width = 570;
	/** @type {number} */
	height = 50;

	/* START-USER-CODE */

	setActionName(actionName) {
		this.actionName = actionName;
		if (this.actionName) {
			this.action_name.text = this.lookupReadableAction(this.actionName);
		} else {
			this.action_name.text = "UNDEFINED";
		}
	}

	onPointerDown() {
		this.parentContainer.action_arrow.setActive(false);
		this.parentContainer.action_arrow.setVisible(false);
		this.parentContainer.action_selected_arrow.setActive(true);
		this.parentContainer.action_selected_arrow.setVisible(true);
		this.parentContainer.action_hover_arrow.setActive(false);
		this.parentContainer.action_hover_arrow.setVisible(false);
		this.parentContainer.action_background.fillColor = 0x555555;
	}

	onPointerUp() {
		this.parentContainer.action_arrow.setActive(false);
		this.parentContainer.action_arrow.setVisible(false);
		this.parentContainer.action_selected_arrow.setActive(true);
		this.parentContainer.action_selected_arrow.setVisible(true);
		this.parentContainer.action_hover_arrow.setActive(false);
		this.parentContainer.action_hover_arrow.setVisible(false);
		this.parentContainer.action_background.fillColor = 0x777777;
		//Nasty navigation through parents to get action view

		let gameManager = this.scene.gameManager;

		this.isDisabled = true;

		gameManager.actionSelected(this.parentContainer.actionName);

	}

	onHover() {
		if (!this.isDisabled) {
			this.parentContainer.action_arrow.setActive(false);
			this.parentContainer.action_arrow.setVisible(false);
			this.parentContainer.action_selected_arrow.setActive(false);
			this.parentContainer.action_selected_arrow.setVisible(false);
			this.parentContainer.action_hover_arrow.setActive(true);
			this.parentContainer.action_hover_arrow.setVisible(true);
			this.parentContainer.action_background.fillColor = 0x777777;
		}
	}

	onLeaveHover() {
		if (!this.isDisabled) {
			this.parentContainer.action_arrow.setActive(true);
			this.parentContainer.action_arrow.setVisible(true);
			this.parentContainer.action_selected_arrow.setActive(false);
			this.parentContainer.action_selected_arrow.setVisible(false);
			this.parentContainer.action_hover_arrow.setActive(false);
			this.parentContainer.action_hover_arrow.setVisible(false);
			this.parentContainer.action_background.fillColor = 0xffffff;

		}
	}



	lookupReadableAction(actionName) {
		let readableName = "";
		switch (actionName) {
			case "attack":
				readableName = "Attack";
				break;
			case "defend":
				readableName = "Defend";
				break;
			case "magicAttack":
				readableName = "Magic Attack";
				break;
			case "heal":
				readableName = "Heal";
				break;
			case "multiHeal":
				readableName = "Multi-Heal";
				break;
			case "multiAttack":
				readableName = "Multi-Attack";
				break;
			case "multiMagicAttack":
				readableName = "Multi-Magic Attack";
				break;
			default:
				readableName = "INVALID ACTION LOADED";
				break;
		}
		return readableName;
	}


	addHoverListener() {

	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
