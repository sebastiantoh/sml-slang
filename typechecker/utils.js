"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyType = exports.curryFuncionTypes = exports.makeFunctionType = exports.isSameType = exports.isFunctionType = exports.isPrimitiveType = exports.isUnit = exports.isBool = exports.isChar = exports.isStr = exports.isReal = exports.isInt = exports.UNIT_TY = exports.BOOL_TY = exports.CHAR_TY = exports.STR_TY = exports.REAL_TY = exports.INT_TY = void 0;
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
    return [type].some(isInt || isReal || isStr || isChar || isBool || isUnit);
}
exports.isPrimitiveType = isPrimitiveType;
function isFunctionType(type) {
    return (type.parameterType !== undefined &&
        type.returnType !== undefined);
}
exports.isFunctionType = isFunctionType;
function isSameType(fst, snd) {
    if (isFunctionType(fst) && isFunctionType(snd)) {
        const isSameParamType = isSameType(fst.parameterType, snd.parameterType);
        const isSameReturnType = isSameType(fst.returnType, snd.returnType);
        return isSameParamType && isSameReturnType;
    }
    return isPrimitiveType(fst) && isPrimitiveType(snd) && fst === snd;
}
exports.isSameType = isSameType;
/* FunctionType helpers */
// given types t0 t1 t2 .... tN, create a function type of
// form: fun t0 -> fun t1 -> fun t2 -> ... -> tN
function makeFunctionType(...types) {
    const parameterTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    return curryFuncionTypes(parameterTypes, returnType);
}
exports.makeFunctionType = makeFunctionType;
// convert function type of format: fun x0 x1 x2 .... -> xN
// to: fun x0 -> fun x1 -> fun x2 -> ..... -> xN
function curryFuncionTypes(paramTypes, returnType) {
    let tmpType = returnType;
    for (let i = paramTypes.length - 1; i >= 0; i--) {
        tmpType = {
            parameterType: paramTypes[i],
            returnType: tmpType
        };
    }
    return tmpType;
}
exports.curryFuncionTypes = curryFuncionTypes;
/* Prettifiers */
function stringifyType(type) {
    if (Array.isArray(type)) {
        return type.map(stringifyType).join(' or ');
    }
    if (isPrimitiveType(type)) {
        return type.toString();
    }
    let parameterType = stringifyType(type.parameterType);
    if (isFunctionType(type.parameterType)) {
        parameterType = `(${parameterType})`;
    }
    return `${parameterType} -> ${stringifyType(type.returnType)}`;
}
exports.stringifyType = stringifyType;
//# sourceMappingURL=utils.js.map