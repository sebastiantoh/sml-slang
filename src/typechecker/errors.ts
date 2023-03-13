import { Node } from '../parser/ast'
import { ErrorSeverity, ErrorType, SourceError, SourceLocation } from '../types'

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
