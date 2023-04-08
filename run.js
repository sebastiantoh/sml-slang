"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const _1 = require(".");
const formatters_1 = require("./utils/formatters");
const fs = require('fs');
const filepath = process_1.argv[3];
const sourceCode = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const res = (0, _1.parseTypeCheckAndEvaluateProg)(sourceCode);
console.log((0, formatters_1.resToString)(res));
//# sourceMappingURL=run.js.map