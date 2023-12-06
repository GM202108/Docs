import { useMemo } from "react";
import { ThemeOptions } from "@mui/material/styles";

type NonNullable<T> = Exclude<T, null | undefined>;

export type ShadowsProps = NonNullable<ThemeOptions["shadows"]>;

const disabledShadows = Array(25).fill("none") as ShadowsProps;

interface UseShadowsProps {
  disableElevation: boolean;
}

export const useShadows = ({
  disableElevation,
}: UseShadowsProps): ShadowsProps => {
  return useMemo(
    () =>
      disableElevation
        ? disabledShadows
        : [
            "none",
            "4px 4px 12px rgba(25, 24, 24, 0.12)", // default (card & table row hovers)
            "0px 4px 24px 4px rgba(0, 0, 0, 0.16)", // alt (dropdown, modals, pullouts)
            "4px 4px 12px rgba(25, 24, 24, 0.80)", // dark mode - (card & table row hovers)
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
    [disableElevation]
  );
};
