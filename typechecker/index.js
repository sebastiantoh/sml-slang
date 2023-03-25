"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hindleyMilner = void 0;
const environment_1 = require("./environment");
const utils_1 = require("./utils");
function hindleyMilner(env, node) {
    switch (node.tag) {
        /* Expressions */
        // Constant
        case 'IntConstant':
        case 'RealConstant':
        case 'StringConstant':
        case 'CharConstant':
        case 'BoolConstant':
        case 'UnitConstant':
            return [node.type, []];
        // Variable
        case 'Variable':
            const ts = (0, environment_1.getTypeSchemeFromEnv)(env, node.id);
            return [(0, environment_1.instantiate)(ts), []];
    }
    return [utils_1.UNIT_TY, []];
}
exports.hindleyMilner = hindleyMilner;
//# sourceMappingURL=index.js.map