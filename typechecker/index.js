"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_ENV = exports.typeCheck = exports.hindleyMilner = void 0;
const assert = require("assert");
const environment_1 = require("./environment");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
const utils_2 = require("./utils");
function genAnnotations(node, t) {
    if (!('annotated_type' in node) || node.annotated_type == undefined)
        return [];
    const knownTypeVars = new Map();
    function getAnnotationType(annotation) {
        switch (annotation.tag) {
            case 'TypeVariable':
                let tv;
                if (knownTypeVars.has(annotation.id)) {
                    tv = knownTypeVars.get(annotation.id);
                }
                else {
                    tv = (0, environment_1.freshTypeVariable)();
                    knownTypeVars.set(annotation.id, tv);
                }
                return tv;
            case 'TypeFunction':
                return {
                    parameterType: getAnnotationType(annotation.argTy),
                    returnType: getAnnotationType(annotation.retTy)
                };
            case 'TypeConstructor':
                switch (annotation.id) {
                    case 'list':
                        if (annotation.typeParameters.length !== 1) {
                            throw new errors_1.CustomSourceError(node, `list type expects exactly 1 type parameter`);
                        }
                        return { elementType: getAnnotationType(annotation.typeParameters[0]) };
                    default:
                        assert((0, utils_1.isPrimitiveTypeString)(annotation.id));
                        return annotation.id;
                }
            default:
                throw new Error('Not implemented');
        }
    }
    const annotatedType = getAnnotationType(node.annotated_type);
    if ((0, utils_1.isPrimitiveType)(t) && (0, utils_2.isTypeVariableType)(annotatedType)) {
        throw new errors_1.CustomSourceError(node, `Failed to unify type constraint ${(0, utils_1.stringifyType)(annotatedType)} = ${(0, utils_1.stringifyType)(t)}.`);
    }
    return [{ type1: annotatedType, type2: t, node }];
}
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
            return [node.type, genAnnotations(node, node.type)];
        }
        // Variable
        case 'ExpVariable': {
            const ts = (0, environment_1.getTypeSchemeFromEnv)(env, node);
            const t = (0, environment_1.instantiate)(ts);
            return [t, genAnnotations(node, t)];
        }
        // Application
        case 'Application': {
            const t = (0, environment_1.freshTypeVariable)();
            const [t1, C1] = hindleyMilner(env, node.fn);
            const [t2, C2] = hindleyMilner(env, node.arg);
            const constraints = [
                ...C1,
                ...C2,
                { type1: t1, type2: { parameterType: t2, returnType: t }, node }
            ];
            const solvedType = (0, environment_1.unifyAndSubstitute)(t, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        // Infix Application
        case 'InfixApplication': {
            const [t1, t2, t3] = (0, environment_1.getPrimitiveFuncTypes)(env, node);
            const [t4, C1] = hindleyMilner(env, node.operand1);
            const [t5, C2] = hindleyMilner(env, node.operand2);
            const constraints = [
                ...C1,
                ...C2,
                { type1: t1, type2: t4, node: node.operand1 },
                { type1: t2, type2: t5, node: node.operand2 }
            ];
            const solvedType = (0, environment_1.unifyAndSubstitute)(t3, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        // List
        case 'ListLiteral': {
            const t = (0, environment_1.freshTypeVariable)();
            let C = [];
            for (const el of node.elements) {
                const [tmp_ty, tmp_C] = hindleyMilner(env, el);
                C = [...C, ...tmp_C, { type1: t, type2: tmp_ty, node: el }];
            }
            const solvedType = (0, environment_1.unifyAndSubstitute)({ elementType: t }, C);
            return [solvedType, [...C, ...genAnnotations(node, solvedType)]];
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
            const solvedType = (0, environment_1.unifyAndSubstitute)(t, C);
            return [solvedType, [...C, ...genAnnotations(node, solvedType)]];
        }
        // Expression Sequence
        case 'ExpSequence': {
            let t = utils_1.UNIT_TY;
            let C = [];
            for (const exp of node.exps) {
                ;
                [t, C] = hindleyMilner(env, exp);
            }
            const solvedType = (0, environment_1.unifyAndSubstitute)(t, C);
            return [solvedType, [...C, ...genAnnotations(node, solvedType)]];
        }
        // Conditional
        case 'ConditionalExpression': {
            const t = (0, environment_1.freshTypeVariable)();
            const [t1, C1] = hindleyMilner(env, node.pred);
            const [t2, C2] = hindleyMilner(env, node.consequent);
            const [t3, C3] = hindleyMilner(env, node.alternative);
            const constraints = [
                ...C1,
                ...C2,
                ...C3,
                { type1: t1, type2: utils_1.BOOL_TY, node: node.pred },
                { type1: t, type2: t2, node: node.consequent },
                { type1: t, type2: t3, node: node.alternative }
            ];
            const solvedType = (0, environment_1.unifyAndSubstitute)(t, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        // Function
        case 'Function': {
            const parameterType = (0, environment_1.freshTypeVariable)();
            const returnType = (0, environment_1.freshTypeVariable)();
            const funTy = { parameterType, returnType };
            const constraints = [];
            for (const { pat, exp } of node.matches) {
                const [patTy, patConstraints] = hindleyMilner(env, pat);
                const extendedEnv = (0, environment_1.extendTypeEnvFromPattern)(env, pat, patTy);
                const [expTy, expConstraints] = hindleyMilner(extendedEnv, exp);
                constraints.push(...patConstraints, ...expConstraints, { type1: parameterType, type2: patTy, node: pat }, { type1: returnType, type2: expTy, node: exp });
            }
            const solvedType = (0, environment_1.unifyAndSubstitute)(funTy, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        /* Patterns */
        // For wildcard and variables, we are not able to infer any more information
        case 'Wildcard':
        case 'PatVariable': {
            const t = (0, environment_1.freshTypeVariable)();
            return [t, genAnnotations(node, t)];
        }
        case 'InfixConstruction': {
            // we only support ::
            if (node.id !== '::') {
                throw new errors_1.CustomSourceError(node, `${node.id} is not a supported constructor`);
            }
            const t = (0, environment_1.freshTypeVariable)();
            const [t1, C1] = hindleyMilner(env, node.pat1);
            const [t2, C2] = hindleyMilner(env, node.pat2);
            const tList = { elementType: t };
            const constraints = [
                ...C1,
                ...C2,
                { type1: t1, type2: t, node: node.pat1 },
                { type1: t2, type2: tList, node: node.pat2 }
            ];
            const solvedType = (0, environment_1.unifyAndSubstitute)(tList, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        case 'ListPattern': {
            const t = (0, environment_1.freshTypeVariable)();
            const tList = { elementType: t };
            const constraints = [];
            for (const pat of node.elements) {
                const [elementTy, elementConstraints] = hindleyMilner(env, pat);
                constraints.push(...elementConstraints, { type1: elementTy, type2: t, node: pat });
            }
            const solvedType = (0, environment_1.unifyAndSubstitute)(tList, constraints);
            return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]];
        }
        /* Programs */
        case 'Program': {
            // suffices to typecheck declarations in the program
            const _ = (0, environment_1.extendTypeEnv)(env, node.body);
            return [utils_1.UNIT_TY, []];
        }
        default: {
            throw new errors_1.CustomSourceError(node, `${node.tag} not implemented`);
        }
    }
}
exports.hindleyMilner = hindleyMilner;
function typeCheck(node) {
    const [type, typeConstraints] = hindleyMilner(exports.INIT_ENV, node);
    return (0, environment_1.unifyAndSubstitute)(type, typeConstraints);
}
exports.typeCheck = typeCheck;
exports.INIT_ENV = (0, environment_1.createInitialTypeEnvironment)();
//# sourceMappingURL=index.js.map