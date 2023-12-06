"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const types_1 = require("../types");
const useComponents_1 = require("./useComponents");
const useCustom_1 = require("./useCustom");
const usePalette_1 = require("./usePalette");
const useShadows_1 = require("./useShadows");
const useShape_1 = require("./useShape");
const useTypography_1 = require("./useTypography");
const useTheme = ({ customThemeOptions, themeMode = types_1.ThemeColorVariant.LIGHT, }) => {
    const palette = (0, usePalette_1.usePalette)({ customThemeOptions, themeMode });
    const typography = (0, useTypography_1.useTypography)({ palette });
    const custom = (0, useCustom_1.useCustom)({ customThemeOptions, themeMode });
    const shape = (0, useShape_1.useShape)({ customThemeOptions, themeMode });
    const shadows = (0, useShadows_1.useShadows)({ disableElevation: custom.disableElevation });
    const components = (0, useComponents_1.useComponents)({
        custom,
        palette,
        shadows,
        shape,
        themeMode,
        typography,
    });
    return (0, react_1.useMemo)(() => {
        return (0, styles_1.createTheme)({
            components,
            custom,
            palette,
            shape,
            typography,
            shadows,
        });
    }, [components, custom, palette, shadows, shape, typography]);
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map