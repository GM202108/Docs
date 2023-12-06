"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShadows = void 0;
const react_1 = require("react");
const disabledShadows = Array(25).fill("none");
const useShadows = ({ disableElevation, }) => {
    return (0, react_1.useMemo)(() => disableElevation
        ? disabledShadows
        : [
            "none",
            "4px 4px 12px rgba(25, 24, 24, 0.12)",
            "0px 4px 24px 4px rgba(0, 0, 0, 0.16)",
            "4px 4px 12px rgba(25, 24, 24, 0.80)",
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
        ], [disableElevation]);
};
exports.useShadows = useShadows;
//# sourceMappingURL=useShadows.js.map