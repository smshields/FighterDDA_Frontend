
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
		this.gameObject.nextActionQueueManagerComponent = this;

		//Queue
		this.nextActionQueue = [];

		/* END-USER-CTR-CODE */
	}

	/** @returns {NextActionQueueManagerComponent} */
	static getComponent(gameObject) {
		return gameObject["__NextActionQueueManagerComponent"];
	}


	/* START-USER-CODE */

	initializeNextActionQueue(){
		if(this.scene.gameManager.socketInitialized){
			//TODO: Implement socket logic
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

			//sort queue by action executed timestep
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
