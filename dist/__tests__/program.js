const path = require('path');
const fs = require('fs');
// extend jest to have 'toMatchSpecificSnapshot' matcher
require('jest-specific-snapshot');
const programsDir = 'src/__tests__/programs';
const programNames = fs.readdirSync(programsDir);
programNames.forEach((filename) => {
    const filepath = path.join(programsDir, filename);
    const sourceCode = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
    test.skip(filename, () => expect(
    // TODO: parse and eval sourceCode, then renable test cases
    sourceCode).toMatchSpecificSnapshot(`programs/${filename}.out`));
});
//# sourceMappingURL=program.js.map