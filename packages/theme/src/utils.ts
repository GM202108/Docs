import { Theme, decomposeColor, recomposeColor, rgbToHex } from "@mui/material";
import { ThemeColorVariant, ThemeModeKeyHashProps } from "./types";

export const add = (value: string | number | undefined, addValue: number) => {
  if (!value) {
    return addValue;
  }

  if (typeof value === "string") {
    return parseInt(value) + addValue;
  }

  return value + addValue;
};

export const elevation = (theme: Theme, value: string | undefined) =>
  theme.custom.disableElevation ? undefined : value;

/** Ensure provided value is already hex or attempt to convert to hex. */
export const ensureHex = (value: string): string => {
  const color = decomposeColor(value);
  const rgb = recomposeColor(color);
  return rgbToHex(rgb);
};

export const isDarkThemeMode = (themeMode: ThemeColorVariant | undefined) =>
  themeMode === ThemeColorVariant.DARK ||
  themeMode === ThemeColorVariant.EMBEDDED_DARK;

export const themeModeKeyHash: ThemeModeKeyHashProps = {
  [ThemeColorVariant.DARK]: "Dark",
  [ThemeColorVariant.EMBEDDED_DARK]: "EmbeddedDark",
  [ThemeColorVariant.EMBEDDED_LIGHT]: "EmbeddedLight",
  [ThemeColorVariant.LIGHT]: "Light",
};

export { alpha } from "@mui/material";
