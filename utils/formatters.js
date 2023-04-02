"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFinishedForRepl = exports.resToString = void 0;
const Sml = require("../sml");
const utils_1 = require("../typechecker/utils");
function resToString(result) {
    if (result.status === 'errored') {
        return result.error.explain();
    }
    else {
        return formatFinishedForRepl(result);
    }
}
exports.resToString = resToString;
function formatFinishedForRepl(result) {
    const stdout = result.stdout.join('');
    if (result.value === undefined) {
        return stdout;
    }
    const val = Sml.valueToString(result.value);
    if (result.type === undefined) {
        return `${stdout}${val}`;
    }
    const type = (0, utils_1.stringifyType)(result.type);
    return `${stdout}${val} : ${type}`;
}
exports.formatFinishedForRepl = formatFinishedForRepl;
//# sourceMappingURL=formatters.js.map