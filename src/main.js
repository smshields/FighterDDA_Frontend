import Battle from "./scenes/Battle.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Battle", Battle);
});

class Boot extends Phaser.Scene {

	preload() {
		
	}

	create() {

		this.scene.start("Preload");
	}
}