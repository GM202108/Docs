import { ThemeOptions } from "@mui/material/styles";
import { CustomThemeOptions, ThemeColorVariant } from "../types";
export interface ShapeProperties {
    borderRadius: number;
    borderRadiusDark: number;
    borderRadiusEmbeddedDark: number;
    borderRadiusEmbeddedLight: number;
    borderRadiusLight: number;
}
export declare type ShapePropertyWithoutVariant = keyof Pick<ShapeProperties, "borderRadius">;
export declare const defaultShape: ShapeProperties;
export declare const deprecatedShapeKeyHash: {
    borderRadiusDark: string;
    borderRadiusEmbeddedDark: string;
    borderRadiusEmbeddedLight: string;
    borderRadiusLight: string;
};
export declare type ShapeProps = Required<ThemeOptions["shape"]>;
interface UseShapeProps {
    customThemeOptions: CustomThemeOptions | undefined;
    themeMode: ThemeColorVariant;
}
export declare const useShape: ({ customThemeOptions, themeMode, }: UseShapeProps) => ShapeProps;
export {};
