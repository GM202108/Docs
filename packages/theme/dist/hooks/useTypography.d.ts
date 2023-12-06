import { TypographyOptions } from "@mui/material/styles/createTypography";
import { PaletteProps } from "./usePalette";
export interface UseTypographyProps {
    palette: PaletteProps;
}
export declare const useTypography: ({ palette, }: UseTypographyProps) => TypographyOptions;
