/* eslint-disable no-else-return */
"use strict";

const wcwidth = require("@slimio/wcwidth");


/**
 * @function align
 * @description Align string at left, right or center
 * @param {string} str
 * @param {number} width
 * @param {string} value left, right, center / default center
 * @returns {number}
 */
function align(str, width, value) {
    let trimmed = str.trim();
    if (value === "left") {
        trimmed = str.trimRight();
    }
    else if (value === "right") {
        trimmed = str.trimLeft();
    }
    else {
        trimmed = str.trim();
    }

    if (trimmed.length === 0 && str.length >= width) {
        return str;
    }

    const strWidth = wcwidth(trimmed);
    console.log(strWidth);
    console.log(width);
    if (value === "left") {
        const padding = strWidth < width ? "".padEnd(width - strWidth, " ") : "";

        return trimmed + padding;
    }
    else if (value === "right") {
        const padding = strWidth < width ? "".padStart(width - strWidth, " ") : "";

        return trimmed + padding;
    }
    else {
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
}

console.log(align("abc", 10, "right"));
exports.center = align;
exports.left = align;
exports.right = align;
