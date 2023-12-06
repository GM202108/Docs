"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePalette = exports.deprecatedColorKeyHash = exports.defaultPalette = void 0;
const react_1 = require("react");
const colors_1 = require("../colors");
const utils_1 = require("../utils");
exports.defaultPalette = {
    accentDark: colors_1.dark.accent,
    accentEmbeddedDark: colors_1.dark.accent,
    accentEmbeddedLight: colors_1.light.accent,
    accentLight: colors_1.light.accent,
    backgroundDark: colors_1.dark.background,
    backgroundEmbeddedDark: colors_1.dark.background,
    backgroundEmbeddedLight: colors_1.light.background,
    backgroundLight: colors_1.light.background,
    debugDark: colors_1.dark.debug,
    debugEmbeddedDark: colors_1.dark.debug,
    debugEmbeddedLight: colors_1.light.debug,
    debugLight: colors_1.light.debug,
    errorDark: colors_1.dark.error,
    errorEmbeddedDark: colors_1.dark.error,
    errorEmbeddedLight: colors_1.light.error,
    errorLight: colors_1.light.error,
    iconColorDark: colors_1.dark.icon.primary,
    iconColorEmbeddedDark: colors_1.dark.icon.primary,
    iconColorEmbeddedLight: colors_1.light.icon.primary,
    iconColorLight: colors_1.light.icon.primary,
    iconSecondaryColorDark: colors_1.dark.icon.secondary,
    iconSecondaryColorEmbeddedDark: colors_1.dark.icon.secondary,
    iconSecondaryColorEmbeddedLight: colors_1.light.icon.secondary,
    iconSecondaryColorLight: colors_1.light.icon.secondary,
    iconSecondaryHoverColorDark: colors_1.dark.icon.secondaryHover,
    iconSecondaryHoverColorEmbeddedDark: colors_1.dark.icon.secondaryHover,
    iconSecondaryHoverColorEmbeddedLight: colors_1.light.icon.secondaryHover,
    iconSecondaryHoverColorLight: colors_1.light.icon.secondaryHover,
    infoDark: colors_1.dark.info,
    infoEmbeddedDark: colors_1.dark.info,
    infoEmbeddedLight: colors_1.light.info,
    infoLight: colors_1.light.info,
    linkColorDark: colors_1.dark.secondary,
    linkColorEmbeddedDark: colors_1.dark.secondary,
    linkColorEmbeddedLight: colors_1.light.secondary,
    linkColorLight: colors_1.light.secondary,
    metricDark: colors_1.dark.metric,
    metricEmbeddedDark: colors_1.dark.metric,
    metricEmbeddedLight: colors_1.light.metric,
    metricLight: colors_1.light.metric,
    other01Dark: colors_1.dark.other01,
    other01EmbeddedDark: colors_1.dark.other01,
    other01EmbeddedLight: colors_1.light.other01,
    other01Light: colors_1.light.other01,
    primaryDark: colors_1.dark.primary,
    primaryEmbeddedDark: colors_1.dark.primary,
    primaryEmbeddedLight: colors_1.light.primary,
    primaryLight: colors_1.light.primary,
    secondaryDark: colors_1.dark.secondary,
    secondaryEmbeddedDark: colors_1.dark.secondary,
    secondaryEmbeddedLight: colors_1.light.secondary,
    secondaryLight: colors_1.light.secondary,
    sidebarDark: colors_1.dark.sidebar.background,
    sidebarEmbeddedDark: colors_1.dark.sidebar.background,
    sidebarEmbeddedLight: colors_1.light.sidebar.background,
    sidebarLight: colors_1.light.sidebar.background,
    successDark: colors_1.dark.success,
    successEmbeddedDark: colors_1.dark.success,
    successEmbeddedLight: colors_1.light.success,
    successLight: colors_1.light.success,
    traceDark: colors_1.dark.trace,
    traceEmbeddedDark: colors_1.dark.trace,
    traceEmbeddedLight: colors_1.light.trace,
    traceLight: colors_1.light.trace,
    warningDark: colors_1.dark.warning,
    warningEmbeddedDark: colors_1.dark.warning,
    warningEmbeddedLight: colors_1.light.warning,
    warningLight: colors_1.light.warning,
};
exports.deprecatedColorKeyHash = {};
const usePalette = ({ customThemeOptions, themeMode, }) => {
    const getVariant = (0, react_1.useCallback)((keyPrefix) => {
        const key = `${keyPrefix}${utils_1.themeModeKeyHash[themeMode]}`;
        return (customThemeOptions === null || customThemeOptions === void 0 ? void 0 : customThemeOptions[key]) || exports.defaultPalette[key];
    }, [themeMode, customThemeOptions]);
    return (0, react_1.useMemo)(() => ({
        accent: {
            main: getVariant("accent"),
        },
        background: {
            default: getVariant("background"),
            paper: getVariant("background"),
        },
        base: {
            main: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.base : colors_1.light.base,
        },
        border: {
            dark: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[500]
                : colors_1.light.neutral[400],
            light: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[200]
                : colors_1.light.neutral[200],
            main: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[400]
                : colors_1.light.neutral[300],
        },
        brand: {
            ...colors_1.brand,
            gradient: colors_1.gradient,
        },
        chart: [
            getVariant("iconColor"),
            getVariant("accent"),
            getVariant("linkColor"),
        ],
        common: colors_1.common,
        default: {
            contrastText: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.text[70]
                : colors_1.light.text[70],
            light: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[50]
                : colors_1.light.neutral[50],
            main: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[100]
                : colors_1.light.neutral[100],
            dark: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[200]
                : colors_1.light.neutral[200],
        },
        divider: (0, utils_1.isDarkThemeMode)(themeMode)
            ? colors_1.dark.neutral[100]
            : colors_1.light.neutral[100],
        error: {
            main: getVariant("error"),
        },
        info: {
            main: getVariant("info"),
        },
        icon: {
            primary: getVariant("iconColor"),
            secondary: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.icon.secondary
                : colors_1.light.icon.secondary,
            secondaryHover: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.icon.secondaryHover
                : colors_1.light.icon.secondaryHover,
        },
        inherit: {
            main: "inherit",
        },
        label: {
            light: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[55] : colors_1.light.text[55],
            dark: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[100] : colors_1.light.text[100],
            main: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[85] : colors_1.light.text[85],
        },
        link: {
            main: getVariant("linkColor"),
        },
        log: {
            debug: getVariant("debug"),
            error: getVariant("error"),
            fatal: getVariant("error"),
            info: getVariant("info"),
            metric: getVariant("metric"),
            trace: getVariant("trace"),
            warn: getVariant("warning"),
        },
        mode: (0, utils_1.isDarkThemeMode)(themeMode) ? "dark" : "light",
        modes: {
            current: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark : colors_1.light,
            dark: colors_1.dark,
            light: colors_1.light,
        },
        neutral: {
            50: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.neutral[50] : colors_1.light.neutral[50],
            100: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[100]
                : colors_1.light.neutral[100],
            200: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[200]
                : colors_1.light.neutral[200],
            300: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[300]
                : colors_1.light.neutral[300],
            400: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[400]
                : colors_1.light.neutral[400],
            500: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.neutral[500]
                : colors_1.light.neutral[500],
        },
        other01: {
            main: getVariant("other01"),
        },
        primary: {
            main: getVariant("primary"),
            contrastText: colors_1.common.white,
        },
        secondary: {
            main: getVariant("secondary"),
            contrastText: colors_1.common.white,
        },
        sidebar: {
            70: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.sidebar[70] : colors_1.light.sidebar[70],
            85: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.sidebar[85] : colors_1.light.sidebar[85],
            100: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.sidebar[100]
                : colors_1.light.sidebar[100],
            hover: (0, utils_1.isDarkThemeMode)(themeMode)
                ? colors_1.dark.sidebar.hover
                : colors_1.light.sidebar.hover,
            background: getVariant("sidebar"),
        },
        success: {
            main: getVariant("success"),
        },
        text: {
            0: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.light.text[100] : colors_1.dark.text[100],
            15: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.light.text[85] : colors_1.dark.text[85],
            30: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.light.text[70] : colors_1.dark.text[70],
            45: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.light.text[55] : colors_1.dark.text[55],
            55: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[55] : colors_1.light.text[55],
            70: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[70] : colors_1.light.text[70],
            85: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[85] : colors_1.light.text[85],
            100: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[100] : colors_1.light.text[100],
            primary: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[70] : colors_1.light.text[70],
            secondary: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[85] : colors_1.light.text[85],
            disabled: (0, utils_1.isDarkThemeMode)(themeMode) ? colors_1.dark.text[55] : colors_1.light.text[55],
        },
        warning: {
            main: getVariant("warning"),
        },
    }), [themeMode, getVariant]);
};
exports.usePalette = usePalette;
//# sourceMappingURL=usePalette.js.map