import { ThemeOptions } from "@mui/material/styles";
import { CustomProps } from "./useCustom";
import { PaletteProps } from "./usePalette";
import { ShadowsProps } from "./useShadows";
import { ShapeProps } from "./useShape";
import { ThemeColorVariant } from "../types";
import { TypographyOptions } from "@mui/material/styles/createTypography";
declare type ComponentsProps = ThemeOptions["components"];
export interface useComponentsProps {
    custom: CustomProps;
    palette: PaletteProps;
    shape: ShapeProps;
    shadows: ShadowsProps;
    themeMode: ThemeColorVariant;
    typography: TypographyOptions;
}
export declare const useComponents: ({ custom, palette, shape, shadows, themeMode, typography, }: useComponentsProps) => ComponentsProps;
export {};
