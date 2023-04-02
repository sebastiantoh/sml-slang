"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const path = require('path');
const fs = require('fs');
// extend jest to have 'toMatchSpecificSnapshot' matcher
require('jest-specific-snapshot');
const programsDir = 'src/__tests__/programs';
const programNames = fs
    .readdirSync(programsDir)
    .filter((f) => path.extname(f).toLowerCase() === '.sml');
programNames.forEach((filename) => {
    const filepath = path.join(programsDir, filename);
    const sourceCode = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
    test(filename, () => expect((0, utils_1.parseTypeCheckAndEvaluateProgToString)(sourceCode)).toMatchSpecificSnapshot(`programs/${filename}.out`));
});
//# sourceMappingURL=program.js.map