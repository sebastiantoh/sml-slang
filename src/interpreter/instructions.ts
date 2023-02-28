import { Expression, Pattern } from '../parser/ast'
import { Environment } from './interpreter'

export type Instruction = PopI | BranchI | BinOpI | RestoreEnvI | AssignI

interface PopI {
  tag: 'PopI'
}

interface BranchI {
  tag: 'BranchI'
  consequent: Expression
  alternative: Expression
}

interface BinOpI {
  tag: 'BinOpI'
  id: string
}

interface RestoreEnvI {
  tag: 'RestoreEnvI'
  env: Environment
}

interface AssignI {
  tag: 'AssignI'
  pat: Pattern
}
