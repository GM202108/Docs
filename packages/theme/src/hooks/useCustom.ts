import { useCallback, useMemo } from "react";

import { CustomThemeOptions, ThemeColorVariant } from "../types";
import { themeModeKeyHash } from "../utils";

// todo: template literal types with dynamic types
// interface Example {
//   borderRadius: number;
//   color: string;
//   disableElevation: boolean;
// }

// export type ExampleTypes<T extends keyof Example = keyof Example> = Record<
//   `${T}${ThemeModeKeys}`,
//   Example[T]
// >;

// const test: ExampleTypes = {
//   borderRadiusDark: 1,
//   borderRadiusEmbeddedDark: 3,
//   borderRadiusEmbeddedLight: 5,
//   borderRadiusLight: true,
//   colorDark: false,
//   colorEmbeddedDark: true,
//   colorEmbeddedLight: "",
//   colorLight: 2,
//   disableElevationDark: false,
//   disableElevationEmbeddedDark: true,
//   disableElevationEmbeddedLight: "",
//   disableElevationLight: 2,
// };

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

export type CustomPropertyWithoutVariant = keyof Pick<
  CustomProperties,
  "disableElevation"
>;

export const defaultCustom: CustomProperties = {
  disableElevation: false,
  disableElevationDark: false,
  disableElevationEmbeddedDark: false,
  disableElevationEmbeddedLight: false,
  disableElevationLight: false,
  input: {
    containerHeight: 68,
    inputHeight: 37.63,
    maxWidth: 650,
    paddingTop: 14,
  },
};

export const deprecatedCustomKeyHash = {
  disableElevationDark: "disableElevation",
  disableElevationEmbeddedDark: "disableElevation",
  disableElevationEmbeddedLight: "disableElevation",
  disableElevationLight: "disableElevation",
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

export const useCustom = ({
  customThemeOptions,
  themeMode,
}: UseCustomProps): CustomProps => {
  const getVariant = useCallback(
    (keyPrefix: CustomPropertyWithoutVariant) => {
      const key: keyof CustomProperties = `${keyPrefix}${themeModeKeyHash[themeMode]}`;
      return (
        customThemeOptions?.[key] ||
        customThemeOptions?.[keyPrefix] ||
        defaultCustom[key]
      );
    },
    [themeMode, customThemeOptions]
  );

  return useMemo(
    () => ({
      disableElevation: getVariant("disableElevation"),
      input: {
        containerHeight: 68,
        inputHeight: 37.63,
        paddingTop: 14,
        maxWidth: 650,
      },
    }),
    [getVariant]
  );
};
