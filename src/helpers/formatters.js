/** Pure display formatters (unit-tested; no Phaser imports). */

/**
 * Damage/heal text for one target outcome in the ACTION HISTORY panel.
 * Heals render as +N (green-cased by the caller), damage as -N; defend rows
 * carry no meaningful hpChange (the sim logs currentHP-null) so show nothing.
 * @returns {string} display text, '' when nothing should render.
 */
export function hpChangeText(actionName, outcome) {
    if (actionName === "defend") {
        return "";
    }
    const delta = Number(outcome.hpChange);
    if (!Number.isFinite(delta)) {
        return "";
    }
    const rounded = Math.round(Math.abs(delta) * 100) / 100;
    return (delta >= 0 ? "+" : "-") + rounded;
}

/** True when this outcome's number should render in the heal (green) style. */
export function isHealOutcome(actionName, outcome) {
    return actionName === "heal" || actionName === "multiHeal" ||
        (Number(outcome.hpChange) || 0) > 0;
}
