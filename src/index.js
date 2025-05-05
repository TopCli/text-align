// Import Internal Dependencies
import { stringLength } from "./stringLength.js";

/**
 * @function left
 * @description Align string on the left
 * @param {!string} str
 * @param {!number} width
 * @returns {string}
 *
 * @example
 * const align = require("@slimio/text-align");
 * console.log(align.left("boo", 5)); // "boo  ";
 */
export function left(str, width) {
  const trimmed = str.trimEnd();
  if (trimmed.length === 0 && str.length >= width) {
    return str;
  }
  const strWidth = stringLength(trimmed);

  return trimmed + (strWidth < width ? "".padEnd(width - strWidth) : "");
}

/**
 * @function right
 * @description Align string on the right
 * @param {!string} str
 * @param {!number} width
 * @returns {string}
 *
 * @example
 * const align = require("@slimio/text-align");
 * console.log(align.right("boo", 5)); // "  boo";
 */
export function right(str, width) {
  const trimmed = str.trimStart();
  if (trimmed.length === 0 && str.length >= width) {
    return str;
  }
  const strWidth = stringLength(trimmed);

  return (strWidth < width ? "".padStart(width - strWidth) : "") + trimmed;
}

/**
 * @function center
 * @description Align string at the center
 * @param {!string} str
 * @param {!number} width
 * @returns {string}
 *
 * @example
 * const align = require("@slimio/text-align");
 * console.log(align.center("boo", 5)); // " boo ";
 */
export function center(str, width) {
  const trimmed = str.trim();
  if (trimmed.length === 0 && str.length >= width) {
    return str;
  }

  const strWidth = stringLength(trimmed);
  let [padLeft, padRight] = ["", ""];

  if (strWidth < width) {
    const padLeftBy = parseInt((width - strWidth) / 2, 10);
    padLeft = padLeft.padEnd(padLeftBy);
    padRight = padRight.padStart(width - (strWidth + padLeftBy));
  }

  return padLeft + trimmed + padRight;
}
