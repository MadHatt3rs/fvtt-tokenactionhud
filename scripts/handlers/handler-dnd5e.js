import {RollHandlerBase5e as Core} from "../rolls/base-dnd5e-rolls.js"
import {RollHandlerBetterRolls5e as BetterRolls5e} from "../rolls/betterrolls5e-dnd5e-rolls.js"
import {RollHandlerMinorQol5e as MinorQol5e} from "../rolls/minorqol-dnd5e-rolls.js"

export function getRollHandler(rollHandler = "") {
    switch (rollHandler) {
        case "betterrolls5e":
            return new BetterRolls5e();
        case "minor-qol":
            return new MinorQol5e();
        case "core":
            return new Core();
        default:
            return new Core();
    }
}