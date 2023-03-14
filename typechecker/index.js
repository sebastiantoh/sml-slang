"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeCheck = void 0;
const expressions_1 = require("./expressions");
const utils_1 = require("./utils");
function typeCheck(node) {
    switch (node.tag) {
        /* Constant */
        case 'IntConstant':
        case 'RealConstant':
        case 'StringConstant':
        case 'CharConstant':
        case 'BoolConstant':
        case 'UnitConstant':
            return node.type;
        /* Application */
        /* InfixApplication */
        /* ExpSequence */
        /* LetExpression */
        /* ConditionalExpression */
        case 'ConditionalExpression':
            return (0, expressions_1.typeCheckConditional)(node);
        /* Function */
        /* Match */
        case 'Match':
            return {
                parameterType: typeCheck(node.pat),
                returnType: typeCheck(node.exp)
            };
    }
    return utils_1.UNIT_TY;
}
exports.typeCheck = typeCheck;
//# sourceMappingURL=index.js.map