import { CustomThemeOptions, ThemeColorVariant } from "../types";
export interface CustomProperties {
    disableElevation: boolean;
    disableElevationDark: boolean;
    disableElevationEmbeddedDark: boolean;
    disableElevationEmbeddedLight: boolean;
    disableElevationLight: boolean;
    input: {
        containerHeight: number;
        inputHeight: number;
        maxWidth: number;
        paddingTop: number;
    };
}
export declare type CustomPropertyWithoutVariant = keyof Pick<CustomProperties, "disableElevation">;
export declare const defaultCustom: CustomProperties;
export declare const deprecatedCustomKeyHash: {
    disableElevationDark: string;
    disableElevationEmbeddedDark: string;
    disableElevationEmbeddedLight: string;
    disableElevationLight: string;
};
export interface CustomProps {
    disableElevation: boolean;
    input: {
        containerHeight: number;
        inputHeight: number;
        maxWidth: number;
        paddingTop: number;
    };
}
interface UseCustomProps {
    customThemeOptions: CustomThemeOptions | undefined;
    themeMode: ThemeColorVariant;
}
export declare const useCustom: ({ customThemeOptions, themeMode, }: UseCustomProps) => CustomProps;
export {};
