"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = exports.Chapter = exports.ErrorSeverity = exports.ErrorType = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType["SYNTAX"] = "Syntax";
    ErrorType["TYPE"] = "Type";
    ErrorType["RUNTIME"] = "Runtime";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var ErrorSeverity;
(function (ErrorSeverity) {
    ErrorSeverity["WARNING"] = "Warning";
    ErrorSeverity["ERROR"] = "Error";
})(ErrorSeverity = exports.ErrorSeverity || (exports.ErrorSeverity = {}));
var Chapter;
(function (Chapter) {
    Chapter[Chapter["SML_SLANG"] = 1] = "SML_SLANG";
})(Chapter = exports.Chapter || (exports.Chapter = {}));
var Variant;
(function (Variant) {
    Variant["DEFAULT"] = "sml-slang";
})(Variant = exports.Variant || (exports.Variant = {}));
// tslint:enable:no-any
//# sourceMappingURL=types.js.map