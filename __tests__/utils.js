"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndEvaluateProg = exports.parseAndEvaluateExp = void 0;
const interpreter_1 = require("../interpreter/interpreter");
const parser_1 = require("../parser/parser");
const formatters_1 = require("../utils/formatters");
const parseAndEvaluateExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const res = (0, interpreter_1.evaluateExp)(node, false);
    return (0, formatters_1.resToString)(res);
};
exports.parseAndEvaluateExp = parseAndEvaluateExp;
const parseAndEvaluateProg = (prog) => {
    const node = (0, parser_1.parseProg)(prog);
    const res = (0, interpreter_1.evaluateProg)(node);
    return (0, formatters_1.resToString)(res);
};
exports.parseAndEvaluateProg = parseAndEvaluateProg;
//# sourceMappingURL=utils.js.map