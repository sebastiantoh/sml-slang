"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unifyAndSubstitute = exports.substituteIntoType = exports.unify = exports.instantiate = exports.getPrimitiveFuncTypes = exports.extendTypeEnvFromPattern = exports.extendTypeEnv = exports.getTypeSchemeFromEnv = exports.createInitialTypeEnvironment = exports.freshTypeVariable = void 0;
const assert = require("assert");
const lodash_1 = require("lodash");
const _1 = require(".");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
let CUR_FRESH_VAR = 0;
function freshTypeVariable() {
    return { id: CUR_FRESH_VAR++ };
}
exports.freshTypeVariable = freshTypeVariable;
const primitiveFuncs = [
    ['/', { type: (0, utils_1.makeFunctionType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY), typeVariables: [] }],
    ['div', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['mod', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['div', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['+', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['*', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['-', { type: (0, utils_1.makeFunctionType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), typeVariables: [] }],
    ['^', { type: (0, utils_1.makeFunctionType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.STR_TY), typeVariables: [] }],
    [
        '::',
        (function () {
            const t = freshTypeVariable();
            const tList = { elementType: t };
            return { type: (0, utils_1.makeFunctionType)(t, tList, tList), typeVariables: [t] };
        })()
    ],
    [
        '@',
        (function () {
            const t = freshTypeVariable();
            const tList = { elementType: t };
            return { type: (0, utils_1.makeFunctionType)(tList, tList, tList), typeVariables: [t] };
        })()
    ],
    ...['=', '<>', '<', '>', '<=', '>='].map(comp => {
        const t = freshTypeVariable();
        // TODO: might need to update these to equality type variables (''a, ''b, etc.)
        return [
            comp,
            {
                type: (0, utils_1.makeFunctionType)(t, t, t),
                typeVariables: [t]
            }
        ];
    }),
    [
        'print',
        (function () {
            const t = freshTypeVariable();
            return { type: (0, utils_1.makeFunctionType)(t, utils_1.UNIT_TY), typeVariables: [t] };
        })()
    ],
    ['size', { type: (0, utils_1.makeFunctionType)(utils_1.STR_TY, utils_1.INT_TY), typeVariables: [] }],
    ['not', { type: (0, utils_1.makeFunctionType)(utils_1.BOOL_TY, utils_1.BOOL_TY), typeVariables: [] }]
];
function createInitialTypeEnvironment() {
    // initial type env only contains inbuilt funcs
    return Object.fromEntries(primitiveFuncs);
}
exports.createInitialTypeEnvironment = createInitialTypeEnvironment;
function getTypeSchemeFromEnv(env, expVar) {
    if (!env.hasOwnProperty(expVar.id)) {
        throw new errors_1.CustomSourceError(expVar, `Unbound value identifier "${expVar.id}".`);
    }
    return env[expVar.id];
}
exports.getTypeSchemeFromEnv = getTypeSchemeFromEnv;
function extendTypeEnv(env, decs) {
    for (const dec of decs) {
        switch (dec.tag) {
            case 'ValueDeclaration': {
                for (const valbind of dec.valbinds) {
                    switch (valbind.pat.tag) {
                        // if wildcard, we typecheck the expression and simply ignore the dec
                        case 'Wildcard': {
                            const [_, __] = (0, _1.hindleyMilner)(env, valbind.exp);
                            break;
                        }
                        // if unit, check that rhs is also unit
                        case 'UnitConstant': {
                            const [t, _] = (0, _1.hindleyMilner)(env, valbind.exp);
                            if (!(0, utils_1.isUnit)(t)) {
                                throw new errors_1.TypeMismatchError(valbind.exp, utils_1.UNIT_TY, t);
                            }
                            break;
                        }
                        // if constant, we check that lhs value = rhs value
                        case 'IntConstant':
                        case 'RealConstant':
                        case 'StringConstant':
                        case 'CharConstant':
                        case 'BoolConstant': {
                            const [expType, _] = (0, _1.hindleyMilner)(env, valbind.exp);
                            const [patType, __] = (0, _1.hindleyMilner)(env, valbind.pat);
                            if (patType !== expType) {
                                throw new errors_1.CustomSourceError(valbind, `Invalid constant binding. Expected type ${patType}, got ${expType}.`);
                            }
                            break;
                        }
                        case 'PatVariable': {
                            // Create new type variable for the pattern type and assign it to env
                            const patTy = freshTypeVariable();
                            if (valbind.isRec) {
                                const newEnv = (0, lodash_1.cloneDeep)(env);
                                newEnv[valbind.pat.id] = {
                                    type: patTy,
                                    typeVariables: []
                                };
                                // Since the RHS may refer to this pattern ID in the case of recursive functions
                                // we need to infer type of RHS in this new env
                                const [t, C] = (0, _1.hindleyMilner)(newEnv, valbind.exp);
                                // Now that we've solved the type of the RHS, we add a constraint to the pat type
                                C.push({ type1: patTy, type2: t });
                                env = generalize(C, env, valbind.pat.id, t);
                            }
                            else {
                                const [t, C] = (0, _1.hindleyMilner)(env, valbind.exp);
                                env = generalize(C, env, valbind.pat.id, t);
                            }
                            break;
                        }
                        // Intentional fallthrough
                        case 'InfixConstruction':
                        case 'ListPattern': {
                            const [t, _] = (0, _1.hindleyMilner)(env, valbind.exp);
                            env = extendTypeEnvFromPattern(env, valbind.pat, t);
                            break;
                        }
                        default: {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore: The following line will throw a compile error if all the
                            // case statements are implemented (i.e. this branch is never taken).
                            throw new errors_1.CustomSourceError(valbind.pat, `unimplemented for ${valbind.pat.tag}`);
                        }
                    }
                }
                break;
            }
            case 'LocalDeclaration': {
                const envWithLocalDecs = extendTypeEnv(env, dec.localDecs);
                const envWithDecs = extendTypeEnv(envWithLocalDecs, dec.decs);
                /*
                  now we remove all declarations from local declarations
                  make sure things like `local val x = 5 in val x = 3 end;` work as expected
        
                  TODO: figure out if theres a nice way of doing this without needing a seperate function extendTypeEnvWithLocalDecs(env, decs, envWithLocalDecs)
                    perhaps we cld have an optional third param for this function envWithLocalDecs, which is used as the env if defined?
                    right now this doesnt work properly!
                */
                return envWithDecs;
            }
        }
    }
    return env;
}
exports.extendTypeEnv = extendTypeEnv;
function extendTypeEnvFromPattern(originalEnv, pat, patType) {
    switch (pat.tag) {
        // Do nothing for the case of constants / wildcards
        case 'IntConstant':
        case 'RealConstant':
        case 'StringConstant':
        case 'CharConstant':
        case 'BoolConstant':
        case 'Wildcard': {
            return originalEnv;
        }
        case 'PatVariable': {
            const newEnv = (0, lodash_1.cloneDeep)(originalEnv);
            newEnv[pat.id] = {
                type: patType,
                typeVariables: []
            };
            return newEnv;
        }
        case 'InfixConstruction': {
            // we only support ::
            if (pat.id !== '::') {
                throw new errors_1.CustomSourceError(pat, `${pat.id} is not a supported constructor`);
            }
            assert((0, utils_1.isListType)(patType));
            const { elementType } = patType;
            const envExtendedFromPat1 = extendTypeEnvFromPattern(originalEnv, pat.pat1, elementType);
            return extendTypeEnvFromPattern(envExtendedFromPat1, pat.pat2, patType);
        }
        case 'ListPattern': {
            assert((0, utils_1.isListType)(patType));
            const { elementType } = patType;
            let env = originalEnv;
            for (const elePat of pat.elements) {
                env = extendTypeEnvFromPattern(env, elePat, elementType);
            }
            return env;
        }
        default: {
            throw new errors_1.CustomSourceError(pat, `${pat.tag} not implemented`);
        }
    }
}
exports.extendTypeEnvFromPattern = extendTypeEnvFromPattern;
function getPrimitiveFuncTypes(env, infixApp) {
    if (!env.hasOwnProperty(infixApp.id)) {
        throw new errors_1.CustomSourceError(infixApp, `Unsupported infix operator "${infixApp.id}".`);
    }
    const type = env[infixApp.id].type;
    if (!(0, utils_1.isFunctionType)(type) || !(0, utils_1.isFunctionType)(type.returnType)) {
        throw new errors_1.CustomSourceError(infixApp, `Infix operator "${infixApp.id}" declared as non fun -> fun type.`);
    }
    return [type.parameterType, type.returnType.parameterType, type.returnType.returnType];
}
exports.getPrimitiveFuncTypes = getPrimitiveFuncTypes;
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
function unsolved(type) {
    if ((0, utils_1.isPrimitiveType)(type)) {
        return [];
    }
    if ((0, utils_1.isFunctionType)(type)) {
        return [...unsolved(type.parameterType), ...unsolved(type.returnType)];
    }
    if ((0, utils_1.isListType)(type)) {
        return unsolved(type.elementType);
    }
    return [type];
}
function unsolvedEnv(env) {
    let tvs = [];
    for (const id in env) {
        const ts = env[id];
        tvs = [...tvs, ...unsolved(ts.type)];
    }
    return tvs;
}
// inefficient way of generalizing. TODO: make this more efficient?
function generalize(C, env, id, type) {
    // solve constraints C and get a type t
    const t = unifyAndSubstitute(type, C);
    const newEnv = (0, lodash_1.cloneDeep)(env);
    newEnv[id] = {
        type: t,
        // TODO: check that this list difference works for type vars
        typeVariables: (0, lodash_1.difference)(unsolved(t), unsolvedEnv(env))
    };
    return newEnv;
}
function substituteTypeVarIntoType(type, typeVar, subsType) {
    if ((0, utils_1.isPrimitiveType)(type)) {
        return type;
    }
    if ((0, utils_1.isFunctionType)(type)) {
        return {
            parameterType: substituteTypeVarIntoType(type.parameterType, typeVar, subsType),
            returnType: substituteTypeVarIntoType(type.returnType, typeVar, subsType)
        };
    }
    if ((0, utils_1.isListType)(type)) {
        return { elementType: substituteTypeVarIntoType(type.elementType, typeVar, subsType) };
    }
    return type.id === typeVar.id ? subsType : type;
}
// subs type for typeVar for all constraints in C
function substituteTypeVarIntoConstraints(C, typeVar, type) {
    return C.map(({ type1: t1, type2: t2 }) => ({
        type1: substituteTypeVarIntoType(t1, typeVar, type),
        type2: substituteTypeVarIntoType(t2, typeVar, type)
    }));
}
function unify(C) {
    // no more subsitutions can be generated
    if (C.length === 0) {
        return [];
    }
    const [{ type1: t1, type2: t2 }, ...C2] = C;
    // both t1 and t2 are the same simple types
    // - throw away constraint (no useful info)
    if (((0, utils_1.isPrimitiveType)(t1) && (0, utils_1.isPrimitiveType)(t2)) ||
        ((0, utils_1.isTypeVariableType)(t1) && (0, utils_1.isTypeVariableType)(t2))) {
        if ((0, utils_1.isSameType)(t1, t2)) {
            return unify(C2);
        }
    }
    // t1 is a type variable 'x and 'x does not occur in t2
    if ((0, utils_1.isTypeVariableType)(t1) && !(0, utils_1.hasTypeVariable)(t2, t1)) {
        const S = { from: t1, to: t2 };
        return [S, ...unify(substituteTypeVarIntoConstraints(C2, t1, t2))];
    }
    // t2 is a type variable 'x and 'x does not occur in t1
    if ((0, utils_1.isTypeVariableType)(t2) && !(0, utils_1.hasTypeVariable)(t1, t2)) {
        const S = { from: t2, to: t1 };
        return [S, ...unify(substituteTypeVarIntoConstraints(C2, t2, t1))];
    }
    // t1 and t2 are function types
    if ((0, utils_1.isFunctionType)(t1) && (0, utils_1.isFunctionType)(t2)) {
        return unify([
            { type1: t1.parameterType, type2: t2.parameterType },
            { type1: t1.returnType, type2: t2.returnType },
            ...C2
        ]);
    }
    // t1 and t2 are list types
    if ((0, utils_1.isListType)(t1) && (0, utils_1.isListType)(t2)) {
        return unify([{ type1: t1.elementType, type2: t2.elementType }, ...C2]);
    }
    // TODO: make errors better - can include line number etc.
    // to support that we will need to additionally inlcude node in our type constraints
    // (or) simply include the line and col nums in the type constraints
    throw new Error(`Failed to unify type constraint ${(0, utils_1.stringifyType)(t1)} = ${(0, utils_1.stringifyType)(t2)}.`);
}
exports.unify = unify;
function substituteIntoType(type, S) {
    function _subsIntoType(type, S) {
        if ((0, utils_1.isPrimitiveType)(type)) {
            return type;
        }
        if ((0, utils_1.isSameType)(type, S.from)) {
            return S.to;
        }
        if ((0, utils_1.isFunctionType)(type)) {
            return {
                parameterType: _subsIntoType(type.parameterType, S),
                returnType: _subsIntoType(type.returnType, S)
            };
        }
        if ((0, utils_1.isListType)(type)) {
            return { elementType: _subsIntoType(type.elementType, S) };
        }
        // different type var
        return type;
    }
    for (const ts of S) {
        type = _subsIntoType(type, ts);
    }
    return type;
}
exports.substituteIntoType = substituteIntoType;
function unifyAndSubstitute(type, typeConstraints) {
    const S = unify(typeConstraints);
    return substituteIntoType(type, S);
}
exports.unifyAndSubstitute = unifyAndSubstitute;
//# sourceMappingURL=environment.js.map