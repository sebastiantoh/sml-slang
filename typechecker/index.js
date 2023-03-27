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
        case 'UnitConstant': {
            return [node.type, []];
        }
        // Variable
        case 'Variable': {
            const ts = (0, environment_1.getTypeSchemeFromEnv)(env, node.id);
            return [(0, environment_1.instantiate)(ts), []];
        }
        // Application
        case 'Application': {
            const t = (0, environment_1.freshTypeVariable)();
            const [t1, C1] = hindleyMilner(env, node.fn);
            const [t2, C2] = hindleyMilner(env, node.arg);
            return [t, [...C1, ...C2, { type1: t1, type2: { parameterType: t2, returnType: t } }]];
        }
        // Infix Application
        case 'InfixApplication': {
            const [t1, t2, t3] = (0, environment_1.getPrimitiveFuncTypes)(env, node.id);
            const [t4, C1] = hindleyMilner(env, node.operand1);
            const [t5, C2] = hindleyMilner(env, node.operand2);
            return [t3, [...C1, ...C2, { type1: t1, type2: t4 }, { type1: t2, type2: t5 }]];
        }
        // List
        case 'ListLiteral': {
            const t = (0, environment_1.freshTypeVariable)();
            let C = [];
            for (const el of node.elements) {
                const [tmp_ty, tmp_C] = hindleyMilner(env, el);
                C = [...C, ...tmp_C, { type1: t, type2: tmp_ty }];
            }
            return [t, C];
        }
        // Let Expression
        case 'LetExpression': {
            const extendedEnv = (0, environment_1.extendTypeEnv)(env, node.decs);
            let t = utils_1.UNIT_TY;
            let C = [];
            for (const exp of node.exps) {
                ;
                [t, C] = hindleyMilner(extendedEnv, exp);
            }
            return [t, C];
        }
        // Expression Sequence
        case 'ExpSequence': {
            let t = utils_1.UNIT_TY;
            let C = [];
            for (const exp of node.exps) {
                ;
                [t, C] = hindleyMilner(env, exp);
            }
            return [t, C];
        }
        // Conditional
        case 'ConditionalExpression': {
            const t = (0, environment_1.freshTypeVariable)();
            const [t1, C1] = hindleyMilner(env, node.pred);
            const [t2, C2] = hindleyMilner(env, node.consequent);
            const [t3, C3] = hindleyMilner(env, node.alternative);
            return [
                t,
                [
                    ...C1,
                    ...C2,
                    ...C3,
                    { type1: t1, type2: utils_1.BOOL_TY },
                    { type1: t, type2: t2 },
                    { type1: t, type2: t3 }
                ]
            ];
        }
        // Function
        case 'Function': {
            throw new Error('TODO');
        }
        /* Programs */
        case 'Program': {
            // suffices to typecheck declarations in the program
            const _ = (0, environment_1.extendTypeEnv)(env, node.body);
            return [utils_1.UNIT_TY, []];
        }
    }
    return [utils_1.UNIT_TY, []];
}
exports.hindleyMilner = hindleyMilner;
//# sourceMappingURL=index.js.map