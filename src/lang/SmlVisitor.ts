// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IntegerContext } from "./SmlParser";
import { FloatingPointContext } from "./SmlParser";
import { CharacterContext } from "./SmlParser";
import { StringContext } from "./SmlParser";
import { ConstantContext } from "./SmlParser";
import { InfixApplicationContext } from "./SmlParser";
import { ConContext } from "./SmlParser";
import { ExpContext } from "./SmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmlVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `Constant`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `InfixApplication`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixApplication?: (ctx: InfixApplicationContext) => Result;

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
}

