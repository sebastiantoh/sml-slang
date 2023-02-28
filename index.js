"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseError = exports.run = void 0;
const interpreter_1 = require("./interpreter/interpreter");
const parser_1 = require("./parser/parser");
function run(code, context) {
    const program = (0, parser_1.parseProg)(code);
    // TODO: type checking, error handling etc.
    return (0, interpreter_1.evaluate)(program);
}
exports.run = run;
function parseError(errors) {
    const errorMessagesArr = errors.map(error => {
        const line = error.location ? error.location.start.line : '<unknown>';
        const explanation = error.explain();
        return line < 1 ? explanation : `Line ${line}: ${explanation}`;
    });
    return errorMessagesArr.join('\n');
}
exports.parseError = parseError;
//# sourceMappingURL=index.js.map