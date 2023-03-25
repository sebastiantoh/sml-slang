import { Node } from '../parser/ast'
import { ErrorSeverity, ErrorType, SourceError, SourceLocation } from '../types'
import { Type } from './types'
import { stringifyType } from './utils'

const UNKNOWN_LOCATION: SourceLocation = {
  start: {
    line: -1,
    column: -1
  },
  end: {
    line: -1,
    column: -1
  }
}

export class TypeError implements SourceError {
  public type = ErrorType.TYPE
  public severity = ErrorSeverity.ERROR

  constructor(public node: Node) {}

  get location(): SourceLocation {
    return this.node.loc ?? UNKNOWN_LOCATION
  }

  public explain(): string {
    return 'Type error has occurred :('
  }

  public elaborate(): string {
    return this.explain()
  }
}

export class TypeMismatchError extends TypeError {
  constructor(public node: Node, public expected: Type, public got: Type) {
    super(node)
  }

  public explain(): string {
    return `This expression has type ${stringifyType(
      this.got
    )} but an expression was expected of type ${stringifyType(this.expected)}`
  }

  public elaborate(): string {
    return this.explain()
  }
}
