
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent.js";
/* START-USER-IMPORTS */
import ActionModel from "../models/ActionModel.js";
/* END-USER-IMPORTS */

export default class NextActionQueueManagerComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__NextActionQueueManagerComponent"] = this;

		/* START-USER-CTR-CODE */

		// === Inspector Properties ===

		/** @type {Phaser.GameObjects.GameObject} */
		this.next_action_queue_scroll_view = null;

		// === Internal Properties ===

		this.gameObject.nextActionQueueManagerComponent = this;
		this.nextActionQueue = [];

		/* END-USER-CTR-CODE */
	}

	/** @returns {NextActionQueueManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__NextActionQueueManagerComponent"];
	}


	/* START-USER-CODE */

	//Ingest the server snapshot's pending action queue (ActionSchema shapes)
	setQueueFromWire(wireActions = []){
		const queue = [];
		for (const wireAction of wireActions) {
			const actionModel = new ActionModel();
			actionModel.updateFromJson(wireAction);
			queue.push(actionModel);
		}

		//sort queue by execution timestep - earliest first
		queue.sort((a, b) => a.timeExecuted - b.timeExecuted);

		this.nextActionQueue = queue;
		this.updateScrollPanel(queue);
	}

	updateNextActionQueue(){
		if(this.scene.gameManager.socketInitialized){
			//Socket mode: the queue is fed by server snapshots via setQueueFromWire.
		} else {
			//use stubs in assets for testing
			let nextActionQueue = [];

			//create empty action models
			let nextAction1 = new ActionModel();
			let nextAction2 = new ActionModel();
			let nextAction3 = new ActionModel();
			let nextAction4 = new ActionModel();

			//get shortened references from json cache
			let nextAction1Json = this.scene.cache.json.get('action_next_1_json');
			let nextAction2Json = this.scene.cache.json.get('action_next_2_json');
			let nextAction3Json = this.scene.cache.json.get('action_next_3_json');
			let nextAction4Json = this.scene.cache.json.get('action_next_4_json');

			//load json into models
			nextAction1.updateFromJson(nextAction1Json);
			nextAction2.updateFromJson(nextAction2Json);
			nextAction3.updateFromJson(nextAction3Json);
			nextAction4.updateFromJson(nextAction4Json);

			//add to queue
			nextActionQueue.push(nextAction1);
			nextActionQueue.push(nextAction2);
			nextActionQueue.push(nextAction3);
			nextActionQueue.push(nextAction4);

			//sort queue by action executed timestep - earliest first
			nextActionQueue.sort((a, b) => {
				if(a.timeExecuted < b.timeExecuted){
					return -1;
				}

				if(a.timeExecuted > b.timeExecuted){
					return 1
				}

				return 0;
			});

			//update internal nextActionQueue reference
			this.nextActionQueue = nextActionQueue;
		}
	}

	updateScrollPanel(items){
		this.next_action_queue_scroll_view.scrollViewComponent.updateScrollPanel(items);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
