// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PatConstantContext } from "./SmlParser";
import { PatWildcardContext } from "./SmlParser";
import { PatUnitContext } from "./SmlParser";
import { PatVariableContext } from "./SmlParser";
import { IntegerContext } from "./SmlParser";
import { RealContext } from "./SmlParser";
import { CharacterContext } from "./SmlParser";
import { StringContext } from "./SmlParser";
import { BooleanContext } from "./SmlParser";
import { UnitContext } from "./SmlParser";
import { ValueDeclContext } from "./SmlParser";
import { FunDeclContext } from "./SmlParser";
import { LocalDeclContext } from "./SmlParser";
import { ConstantContext } from "./SmlParser";
import { ExpVariableContext } from "./SmlParser";
import { ApplicationContext } from "./SmlParser";
import { InfixApplicationContext } from "./SmlParser";
import { ParenthesesContext } from "./SmlParser";
import { ListContext } from "./SmlParser";
import { ExpSequenceContext } from "./SmlParser";
import { LetExpressionContext } from "./SmlParser";
import { ConjunctionContext } from "./SmlParser";
import { DisjunctionContext } from "./SmlParser";
import { ConditionalContext } from "./SmlParser";
import { CaseAnalysisContext } from "./SmlParser";
import { FunctionContext } from "./SmlParser";
import { ConContext } from "./SmlParser";
import { ExpContext } from "./SmlParser";
import { PatmatchContext } from "./SmlParser";
import { MatchesContext } from "./SmlParser";
import { PatContext } from "./SmlParser";
import { DecContext } from "./SmlParser";
import { DecSequenceContext } from "./SmlParser";
import { ValbindContext } from "./SmlParser";
import { FunbindContext } from "./SmlParser";
import { FunmatchesContext } from "./SmlParser";
import { FunmatchContext } from "./SmlParser";
import { ProgContext } from "./SmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `PatConstant`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatConstant?: (ctx: PatConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `PatWildcard`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatWildcard?: (ctx: PatWildcardContext) => Result;

	/**
	 * Visit a parse tree produced by the `PatUnit`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatUnit?: (ctx: PatUnitContext) => Result;

	/**
	 * Visit a parse tree produced by the `PatVariable`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatVariable?: (ctx: PatVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `Integer`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by the `Real`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by the `Character`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter?: (ctx: CharacterContext) => Result;

	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Boolean`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Unit`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by the `ValueDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDecl?: (ctx: ValueDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunDecl?: (ctx: FunDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `LocalDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalDecl?: (ctx: LocalDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `Constant`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpVariable`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpVariable?: (ctx: ExpVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `Application`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `InfixApplication`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixApplication?: (ctx: InfixApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `List`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpSequence`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpSequence?: (ctx: ExpSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetExpression`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExpression?: (ctx: LetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Conjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Disjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction?: (ctx: DisjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Conditional`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `CaseAnalysis`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseAnalysis?: (ctx: CaseAnalysisContext) => Result;

	/**
	 * Visit a parse tree produced by the `Function`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCon?: (ctx: ConContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.patmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatmatch?: (ctx: PatmatchContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.matches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatches?: (ctx: MatchesContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPat?: (ctx: PatContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec?: (ctx: DecContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.decSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecSequence?: (ctx: DecSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.valbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValbind?: (ctx: ValbindContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.funbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunbind?: (ctx: FunbindContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.funmatches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunmatches?: (ctx: FunmatchesContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.funmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunmatch?: (ctx: FunmatchContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
}

