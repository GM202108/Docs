"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustom = exports.deprecatedCustomKeyHash = exports.defaultCustom = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
exports.defaultCustom = {
    disableElevation: false,
    disableElevationDark: false,
    disableElevationEmbeddedDark: false,
    disableElevationEmbeddedLight: false,
    disableElevationLight: false,
    input: {
        containerHeight: 68,
        inputHeight: 37.63,
        maxWidth: 650,
        paddingTop: 14,
    },
};
exports.deprecatedCustomKeyHash = {
    disableElevationDark: "disableElevation",
    disableElevationEmbeddedDark: "disableElevation",
    disableElevationEmbeddedLight: "disableElevation",
    disableElevationLight: "disableElevation",
};
const useCustom = ({ customThemeOptions, themeMode, }) => {
    const getVariant = (0, react_1.useCallback)((keyPrefix) => {
        const key = `${keyPrefix}${utils_1.themeModeKeyHash[themeMode]}`;
        return ((customThemeOptions === null || customThemeOptions === void 0 ? void 0 : customThemeOptions[key]) ||
            (customThemeOptions === null || customThemeOptions === void 0 ? void 0 : customThemeOptions[keyPrefix]) ||
            exports.defaultCustom[key]);
    }, [themeMode, customThemeOptions]);
    return (0, react_1.useMemo)(() => ({
        disableElevation: getVariant("disableElevation"),
        input: {
            containerHeight: 68,
            inputHeight: 37.63,
            paddingTop: 14,
            maxWidth: 650,
        },
    }), [getVariant]);
};
exports.useCustom = useCustom;
//# sourceMappingURL=useCustom.js.map