import { useMemo, useCallback } from "react";
import { ThemeOptions } from "@mui/material/styles";

import { CustomThemeOptions, ThemeColorVariant } from "../types";
import { themeModeKeyHash } from "../utils";

export interface ShapeProperties {
  borderRadius: number;
  borderRadiusDark: number;
  borderRadiusEmbeddedDark: number;
  borderRadiusEmbeddedLight: number;
  borderRadiusLight: number;
}

export type ShapePropertyWithoutVariant = keyof Pick<
  ShapeProperties,
  "borderRadius"
>;

export const defaultShape: ShapeProperties = {
  borderRadius: 4,
  borderRadiusDark: 4,
  borderRadiusEmbeddedDark: 4,
  borderRadiusEmbeddedLight: 4,
  borderRadiusLight: 4,
};

export const deprecatedShapeKeyHash = {
  borderRadiusDark: "borderRadius",
  borderRadiusEmbeddedDark: "borderRadius",
  borderRadiusEmbeddedLight: "borderRadius",
  borderRadiusLight: "borderRadius",
};

export type ShapeProps = Required<ThemeOptions["shape"]>;

interface UseShapeProps {
  customThemeOptions: CustomThemeOptions | undefined;
  themeMode: ThemeColorVariant;
}

export const useShape = ({
  customThemeOptions,
  themeMode,
}: UseShapeProps): ShapeProps => {
  const getVariant = useCallback(
    (keyPrefix: ShapePropertyWithoutVariant) => {
      const key: keyof ShapeProperties = `${keyPrefix}${themeModeKeyHash[themeMode]}`;

      return (
        customThemeOptions?.[key] ||
        customThemeOptions?.[keyPrefix] ||
        defaultShape[key]
      );
    },
    [themeMode, customThemeOptions]
  );

  return useMemo(
    () => ({
      borderRadius: getVariant("borderRadius"),
    }),
    [getVariant]
  );
};
