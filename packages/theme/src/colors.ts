import { alpha } from "@mui/material";

export const brand = {
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
    500: "#191818", // default
  },
  deepPurple: {
    100: "#BEBEC9",
    200: "#9797AD",
    300: "#727292",
    400: "#4B4B76",
    500: "#191818", // default
  },
  periwinkle: {
    100: "#C8CAD9",
    200: "#ABB0CE",
    300: "#8F96C3",
    400: "#727CB8",
    500: "#5662A7", // default
  },
  mintGreen: {
    100: "#C0E0D5",
    200: "#9BDBC4",
    300: "#78D7B5",
    400: "#53D2A4",
    500: "#2ECE95", // default
  },
  bluePurple: {
    100: "#CACFE4",
    200: "#AFB9E3",
    300: "#96A4E3",
    400: "#7B8EE2",
    500: "#6078E2", // default
  },
  blueIris: {
    100: "#CAD4E4",
    200: "#AFC3E3",
    300: "#94B3E2",
    400: "#79A2E1",
    500: "#5E92E1", // default
  },
  turquoise: {
    100: "#C6D4DA",
    200: "#A7C3CE",
    300: "#88B4C4",
    400: "#69A3B8",
    500: "#4A93AE", // default
  },
  cyan: {
    100: "#CBE1E2",
    200: "#B1DEE0",
    300: "#99DBDE",
    400: "#7FD8DC",
    500: "#65D5DA", // default
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

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const gradient = `linear-gradient(
  271.45deg,
  ${brand.mintGreen[500]} 7.1%,
  ${brand.cyan[500]} 23.69%,
  ${brand.turquoise[500]} 50.08%,
  ${brand.blueIris[500]} 70.94%,
  ${brand.bluePurple[500]} 88.76%
);`;

export const light = {
  accent: brand.mintGreen[500],
  background: "#F7F8F9",
  base: common.white,
  debug: brand.mintGreen[500],
  error: brand.red.default,
  gradient,
  icon: {
    primary: brand.bluePurple[500],
    secondary: "#9A9EB6",
    secondaryHover: "#565A72",
  },
  info: "#C4CFD7",
  metric: brand.mintGreen[500],
  neutral: {
    50: "#F1F4F6",
    100: "#E3E8EC",
    200: "#D0D9DF",
    300: "#C4CFD7",
    400: "#9A9EB6",
    500: "#565A72",
  },
  other01: brand.deepPurple[500],
  primary: brand.mintGreen[500],
  secondary: brand.bluePurple[500],
  sidebar: {
    70: alpha(common.white, 0.7),
    85: alpha(common.white, 0.85),
    100: common.white,
    hover: alpha("#65D4D9", 0.1),
    background: "#1E223A",
  },
  success: brand.mintGreen[500],
  text: {
    55: alpha("#191818", 0.55),
    70: alpha("#191818", 0.7),
    85: alpha("#191818", 0.85),
    100: "#191818",
  },
  trace: brand.mintGreen[500],
  warning: brand.yellow.default,
};

export const dark = {
  accent: brand.mintGreen[200],
  background: "#191D31",
  base: "#141626",
  debug: brand.mintGreen[400],
  error: brand.red.default,
  gradient,
  icon: {
    primary: brand.bluePurple[500],
    secondary: "#6F7283",
    secondaryHover: "#B6B9C3",
  },
  info: "#6F7283",
  metric: brand.mintGreen[400],
  neutral: {
    50: "#1F2339",
    100: "#252941",
    200: "#2E334D",
    300: "#383E5B",
    400: "#6F7283",
    500: "#B6B9C3",
  },
  other01: brand.bluePurple[500],
  primary: brand.mintGreen[400],
  secondary: brand.bluePurple[500],
  sidebar: {
    70: alpha(common.white, 0.7),
    85: alpha(common.white, 0.85),
    100: common.white,
    hover: alpha("#65D4D9", 0.1),
    background: "#141626",
  },
  success: brand.mintGreen[500],
  text: {
    55: alpha(common.white, 0.55),
    70: alpha(common.white, 0.7),
    85: alpha(common.white, 0.85),
    100: common.white,
  },
  trace: brand.mintGreen[400],
  warning: brand.yellow.default,
};
