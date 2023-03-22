/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { SmlLexer } from '../lang/SmlLexer'
import {
  ApplicationContext,
  BooleanContext,
  CaseAnalysisContext,
  CharacterContext,
  ConditionalContext,
  ConjunctionContext,
  ConstantContext,
  DecContext,
  DecSequenceContext,
  DisjunctionContext,
  ExpContext,
  ExpSequenceContext,
  ExpTypeAnnotationContext,
  ExpVariableContext,
  FunbindContext,
  FunctionContext,
  FunDeclContext,
  InfixApplicationContext,
  IntegerContext,
  LetExpressionContext,
  ListContext,
  LocalDeclContext,
  MatchesContext,
  ParenthesesContext,
  PatConstantContext,
  PatInfixConstructionContext,
  PatmatchContext,
  PatParenthesesContext,
  PatTypeAnnotationContext,
  PatUnitContext,
  PatVariableContext,
  PatWildcardContext,
  ProgContext,
  RealContext,
  SmlParser,
  StringContext,
  TypeConstructorContext,
  TypeFunctionContext,
  TypeVariableContext,
  UnitContext,
  ValbindContext,
  ValueDeclContext
} from '../lang/SmlParser'
import { SmlVisitor } from '../lang/SmlVisitor'
import { SourceLocation } from '../types'
import {
  Application,
  BoolConstant,
  CharConstant,
  ConditionalExpression,
  Constant,
  Declaration,
  DeclarationSequence,
  Expression,
  ExpSequence,
  Function,
  InfixApplication,
  InfixConstruction,
  IntConstant,
  LetExpression,
  ListLiteral,
  LocalDeclaration,
  Match,
  Matches,
  Node,
  Pattern,
  Program,
  RealConstant,
  StringConstant,
  TypeAstNode,
  TypeConstructor,
  TypeFunction,
  TypeVariable,
  UnitConstant,
  Valbind,
  ValueDeclaration,
  Variable,
  Wildcard
} from './ast'

// TODO: move to parser/utils.ts?
function contextToLocation(ctx: ParserRuleContext): SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

class NodeGenerator implements SmlVisitor<Node> {
  /**
   * Constants
   */
  visitInteger(ctx: IntegerContext): IntConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseInt(ctx.text.slice(1)) * -1 : parseInt(ctx.text)
    return {
      tag: 'IntConstant',
      val: val,
      type: 'int'
    }
  }
  visitReal(ctx: RealContext): RealConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseFloat(ctx.text.slice(1)) * -1 : parseFloat(ctx.text)
    return {
      tag: 'RealConstant',
      val: val,
      type: 'real'
    }
  }
  visitCharacter(ctx: CharacterContext): CharConstant {
    return {
      tag: 'CharConstant',
      // remove leading hash and double quote, and also trailing double quotes
      val: ctx.text.slice(2, ctx.text.length - 1),
      type: 'char'
    }
  }
  visitString(ctx: StringContext): StringConstant {
    return {
      tag: 'StringConstant',
      // remove leading and trailing double quotes
      val: ctx.text.slice(1, ctx.text.length - 1),
      type: 'string'
    }
  }
  visitBoolean(ctx: BooleanContext): BoolConstant {
    return {
      tag: 'BoolConstant',
      val: ctx.TRUE() !== undefined ? true : false,
      type: 'bool'
    }
  }
  visitUnit(_ctx: UnitContext): UnitConstant {
    return {
      tag: 'UnitConstant',
      type: 'unit'
    }
  }

  /**
   * Expressions
   */
  visitConstant(ctx: ConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitExpVariable(ctx: ExpVariableContext): Variable {
    return {
      tag: 'Variable',
      id: ctx._id.text!,
      loc: contextToLocation(ctx)
    }
  }
  visitApplication(ctx: ApplicationContext): Application {
    return {
      tag: 'Application',
      fn: this.visit(ctx._fn) as Expression,
      arg: this.visit(ctx._arg) as Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitInfixApplication(ctx: InfixApplicationContext): InfixApplication {
    return {
      tag: 'InfixApplication',
      operand1: this.visit(ctx._op1) as Expression,
      operand2: this.visit(ctx._op2) as Expression,
      id: ctx._id.text!,
      loc: contextToLocation(ctx)
    }
  }
  visitList(ctx: ListContext): ListLiteral {
    const elements = ctx.exp()
    return {
      tag: 'ListLiteral',
      elements: elements.map(e => this.visit(e)) as Expression[],
      arity: elements.length
    }
  }
  visitExpSequence(ctx: ExpSequenceContext): ExpSequence {
    return {
      tag: 'ExpSequence',
      exps: ctx.exp().map((ec: ExpContext) => this.visit(ec) as Expression)
    }
  }
  visitParentheses(ctx: ParenthesesContext): Expression {
    return this.visit(ctx.exp()) as Expression
  }
  visitLetExpression(ctx: LetExpressionContext): LetExpression {
    return {
      tag: 'LetExpression',
      decSequence: this.visit(ctx.decSequence()) as DeclarationSequence,
      exps: ctx.exp().map((ec: ExpContext) => this.visit(ec) as Expression),
      loc: contextToLocation(ctx)
    }
  }
  visitExpTypeAnnotation(ctx: ExpTypeAnnotationContext): Expression {
    const exp = this.visit(ctx.exp()) as Expression
    exp.annotated_type = this.visit(ctx.typ()) as TypeAstNode
    return exp
  }
  visitConjunction(ctx: ConjunctionContext): ConditionalExpression {
    // Rewrite derived form into equivalent form
    // See Figure 15 of https://smlfamily.github.io/sml90-defn.pdf (page 89)
    return {
      tag: 'ConditionalExpression',
      pred: this.visit(ctx._op1) as Expression,
      consequent: this.visit(ctx._op2) as Expression,
      alternative: {
        tag: 'BoolConstant',
        val: false,
        type: 'bool'
      },
      loc: contextToLocation(ctx)
    }
  }
  visitDisjunction(ctx: DisjunctionContext): ConditionalExpression {
    // Rewrite derived form into equivalent form
    // See Figure 15 of https://smlfamily.github.io/sml90-defn.pdf (page 89)
    return {
      tag: 'ConditionalExpression',
      pred: this.visit(ctx._op1) as Expression,
      consequent: {
        tag: 'BoolConstant',
        val: true,
        type: 'bool'
      },
      alternative: this.visit(ctx._op2) as Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitConditional(ctx: ConditionalContext): ConditionalExpression {
    return {
      tag: 'ConditionalExpression',
      pred: this.visit(ctx._pred) as Expression,
      consequent: this.visit(ctx._cons) as Expression,
      alternative: this.visit(ctx._alt) as Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitCaseAnalysis(ctx: CaseAnalysisContext): Application {
    // Desugar into function application
    // (See page 89 of https://smlfamily.github.io/sml90-defn.pdf, Figure 15)
    return {
      tag: 'Application',
      fn: {
        tag: 'Function',
        matches: this.visit(ctx.matches()) as Matches,
        loc: contextToLocation(ctx)
      },
      arg: this.visit(ctx.exp()) as Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitFunction(ctx: FunctionContext): Function {
    return {
      tag: 'Function',
      matches: this.visit(ctx.matches()) as Matches,
      loc: contextToLocation(ctx)
    }
  }

  /**
   * Match
   */
  visitPatmatch(ctx: PatmatchContext): Match {
    return {
      tag: 'Match',
      pat: this.visit(ctx.pat()) as Pattern,
      exp: this.visit(ctx.exp()) as Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitMatches(ctx: MatchesContext): Matches {
    return {
      tag: 'Matches',
      matches: ctx.patmatch().map((m: PatmatchContext) => this.visit(m) as Match),
      loc: contextToLocation(ctx)
    }
  }

  /**
   * Patterns
   */
  visitPatConstant(ctx: PatConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitPatWildcard(_ctx: PatWildcardContext): Wildcard {
    return {
      tag: 'Wildcard'
    }
  }
  visitPatUnit(_ctx: PatUnitContext): UnitConstant {
    return {
      tag: 'UnitConstant',
      type: 'unit'
    }
  }
  visitPatVariable(ctx: PatVariableContext): Variable {
    return {
      tag: 'Variable',
      id: ctx._id.text!,
      loc: contextToLocation(ctx)
    }
  }
  visitPatInfixConstruction(ctx: PatInfixConstructionContext): InfixConstruction {
    return {
      tag: 'InfixConstruction',
      pat1: this.visit(ctx._pat1) as Pattern,
      pat2: this.visit(ctx._pat2) as Pattern,
      id: ctx.CONS().text,
      loc: contextToLocation(ctx)
    }
  }
  visitPatParentheses(ctx: PatParenthesesContext): Pattern {
    return this.visit(ctx.pat()) as Pattern
  }
  visitPatTypeAnnotation(ctx: PatTypeAnnotationContext): Pattern {
    const pat = this.visit(ctx.pat()) as Pattern
    pat.annotated_type = this.visit(ctx.typ()) as TypeAstNode
    return pat
  }

  /**
   * Types
   */
  visitTypeVariable(ctx: TypeVariableContext): TypeVariable {
    return {
      tag: 'TypeVariable',
      id: ctx.VAR().text
    }
  }
  visitTypeConstructor(ctx: TypeConstructorContext): TypeConstructor {
    return {
      tag: 'TypeConstructor',
      typeParameters: ctx.typ().map(tc => this.visit(tc) as TypeAstNode),
      id: ctx.ID().text
    }
  }
  visitTypeFunction(ctx: TypeFunctionContext): TypeFunction {
    return {
      tag: 'TypeFunction',
      argTy: this.visit(ctx._argTy) as TypeAstNode,
      retTy: this.visit(ctx._retTy) as TypeAstNode
    }
  }

  /**
   * Declarations
   */
  visitValueDecl(ctx: ValueDeclContext): ValueDeclaration {
    return {
      tag: 'ValueDeclaration',
      valbinds: ctx.valbind().map((vb: ValbindContext) => this.visit(vb) as Valbind),
      loc: contextToLocation(ctx)
    }
  }
  visitFunDecl(ctx: FunDeclContext): ValueDeclaration {
    // function declarations are syntatic sugar for value declarations:
    // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)
    // TODO: this desugaring doesn't work for mutually recursive function :'(
    // For more info: https://stackoverflow.com/questions/63428214/declaring-interdependent-values-and-functions-in-standard-ml
    return {
      tag: 'ValueDeclaration',
      valbinds: ctx.funbind().map((fb: FunbindContext) => this.visit(fb) as Valbind),
      loc: contextToLocation(ctx)
    }
  }
  visitLocalDecl(ctx: LocalDeclContext): LocalDeclaration {
    return {
      tag: 'LocalDeclaration',
      localDecs: this.visit(ctx._localDecs) as DeclarationSequence,
      decs: this.visit(ctx._decs) as DeclarationSequence,
      loc: contextToLocation(ctx)
    }
  }
  visitDecSequence(ctx: DecSequenceContext): DeclarationSequence {
    return {
      tag: 'DeclarationSequence',
      decs: ctx.dec().map((d: DecContext) => this.visit(d) as Declaration),
      loc: contextToLocation(ctx)
    }
  }

  /**
   * Valbind
   */
  visitValbind(ctx: ValbindContext): Valbind {
    return {
      tag: 'Valbind',
      isRec: ctx.REC() !== undefined,
      pat: this.visit(ctx.pat()) as Pattern,
      exp: this.visit(ctx.exp()) as Expression,
      loc: contextToLocation(ctx)
    }
  }

  /**
   * Funbind
   */
  visitFunbind(ctx: FunbindContext): Valbind {
    // Desugar funbind into valbind
    // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)

    const funMatches = ctx.funmatches().funmatch()
    const fnName = funMatches[0].ID().text
    const nParams = funMatches[0].pat().length
    const matches: Array<Match> = []

    // TODO: delete this specific case once multiple cases have been supported
    if (funMatches.length === 1) {
      const funMatch = funMatches[0]
      const params = funMatch.pat().map(p => this.visit(p) as Pattern)
      let exp = this.visit(funMatch.exp()) as Expression

      // Exclude first param, iterate in reverse, and reconstruct the full curried function
      params
        .slice(1)
        .reverse()
        .forEach(p => {
          const fn = {
            // TODO: do we want to keep track of the locations of each of these functions?
            tag: 'Function',
            matches: { tag: 'Matches', matches: [{ tag: 'Match', pat: p, exp }] }
          } as Function
          exp = fn
        })

      const match = {
        tag: 'Match',
        pat: params[0],
        exp: exp
      } as Match
      matches.push(match)
    } else {
      // Each funmatch correspond to a separate case. Each case can contain >= 1 parameter (or patterns)
      for (const funMatch of funMatches) {
        const id = funMatch.ID().text
        const tmpNumParams = funMatch.pat().length

        // across each case, the function name and number of parameters
        // must be the same
        if (funMatch.ID().text !== fnName) {
          /*
          Example where function names are different:
          fun f 1 = 2
            | x 2 = 3
          */
          throw new Error(`Different function names in different cases ("${fnName}" vs. "${id}")`)
        } else if (tmpNumParams !== nParams) {
          /*
          Example where number of params are different:
          fun f 1 = 2
            | f = 3
          */
          throw new Error(`Different number of params in different cases`)
        }

        throw new Error(
          "TODO: multiple cases for functions not yet implemented. Implement this once 'case (...) of ...' has been implemeneted"
        )
      }
    }

    return {
      tag: 'Valbind',
      isRec: true,
      pat: { tag: 'Variable', id: fnName },
      exp: { tag: 'Function', matches: { tag: 'Matches', matches } },
      loc: contextToLocation(ctx)
    }
  }

  /**
   * Program
   */
  visitProg(ctx: ProgContext): Program {
    return {
      tag: 'Program',
      body: this.visit(ctx.decSequence()) as DeclarationSequence
    }
  }

  visit(tree: ParseTree): Node {
    return tree.accept(this)
  }
  visitChildren(_node: RuleNode): Node {
    throw new Error('Method not implemented.')
  }
  visitTerminal(_node: TerminalNode): Node {
    throw new Error('Method not implemented.')
  }
  visitErrorNode(_node: ErrorNode): Node {
    throw new Error('Method not implemented.')
  }
}

function parse(source: string, f: (parser: SmlParser) => ParserRuleContext): Node {
  const inputStream = CharStreams.fromString(source)
  const lexer = new SmlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SmlParser(tokenStream)
  parser.buildParseTree = true

  const tree = f(parser)
  const generator = new NodeGenerator()
  return generator.visit(tree)
}

export function parseProg(source: string): Node {
  return parse(source, (parser: SmlParser) => parser.prog())
}

export function parseExp(source: string): Node {
  return parse(source, (parser: SmlParser) => parser.exp())
}
