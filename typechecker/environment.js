"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantiate = exports.getTypeSchemeFromEnv = exports.createInitialTypeEnvironment = void 0;
const utils_1 = require("./utils");
const primitiveFuncs = [
    ['/', { type: (0, utils_1.makeFunctionType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY), typeVariables: [] }],
    ['div', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['mod', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['div', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['+', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['*', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['-', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['^', { type: (0, utils_1.makeFunctionType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.STR_TY), typeVariables: [] }],
    ...['=', '<>', '<', '>', '<=', '>=', 'print'].map(comp => 
    // TODO: might need to update these to equality type variables (''a, ''b, etc.)
    [
        comp,
        {
            type: (0, utils_1.makeFunctionType)(utils_1.DUMMY_TYPE_VAR_TY, utils_1.DUMMY_TYPE_VAR_TY, utils_1.DUMMY_TYPE_VAR_TY),
            typeVariables: [utils_1.DUMMY_TYPE_VAR_TY]
        }
    ])
];
function createInitialTypeEnvironment() {
    // initial type env only contains inbuilt funcs
    return Object.fromEntries(primitiveFuncs);
}
exports.createInitialTypeEnvironment = createInitialTypeEnvironment;
function getTypeSchemeFromEnv(env, id) {
    if (!env.hasOwnProperty(id)) {
        throw new Error(`Unbound value identifier "${id}".`);
    }
    return env[id];
}
exports.getTypeSchemeFromEnv = getTypeSchemeFromEnv;
let CUR_FRESH_VAR = 0;
function freshTypeVariable() {
    return { id: CUR_FRESH_VAR++ };
}
function instantiate(typeScheme) {
    const typeMappings = typeScheme.typeVariables.map(tv => [tv, freshTypeVariable()]);
    function substitute(type) {
        if ((0, utils_1.isPrimitiveType)(type)) {
            return type;
        }
        if ((0, utils_1.isFunctionType)(type)) {
            return {
                parameterType: substitute(type.parameterType),
                returnType: substitute(type.returnType)
            };
        }
        if ((0, utils_1.isListType)(type)) {
            return {
                elementType: substitute(type.elementType)
            };
        }
        for (const [typeVar, freshTypeVar] of typeMappings) {
            if (typeVar == type) {
                return freshTypeVar;
            }
        }
        return type;
    }
    return substitute(typeScheme.type);
}
exports.instantiate = instantiate;
//# sourceMappingURL=environment.js.map