"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyType = exports.curryFunctionTypes = exports.makeFunctionType = exports.hasTypeVariable = exports.isSameType = exports.isTypeVariableType = exports.isListType = exports.isFunctionType = exports.isPrimitiveType = exports.isUnit = exports.isBool = exports.isChar = exports.isStr = exports.isReal = exports.isInt = exports.UNIT_TY = exports.BOOL_TY = exports.CHAR_TY = exports.STR_TY = exports.REAL_TY = exports.INT_TY = void 0;
const assert = require("assert");
const lodash_1 = require("lodash");
exports.INT_TY = 'int';
exports.REAL_TY = 'real';
exports.STR_TY = 'string';
exports.CHAR_TY = 'char';
exports.BOOL_TY = 'bool';
exports.UNIT_TY = 'unit';
/* Checking Type helpers */
function isInt(type) {
    return type === exports.INT_TY;
}
exports.isInt = isInt;
function isReal(type) {
    return type === exports.REAL_TY;
}
exports.isReal = isReal;
function isStr(type) {
    return type === exports.STR_TY;
}
exports.isStr = isStr;
function isChar(type) {
    return type === exports.CHAR_TY;
}
exports.isChar = isChar;
function isBool(type) {
    return type === exports.BOOL_TY;
}
exports.isBool = isBool;
function isUnit(type) {
    return type === exports.UNIT_TY;
}
exports.isUnit = isUnit;
function isPrimitiveType(type) {
    return isInt(type) || isReal(type) || isStr(type) || isChar(type) || isBool(type) || isUnit(type);
}
exports.isPrimitiveType = isPrimitiveType;
function isFunctionType(type) {
    return ((type === null || type === void 0 ? void 0 : type.parameterType) !== undefined &&
        (type === null || type === void 0 ? void 0 : type.returnType) !== undefined);
}
exports.isFunctionType = isFunctionType;
function isListType(type) {
    return (type === null || type === void 0 ? void 0 : type.elementType) !== undefined;
}
exports.isListType = isListType;
function isTypeVariableType(type) {
    return (type === null || type === void 0 ? void 0 : type.id) !== undefined;
}
exports.isTypeVariableType = isTypeVariableType;
function isSameType(fst, snd) {
    if (isFunctionType(fst) && isFunctionType(snd)) {
        const isSameParamType = isSameType(fst.parameterType, snd.parameterType);
        const isSameReturnType = isSameType(fst.returnType, snd.returnType);
        return isSameParamType && isSameReturnType;
    }
    if (isListType(fst) && isListType(snd)) {
        return isSameType(fst.elementType, snd.elementType);
    }
    if (isTypeVariableType(fst) && isTypeVariableType(snd)) {
        return fst.id === snd.id;
    }
    return isPrimitiveType(fst) && isPrimitiveType(snd) && fst === snd;
}
exports.isSameType = isSameType;
// checks if type contains typeVar
function hasTypeVariable(type, typeVar) {
    if (isPrimitiveType(type)) {
        return false;
    }
    if (isFunctionType(type)) {
        return hasTypeVariable(type.parameterType, typeVar) || hasTypeVariable(type.returnType, typeVar);
    }
    if (isListType(type)) {
        return hasTypeVariable(type.elementType, typeVar);
    }
    return type.id === typeVar.id;
}
exports.hasTypeVariable = hasTypeVariable;
/* FunctionType helpers */
// given types t0 t1 t2 .... tN, create a function type of
// form: fun t0 -> fun t1 -> fun t2 -> ... -> tN
function makeFunctionType(...types) {
    const parameterTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    return curryFunctionTypes(parameterTypes, returnType);
}
exports.makeFunctionType = makeFunctionType;
// convert match type of format: x0 x1 x2 .... -> xN
// to: x0 -> x1 -> x2 -> ..... -> xN
function curryFunctionTypes(paramTypes, returnType) {
    let tmpType = returnType;
    for (let i = paramTypes.length - 1; i >= 0; i--) {
        tmpType = {
            parameterType: paramTypes[i],
            returnType: tmpType
        };
    }
    return tmpType;
}
exports.curryFunctionTypes = curryFunctionTypes;
function collectTypeVars(type) {
    if (isPrimitiveType(type)) {
        return [];
    }
    if (isFunctionType(type)) {
        return [...collectTypeVars(type.parameterType), ...collectTypeVars(type.returnType)];
    }
    if (isListType(type)) {
        return collectTypeVars(type.elementType);
    }
    return [type];
}
/* Prettifiers */
// t0 -> 'a, t1 -> 'b, ... t25 -> 'z, t26 -> 'a1, t27 -> 'b1, ... t51 -> 'z1, t52 -> 'a2, ...
function stringifyTypeVariable(tv, id) {
    const ASCII_START = 97; // 'a'
    const NUM_LETTERS = 26;
    const letter = String.fromCharCode(ASCII_START + (id % NUM_LETTERS));
    const number = Math.floor(id / 26);
    return `'${letter}${number === 0 ? '' : number}`;
}
// we support downcasting types to the smallest identifiers
function stringifyType(type) {
    // collect all the type variables in the type and
    // assign first type in result to 'a and so on
    const tvs = (0, lodash_1.uniqBy)(collectTypeVars(type), tv => tv.id);
    const tvsToStringifiedTvs = new Map(tvs.sort(tv => tv.id).map((tv, idx) => [tv.id, stringifyTypeVariable(tv, idx)]));
    function _stringifyType(type) {
        if (isPrimitiveType(type)) {
            return type.toString();
        }
        if (isListType(type)) {
            return `${_stringifyType(type.elementType)} list`;
        }
        if (isTypeVariableType(type)) {
            assert(tvsToStringifiedTvs.has(type.id));
            return tvsToStringifiedTvs.get(type.id);
        }
        let parameterType = _stringifyType(type.parameterType);
        if (isFunctionType(type.parameterType)) {
            parameterType = `(${parameterType})`;
        }
        return `${parameterType} -> ${_stringifyType(type.returnType)}`;
    }
    return _stringifyType(type);
}
exports.stringifyType = stringifyType;
//# sourceMappingURL=utils.js.map