import { Constant, Node, Program } from '../parser/ast'
import { Context } from '../types'

// TODO: replace any with some Value class or something
type Evaluator = (node: Node, context: Context) => any

const evaluators: { [nodeType: string]: Evaluator } = {
  Constant: function* (node: Constant, _context: Context) {
    return node.val
  }
}

export function* evaluate(node: Node, context: Context) {
  const result = yield* evaluators[node.type](node, context)
  return result
}
