/**
 * Unit tests for the display formatters and the audio event mapping tables —
 * the pure logic behind the ACTION HISTORY panel and the SFX layer.
 */

import test from "node:test";
import assert from "node:assert";

import { hpChangeText, isHealOutcome } from "../src/helpers/formatters.js";
import { ACTION_SOUNDS, EVENT_SOUNDS } from "../src/audio/AudioManager.js";

test("hpChangeText formats damage and heals with sign", () => {
    assert.strictEqual(hpChangeText("attack", { hpChange: -14.719 }), "-14.72");
    assert.strictEqual(hpChangeText("heal", { hpChange: 19.25 }), "+19.25");
    assert.strictEqual(hpChangeText("multiAttack", { hpChange: -1 }), "-1");
    assert.strictEqual(hpChangeText("multiHeal", { hpChange: 0 }), "+0");
});

test("hpChangeText renders nothing for defend rows and bad values", () => {
    // The sim's defend outcomes carry hpChange = currentHP - null (garbage).
    assert.strictEqual(hpChangeText("defend", { hpChange: 62 }), "");
    assert.strictEqual(hpChangeText("attack", { hpChange: undefined }), "");
    assert.strictEqual(hpChangeText("attack", { hpChange: "??" }), "");
});

test("isHealOutcome styles heals green and damage red", () => {
    assert.strictEqual(isHealOutcome("heal", { hpChange: 5 }), true);
    assert.strictEqual(isHealOutcome("multiHeal", { hpChange: 1 }), true);
    assert.strictEqual(isHealOutcome("attack", { hpChange: -5 }), false);
    // Director-heal artifacts aside: any positive delta reads as a heal.
    assert.strictEqual(isHealOutcome("attack", { hpChange: 3 }), true);
});

test("every wire action name has a perform sound", () => {
    const wireActions = ["attack", "multiAttack", "magicAttack", "multiMagicAttack", "heal", "multiHeal", "defend"];
    for (const name of wireActions) {
        assert.ok(ACTION_SOUNDS[name], `missing sound for ${name}`);
    }
});

test("sound tables reference real asset files", async () => {
    const fs = await import("node:fs");
    const keys = new Set([...Object.values(ACTION_SOUNDS), ...Object.values(EVENT_SOUNDS)]);
    for (const key of keys) {
        assert.ok(
            fs.existsSync(new URL(`../assets/sound/${key}.wav`, import.meta.url)),
            `assets/sound/${key}.wav missing`
        );
    }
});
