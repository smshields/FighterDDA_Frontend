
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ObjectBounceAnimation extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ObjectBounceAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ObjectBounceAnimation} */
	static getComponent(gameObject) {
		return gameObject["__ObjectBounceAnimation"];
	}

	/** @type {"position"|"scale"|"both"} */
	mode = "position";
	/** @type {boolean} */
	active = true;
	/** @type {number} */
	posOffset = 5;
	/** @type {number} */
	posDuration = 500;
	/** @type {number} */
	scaleXDelta = 0;
	/** @type {number} */
	scaleYDelta = 0.05;
	/** @type {number} */
	scaleDuration = 500;
	/** @type {"Linear"|"Sine.easeIn"|"Sine.easeOut"|"Sine.easeInOut"|"Quad.easeIn"|"Quad.easeOut"|"Quad.easeInOut"|"Cubic.easeIn"|"Cubic.easeOut"|"Cubic.easeInOut"|"Quart.easeIn"|"Quart.easeOut"|"Quart.easeInOut"|"Quint.easeIn"|"Quint.easeOut"|"Quint.easeInOut"|"Expo.easeIn"|"Expo.easeOut"|"Expo.easeInOut"|"Circ.easeIn"|"Circ.easeOut"|"Circ.easeInOut"|"Back.easeIn"|"Back.easeOut"|"Back.easeInOut"|"Bounce.easeIn"|"Bounce.easeOut"|"Bounce.easeInOut"|"Elastic.easeIn"|"Elastic.easeOut"|"Elastic.easeInOut"} */
	posEase = "Sine.easeIn";
	/** @type {"Linear"|"Sine.easeIn"|"Sine.easeOut"|"Sine.easeInOut"|"Quad.easeIn"|"Quad.easeOut"|"Quad.easeInOut"|"Cubic.easeIn"|"Cubic.easeOut"|"Cubic.easeInOut"|"Quart.easeIn"|"Quart.easeOut"|"Quart.easeInOut"|"Quint.easeIn"|"Quint.easeOut"|"Quint.easeInOut"|"Expo.easeIn"|"Expo.easeOut"|"Expo.easeInOut"|"Circ.easeIn"|"Circ.easeOut"|"Circ.easeInOut"|"Back.easeIn"|"Back.easeOut"|"Back.easeInOut"|"Bounce.easeIn"|"Bounce.easeOut"|"Bounce.easeInOut"|"Elastic.easeIn"|"Elastic.easeOut"|"Elastic.easeInOut"} */
	scaleEase = "Sine.easeIn";
	/** @type {number} */
	posDelay = 0;
	/** @type {number} */
	scaleDelay = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
