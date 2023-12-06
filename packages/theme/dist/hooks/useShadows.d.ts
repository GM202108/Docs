import { ThemeOptions } from "@mui/material/styles";
declare type NonNullable<T> = Exclude<T, null | undefined>;
export declare type ShadowsProps = NonNullable<ThemeOptions["shadows"]>;
interface UseShadowsProps {
    disableElevation: boolean;
}
export declare const useShadows: ({ disableElevation, }: UseShadowsProps) => import("@mui/material/styles/shadows").Shadows;
export {};
