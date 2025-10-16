/** Model for each character. Used to track the state and available actions for each character. */
export default class CharacterModel{
    
    
    
    constructor(initial = {}){
        
        //Initial Stats
        this.initialStats = {
            totalHP: 0,
            attack: 0,
            magicAttack: 0,
            defense: 0,
            magicDefense: 0,
            speed: 0,
            luck: 0
        }

        //Current Stats
        this.currentStats = {
            totalHP: 0,
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
        this.isNPC = false;

        this.currentHP = 0;
        this.actionMeter = 0;  
    }
}