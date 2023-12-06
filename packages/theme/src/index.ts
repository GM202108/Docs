import { CustomThemeOptions, ThemeModeKeyHashProps } from "./types";
import { defaultCustom, deprecatedCustomKeyHash } from "./hooks/useCustom";
import { defaultPalette, deprecatedColorKeyHash } from "./hooks/usePalette";
import { defaultShape, deprecatedShapeKeyHash } from "./hooks/useShape";

export { useTheme } from "./hooks/useTheme";

export * from "./utils";

export * from "./colors";

export const defaultThemeOptions: Required<CustomThemeOptions> = {
  ...defaultCustom,
  ...defaultPalette,
  ...defaultShape,
};

export const deprecatedThemeKeyHash: Record<string, string> = {
  ...deprecatedColorKeyHash,
  ...deprecatedShapeKeyHash,
  ...deprecatedCustomKeyHash,
};

export { defaultPalette, defaultShape, defaultCustom };

export type { CustomThemeOptions, ThemeModeKeyHashProps };
