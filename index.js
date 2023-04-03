"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTypeCheckAndEvaluateProg = exports.parseTypeCheckAndEvaluateExp = void 0;
const interpreter_1 = require("./interpreter/interpreter");
const parser_1 = require("./parser/parser");
const typechecker_1 = require("./typechecker");
const parseTypeCheckAndEvaluateExp = (exp, outputWithType = false) => {
    const node = (0, parser_1.parseExp)(exp);
    const type = (0, typechecker_1.typeCheck)(node);
    const res = (0, interpreter_1.evaluateExp)(node);
    if (outputWithType && res.status === 'finished') {
        res.type = type;
    }
    return res;
};
exports.parseTypeCheckAndEvaluateExp = parseTypeCheckAndEvaluateExp;
const parseTypeCheckAndEvaluateProg = (prog) => {
    const node = (0, parser_1.parseProg)(prog);
    const _type = (0, typechecker_1.typeCheck)(node);
    const res = (0, interpreter_1.evaluateProg)(node);
    return res;
};
exports.parseTypeCheckAndEvaluateProg = parseTypeCheckAndEvaluateProg;
//# sourceMappingURL=index.js.map