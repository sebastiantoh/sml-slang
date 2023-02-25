"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndEvaluateExp = void 0;
const interpreter_1 = require("../interpreter/interpreter");
const parser_1 = require("../parser/parser");
const Sml = require("../sml");
const parseAndEvaluateExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const res = (0, interpreter_1.evaluate)(node);
    return Sml.valueToString(res);
};
exports.parseAndEvaluateExp = parseAndEvaluateExp;
//# sourceMappingURL=utils.js.map