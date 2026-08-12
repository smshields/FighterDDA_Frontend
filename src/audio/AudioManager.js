/**
 * AudioManager — loads and plays the game's sound effects and music.
 *
 * The wav names in assets/sound/ map 1:1 onto game events; the table below is
 * the single source of truth (exported for tests). All play calls are guarded
 * so headless/test environments without audio never throw. Music respects the
 * browser autoplay policy via Phaser's 'unlocked' event.
 */

/** Executed-action wire name → perform SFX key. */
export const ACTION_SOUNDS = Object.freeze({
    attack: "SinglePhysicalPerform",
    multiAttack: "MultiplePhysicalPerform",
    magicAttack: "SingleMagicPerform",
    multiMagicAttack: "MultipleMagicPerform",
    heal: "SingleHealPerform",
    multiHeal: "MultipleHealPerform",
    defend: "Defend",
});

export const EVENT_SOUNDS = Object.freeze({
    ready: "Ready",
    death: "Death",
    gameOver: "GameOver",
    buttonHover: "ButtonHover",
    buttonSelect: "ButtonSelect",
});

const ALL_SFX = Object.freeze([...new Set([...Object.values(ACTION_SOUNDS), ...Object.values(EVENT_SOUNDS)])]);
const MUSIC_KEY = "SamFinalMix";

export default class AudioManager {

    /** Register all audio loads. Call from a scene's preload(). */
    static preload(scene) {
        for (const key of ALL_SFX) {
            scene.load.audio(key, "assets/sound/" + key + ".wav");
        }
        scene.load.audio(MUSIC_KEY, "assets/sound/" + MUSIC_KEY + ".wav");
    }

    constructor(scene) {
        this.scene = scene;
        this.muted = false;
        this.music = null;
        this.sfxVolume = 0.8;
        this.musicVolume = 0.35;
    }

    /** Play one SFX by key (from ACTION_SOUNDS/EVENT_SOUNDS values or event
     *  names in EVENT_SOUNDS). Silently no-ops if unavailable. */
    play(keyOrEvent) {
        const key = EVENT_SOUNDS[keyOrEvent] || keyOrEvent;
        try {
            if (this.muted || !this.scene.cache.audio.exists(key)) {
                return;
            }
            this.scene.sound.play(key, { volume: this.sfxVolume });
        } catch (err) {
            //audio is never worth crashing the game over
        }
    }

    /** Play the sounds for one executed action (perform + any deaths). */
    playForExecutedAction(executedAction) {
        const performKey = ACTION_SOUNDS[executedAction.name];
        if (performKey) {
            this.play(performKey);
        }
        if ((executedAction.targetOutcomes || []).some((outcome) => outcome.defeated)) {
            this.play("death");
        }
    }

    /** Start the looping music, deferring until the browser unlocks audio. */
    startMusic() {
        try {
            if (this.music || !this.scene.cache.audio.exists(MUSIC_KEY)) {
                return;
            }
            this.music = this.scene.sound.add(MUSIC_KEY, { loop: true, volume: this.muted ? 0 : this.musicVolume });
            if (this.scene.sound.locked) {
                this.scene.sound.once("unlocked", () => this.music.play());
            } else {
                this.music.play();
            }
        } catch (err) {
            this.music = null;
        }
    }

    /** Master volume 0..1 (scales both music and SFX). */
    setVolume(volume) {
        const clamped = Math.max(0, Math.min(1, volume));
        this.scene.sound.volume = clamped;
        return clamped;
    }

    getVolume() {
        return this.scene.sound.volume;
    }

    toggleMute() {
        this.muted = !this.muted;
        this.scene.sound.mute = this.muted;
        return this.muted;
    }
}
