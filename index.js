"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTypeCheckAndEvaluateProg = exports.parseTypeCheckAndEvaluateExp = exports.INIT_ENV = void 0;
const interpreter_1 = require("./interpreter/interpreter");
const parser_1 = require("./parser/parser");
const typechecker_1 = require("./typechecker");
const environment_1 = require("./typechecker/environment");
exports.INIT_ENV = (0, environment_1.createInitialTypeEnvironment)();
const parseTypeCheckAndEvaluateExp = (exp, outputWithType = false) => {
    const node = (0, parser_1.parseExp)(exp);
    const [type, typeConstraints] = (0, typechecker_1.hindleyMilner)(exports.INIT_ENV, node);
    const _solvedType = (0, environment_1.unifyAndSubstitute)(type, typeConstraints);
    const res = (0, interpreter_1.evaluateExp)(node, outputWithType);
    return res;
};
exports.parseTypeCheckAndEvaluateExp = parseTypeCheckAndEvaluateExp;
const parseTypeCheckAndEvaluateProg = (prog) => {
    const node = (0, parser_1.parseProg)(prog);
    const [type, typeConstraints] = (0, typechecker_1.hindleyMilner)(exports.INIT_ENV, node);
    const _solvedType = (0, environment_1.unifyAndSubstitute)(type, typeConstraints);
    const res = (0, interpreter_1.evaluateProg)(node);
    return res;
};
exports.parseTypeCheckAndEvaluateProg = parseTypeCheckAndEvaluateProg;
//# sourceMappingURL=index.js.map