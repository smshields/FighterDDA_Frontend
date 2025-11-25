/** Model for actions. Used to store/report on any action. */

export default class ActionModel {

    constructor(initial = {}) {

        //name
        this.name = "";

        //actor - who is performing action
        this.actor = {};

        //targets - who is valid for targeting for action
        this.targets = {};

        //target string - denotes how target view will be rendered
        this.targetString = "";

        //targetString - frontend lookup for populating target box
        this.targetString = {};

        // === BACKEND POPULATED ===

        //preExecuteStats - stats of characters prior to action
        this.preExecuteStats = {};

        //postExecuteStats - stats of characters post action
        this.postExecuteStats = {};

        //time queued for execution
        this.timeQueued = 0;

        //time executed
        this.timeExecuted = 0;

        //enum for targets
        this.TargetStrings = Object.freeze({
            ALL_ENEMIES: "ALL_ENEMIES",
            ALL_ALLIES: "ALL_ALLIES",
            SINGLE_ALLY: "SINGLE_ALLY",
            SINGLE_ENEMY: "SINGLE_ENEMY",
            SELF: "SELF",
            NONE: "NONE"
        });
    }

    //mapping
    getValidTargetsFromAction(actionName) {
        let targets = "None";

        switch (actionName) {
            case 'attack': {
                targets = this.TargetStrings.SINGLE_ENEMY;
                break;
            }
            case 'multiAttack': {
                targets = this.TargetStrings.ALL_ENEMIES;
                break;
            }
            case 'magicAttack': {
                targets = this.TargetStrings.SINGLE_ENEMY;
                break;
            }
            case 'multiMagicAttack': {
                targets = this.TargetStrings.ALL_ENEMIES;
                break;
            }
            case 'heal': {
                targets = this.TargetStrings.SINGLE_ALLY;
                break;
            }
            case 'multiHeal': {
                targets = this.TargetStrings.ALL_ALLIES;
                break;
            }
            case 'defend': {
                targets = this.TargetStrings.SELF;
                break;
            }
            default: {
                targets = this.TargetStrings.NONE;
                break;
            }


        }
        return targets;
    }

    getCharacterModelsFromTargets(actor, targetString, characters) {
        let targetCharacterModels = [];
        let actorPlayerNum = actor.playerNum;

        switch (targetString) {
            case this.TargetStrings.SINGLE_ENEMY || this.TargetStrings.ALL_ENEMIES: {
                for (let character of characters) {
                    if (character.playerNum != actorPlayerNum && !character.isDead) {
                        targetCharacterModels.push(character);
                    }
                }
                break;
            }
            case (this.TargetStrings.SINGLE_ALLY || this.TargetStrings.ALL_ALLIES): {
                for (let character of characters) {
                    if (character.playerNum == actorPlayerNum && !character.isDead) {
                        targetCharacterModels.push(character);
                    }
                }
                break;
            }
            case this.TargetStrings.SELF: {
                targetCharacterModels.push(actor);
                break;
            }
            default: {
                console.log("ACTION MODEL: INVALID TARGET STRING PROVIDED: " + targetString);
                return targetCharacterModels;
            }
        }

        return targetCharacterModels;
    }
}