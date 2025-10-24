
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
    gameObject.objectBounceAnimation = this;

    /** @type {Phaser.Scene} */
    this.scene = gameObject.scene;



    // ==== Internals ====
    this.tweens = [];

    // Teardown when object is destroyed
    gameObject.once(Phaser.GameObjects.Events.DESTROY, this.destroy, this);

    // Scene lifecycle
    this.scene.events.on(Phaser.Scenes.Events.SLEEP, this.pause, this);
    this.scene.events.on(Phaser.Scenes.Events.WAKE, this.resume, this);
    this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, this.destroy, this);
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

  awake() {
    if (this.active) this.start();
  }

  start() {
    if (!this.gameObject || this.tweens.length) return;


    // Position bounce
    if (this.mode === "position" || this.mode === "both") {
      const t = this.scene.tweens.add({
        targets: this.gameObject,
        y: `+=${this.posOffset}`,
        duration: this.posDuration,
        yoyo: true,
        delay: this.posDelay,
        repeat: -1,
        ease: this.posEase
      });
      this.tweens.push(t);
    }

    // Scale bounce
    if (this.mode === "scale" || this.mode === "both") {
      // Build tween props only for axes with a delta
      /** @type {Record<string, any>} */
      const props = {};
      if (this.scaleXDelta !== 0) props.scaleX = `+=${this.scaleXDelta}`;
      if (this.scaleYDelta !== 0) props.scaleY = `+=${this.scaleYDelta}`;

      if (Object.keys(props).length > 0) {
        const t = this.scene.tweens.add({
          targets: this.gameObject,
          ...props,
          duration: this.scaleDuration,
          yoyo: true,
          delay: this.scaleDelay,
          repeat: -1,
          ease: this.scaleEase
        });
        this.tweens.push(t);
      }
    }
  }

  pause() {
    this.tweens.forEach(t => t?.pause());
  }

  resume() {
    if (!this.active) return;
    this.tweens.forEach(t => t?.resume());
  }

  /**
   * Enable/disable animation at runtime.
   * @param {boolean} enabled
   */
  setEnabled(enabled) {
    this.active = enabled;
    if (enabled) this.start();
    else this.stop();
  }

  stop() {
    this.tweens.forEach(t => {
      if (!t) return;
      t.stop();
      t.remove();
    });
    this.tweens = [];
  }

  destroy() {
    this.stop();
    this.scene?.events?.off(Phaser.Scenes.Events.SLEEP, this.pause, this);
    this.scene?.events?.off(Phaser.Scenes.Events.WAKE, this.resume, this);
    this.scene?.events?.off(Phaser.Scenes.Events.SHUTDOWN, this.destroy, this);
    this.gameObject?.off?.(Phaser.GameObjects.Events.DESTROY, this.destroy, this);
    this.gameObject = null;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
