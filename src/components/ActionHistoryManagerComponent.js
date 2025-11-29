
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ActionHistoryManagerComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ActionHistoryManagerComponent"] = this;

		/* START-USER-CTR-CODE */

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.action_history_scroll_view = null;

		// === Internal Properties ===

		this.gameObject.actionHistoryManagerComponent = this;
		this.actionHistoryQueue = [];

		/* END-USER-CTR-CODE */
	}

	/** @returns {ActionHistoryManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__ActionHistoryManagerComponent"];
	}


	/* START-USER-CODE */

	updateActionHistoryQueue() {
		if (this.scene.gameManager.socketInitialized) {
			//TODO: Implement socket logic
		} else {
			//use stubs in assets for testing
			let actionHistoryQueue = [];

			//create empty action models
			let prevAction1 = new ActionModel();
			let prevAction2 = new ActionModel();
			let prevAction3 = new ActionModel();
			let prevAction4 = new ActionModel();

			//get shortened references from json cache
			let prevAction1Json = this.scene.cache.json.get('action_prev_1_json');
			let prevAction2Json = this.scene.cache.json.get('action_prev_2_json');
			let prevAction3Json = this.scene.cache.json.get('action_prev_3_json');
			let prevAction4Json = this.scene.cache.json.get('action_prev_4_json');

			//load json into models
			prevAction1.updateFromJson(prevAction1Json);
			prevAction2.updateFromJson(prevAction2Json);
			prevAction3.updateFromJson(prevAction3Json);
			prevAction4.updateFromJson(prevAction4Json);

			//add to queue
			actionHistoryQueue.push(prevAction1);
			actionHistoryQueue.push(prevAction2);
			actionHistoryQueue.push(prevAction3);
			actionHistoryQueue.push(prevAction4);

			//sort queue by action executed timestep - latest first
			actionHistoryQueue.sort((a, b) => {
				if (a.timeExecuted > b.timeExecuted) {
					return -1;
				}

				if (a.timeExecuted < b.timeExecuted) {
					return 1;
				}

				return 0;
			});

			//update internal action history
			this.actionHistoryQueue = actionHistoryQueue;
		}
	}


	updateScrollPanel(items) {
		this.action_history_scroll_view.scrollViewComponent.updateScrollPanel(items);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
