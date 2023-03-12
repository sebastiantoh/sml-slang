"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndEvaluateProg = exports.parseAndEvaluateExp = void 0;
const interpreter_1 = require("../interpreter/interpreter");
const parser_1 = require("../parser/parser");
const Sml = require("../sml");
const parseAndEvaluateExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const res = (0, interpreter_1.evaluateExp)(node);
    return Sml.valueToString(res);
};
exports.parseAndEvaluateExp = parseAndEvaluateExp;
const parseAndEvaluateProg = (prog) => {
    const node = (0, parser_1.parseProg)(prog);
    const stdout = (0, interpreter_1.evaluateProg)(node);
    return stdout;
};
exports.parseAndEvaluateProg = parseAndEvaluateProg;
//# sourceMappingURL=utils.js.map