import { Expression } from '../parser/ast'

export type Instruction = PopI | BranchI | BinOpI

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
