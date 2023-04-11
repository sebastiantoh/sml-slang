import { argv } from 'process'

import { parseTypeCheckAndEvaluateProg } from '.'
import { resToString } from './utils/formatters'

const fs = require('fs')
const filepath = argv[3]
const sourceCode = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
const res = parseTypeCheckAndEvaluateProg(sourceCode)
console.log(resToString(res))
