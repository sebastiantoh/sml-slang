"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curryFuncionTypes = exports.makeFunctionType = void 0;
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
//# sourceMappingURL=utils.js.map