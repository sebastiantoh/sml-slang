"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndTypeCheckExp = void 0;
const parser_1 = require("../../parser/parser");
const __1 = require("..");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const INIT_ENV = (0, environment_1.createInitialTypeEnvironment)();
const parseAndTypeCheckExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const [type, typeConstraints] = (0, __1.hindleyMilner)(INIT_ENV, node);
    const S = (0, environment_1.unify)(typeConstraints);
    return (0, utils_1.stringifyType)((0, environment_1.substituteIntoType)(type, S));
};
exports.parseAndTypeCheckExp = parseAndTypeCheckExp;
//# sourceMappingURL=utils.js.map