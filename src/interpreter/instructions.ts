import { Expression, Pattern } from '../parser/ast'
import { Environment } from '../types'

export type Instruction =
  | PopI
  | BranchI
  | BinOpI
  | BinLogicalOpI
  | RestoreEnvI
  | AssignI
  | ApplicationI

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

interface BinLogicalOpI {
  tag: 'BinLogicalOpI'
  id: string
  op2: Expression // evaluated only if needed (i.e. no shortcircuiting)
}

interface RestoreEnvI {
  tag: 'RestoreEnvI'
  env: Environment
}

interface AssignI {
  tag: 'AssignI'
  pat: Pattern
}

// Applications involve only 1 arg, so we don't
// need to store arity
interface ApplicationI {
  tag: 'ApplicationI'
}
