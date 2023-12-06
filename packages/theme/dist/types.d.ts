/// <reference types="react" />
import { Theme } from "@mui/material/styles";
import "@mui/styles";
import { CustomProperties, CustomPropertyWithoutVariant, CustomProps } from "./hooks/useCustom";
import { PaletteProperties, PalettePropertyWithoutVariant, PaletteProps } from "./hooks/usePalette";
import { ShapeProperties, ShapePropertyWithoutVariant } from "./hooks/useShape";
declare module "@mui/styles" {
    interface DefaultTheme extends Theme {
    }
}
declare module "@mui/material/styles/createTypography" {
    interface TypographyOptions {
        codeTypographySize: number;
    }
}
declare module "@mui/material/styles" {
    interface Theme {
        custom: CustomProps;
    }
    interface ThemeOptions {
        custom: CustomProps;
    }
    interface TypographyVariants {
        body3: React.CSSProperties;
        label: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
        label?: React.CSSProperties;
    }
    interface Palette extends PaletteProps {
    }
    interface PaletteOptions extends PaletteProps {
    }
    interface CommonColors {
        red: string;
        yellow: string;
    }
    interface TypeText {
        0: string;
        15: string;
        30: string;
        45: string;
        55: string;
        70: string;
        85: string;
        100: string;
    }
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        default: true;
    }
}
declare module "@mui/material/ButtonGroup" {
    interface ButtonGroupPropsColorOverrides {
        default: true;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        body3: true;
        label: true;
    }
}
declare module "@mui/material/ButtonGroup" {
    interface ButtonGroupPropsVariantOverrides {
        spaced: true;
    }
}
export type { PalettePropertyWithoutVariant };
export declare type ThemePropertyWithoutVariant = ShapePropertyWithoutVariant | CustomPropertyWithoutVariant;
export declare type CustomThemeProperties = ShapeProperties & CustomProperties;
export declare type CustomThemeColors = PaletteProperties;
export declare type CustomThemeOptions = Partial<CustomThemeProperties & CustomThemeColors>;
export declare enum ThemeColorVariant {
    DARK = "DARK",
    EMBEDDED_DARK = "EMBEDDED_DARK",
    EMBEDDED_LIGHT = "EMBEDDED_LIGHT",
    LIGHT = "LIGHT"
}
export declare type ThemeModeKeys = "Dark" | "EmbeddedDark" | "EmbeddedLight" | "Light";
export declare type ThemeModeKeyHashProps = {
    [Property in ThemeColorVariant]: ThemeModeKeys;
};
