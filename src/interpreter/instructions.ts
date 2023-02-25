export type Instruction = PopI | BinOpI

interface PopI {
  tag: 'PopI'
}

interface BinOpI {
  tag: 'BinOpI'
  id: string
}
