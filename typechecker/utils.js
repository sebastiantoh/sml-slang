"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyType = exports.curryFunctionTypes = exports.makeFunctionType = exports.isSameType = exports.isTypeVariableType = exports.isListType = exports.isFunctionType = exports.isPrimitiveType = exports.isUnit = exports.isBool = exports.isChar = exports.isStr = exports.isReal = exports.isInt = exports.DUMMY_TYPE_VAR_TY = exports.UNIT_TY = exports.BOOL_TY = exports.CHAR_TY = exports.STR_TY = exports.REAL_TY = exports.INT_TY = void 0;
exports.INT_TY = 'int';
exports.REAL_TY = 'real';
exports.STR_TY = 'string';
exports.CHAR_TY = 'char';
exports.BOOL_TY = 'bool';
exports.UNIT_TY = 'unit';
exports.DUMMY_TYPE_VAR_TY = { id: 0 };
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
// TODO: update this!
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
/* Prettifiers */
function stringifyType(type) {
    if (isPrimitiveType(type)) {
        return type.toString();
    }
    if (isListType(type)) {
        return `${stringifyType(type.elementType)} list`;
    }
    if (isTypeVariableType(type)) {
        // TODO: change this to 'a, 'b, ....
        return `t${type.id}`;
    }
    let parameterType = stringifyType(type.parameterType);
    if (isFunctionType(type.parameterType)) {
        parameterType = `(${parameterType})`;
    }
    return `${parameterType} -> ${stringifyType(type.returnType)}`;
}
exports.stringifyType = stringifyType;
//# sourceMappingURL=utils.js.map