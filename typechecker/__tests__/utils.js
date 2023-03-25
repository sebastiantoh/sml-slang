"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndTypeCheckExp = void 0;
const parser_1 = require("../../parser/parser");
const __1 = require("..");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const parseAndTypeCheckExp = (exp) => {
    const node = (0, parser_1.parseExp)(exp);
    const [type, typeConstraints] = (0, __1.hindleyMilner)((0, environment_1.createInitialTypeEnvironment)(), node);
    // TODO: unify typeConstraints and substitute into type
    return (0, utils_1.stringifyType)(type);
};
exports.parseAndTypeCheckExp = parseAndTypeCheckExp;
//# sourceMappingURL=utils.js.map