/**
 * PauseMenu — overlay menu with volume controls, mute, the room code, and
 * credits. Toggled with ESC (wired in Battle.create). This is a menu overlay,
 * not a simulation pause: the server-authoritative game keeps ticking (it
 * already suspends whenever it is waiting on this player's decision).
 *
 * Built from plain Phaser objects at a depth above every battle panel; the
 * full-screen backdrop is interactive so clicks never leak through.
 */
export default class PauseMenu {

    static DEPTH = 5000;

    constructor(scene) {
        this.scene = scene;
        this.container = scene.add.container(0, 0);
        this.container.setDepth(PauseMenu.DEPTH);
        this.container.setVisible(false);
        this.isOpen = false;

        //backdrop (swallows all input while open)
        const backdrop = scene.add.rectangle(0, 0, 1920, 1080, 0x000000, 0.65)
            .setOrigin(0, 0)
            .setInteractive();
        this.container.add(backdrop);

        //panel
        const panel = scene.add.rectangle(960, 540, 640, 560, 0x242424)
            .setOrigin(0.5, 0.5)
            .setStrokeStyle(6, 0xffffff);
        this.container.add(panel);

        const title = scene.add.bitmapText(960, 320, "vcr_osd_mono_bold", "PAUSED");
        title.setOrigin(0.5, 0.5);
        title.fontSize = -72;
        this.container.add(title);

        this.roomCodeText = scene.add.bitmapText(960, 410, "vcr_osd_mono", "ROOM: LOCAL");
        this.roomCodeText.setOrigin(0.5, 0.5);
        this.roomCodeText.fontSize = -36;
        this.container.add(this.roomCodeText);

        //volume row: [-] VOLUME 80% [+]
        this.volumeText = scene.add.bitmapText(960, 490, "vcr_osd_mono", "VOLUME 100%");
        this.volumeText.setOrigin(0.5, 0.5);
        this.volumeText.fontSize = -40;
        this.container.add(this.volumeText);
        this.volumeDown = this.makeButton(760, 490, "-", () => this.adjustVolume(-0.1));
        this.volumeUp = this.makeButton(1160, 490, "+", () => this.adjustVolume(0.1));

        //mute toggle
        this.muteText = this.makeButton(960, 570, "MUTE: OFF", () => this.toggleMute());

        //resume
        this.resumeText = this.makeButton(960, 650, "RESUME", () => this.hide());

        //credits
        const credits = [
            "FighterDDA - Samuel Shields",
            "UC Santa Cruz",
            "Press ESC to resume",
        ];
        credits.forEach((line, index) => {
            const text = scene.add.bitmapText(960, 720 + index * 32, "vcr_osd_mono", line);
            text.setOrigin(0.5, 0.5);
            text.fontSize = -24;
            this.container.add(text);
        });
    }

    makeButton(x, y, label, onClick) {
        const text = this.scene.add.bitmapText(x, y, "vcr_osd_mono_bold", label);
        text.setOrigin(0.5, 0.5);
        text.fontSize = -40;
        text.setInteractive({ useHandCursor: true });
        text.on("pointerover", () => {
            text.setTint(0xaab8ff);
            this.audio()?.play("buttonHover");
        });
        text.on("pointerout", () => text.clearTint());
        text.on("pointerdown", () => {
            this.audio()?.play("buttonSelect");
            onClick();
        });
        this.container.add(text);
        return text;
    }

    audio() {
        return this.scene.audioManager || null;
    }

    adjustVolume(delta) {
        const audio = this.audio();
        if (!audio) {
            return;
        }
        audio.setVolume(audio.getVolume() + delta);
        this.refresh();
    }

    toggleMute() {
        this.audio()?.toggleMute();
        this.refresh();
    }

    refresh() {
        const audio = this.audio();
        if (audio) {
            this.volumeText.setText("VOLUME " + Math.round(audio.getVolume() * 100) + "%");
            this.muteText.setText("MUTE: " + (audio.muted ? "ON" : "OFF"));
        }
        const netController = this.scene.gameManager ? this.scene.gameManager.netController : null;
        const code = netController && netController.roomCode ? netController.roomCode.toUpperCase() : "LOCAL";
        this.roomCodeText.setText("ROOM: " + code);
    }

    show() {
        this.refresh();
        this.isOpen = true;
        this.container.setVisible(true);
    }

    hide() {
        this.isOpen = false;
        this.container.setVisible(false);
    }

    toggle() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }
}
