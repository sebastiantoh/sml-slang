import { Declaration, Expression, Pattern } from '../parser/ast'
import { Environment } from '../types'

export type Instruction =
  | PopI
  | BranchI
  | BinOpI
  | RestoreEnvI
  | SetEnvParentI
  | AssignI
  | DecsAfterLocalDecsI
  | ApplicationI
  | MarkEndOfFnBodyI
  | ListI

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
interface SetEnvParentI {
  tag: 'SetEnvParentI'
  oldParent: Environment
  newParent: Environment
}

interface AssignI {
  tag: 'AssignI'
  pat: Pattern
}

interface DecsAfterLocalDecsI {
  tag: 'DecsAfterLocalDecsI'
  decs: Array<Declaration>
  envBeforeLocalDecs: Environment
}

// Applications involve only 1 arg, so we don't
// need to store arity
interface ApplicationI {
  tag: 'ApplicationI'
}

interface MarkEndOfFnBodyI {
  tag: 'MarkEndOfFnBodyI'
}

interface ListI {
  tag: 'ListI'
  arity: number
}
