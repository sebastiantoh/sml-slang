// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IntegerContext } from "./SmlParser";
import { FloatingPointContext } from "./SmlParser";
import { CharacterContext } from "./SmlParser";
import { StringContext } from "./SmlParser";
import { ConstantContext } from "./SmlParser";
import { ConContext } from "./SmlParser";
import { ExpContext } from "./SmlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SmlParser`.
 */
export interface SmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Integer`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by the `Integer`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by the `FloatingPoint`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterFloatingPoint?: (ctx: FloatingPointContext) => void;
	/**
	 * Exit a parse tree produced by the `FloatingPoint`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitFloatingPoint?: (ctx: FloatingPointContext) => void;

	/**
	 * Enter a parse tree produced by the `Character`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterCharacter?: (ctx: CharacterContext) => void;
	/**
	 * Exit a parse tree produced by the `Character`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitCharacter?: (ctx: CharacterContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `Constant`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `Constant`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterCon?: (ctx: ConContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitCon?: (ctx: ConContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
}

