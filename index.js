"use strict";

// Require Third-party Dependencies
const wcwidth = require("@slimio/wcwidth");

/**
 * @function align
 * @description Align string at left, right or center
 * @param {!string} str
 * @param {!number} width
 * @param {string} [alignDirection="center"] left, right, center / default center
 * @returns {string}
 */
function align(str, width, alignDirection = "left") {
    const trimmed = alignDirection === "left" ? str.trimRight() : str.trimLeft();
    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }

    const strWidth = wcwidth(trimmed);
    if (alignDirection === "left") {
        const padding = strWidth < width ? "".padEnd(width - strWidth) : "";

        return trimmed + padding;
    }

    const padding = strWidth < width ? "".padStart(width - strWidth) : "";

    return padding + trimmed;
}

/**
 * @function alignCenter
 * @description Align string at the center
 * @param {!string} str
 * @param {!number} width
 * @returns {string}
 */
function alignCenter(str, width) {
    const trimmed = str.trim();
    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }

    const strWidth = wcwidth(trimmed);
    let padLeft = "";
    let padRight = "";

    if (strWidth < width) {
        const padLeftBy = parseInt((width - strWidth) / 2, 10);
        padLeft = padLeft.padEnd(padLeftBy);
        padRight = padRight.padStart(width - (strWidth + padLeftBy));
    }

    return padLeft + trimmed + padRight;
}

exports.center = alignCenter;
exports.left = (str, width) => align(str, width, "left");
exports.right = (str, width) => align(str, width, "right");
