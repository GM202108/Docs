import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";

import { ThemeColorVariant, CustomThemeOptions } from "../types";
import { useComponents } from "./useComponents";
import { useCustom } from "./useCustom";
import { usePalette } from "./usePalette";
import { useShadows } from "./useShadows";
import { useShape } from "./useShape";
import { useTypography } from "./useTypography";

interface UseThemeProps {
  customThemeOptions: CustomThemeOptions | undefined;
  themeMode?: ThemeColorVariant;
}

export const useTheme = ({
  customThemeOptions,
  themeMode = ThemeColorVariant.LIGHT,
}: UseThemeProps) => {
  const palette = usePalette({ customThemeOptions, themeMode });
  const typography = useTypography({ palette });
  const custom = useCustom({ customThemeOptions, themeMode });
  const shape = useShape({ customThemeOptions, themeMode });
  const shadows = useShadows({ disableElevation: custom.disableElevation });
  const components = useComponents({
    custom,
    palette,
    shadows,
    shape,
    themeMode,
    typography,
  });

  return useMemo(() => {
    return createTheme({
      components,
      custom,
      palette,
      shape,
      typography,
      shadows,
    });
  }, [components, custom, palette, shadows, shape, typography]);
};
