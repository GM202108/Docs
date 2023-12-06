import { ThemeColorVariant, CustomThemeOptions } from "../types";
interface UseThemeProps {
    customThemeOptions: CustomThemeOptions | undefined;
    themeMode?: ThemeColorVariant;
}
export declare const useTheme: ({ customThemeOptions, themeMode, }: UseThemeProps) => import("@mui/material/styles").Theme;
export {};
