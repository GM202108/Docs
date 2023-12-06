import { Theme } from "@mui/material";
import { ThemeColorVariant, ThemeModeKeyHashProps } from "./types";
export declare const add: (value: string | number | undefined, addValue: number) => number;
export declare const elevation: (theme: Theme, value: string | undefined) => string | undefined;
export declare const ensureHex: (value: string) => string;
export declare const isDarkThemeMode: (themeMode: ThemeColorVariant | undefined) => boolean;
export declare const themeModeKeyHash: ThemeModeKeyHashProps;
export { alpha } from "@mui/material";
