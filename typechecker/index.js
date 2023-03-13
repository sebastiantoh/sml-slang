"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeCheck = void 0;
const UNIT_TYPE = 'unit';
function typeCheck(node) {
    switch (node.tag) {
        /* Constants */
        case 'IntConstant':
        case 'RealConstant':
        case 'StringConstant':
        case 'CharConstant':
        case 'BoolConstant':
        case 'UnitConstant':
            return node.type;
    }
    return UNIT_TYPE;
}
exports.typeCheck = typeCheck;
//# sourceMappingURL=index.js.map