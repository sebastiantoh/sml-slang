"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTypeCheckAndEvaluateProgToString = exports.parseTypeCheckAndEvaluateExpToString = void 0;
const __1 = require("..");
const formatters_1 = require("../utils/formatters");
const parseTypeCheckAndEvaluateExpToString = (exp, outputWithType = false) => {
    const res = (0, __1.parseTypeCheckAndEvaluateExp)(exp, outputWithType);
    return (0, formatters_1.resToString)(res);
};
exports.parseTypeCheckAndEvaluateExpToString = parseTypeCheckAndEvaluateExpToString;
const parseTypeCheckAndEvaluateProgToString = (prog) => {
    const res = (0, __1.parseTypeCheckAndEvaluateProg)(prog);
    return (0, formatters_1.resToString)(res);
};
exports.parseTypeCheckAndEvaluateProgToString = parseTypeCheckAndEvaluateProgToString;
//# sourceMappingURL=utils.js.map