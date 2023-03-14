"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeCheckConditional = void 0;
const _1 = require(".");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
function typeCheckConditional(node) {
    const pred = (0, _1.typeCheck)(node.pred);
    if (!(0, utils_1.isBool)(pred)) {
        throw new errors_1.TypeMismatchError(node.pred, utils_1.BOOL_TY, pred);
    }
    const consequent = (0, _1.typeCheck)(node.consequent);
    const alternative = (0, _1.typeCheck)(node.alternative);
    if (!(0, utils_1.isSameType)(consequent, alternative)) {
        throw new errors_1.TypeMismatchError(node.alternative, consequent, alternative);
    }
    return consequent;
}
exports.typeCheckConditional = typeCheckConditional;
//# sourceMappingURL=expressions.js.map