"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShape = exports.deprecatedShapeKeyHash = exports.defaultShape = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
exports.defaultShape = {
    borderRadius: 4,
    borderRadiusDark: 4,
    borderRadiusEmbeddedDark: 4,
    borderRadiusEmbeddedLight: 4,
    borderRadiusLight: 4,
};
exports.deprecatedShapeKeyHash = {
    borderRadiusDark: "borderRadius",
    borderRadiusEmbeddedDark: "borderRadius",
    borderRadiusEmbeddedLight: "borderRadius",
    borderRadiusLight: "borderRadius",
};
const useShape = ({ customThemeOptions, themeMode, }) => {
    const getVariant = (0, react_1.useCallback)((keyPrefix) => {
        const key = `${keyPrefix}${utils_1.themeModeKeyHash[themeMode]}`;
        return ((customThemeOptions === null || customThemeOptions === void 0 ? void 0 : customThemeOptions[key]) ||
            (customThemeOptions === null || customThemeOptions === void 0 ? void 0 : customThemeOptions[keyPrefix]) ||
            exports.defaultShape[key]);
    }, [themeMode, customThemeOptions]);
    return (0, react_1.useMemo)(() => ({
        borderRadius: getVariant("borderRadius"),
    }), [getVariant]);
};
exports.useShape = useShape;
//# sourceMappingURL=useShape.js.map