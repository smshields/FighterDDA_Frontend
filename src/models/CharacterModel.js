/** Model for each character. Used to track the state and available actions for each character. */
export default class CharacterModel{
    
    constructor(initial = {}){
        
        //Initial Stats
        this.initialStats = {
            maxHp: 0,
            currentHp: 0,
            attack: 0,
            magicAttack: 0,
            defense: 0,
            magicDefense: 0,
            speed: 0,
            luck: 0
        }

        //Current Stats
        this.currentStats = {
            maxHp: 0,
            currentHp: 0,
            attack: 0,
            magicAttack: 0,
            defense: 0,
            magicDefense: 0,
            speed: 0,
            luck: 0
        }

        //State
        this.playerNum = 0;
        this.characterName = "";
        
        this.isDead = false;
        this.isDefending = false;
        this.isReadyForPlayerAction = false;
        this.isSelectingAction = false;
        this.isTargeting = false;

        this.isNPC = false;

        this.currentActionMeter = 0;
        this.maxActionMeter = 0;

        //Actions
        this.availableActions = {
            attack: false,
            multiAttack: false,
            defend: false,
            magicAttack: false,
            multiMagicAttack: false,
            heal: false,
            multiHeal: false
        }
    }

    updateFromJson(characterSchemaJSON){
        if (typeof characterSchemaJSON !== "object" || characterSchemaJSON == null){
            throw new TypeError("ERROR: CharacterModel updateFromJSON expects an object.");
        }

        for (const key of Object.keys(characterSchemaJSON)){
            if(key in this){
                if( 
                    typeof characterSchemaJSON[key] === "object" &&
                    characterSchemaJSON[key] !== null &&
                    typeof this[key] === "object" &&
                    !Array.isArray(characterSchemaJSON[key])
                ){
                    Object.assign(this[key], characterSchemaJSON[key]);
                } else {
                    this[key] = characterSchemaJSON[key];
                }
            } else {
                console.warn(`ignoring unknown property '${key}'`);
            }
        }

    }
}