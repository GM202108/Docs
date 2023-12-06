"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dark = exports.light = exports.gradient = exports.common = exports.brand = void 0;
const material_1 = require("@mui/material");
exports.brand = {
    yellow: {
        default: "#FBC12D",
    },
    red: {
        default: "#FF265A",
    },
    black: {
        100: "#BBBCBC",
        200: "#909293",
        300: "#676A6A",
        400: "#3C4041",
        500: "#191818",
    },
    deepPurple: {
        100: "#BEBEC9",
        200: "#9797AD",
        300: "#727292",
        400: "#4B4B76",
        500: "#191818",
    },
    periwinkle: {
        100: "#C8CAD9",
        200: "#ABB0CE",
        300: "#8F96C3",
        400: "#727CB8",
        500: "#5662A7",
    },
    mintGreen: {
        100: "#C0E0D5",
        200: "#9BDBC4",
        300: "#78D7B5",
        400: "#53D2A4",
        500: "#2ECE95",
    },
    bluePurple: {
        100: "#CACFE4",
        200: "#AFB9E3",
        300: "#96A4E3",
        400: "#7B8EE2",
        500: "#6078E2",
    },
    blueIris: {
        100: "#CAD4E4",
        200: "#AFC3E3",
        300: "#94B3E2",
        400: "#79A2E1",
        500: "#5E92E1",
    },
    turquoise: {
        100: "#C6D4DA",
        200: "#A7C3CE",
        300: "#88B4C4",
        400: "#69A3B8",
        500: "#4A93AE",
    },
    cyan: {
        100: "#CBE1E2",
        200: "#B1DEE0",
        300: "#99DBDE",
        400: "#7FD8DC",
        500: "#65D5DA",
    },
    gray: {
        10: "#FDFEFE",
        20: "#FAFBFC",
        30: "#F8F9FA",
        40: "#E7EBEF",
        50: "#D6DEE3",
        60: "#CBD5DC",
        70: "#BDC7CF",
        80: "#5F666A",
        90: "#353A3D",
        100: "#2C3133",
        110: "#24292A",
        120: "#1B2021",
    },
};
exports.common = {
    black: "#000000",
    white: "#FFFFFF",
};
exports.gradient = `linear-gradient(
  271.45deg,
  ${exports.brand.mintGreen[500]} 7.1%,
  ${exports.brand.cyan[500]} 23.69%,
  ${exports.brand.turquoise[500]} 50.08%,
  ${exports.brand.blueIris[500]} 70.94%,
  ${exports.brand.bluePurple[500]} 88.76%
);`;
exports.light = {
    accent: exports.brand.mintGreen[500],
    background: "#F7F8F9",
    base: exports.common.white,
    debug: exports.brand.mintGreen[500],
    error: exports.brand.red.default,
    gradient: exports.gradient,
    icon: {
        primary: exports.brand.bluePurple[500],
        secondary: "#9A9EB6",
        secondaryHover: "#565A72",
    },
    info: "#C4CFD7",
    metric: exports.brand.mintGreen[500],
    neutral: {
        50: "#F1F4F6",
        100: "#E3E8EC",
        200: "#D0D9DF",
        300: "#C4CFD7",
        400: "#9A9EB6",
        500: "#565A72",
    },
    other01: exports.brand.deepPurple[500],
    primary: exports.brand.mintGreen[500],
    secondary: exports.brand.bluePurple[500],
    sidebar: {
        70: (0, material_1.alpha)(exports.common.white, 0.7),
        85: (0, material_1.alpha)(exports.common.white, 0.85),
        100: exports.common.white,
        hover: (0, material_1.alpha)("#65D4D9", 0.1),
        background: "#1E223A",
    },
    success: exports.brand.mintGreen[500],
    text: {
        55: (0, material_1.alpha)("#191818", 0.55),
        70: (0, material_1.alpha)("#191818", 0.7),
        85: (0, material_1.alpha)("#191818", 0.85),
        100: "#191818",
    },
    trace: exports.brand.mintGreen[500],
    warning: exports.brand.yellow.default,
};
exports.dark = {
    accent: exports.brand.mintGreen[200],
    background: "#191D31",
    base: "#141626",
    debug: exports.brand.mintGreen[400],
    error: exports.brand.red.default,
    gradient: exports.gradient,
    icon: {
        primary: exports.brand.bluePurple[500],
        secondary: "#6F7283",
        secondaryHover: "#B6B9C3",
    },
    info: "#6F7283",
    metric: exports.brand.mintGreen[400],
    neutral: {
        50: "#1F2339",
        100: "#252941",
        200: "#2E334D",
        300: "#383E5B",
        400: "#6F7283",
        500: "#B6B9C3",
    },
    other01: exports.brand.bluePurple[500],
    primary: exports.brand.mintGreen[400],
    secondary: exports.brand.bluePurple[500],
    sidebar: {
        70: (0, material_1.alpha)(exports.common.white, 0.7),
        85: (0, material_1.alpha)(exports.common.white, 0.85),
        100: exports.common.white,
        hover: (0, material_1.alpha)("#65D4D9", 0.1),
        background: "#141626",
    },
    success: exports.brand.mintGreen[500],
    text: {
        55: (0, material_1.alpha)(exports.common.white, 0.55),
        70: (0, material_1.alpha)(exports.common.white, 0.7),
        85: (0, material_1.alpha)(exports.common.white, 0.85),
        100: exports.common.white,
    },
    trace: exports.brand.mintGreen[400],
    warning: exports.brand.yellow.default,
};
//# sourceMappingURL=colors.js.map