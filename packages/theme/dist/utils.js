"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alpha = exports.themeModeKeyHash = exports.isDarkThemeMode = exports.ensureHex = exports.elevation = exports.add = void 0;
const material_1 = require("@mui/material");
const types_1 = require("./types");
const add = (value, addValue) => {
    if (!value) {
        return addValue;
    }
    if (typeof value === "string") {
        return parseInt(value) + addValue;
    }
    return value + addValue;
};
exports.add = add;
const elevation = (theme, value) => theme.custom.disableElevation ? undefined : value;
exports.elevation = elevation;
const ensureHex = (value) => {
    const color = (0, material_1.decomposeColor)(value);
    const rgb = (0, material_1.recomposeColor)(color);
    return (0, material_1.rgbToHex)(rgb);
};
exports.ensureHex = ensureHex;
const isDarkThemeMode = (themeMode) => themeMode === types_1.ThemeColorVariant.DARK ||
    themeMode === types_1.ThemeColorVariant.EMBEDDED_DARK;
exports.isDarkThemeMode = isDarkThemeMode;
exports.themeModeKeyHash = {
    [types_1.ThemeColorVariant.DARK]: "Dark",
    [types_1.ThemeColorVariant.EMBEDDED_DARK]: "EmbeddedDark",
    [types_1.ThemeColorVariant.EMBEDDED_LIGHT]: "EmbeddedLight",
    [types_1.ThemeColorVariant.LIGHT]: "Light",
};
var material_2 = require("@mui/material");
Object.defineProperty(exports, "alpha", { enumerable: true, get: function () { return material_2.alpha; } });
//# sourceMappingURL=utils.js.map