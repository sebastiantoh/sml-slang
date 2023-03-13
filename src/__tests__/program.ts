import { parseAndEvaluateProg } from './utils'

const path = require('path')
const fs = require('fs')

// extend jest to have 'toMatchSpecificSnapshot' matcher
require('jest-specific-snapshot')

const programsDir = 'src/__tests__/programs'
const programNames = fs
  .readdirSync(programsDir)
  .filter((f: string) => path.extname(f).toLowerCase() === '.sml')

programNames.forEach((filename: string) => {
  const filepath = path.join(programsDir, filename)
  const sourceCode = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
  test(filename, () =>
    expect(parseAndEvaluateProg(sourceCode)).toMatchSpecificSnapshot(`programs/${filename}.out`)
  )
})
