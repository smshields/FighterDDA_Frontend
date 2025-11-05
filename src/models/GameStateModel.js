export default class GameState {

    constructor(){
        this.gameOver = false;
        this.networkEnabled = false;

        this.characters = []; 
        this.actionHistoryList = [];
        this.actionNextList = [];
    }
}