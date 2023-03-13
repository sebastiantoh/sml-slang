"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeError = void 0;
const types_1 = require("../types");
const UNKNOWN_LOCATION = {
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
        return (_a = this.node.loc) !== null && _a !== void 0 ? _a : UNKNOWN_LOCATION;
    }
    explain() {
        return 'Type error has occurred :(';
    }
    elaborate() {
        return this.explain();
    }
}
exports.TypeError = TypeError;
//# sourceMappingURL=errors.js.map