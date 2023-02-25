"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const interpreter_1 = require("./interpreter/interpreter");
const parser_1 = require("./parser/parser");
function run(code, context) {
    const program = (0, parser_1.parseProg)(code);
    // TODO: type checking, error handling etc.
    return (0, interpreter_1.evaluate)(program);
}
exports.run = run;
//# sourceMappingURL=index.js.map