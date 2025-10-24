
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GeometryMaskSetupComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__GeometryMaskSetupComponent"] = this;

		/* START-USER-CTR-CODE */
		this.scene = gameObject.scene;
		gameObject.geometryMaskSetupComponent = this;

		/* END-USER-CTR-CODE */
	}

	/** @returns {GeometryMaskSetupComponent} */
	static getComponent(gameObject) {
		return gameObject["__GeometryMaskSetupComponent"];
	}

	/** @type {boolean} */
	hide_mask_graphics_after_setup = true;

	/* START-USER-CODE */

	start() {
		var children = this.scene.children;

		var maskGraphics = children.getByName(this.mask_name);
		var targetContainer = children.getByName(this.target_container_name);

		// If the editor had only a Rectangle, create a new Graphics mask at runtime
		if (!maskGraphics || !(maskGraphics instanceof Phaser.GameObjects.Graphics)) {
			var rect = this.gameObject.getByName(this.mask_name);
			if (rect) {
				// Use the rectangle’s position and size
				var maskGraphics = this.scene.add.graphics();
				maskGraphics.fillStyle(0xffffff);
				maskGraphics.fillRect(0, 0, rect.width, rect.height);
				maskGraphics.x = rect.x - rect.originX * rect.width;
				maskGraphics.y = rect.y - rect.originY * rect.height;
				maskGraphics.setScrollFactor(0);
				maskGraphics.setName(this.mask_name + "_generated");
			}
		}

		// Create and apply the mask
		if (maskGraphics && targetContainer) {
			var geometryMask = maskGraphics.createGeometryMask();
			targetContainer.setMask(geometryMask);
			maskGraphics.visible = false;
		}

		if (!maskGraphics) {
			throw new Error("GeometryMaskSetupComponent: Missing Graphics named '" + this.mask_name + "'.");
		}
		if (!targetContainer) {
			throw new Error("GeometryMaskSetupComponent: Missing Container named '" + this.target_container_name + "'.");
		}

		// GeometryMask is created from a filled Graphics shape.
		var geometryMask = maskGraphics.createGeometryMask();
		targetContainer.setMask(geometryMask); // masks clip rendering only. :contentReference[oaicite:8]{index=8}

		if (this.hide_mask_graphics_after_setup === true) {
			maskGraphics.visible = false;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
