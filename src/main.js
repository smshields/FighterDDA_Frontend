import Battle from "./scenes/Battle.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	console.log("Initializing Phaser.")

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
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
	}

	create() {
		console.log("Main create ca")

		this.scene.start("Preload");
	}
}