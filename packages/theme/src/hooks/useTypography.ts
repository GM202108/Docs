import { TypographyOptions } from "@mui/material/styles/createTypography";

import { PaletteProps } from "./usePalette";

export interface UseTypographyProps {
  palette: PaletteProps;
}

export const useTypography = ({
  palette,
}: UseTypographyProps): TypographyOptions => {
  return {
    htmlFontSize: 16,
    codeTypographySize: 14,
    h1: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: "2.75rem",
      letterSpacing: "-0.01em",
    },
    h2: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.625rem",
      lineHeight: "2.375rem",
      letterSpacing: "-.005em",
    },
    h3: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "1.375rem",
      lineHeight: "2.125rem",
      letterSpacing: 0,
    },
    h4: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "1.188rem",
      letterSpacing: ".005em",
    },
    h5: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.01em",
    },
    h6: {
      color: palette.text.secondary,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      letterSpacing: "0.005em",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.938rem",
      lineHeight: "1.438rem",
      letterSpacing: ".005em",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      letterSpacing: "0.015em",
    },
    body3: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      letterSpacing: "0.005em",
    },
    label: {
      color: palette.label.main,
      display: "inline-block",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      letterSpacing: "0.005em",
    },
    button: {
      textTransform: "none",
    },
  };
};
