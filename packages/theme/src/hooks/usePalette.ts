import { useMemo, useCallback } from "react";
import { CommonColors, TypeDivider } from "@mui/material/styles/createPalette";
import {
  SimplePaletteColorOptions,
  PaletteMode,
  TypeBackground,
  TypeText,
} from "@mui/material";

import { CustomThemeOptions, ThemeColorVariant, ThemeModeKeys } from "../types";
import { brand, common, dark, gradient, light } from "../colors";
import { isDarkThemeMode, themeModeKeyHash } from "../utils";

export type PaletteProperties = Record<
  `${PalettePropertyWithoutVariant}${ThemeModeKeys}`,
  string
>;

export type PalettePropertyWithoutVariant =
  | "accent"
  | "background"
  | "debug"
  | "error"
  | "iconColor"
  | "iconSecondaryColor"
  | "iconSecondaryHoverColor"
  | "info"
  | "linkColor"
  | "metric"
  | "primary"
  | "secondary"
  | "sidebar"
  | "success"
  | "trace"
  | "warning"
  | "other01";

export const defaultPalette: PaletteProperties = {
  accentDark: dark.accent,
  accentEmbeddedDark: dark.accent,
  accentEmbeddedLight: light.accent,
  accentLight: light.accent,
  backgroundDark: dark.background,
  backgroundEmbeddedDark: dark.background,
  backgroundEmbeddedLight: light.background,
  backgroundLight: light.background,
  debugDark: dark.debug,
  debugEmbeddedDark: dark.debug,
  debugEmbeddedLight: light.debug,
  debugLight: light.debug,
  errorDark: dark.error,
  errorEmbeddedDark: dark.error,
  errorEmbeddedLight: light.error,
  errorLight: light.error,
  iconColorDark: dark.icon.primary,
  iconColorEmbeddedDark: dark.icon.primary,
  iconColorEmbeddedLight: light.icon.primary,
  iconColorLight: light.icon.primary,
  iconSecondaryColorDark: dark.icon.secondary,
  iconSecondaryColorEmbeddedDark: dark.icon.secondary,
  iconSecondaryColorEmbeddedLight: light.icon.secondary,
  iconSecondaryColorLight: light.icon.secondary,
  iconSecondaryHoverColorDark: dark.icon.secondaryHover,
  iconSecondaryHoverColorEmbeddedDark: dark.icon.secondaryHover,
  iconSecondaryHoverColorEmbeddedLight: light.icon.secondaryHover,
  iconSecondaryHoverColorLight: light.icon.secondaryHover,
  infoDark: dark.info,
  infoEmbeddedDark: dark.info,
  infoEmbeddedLight: light.info,
  infoLight: light.info,
  linkColorDark: dark.secondary,
  linkColorEmbeddedDark: dark.secondary,
  linkColorEmbeddedLight: light.secondary,
  linkColorLight: light.secondary,
  metricDark: dark.metric,
  metricEmbeddedDark: dark.metric,
  metricEmbeddedLight: light.metric,
  metricLight: light.metric,
  other01Dark: dark.other01,
  other01EmbeddedDark: dark.other01,
  other01EmbeddedLight: light.other01,
  other01Light: light.other01,
  primaryDark: dark.primary,
  primaryEmbeddedDark: dark.primary,
  primaryEmbeddedLight: light.primary,
  primaryLight: light.primary,
  secondaryDark: dark.secondary,
  secondaryEmbeddedDark: dark.secondary,
  secondaryEmbeddedLight: light.secondary,
  secondaryLight: light.secondary,
  sidebarDark: dark.sidebar.background,
  sidebarEmbeddedDark: dark.sidebar.background,
  sidebarEmbeddedLight: light.sidebar.background,
  sidebarLight: light.sidebar.background,
  successDark: dark.success,
  successEmbeddedDark: dark.success,
  successEmbeddedLight: light.success,
  successLight: light.success,
  traceDark: dark.trace,
  traceEmbeddedDark: dark.trace,
  traceEmbeddedLight: light.trace,
  traceLight: light.trace,
  warningDark: dark.warning,
  warningEmbeddedDark: dark.warning,
  warningEmbeddedLight: light.warning,
  warningLight: light.warning,
};

export const deprecatedColorKeyHash = {};

export interface PaletteProps {
  accent: SimplePaletteColorOptions;
  background: TypeBackground;
  base: SimplePaletteColorOptions;
  border: SimplePaletteColorOptions;
  brand: typeof brand & { gradient: string };
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

export const usePalette = ({
  customThemeOptions,
  themeMode,
}: UsePaletteProps): PaletteProps => {
  const getVariant = useCallback(
    (keyPrefix: PalettePropertyWithoutVariant) => {
      const key: keyof PaletteProperties = `${keyPrefix}${themeModeKeyHash[themeMode]}`;
      return customThemeOptions?.[key] || defaultPalette[key];
    },
    [themeMode, customThemeOptions]
  );

  return useMemo(
    () => ({
      accent: {
        main: getVariant("accent"),
      },
      background: {
        default: getVariant("background"),
        paper: getVariant("background"),
      },
      base: {
        main: isDarkThemeMode(themeMode) ? dark.base : light.base,
      },
      border: {
        dark: isDarkThemeMode(themeMode)
          ? dark.neutral[500]
          : light.neutral[400],
        light: isDarkThemeMode(themeMode)
          ? dark.neutral[200]
          : light.neutral[200],
        main: isDarkThemeMode(themeMode)
          ? dark.neutral[400]
          : light.neutral[300],
      },
      brand: {
        ...brand,
        gradient,
      },
      chart: [
        getVariant("iconColor"),
        getVariant("accent"),
        getVariant("linkColor"),
      ],
      common,
      default: {
        contrastText: isDarkThemeMode(themeMode)
          ? dark.text[70]
          : light.text[70],
        light: isDarkThemeMode(themeMode)
          ? dark.neutral[50]
          : light.neutral[50],
        main: isDarkThemeMode(themeMode)
          ? dark.neutral[100]
          : light.neutral[100],
        dark: isDarkThemeMode(themeMode)
          ? dark.neutral[200]
          : light.neutral[200],
      },
      divider: isDarkThemeMode(themeMode)
        ? dark.neutral[100]
        : light.neutral[100],
      error: {
        main: getVariant("error"),
      },
      info: {
        main: getVariant("info"),
      },
      icon: {
        primary: getVariant("iconColor"),
        secondary: isDarkThemeMode(themeMode)
          ? dark.icon.secondary
          : light.icon.secondary,
        secondaryHover: isDarkThemeMode(themeMode)
          ? dark.icon.secondaryHover
          : light.icon.secondaryHover,
      },
      inherit: {
        main: "inherit",
      },
      label: {
        light: isDarkThemeMode(themeMode) ? dark.text[55] : light.text[55],
        dark: isDarkThemeMode(themeMode) ? dark.text[100] : light.text[100],
        main: isDarkThemeMode(themeMode) ? dark.text[85] : light.text[85],
      },
      link: {
        main: getVariant("linkColor"),
      },
      log: {
        debug: getVariant("debug"),
        error: getVariant("error"),
        fatal: getVariant("error"),
        info: getVariant("info"),
        metric: getVariant("metric"),
        trace: getVariant("trace"),
        warn: getVariant("warning"),
      },
      mode: isDarkThemeMode(themeMode) ? "dark" : "light",
      modes: {
        current: isDarkThemeMode(themeMode) ? dark : light,
        dark,
        light,
      },
      neutral: {
        50: isDarkThemeMode(themeMode) ? dark.neutral[50] : light.neutral[50],
        100: isDarkThemeMode(themeMode)
          ? dark.neutral[100]
          : light.neutral[100],
        200: isDarkThemeMode(themeMode)
          ? dark.neutral[200]
          : light.neutral[200],
        300: isDarkThemeMode(themeMode)
          ? dark.neutral[300]
          : light.neutral[300],
        400: isDarkThemeMode(themeMode)
          ? dark.neutral[400]
          : light.neutral[400],
        500: isDarkThemeMode(themeMode)
          ? dark.neutral[500]
          : light.neutral[500],
      },
      other01: {
        main: getVariant("other01"),
      },
      primary: {
        main: getVariant("primary"),
        contrastText: common.white,
      },
      secondary: {
        main: getVariant("secondary"),
        contrastText: common.white,
      },
      sidebar: {
        70: isDarkThemeMode(themeMode) ? dark.sidebar[70] : light.sidebar[70],
        85: isDarkThemeMode(themeMode) ? dark.sidebar[85] : light.sidebar[85],
        100: isDarkThemeMode(themeMode)
          ? dark.sidebar[100]
          : light.sidebar[100],
        hover: isDarkThemeMode(themeMode)
          ? dark.sidebar.hover
          : light.sidebar.hover,
        background: getVariant("sidebar"),
      },
      success: {
        main: getVariant("success"),
      },
      text: {
        0: isDarkThemeMode(themeMode) ? light.text[100] : dark.text[100],
        15: isDarkThemeMode(themeMode) ? light.text[85] : dark.text[85],
        30: isDarkThemeMode(themeMode) ? light.text[70] : dark.text[70],
        45: isDarkThemeMode(themeMode) ? light.text[55] : dark.text[55],
        55: isDarkThemeMode(themeMode) ? dark.text[55] : light.text[55],
        70: isDarkThemeMode(themeMode) ? dark.text[70] : light.text[70],
        85: isDarkThemeMode(themeMode) ? dark.text[85] : light.text[85],
        100: isDarkThemeMode(themeMode) ? dark.text[100] : light.text[100],
        primary: isDarkThemeMode(themeMode) ? dark.text[70] : light.text[70],
        secondary: isDarkThemeMode(themeMode) ? dark.text[85] : light.text[85],
        disabled: isDarkThemeMode(themeMode) ? dark.text[55] : light.text[55],
      },
      warning: {
        main: getVariant("warning"),
      },
    }),
    [themeMode, getVariant]
  );
};
