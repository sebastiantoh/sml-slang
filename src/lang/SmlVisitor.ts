// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PatConstantContext } from "./SmlParser";
import { PatVariableContext } from "./SmlParser";
import { IntegerContext } from "./SmlParser";
import { FloatingPointContext } from "./SmlParser";
import { CharacterContext } from "./SmlParser";
import { StringContext } from "./SmlParser";
import { ValueDeclContext } from "./SmlParser";
import { ConstantContext } from "./SmlParser";
import { ExpVariableContext } from "./SmlParser";
import { InfixApplicationContext } from "./SmlParser";
import { ParenthesesContext } from "./SmlParser";
import { LetExpressionContext } from "./SmlParser";
import { ConditionalContext } from "./SmlParser";
import { ConContext } from "./SmlParser";
import { ExpContext } from "./SmlParser";
import { PatContext } from "./SmlParser";
import { DecContext } from "./SmlParser";
import { DecSequenceContext } from "./SmlParser";
import { ValbindContext } from "./SmlParser";
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
	 * Visit a parse tree produced by the `FloatingPoint`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPoint?: (ctx: FloatingPointContext) => Result;

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
	 * Visit a parse tree produced by the `ValueDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDecl?: (ctx: ValueDeclContext) => Result;

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
	 * Visit a parse tree produced by the `LetExpression`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExpression?: (ctx: LetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Conditional`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

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
	 * Visit a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
}

