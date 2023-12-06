"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCustom = exports.defaultShape = exports.defaultPalette = exports.deprecatedThemeKeyHash = exports.defaultThemeOptions = exports.useTheme = void 0;
const useCustom_1 = require("./hooks/useCustom");
Object.defineProperty(exports, "defaultCustom", { enumerable: true, get: function () { return useCustom_1.defaultCustom; } });
const usePalette_1 = require("./hooks/usePalette");
Object.defineProperty(exports, "defaultPalette", { enumerable: true, get: function () { return usePalette_1.defaultPalette; } });
const useShape_1 = require("./hooks/useShape");
Object.defineProperty(exports, "defaultShape", { enumerable: true, get: function () { return useShape_1.defaultShape; } });
var useTheme_1 = require("./hooks/useTheme");
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return useTheme_1.useTheme; } });
__exportStar(require("./utils"), exports);
__exportStar(require("./colors"), exports);
exports.defaultThemeOptions = {
    ...useCustom_1.defaultCustom,
    ...usePalette_1.defaultPalette,
    ...useShape_1.defaultShape,
};
exports.deprecatedThemeKeyHash = {
    ...usePalette_1.deprecatedColorKeyHash,
    ...useShape_1.deprecatedShapeKeyHash,
    ...useCustom_1.deprecatedCustomKeyHash,
};
//# sourceMappingURL=index.js.map