import { CommonColors, TypeDivider } from "@mui/material/styles/createPalette";
import { SimplePaletteColorOptions, PaletteMode, TypeBackground, TypeText } from "@mui/material";
import { CustomThemeOptions, ThemeColorVariant, ThemeModeKeys } from "../types";
import { brand, dark, light } from "../colors";
export declare type PaletteProperties = Record<`${PalettePropertyWithoutVariant}${ThemeModeKeys}`, string>;
export declare type PalettePropertyWithoutVariant = "accent" | "background" | "debug" | "error" | "iconColor" | "iconSecondaryColor" | "iconSecondaryHoverColor" | "info" | "linkColor" | "metric" | "primary" | "secondary" | "sidebar" | "success" | "trace" | "warning" | "other01";
export declare const defaultPalette: PaletteProperties;
export declare const deprecatedColorKeyHash: {};
export interface PaletteProps {
    accent: SimplePaletteColorOptions;
    background: TypeBackground;
    base: SimplePaletteColorOptions;
    border: SimplePaletteColorOptions;
    brand: typeof brand & {
        gradient: string;
    };
    chart: string[];
    common: CommonColors;
    default: SimplePaletteColorOptions;
    divider: TypeDivider;
    error: SimplePaletteColorOptions;
    icon: {
        primary: string;
        secondary: string;
        secondaryHover: string;
    };
    info: SimplePaletteColorOptions;
    inherit: SimplePaletteColorOptions;
    label: SimplePaletteColorOptions;
    link: SimplePaletteColorOptions;
    log: {
        trace: string;
        metric: string;
        debug: string;
        info: string;
        warn: string;
        error: string;
        fatal: string;
    };
    mode: PaletteMode;
    modes: {
        current: typeof dark | typeof light;
        dark: typeof dark;
        light: typeof light;
    };
    neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    other01: SimplePaletteColorOptions;
    primary: SimplePaletteColorOptions;
    secondary: SimplePaletteColorOptions;
    sidebar: {
        70: string;
        85: string;
        100: string;
        hover: string;
        background: string;
    };
    success: SimplePaletteColorOptions;
    text: TypeText & {
        55: string;
        70: string;
        85: string;
        100: string;
    };
    warning: SimplePaletteColorOptions;
}
interface UsePaletteProps {
    customThemeOptions: CustomThemeOptions | undefined;
    themeMode: ThemeColorVariant;
}
export declare const usePalette: ({ customThemeOptions, themeMode, }: UsePaletteProps) => PaletteProps;
export {};
