"use strict";

const wcwidth = require("@slimio/wcwidth");

/**
 * @function alignLeft
 * @description Align string at left
 * @param {string} str
 * @param {number} width
 * @returns {number}
 */
function alignLeft(str, width) {
    const trimmed = str.trimRight();
    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }
    let padding = "";
    const strWidth = wcwidth(trimmed);

    if (strWidth < width) {
        padding = padding.padEnd(width - strWidth);
    }

    return trimmed + padding;
}

/**
 * @function alignRight
 * @description Align string at Right
 * @param {string} str
 * @param {number} width
 * @returns {number}
 */
function alignRight(str, width) {
    const trimmed = str.trimLeft();
    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }
    let padding = "";
    const strWidth = wcwidth(trimmed);

    if (strWidth < width) {
        padding = padding.padStart(width - strWidth);
    }

    return padding + trimmed;
}

/**
 * @function alignCenter
 * @description Align string at Center
 * @param {string} str
 * @param {number} width
 * @returns {number}
 */
function alignCenter(str, width) {
    const trimmed = str.trim();
    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }
    let padLeft = "";
    let padRight = "";
    const strWidth = wcwidth(trimmed);

    if (strWidth < width) {
        const padLeftBy = parseInt((width - strWidth) / 2, 10);
        padLeft = padLeft.padEnd(padLeftBy);
        padRight = padRight.padStart(width - (strWidth + padLeftBy));
    }

    return padLeft + trimmed + padRight;
}

module.exports = {
    alignCenter,
    alignLeft,
    alignRight
};
