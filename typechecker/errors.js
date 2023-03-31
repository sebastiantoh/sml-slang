"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseError = exports.RuntimeError = exports.CustomSourceError = exports.TypeMismatchError = exports.TypeError = exports.UNKNOWN_LOCATION = void 0;
const types_1 = require("../types");
const utils_1 = require("./utils");
exports.UNKNOWN_LOCATION = {
    start: {
        line: -1,
        column: -1
    },
    end: {
        line: -1,
        column: -1
    }
};
class TypeError {
    constructor(node) {
        this.node = node;
        this.type = types_1.ErrorType.TYPE;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    get location() {
        var _a;
        return (_a = this.node.loc) !== null && _a !== void 0 ? _a : exports.UNKNOWN_LOCATION;
    }
    explain() {
        return 'Type error has occurred :(';
    }
    elaborate() {
        return this.explain();
    }
}
exports.TypeError = TypeError;
class TypeMismatchError extends TypeError {
    constructor(node, expected, got) {
        super(node);
        this.node = node;
        this.expected = expected;
        this.got = got;
    }
    explain() {
        return `This expression has type ${(0, utils_1.stringifyType)(this.got)} but an expression was expected of type ${(0, utils_1.stringifyType)(this.expected)}`;
    }
    elaborate() {
        return this.explain();
    }
}
exports.TypeMismatchError = TypeMismatchError;
class CustomSourceError {
    constructor(node, message) {
        this.node = node;
        this.message = message;
        this.type = types_1.ErrorType.TYPE;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    get location() {
        var _a;
        return (_a = this.node.loc) !== null && _a !== void 0 ? _a : exports.UNKNOWN_LOCATION;
    }
    explain() {
        var _a;
        return (_a = this.message) !== null && _a !== void 0 ? _a : 'Unexpected error has occurred :(';
    }
    elaborate() {
        return this.explain();
    }
}
exports.CustomSourceError = CustomSourceError;
class RuntimeError {
    constructor(message) {
        this.message = message;
        this.type = types_1.ErrorType.TYPE;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    get location() {
        return exports.UNKNOWN_LOCATION;
    }
    explain() {
        var _a;
        return (_a = this.message) !== null && _a !== void 0 ? _a : 'Unexpected error has occurred :(';
    }
    elaborate() {
        return this.explain();
    }
}
exports.RuntimeError = RuntimeError;
class ParseError {
    constructor(loc, message) {
        this.loc = loc;
        this.message = message;
        this.type = types_1.ErrorType.TYPE;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    get location() {
        var _a;
        return (_a = this.loc) !== null && _a !== void 0 ? _a : exports.UNKNOWN_LOCATION;
    }
    explain() {
        var _a;
        return (_a = this.message) !== null && _a !== void 0 ? _a : 'Unexpected error has occurred :(';
    }
    elaborate() {
        return this.explain();
    }
}
exports.ParseError = ParseError;
//# sourceMappingURL=errors.js.map