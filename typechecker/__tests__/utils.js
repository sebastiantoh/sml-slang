"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndTypeCheckExp = void 0;
const __1 = require("../..");
const parser_1 = require("../../parser/parser");
const __2 = require("..");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const parseAndTypeCheckExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const [type, typeConstraints] = (0, __2.hindleyMilner)(__1.INIT_ENV, node);
    const solvedType = (0, environment_1.unifyAndSubstitute)(type, typeConstraints);
    return (0, utils_1.stringifyType)(solvedType);
};
exports.parseAndTypeCheckExp = parseAndTypeCheckExp;
//# sourceMappingURL=utils.js.map