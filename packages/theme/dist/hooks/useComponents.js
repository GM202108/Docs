"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponents = void 0;
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const utils_1 = require("../utils");
const material_1 = require("@mui/material");
const useComponents = ({ custom, palette, shape, shadows, themeMode, typography, }) => {
    return (0, react_1.useMemo)(() => {
        var _a, _b;
        return ({
            MuiCssBaseline: {
                styleOverrides: {
                    html: {
                        scrollbarColor: `${palette.neutral[200]} ${palette.neutral[50]}`,
                    },
                    a: {
                        color: palette.link.main,
                        textDecoration: "none",
                    },
                    "::selection": {
                        backgroundColor: palette.secondary.main,
                        color: palette.common.white,
                    },
                    "::-webkit-scrollbar-track": {
                        background: palette.neutral[50],
                    },
                    "::-webkit-scrollbar-corner": {
                        background: palette.neutral[50],
                    },
                    "::-webkit-scrollbar": {
                        background: "transparent",
                    },
                    "::-webkit-scrollbar-thumb": {
                        background: palette.neutral[100],
                        borderColor: palette.neutral[100],
                    },
                    body: {
                        scrollbarColor: `${palette.neutral[200]} ${palette.neutral[50]}`,
                        "::-webkit-scrollbar-thumb": {
                            background: palette.neutral[200],
                            borderColor: palette.neutral[200],
                        },
                    },
                },
            },
            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                },
            },
            MuiAlert: {
                defaultProps: {
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                        padding: "8px 16px",
                        ".MuiAlert-message": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                        },
                        ".MuiAlert-icon": {
                            alignItems: "center",
                        },
                    },
                    icon: {
                        fontSize: 30,
                        marginRight: 16,
                    },
                    standardSuccess: {
                        color: (0, styles_1.darken)(palette.success.main, 0.7),
                        background: (0, styles_1.lighten)(palette.success.main, 0.7),
                    },
                    standardWarning: {
                        color: (0, styles_1.darken)(palette.warning.main, 0.7),
                        background: (0, styles_1.lighten)(palette.warning.main, 0.7),
                    },
                    standardError: {
                        color: (0, styles_1.darken)(palette.error.main, 0.7),
                        background: (0, styles_1.lighten)(palette.error.main, 0.7),
                    },
                    standardInfo: {
                        color: (0, utils_1.isDarkThemeMode)(themeMode)
                            ? (0, styles_1.lighten)(palette.info.main, 0.7)
                            : (0, styles_1.darken)(palette.info.main, 0.7),
                        background: (0, utils_1.isDarkThemeMode)(themeMode)
                            ? (0, material_1.alpha)(palette.info.main, 0.25)
                            : (0, material_1.alpha)(palette.info.main, 0.2),
                        ".MuiAlert-icon": {
                            color: (0, utils_1.isDarkThemeMode)(themeMode)
                                ? (0, styles_1.lighten)(palette.info.main, 0.7)
                                : (0, styles_1.darken)(palette.info.main, 0.7),
                        },
                    },
                },
            },
            MuiAlertTitle: {
                styleOverrides: {
                    root: {
                        marginBottom: 0,
                    },
                },
            },
            MuiAvatar: {
                defaultProps: {
                    variant: "square",
                },
                styleOverrides: {
                    colorDefault: {
                        backgroundColor: palette.secondary.main,
                        color: palette.common.white,
                    },
                },
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        backgroundColor: (0, utils_1.isDarkThemeMode)(themeMode)
                            ? "rgba(30, 30, 30, 0.5)"
                            : "rgba(213, 213, 213, 0.5)",
                        "@supports (-moz-appearance:none)": {
                            backgroundColor: (0, utils_1.isDarkThemeMode)(themeMode)
                                ? "rgba(30, 30, 30, 0.95)"
                                : "rgba(213, 213, 213, 0.95)",
                        },
                    },
                },
            },
            MuiBadge: {
                styleOverrides: {
                    dot: {
                        height: 16,
                        minWidth: 16,
                        borderRadius: "50%",
                    },
                },
            },
            MuiBreadcrumbs: {
                styleOverrides: {
                    root: {
                        a: {
                            color: palette.text[100],
                        },
                        ".MuiBreadcrumbs-li:last-of-type": {
                            fontWeight: 600,
                        },
                    },
                },
            },
            MuiIconButton: {
                defaultProps: {
                    color: "default",
                    size: "medium",
                    variant: "text",
                },
                styleOverrides: {
                    root: {
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        "&.Mui-disabled": {
                            opacity: 0.3,
                        },
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    color: "primary",
                    disableElevation: true,
                    size: "large",
                    variant: "contained",
                },
                styleOverrides: {
                    root: {
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        boxShadow: shadows[0],
                        fontSize: ((_a = typography === null || typography === void 0 ? void 0 : typography.body1) === null || _a === void 0 ? void 0 : _a.fontSize) || ".9375rem",
                        fontWeight: 500,
                        lineHeight: 1,
                        "&.Mui-disabled": {
                            opacity: 0.4,
                        },
                    },
                    sizeSmall: {
                        paddingTop: 9,
                        paddingBottom: 9,
                        paddingLeft: 12,
                        paddingRight: 12,
                        svg: {
                            width: 20,
                        },
                    },
                    sizeMedium: {
                        paddingTop: 11,
                        paddingBottom: 11,
                        paddingLeft: 14,
                        paddingRight: 14,
                        svg: {
                            width: 24,
                        },
                    },
                    sizeLarge: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5,
                        paddingLeft: 18,
                        paddingRight: 18,
                        svg: {
                            width: 24,
                        },
                    },
                    startIcon: {
                        marginBottom: -4.5,
                        marginTop: -4.5,
                    },
                    endIcon: {
                        marginBottom: -4.5,
                        marginTop: -4.5,
                    },
                    iconSizeSmall: {
                        svg: {
                            width: 20,
                            marginTop: -2,
                        },
                    },
                    contained: {
                        border: "2px solid",
                    },
                    containedPrimary: {
                        borderColor: palette.primary.main,
                        color: palette.base.main,
                        "&:hover, &:focus": {
                            borderColor: (0, styles_1.darken)(palette.primary.main, 0.1),
                            backgroundColor: (0, styles_1.darken)(palette.primary.main, 0.1),
                        },
                        "&:active": {
                            backgroundColor: palette.primary.main,
                            borderColor: (0, styles_1.darken)(palette.primary.main, 0.1),
                        },
                        "&.Mui-disabled": {
                            color: palette.base.main,
                            backgroundColor: palette.primary.main,
                        },
                    },
                    containedSecondary: {
                        borderColor: palette.secondary.main,
                        color: palette.base.main,
                        "&:hover, &:focus": {
                            borderColor: (0, styles_1.darken)(palette.secondary.main, 0.1),
                            backgroundColor: (0, styles_1.darken)(palette.secondary.main, 0.1),
                        },
                        "&:active": {
                            backgroundColor: palette.secondary.main,
                            borderColor: (0, styles_1.darken)(palette.secondary.main, 0.1),
                        },
                        "&.Mui-disabled": {
                            color: palette.base.main,
                            backgroundColor: palette.secondary.main,
                        },
                    },
                    containedError: {
                        backgroundColor: (0, material_1.alpha)(palette.error.main, 0.65),
                        borderColor: (0, material_1.alpha)(palette.error.main, 0),
                        color: palette.base.main,
                        "&:hover, &:focus": {
                            borderColor: (0, styles_1.darken)(palette.error.main, 0.1),
                            backgroundColor: (0, styles_1.darken)(palette.error.main, 0.1),
                        },
                        "&:active": {
                            backgroundColor: palette.error.main,
                            borderColor: (0, styles_1.darken)(palette.error.main, 0.1),
                        },
                        "&.Mui-disabled": {
                            color: palette.base.main,
                            backgroundColor: palette.error.main,
                            borderColor: palette.error.main,
                        },
                    },
                    containedWarning: {
                        borderColor: palette.warning.main,
                        color: palette.base.main,
                        "&:hover, &:focus": {
                            borderColor: (0, styles_1.darken)(palette.warning.main, 0.1),
                            backgroundColor: (0, styles_1.darken)(palette.warning.main, 0.1),
                        },
                        "&:active": {
                            backgroundColor: palette.warning.main,
                            borderColor: (0, styles_1.darken)(palette.warning.main, 0.1),
                        },
                        "&.Mui-disabled": {
                            color: palette.base.main,
                            backgroundColor: palette.warning.main,
                        },
                    },
                    containedDefault: {
                        borderColor: palette.default.main,
                        "&:hover, &:focus": {
                            borderColor: palette.default.dark,
                            backgroundColor: palette.default.dark,
                        },
                        "&:active": {
                            backgroundColor: palette.default.main,
                            borderColor: palette.default.dark,
                        },
                        "&.Mui-disabled": {
                            color: palette.default.contrastText,
                            backgroundColor: palette.default.main,
                        },
                    },
                    outlined: {
                        borderWidth: 2,
                        "&:hover, &:focus, &.Mui-disabled": {
                            borderWidth: 2,
                        },
                    },
                    outlinedPrimary: {
                        borderColor: palette.primary.main,
                        "&:hover": {
                            color: palette.primary.contrastText,
                            backgroundColor: palette.primary.main,
                        },
                        "&.Mui-disabled": {
                            color: palette.primary.main,
                            borderColor: palette.primary.main,
                        },
                    },
                    outlinedSecondary: {
                        borderColor: palette.secondary.main,
                        "&:hover": {
                            color: palette.secondary.contrastText,
                            backgroundColor: palette.secondary.main,
                        },
                        "&.Mui-disabled": {
                            color: palette.secondary.main,
                            borderColor: palette.secondary.main,
                        },
                    },
                    outlinedError: {
                        borderColor: palette.error.main,
                        "&:hover": {
                            color: palette.common.white,
                            backgroundColor: palette.error.main,
                        },
                        "&.Mui-disabled": {
                            color: palette.error.main,
                            borderColor: palette.error.main,
                        },
                    },
                    outlinedDefault: {
                        color: palette.default.contrastText,
                        borderColor: palette.default.dark,
                        "&:hover": {
                            color: palette.default.contrastText,
                            backgroundColor: palette.default.main,
                        },
                        "&.Mui-disabled": {
                            color: palette.default.contrastText,
                            borderColor: palette.default.dark,
                        },
                    },
                    textDefault: {
                        color: palette.default.contrastText,
                        "&:hover": {
                            color: palette.default.contrastText,
                            backgroundColor: palette.default.main,
                        },
                        "&.Mui-disabled": {
                            color: palette.default.contrastText,
                        },
                    },
                    text: {
                        "&:not(.MuiButton-textPrimary):not(.MuiButton-textSecondary):not(.MuiButton-textInfo):not(.MuiButton-textWarning):not(.MuiButton-textError):not(.MuiButton-textSuccess):not(.MuiButton-textInherit)": {
                            svg: {
                                color: palette.icon.secondary,
                            },
                            "&:hover, &:focus": {
                                svg: {
                                    color: palette.icon.secondaryHover,
                                },
                            },
                        },
                    },
                    textSizeSmall: {
                        paddingTop: 11,
                        paddingBottom: 9,
                        paddingLeft: 12,
                        paddingRight: 12,
                    },
                    textSizeMedium: {
                        paddingTop: 13,
                        paddingBottom: 13,
                        paddingLeft: 16,
                        paddingRight: 16,
                    },
                    textSizeLarge: {
                        paddingTop: 16.5,
                        paddingBottom: 16.5,
                        paddingLeft: 20,
                        paddingRight: 20,
                    },
                },
            },
            MuiButtonGroup: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        "> button:last-of-type": {
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                        },
                        "> .MuiButtonGroup-grouped:not(:last-of-type).Mui-disabled": {
                            borderRightColor: "rgba(255, 255, 255, 0.80);",
                        },
                    },
                    groupedContainedPrimary: {
                        "&:not(:last-of-type)": {
                            borderColor: palette.primary.main,
                            borderRight: `1px solid ${(0, styles_1.lighten)(palette.primary.main, 0.3)}`,
                            "&:hover, &:focus": {
                                borderColor: (0, styles_1.darken)(palette.primary.main, 0.1),
                                backgroundColor: (0, styles_1.darken)(palette.primary.main, 0.1),
                            },
                        },
                        "+ :last-of-type": {
                            borderLeft: 0,
                        },
                    },
                    groupedContainedSecondary: {
                        "&:not(:last-of-type)": {
                            borderColor: palette.secondary.main,
                            borderRight: `1px solid ${(0, styles_1.lighten)(palette.secondary.main, 0.3)}`,
                            "&:hover, &:focus": {
                                borderColor: (0, styles_1.darken)(palette.secondary.main, 0.1),
                                backgroundColor: (0, styles_1.darken)(palette.secondary.main, 0.1),
                            },
                        },
                        "+ :last-of-type": {
                            borderLeft: 0,
                        },
                    },
                    groupedOutlinedHorizontal: {
                        "&.MuiButtonGroup-grouped:not(:first-of-type)": {
                            marginLeft: "-2px",
                        },
                    },
                },
                variants: [
                    {
                        props: { variant: "spaced" },
                        style: {
                            "& > button": {
                                marginRight: 4,
                                borderRadius: `${shape === null || shape === void 0 ? void 0 : shape.borderRadius}px !important`,
                            },
                            "& > button:last-child": {
                                marginRight: 0,
                            },
                        },
                    },
                ],
            },
            MuiChip: {
                defaultProps: {
                    variant: "filled",
                    size: "medium",
                    color: "default",
                },
                styleOverrides: {
                    root: {
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        ...typography.body1,
                        "a &": {
                            cursor: "pointer",
                        },
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    root: {
                        backdropFilter: "blur(7px)",
                        ".MuiDialog-paper": {
                            background: palette.background.paper,
                            borderRadius: (_b = shape === null || shape === void 0 ? void 0 : shape.borderRadius) !== null && _b !== void 0 ? _b : "4px",
                            width: "100%",
                        },
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        padding: "20px 40px 40px",
                    },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        padding: "20px 40px",
                        "> *:last-child, > *:last-child > .MuiFormControl-root": {
                            marginBottom: 0,
                        },
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        padding: "40px 40px 20px",
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        ...typography.label,
                        color: palette.label.main,
                        marginBottom: 8,
                        maxWidth: "calc(100% - 1em)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        "&.Mui-focused": {
                            color: palette.label.main,
                        },
                    },
                },
            },
            MuiFormHelperText: {
                styleOverrides: {
                    root: {
                        margin: 0,
                        marginTop: 4,
                    },
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: "hover",
                },
            },
            MuiList: {
                defaultProps: {
                    disablePadding: true,
                },
            },
            MuiListSubheader: {
                styleOverrides: {
                    root: {
                        color: palette.modes.current.text[85],
                        backgroundColor: "transparent",
                        paddingBottom: 14,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                        ...typography.h5,
                    },
                },
            },
            MuiMenu: {
                defaultProps: {
                    MenuListProps: {
                        disablePadding: true,
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        paddingBottom: 10,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 10,
                        whiteSpace: "pre-wrap",
                        "&:hover, &:focus": {
                            backgroundColor: palette.default.light,
                        },
                        "&.Mui-selected": {
                            backgroundColor: palette.default.main,
                            "&:hover, &:focus": {
                                backgroundColor: palette.default.light,
                            },
                        },
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        marginBottom: 24,
                        maxWidth: custom.input.maxWidth,
                        width: "100%",
                        ".MuiFormControl-root:last-child": {
                            marginBottom: 0,
                        },
                    },
                    fullWidth: {
                        maxWidth: "100%",
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: "outlined",
                    autoComplete: "off",
                },
                styleOverrides: {
                    root: {
                        maxWidth: custom.input.maxWidth,
                        width: "100%",
                        "&.MuiFormControl-fullWidth": {
                            maxWidth: "100%",
                        },
                        ".MuiSelect-select.MuiInputBase-inputAdornedEnd": {
                            paddingRight: "75px !important",
                            "~ .circularProgress, ~ .MuiInputAdornment-positionEnd": {
                                height: "20px !important",
                                position: "absolute",
                                right: 50,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "20px !important",
                                "> .MuiCircularProgress-root, svg": {
                                    width: "20px !important",
                                    height: "20px !important",
                                },
                            },
                            "~ .MuiBox-root, ~ .MuiButtonBase-root": {
                                position: "absolute",
                                right: 42,
                                top: "50%",
                                transform: "translateY(-50%)",
                            },
                            "~ .MuiBox-root .MuiButtonBase-root, ~ .MuiButtonBase-root": {
                                paddingBottom: 8,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 8,
                                svg: {
                                    height: "20px !important",
                                    width: "20px !important",
                                },
                            },
                        },
                    },
                },
            },
            MuiFilledInput: {
                defaultProps: {
                    disableUnderline: true,
                    hiddenLabel: true,
                },
                styleOverrides: {
                    root: {
                        backgroundColor: palette.default.main,
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        "&.Mui-focused, &:hover, &:focus": {
                            backgroundColor: palette.default.main,
                        },
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        marginBottom: 24,
                        maxWidth: custom.input.maxWidth,
                        width: "100%",
                        ".MuiInputBase-root": {
                            padding: "8px",
                        },
                    },
                    fullWidth: {
                        maxWidth: "100%",
                    },
                    popper: {
                        boxShadow: shadows[2],
                        borderRadius: 0,
                        borderBottomLeftRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        borderBottomRightRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                    },
                    paper: {
                        backgroundColor: (0, utils_1.isDarkThemeMode)(themeMode)
                            ? palette.background.paper
                            : palette.common.white,
                        borderRadius: 0,
                        borderBottomLeftRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        borderBottomRightRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                    },
                    listbox: {
                        padding: 0,
                        ".MuiAutocomplete-option": {
                            background: (0, utils_1.isDarkThemeMode)(themeMode)
                                ? palette.background.paper
                                : palette.common.white,
                            paddingBottom: 8,
                            paddingTop: 8,
                            borderBottom: `1px solid ${(0, utils_1.isDarkThemeMode)(themeMode)
                                ? "rgba(255, 255, 255, .1)"
                                : "rgba(255, 255, 255, .8)"}`,
                            "&:last-child": {
                                borderBottom: 0,
                            },
                            "&[aria-selected='false']": {
                                background: "inherit",
                            },
                            "&.Mui-focused, &:hover, &:focus": {
                                background: palette.default.main,
                            },
                            "&[aria-selected='true'], &[aria-selected='true'].Mui-focused": {
                                background: palette.default.light,
                            },
                        },
                    },
                    endAdornment: {
                        right: "16px !important",
                    },
                    popupIndicator: {
                        marginLeft: 8,
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        maxWidth: custom.input.maxWidth,
                        width: "100%",
                        "&.MuiInputBase-fullWidth": {
                            maxWidth: "100%",
                        },
                        svg: {
                            color: palette.icon.secondary,
                        },
                        ".MuiInputBase-input": {
                            paddingBottom: 14,
                            paddingTop: 15,
                        },
                        "&.MuiInputBase-multiline": {
                            paddingBottom: 14,
                            paddingTop: 15,
                            ".MuiInputBase-input": {
                                padding: 0,
                            },
                        },
                        ".MuiSelect-select.MuiInputBase-inputAdornedEnd": {
                            "~ .MuiButtonBase-root": {
                                marginRight: 26,
                            },
                        },
                        ".MuiInputAdornment-positionStart": {
                            marginRight: "16px !important",
                            marginTop: "0px !important",
                        },
                        ".MuiInputBase-adornedEnd": {
                            paddingRight: 8,
                        },
                        ".MuiInputAdornment-positionEnd svg": {
                            marginRight: 0,
                        },
                    },
                },
            },
            MuiModal: {
                styleOverrides: {
                    root: {
                        ".MuiDialog-paper, .MuiPopover-paper": {
                            backgroundColor: palette.base.main,
                            border: "none",
                        },
                        ".MuiDialog-paper.MuiPaper-elevation, .MuiPopover-paper.MuiPaper-elevation": {
                            boxShadow: shadows[2],
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                defaultProps: {
                    notched: false,
                },
                styleOverrides: {
                    root: {
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        backgroundColor: "transparent",
                        [`.${OutlinedInput_1.outlinedInputClasses["notchedOutline"]}`]: {
                            minWidth: "auto",
                            borderColor: palette.border.main,
                        },
                        [`&.Mui-error .${OutlinedInput_1.outlinedInputClasses["notchedOutline"]}`]: {
                            borderColor: palette.error.main,
                        },
                        [`&:not(.Mui-error):hover .${OutlinedInput_1.outlinedInputClasses["notchedOutline"]}`]: {
                            borderColor: palette.border.dark,
                        },
                        [`&.Mui-focused:not(.Mui-error):hover .${OutlinedInput_1.outlinedInputClasses["notchedOutline"]}`]: {
                            borderColor: palette.primary.main,
                        },
                        "&.Mui-disabled": {
                            backgroundColor: palette.neutral[100],
                            ".MuiInputBase-input::-webkit-scrollbar-track": {
                                background: palette.neutral[200],
                            },
                            ".MuiInputBase-input::-webkit-scrollbar-thumb": {
                                background: palette.neutral[300],
                                borderColor: palette.neutral[300],
                            },
                            [`& .${OutlinedInput_1.outlinedInputClasses["notchedOutline"]}`]: {
                                borderColor: `${palette.neutral[100]}!important`,
                            },
                        },
                    },
                },
            },
            MuiInputLabel: {
                defaultProps: {
                    disableAnimation: true,
                    shrink: true,
                    variant: "filled",
                },
                styleOverrides: {
                    root: {
                        ...typography.label,
                        color: palette.label.main,
                        margin: 0,
                        marginBottom: 8,
                        pointerEvents: "initial",
                        position: "relative",
                        transform: "none",
                        "&.Mui-focused, &.Mui-disabled, &.Mui-error": {
                            color: palette.label.main,
                        },
                    },
                },
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                        backgroundImage: "unset",
                        backgroundColor: (0, utils_1.isDarkThemeMode)(themeMode)
                            ? palette.brand.gray[100]
                            : palette.common.white,
                    },
                },
            },
            MuiPopover: {
                defaultProps: {
                    BackdropProps: {
                        style: {
                            background: "transparent",
                        },
                    },
                },
                styleOverrides: {
                    paper: {
                        border: `1px solid ${(0, utils_1.isDarkThemeMode)(themeMode)
                            ? palette.brand.gray[100]
                            : palette.brand.gray[40]}`,
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        paddingRight: "40px !important",
                    },
                    icon: {
                        right: 12,
                    },
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        marginBottom: 6,
                        marginTop: 6,
                        padding: 6,
                        ".MuiSwitch-track": {
                            backgroundColor: palette.neutral[300],
                            borderRadius: 16,
                            opacity: 1,
                        },
                        ".MuiSwitch-thumb": {
                            backgroundColor: palette.common.white,
                            boxShadow: shadows[1],
                            opacity: 1,
                        },
                        ".MuiSwitch-switchBase.Mui-checked": {
                            ".MuiSwitch-thumb": {
                                backgroundColor: palette.common.white,
                                opacity: 1,
                            },
                            "& + .MuiSwitch-track": {
                                opacity: 1,
                            },
                        },
                        ".MuiSwitch-switchBase.Mui-disabled": {
                            ".MuiSwitch-thumb, & + .MuiSwitch-track": {
                                opacity: 0.5,
                            },
                        },
                    },
                },
            },
            MuiSlider: {
                styleOverrides: {
                    rail: {
                        background: palette.neutral[300],
                        opacity: 1,
                    },
                },
            },
            MuiTab: {
                defaultProps: {
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        color: palette.text.secondary,
                        fontSize: 15,
                        fontWeight: 600,
                        marginLeft: 0,
                        marginRight: 40,
                        minWidth: "unset",
                        opacity: 1,
                        padding: 0,
                        paddingBottom: 20,
                        overflow: "visible",
                        "&.Mui-selected": {
                            color: palette.text.secondary,
                            borderColor: palette.secondary.main,
                            opacity: 1,
                        },
                        ".MuiBadge-badge": {
                            right: -11,
                            top: 5,
                        },
                    },
                },
            },
            MuiTabs: {
                defaultProps: {
                    indicatorColor: "secondary",
                },
            },
            MuiTable: {
                styleOverrides: {
                    root: {
                        paddingLeft: 12,
                        paddingRight: 12,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: 20,
                        position: "relative",
                        zIndex: 1,
                    },
                    head: {
                        borderBottom: `2px solid ${palette.neutral[400]}}`,
                    },
                    body: {
                        borderColor: palette.divider,
                        wordBreak: "break-word",
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        position: "relative",
                        zIndex: 1,
                        "&.MuiTableRow-hover": {
                            cursor: "pointer",
                            transition: "box-shadow 200ms ease",
                            "&:hover": {
                                backgroundColor: `${palette.base.main} !important`,
                                borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                                boxShadow: shadows[1],
                                ".MuiTableCell-root": {
                                    borderBottom: "1px solid transparent",
                                    "&:first-of-type": {
                                        borderBottomLeftRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                                        borderTopLeftRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                                    },
                                    "&:last-of-type": {
                                        borderBottomRightRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                                        borderTopRightRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                                    },
                                },
                            },
                        },
                        ".MuiCheckbox-root": {
                            padding: 0,
                        },
                    },
                },
            },
            MuiDrawer: {
                defaultProps: {
                    elevation: 2,
                },
                styleOverrides: {
                    paper: {
                        backgroundColor: palette.base.main,
                    },
                },
            },
            MuiRadio: {
                styleOverrides: {
                    root: {
                        color: palette.icon.secondary,
                        "&:hover, &:focus": {
                            color: palette.icon.secondaryHover,
                        },
                    },
                },
            },
            MuiTooltip: {
                defaultProps: {
                    arrow: true,
                    placement: "top",
                    enterDelay: 300,
                },
                styleOverrides: {
                    tooltip: {
                        backgroundColor: palette.base.main,
                        borderRadius: shape === null || shape === void 0 ? void 0 : shape.borderRadius,
                        boxShadow: shadows[2],
                        color: palette.text[100],
                        margin: 0,
                        padding: "0.8125rem",
                        ...typography.body1,
                        "&.MuiTooltip-tooltipPlacementTop": {
                            marginBottom: "12px !important",
                        },
                        "&.MuiTooltip-tooltipPlacementBottom": {
                            marginTop: "12px !important",
                        },
                        "&.MuiTooltip-tooltipPlacementRight": {
                            marginLeft: "12px !important",
                        },
                        "&.MuiTooltip-tooltipPlacementLeft": {
                            marginRight: "12px !important",
                        },
                    },
                    arrow: {
                        color: palette.base.main,
                    },
                },
            },
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        body3: "p",
                        label: "label",
                    },
                },
            },
            MuiStepIcon: {
                styleOverrides: {
                    text: {
                        fontSize: 8,
                        textAnchor: "middle",
                        transform: "translateY(-1px)",
                    },
                },
            },
            MuiSnackbar: {
                styleOverrides: {
                    root: {
                        ".MuiAlert-root": {
                            padding: 16,
                            ".MuiAlert-action": {
                                alignItems: "center",
                                paddingRight: 8,
                            },
                        },
                    },
                },
            },
            MuiCalendarPicker: {
                defaultProps: {
                    componentsProps: {
                        leftArrowButton: { "data-cy": "previous-month" },
                        rightArrowButton: { "data-cy": "next-month" },
                        switchViewButton: { "data-cy": "switch-view" },
                    },
                },
                styleOverrides: {
                    root: {
                        backgroundColor: palette.base.main,
                    },
                },
            },
            MuiClockPicker: {
                styleOverrides: {
                    root: {
                        backgroundColor: palette.base.main,
                    },
                },
            },
        });
    }, [themeMode, palette, custom]);
};
exports.useComponents = useComponents;
//# sourceMappingURL=useComponents.js.map