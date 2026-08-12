/**
 * Coverage for the EXISTING model code: CharacterModel and ActionModel
 * deserialization and the action→target-scope mapping the battle UI relies on.
 */

import test from "node:test";
import assert from "node:assert";

import CharacterModel from "../src/models/CharacterModel.js";
import ActionModel from "../src/models/ActionModel.js";

function wireCharacter(overrides = {}) {
    return {
        playerNum: 1,
        characterName: "Warrior",
        currentActionMeter: 40,
        maxActionMeter: 100,
        isDead: false,
        isDefending: true,
        isReadyForPlayerAction: false,
        isSelectingAction: false,
        isTargeting: false,
        isNPC: false,
        initialStats: { maxHp: 80, currentHp: 80, attack: 60, magicAttack: 20, defense: 60, magicDefense: 20, speed: 50, luck: 30 },
        currentStats: { maxHp: 80, currentHp: 25, attack: 60, magicAttack: 20, defense: 60, magicDefense: 20, speed: 50, luck: 30 },
        availableActions: { attack: true, multiAttack: true, defend: true, magicAttack: false, multiMagicAttack: false, heal: false, multiHeal: false },
        ...overrides,
    };
}

test("CharacterModel.updateFromJson merges nested stats and flags", () => {
    const model = new CharacterModel();
    model.updateFromJson(wireCharacter());

    assert.strictEqual(model.characterName, "Warrior");
    assert.strictEqual(model.currentStats.currentHp, 25);
    assert.strictEqual(model.currentStats.maxHp, 80);
    assert.strictEqual(model.isDefending, true);
    assert.strictEqual(model.availableActions.multiAttack, true);
    assert.strictEqual(model.availableActions.heal, false);
});

test("CharacterModel.updateFromJson is a merge, not a replace", () => {
    const model = new CharacterModel();
    model.updateFromJson(wireCharacter());
    model.updateFromJson({ currentStats: { currentHp: 10 }, isDead: true });

    assert.strictEqual(model.currentStats.currentHp, 10);
    assert.strictEqual(model.currentStats.maxHp, 80, "unmentioned nested fields survive");
    assert.strictEqual(model.isDead, true);
    assert.strictEqual(model.characterName, "Warrior");
});

test("CharacterModel.updateFromJson rejects non-objects and skips unknown keys", () => {
    const model = new CharacterModel();
    assert.throws(() => model.updateFromJson(null), TypeError);
    assert.throws(() => model.updateFromJson("json"), TypeError);
    model.updateFromJson({ unknownField: 1, playerNum: 2 }); // warns, doesn't throw
    assert.strictEqual(model.playerNum, 2);
    assert.strictEqual("unknownField" in model, false);
});

test("ActionModel maps every action to its target scope", () => {
    const action = new ActionModel();
    const expected = {
        attack: "SINGLE_ENEMY",
        magicAttack: "SINGLE_ENEMY",
        multiAttack: "ALL_ENEMIES",
        multiMagicAttack: "ALL_ENEMIES",
        heal: "SINGLE_ALLY",
        multiHeal: "ALL_ALLIES",
        defend: "SELF",
        nonsense: "NONE",
    };
    for (const [name, scope] of Object.entries(expected)) {
        assert.strictEqual(action.getValidTargetsFromAction(name), scope, name);
    }
});

test("ActionModel resolves target scopes to living characters on the right team", () => {
    const action = new ActionModel();
    const actor = Object.assign(new CharacterModel(), { playerNum: 1 });
    const roster = [
        Object.assign(new CharacterModel(), { playerNum: 1, characterName: "Warrior" }),
        Object.assign(new CharacterModel(), { playerNum: 1, characterName: "Priest", isDead: true }),
        Object.assign(new CharacterModel(), { playerNum: 2, characterName: "Mage" }),
        Object.assign(new CharacterModel(), { playerNum: 2, characterName: "Rogue", isDead: true }),
    ];

    const enemies = action.getCharacterModelsFromTargets(actor, "SINGLE_ENEMY", roster);
    assert.deepStrictEqual(enemies.map((c) => c.characterName), ["Mage"], "dead enemies excluded");

    const allies = action.getCharacterModelsFromTargets(actor, "ALL_ALLIES", roster);
    assert.deepStrictEqual(allies.map((c) => c.characterName), ["Warrior"], "dead allies excluded");

    const self = action.getCharacterModelsFromTargets(actor, "SELF", roster);
    assert.deepStrictEqual(self, [actor]);
});

test("ActionModel.updateFromJson accepts the server's queued-action shape", () => {
    const action = new ActionModel();
    action.updateFromJson({
        name: "multiAttack",
        actor: { playerNum: 1, characterName: "Warrior" },
        targets: [{ playerNum: 2, characterName: "Mage" }],
        targetString: "ALL_ENEMIES",
        preExecuteStats: {},
        postExecuteStats: {},
        timeQueued: 10,
        timeExecuted: 13,
    });
    assert.strictEqual(action.name, "multiAttack");
    assert.strictEqual(action.actor.characterName, "Warrior");
    assert.strictEqual(action.targets.length, 1);
    assert.strictEqual(action.timeExecuted, 13);
});
