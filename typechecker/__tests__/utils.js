"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndTypeCheckExp = void 0;
const parser_1 = require("../../parser/parser");
const __1 = require("..");
const utils_1 = require("../utils");
const parseAndTypeCheckExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const solvedType = (0, __1.typeCheck)(node);
    return (0, utils_1.stringifyType)(solvedType);
};
exports.parseAndTypeCheckExp = parseAndTypeCheckExp;
//# sourceMappingURL=utils.js.map