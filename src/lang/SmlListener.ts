// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PatConstantContext } from "./SmlParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `SmlParser`.
 */
export interface SmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `PatConstant`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	enterPatConstant?: (ctx: PatConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `PatConstant`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	exitPatConstant?: (ctx: PatConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `PatUnit`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	enterPatUnit?: (ctx: PatUnitContext) => void;
	/**
	 * Exit a parse tree produced by the `PatUnit`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	exitPatUnit?: (ctx: PatUnitContext) => void;

	/**
	 * Enter a parse tree produced by the `PatVariable`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	enterPatVariable?: (ctx: PatVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `PatVariable`
	 * labeled alternative in `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	exitPatVariable?: (ctx: PatVariableContext) => void;

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
	 * Enter a parse tree produced by the `Real`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by the `Real`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;

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
	 * Enter a parse tree produced by the `Boolean`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `Boolean`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `Unit`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by the `Unit`
	 * labeled alternative in `SmlParser.con`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by the `ValueDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterValueDecl?: (ctx: ValueDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `ValueDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitValueDecl?: (ctx: ValueDeclContext) => void;

	/**
	 * Enter a parse tree produced by the `FunDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterFunDecl?: (ctx: FunDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `FunDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitFunDecl?: (ctx: FunDeclContext) => void;

	/**
	 * Enter a parse tree produced by the `LocalDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterLocalDecl?: (ctx: LocalDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `LocalDecl`
	 * labeled alternative in `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitLocalDecl?: (ctx: LocalDeclContext) => void;

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
	 * Enter a parse tree produced by the `ExpVariable`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpVariable?: (ctx: ExpVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpVariable`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpVariable?: (ctx: ExpVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `Application`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Application`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `InfixApplication`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterInfixApplication?: (ctx: InfixApplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `InfixApplication`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitInfixApplication?: (ctx: InfixApplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Parentheses`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `Parentheses`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by the `List`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by the `List`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpSequence`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpSequence?: (ctx: ExpSequenceContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpSequence`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpSequence?: (ctx: ExpSequenceContext) => void;

	/**
	 * Enter a parse tree produced by the `LetExpression`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterLetExpression?: (ctx: LetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LetExpression`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitLetExpression?: (ctx: LetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `Conjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `Conjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `Disjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `Disjunction`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitDisjunction?: (ctx: DisjunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `Conditional`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterConditional?: (ctx: ConditionalContext) => void;
	/**
	 * Exit a parse tree produced by the `Conditional`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitConditional?: (ctx: ConditionalContext) => void;

	/**
	 * Enter a parse tree produced by the `Function`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `Function`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

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

	/**
	 * Enter a parse tree produced by `SmlParser.patmatch`.
	 * @param ctx the parse tree
	 */
	enterPatmatch?: (ctx: PatmatchContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.patmatch`.
	 * @param ctx the parse tree
	 */
	exitPatmatch?: (ctx: PatmatchContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.matches`.
	 * @param ctx the parse tree
	 */
	enterMatches?: (ctx: MatchesContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.matches`.
	 * @param ctx the parse tree
	 */
	exitMatches?: (ctx: MatchesContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	enterPat?: (ctx: PatContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.pat`.
	 * @param ctx the parse tree
	 */
	exitPat?: (ctx: PatContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDec?: (ctx: DecContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDec?: (ctx: DecContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.decSequence`.
	 * @param ctx the parse tree
	 */
	enterDecSequence?: (ctx: DecSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.decSequence`.
	 * @param ctx the parse tree
	 */
	exitDecSequence?: (ctx: DecSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.valbind`.
	 * @param ctx the parse tree
	 */
	enterValbind?: (ctx: ValbindContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.valbind`.
	 * @param ctx the parse tree
	 */
	exitValbind?: (ctx: ValbindContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.funbind`.
	 * @param ctx the parse tree
	 */
	enterFunbind?: (ctx: FunbindContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.funbind`.
	 * @param ctx the parse tree
	 */
	exitFunbind?: (ctx: FunbindContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.funmatches`.
	 * @param ctx the parse tree
	 */
	enterFunmatches?: (ctx: FunmatchesContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.funmatches`.
	 * @param ctx the parse tree
	 */
	exitFunmatches?: (ctx: FunmatchesContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.funmatch`.
	 * @param ctx the parse tree
	 */
	enterFunmatch?: (ctx: FunmatchContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.funmatch`.
	 * @param ctx the parse tree
	 */
	exitFunmatch?: (ctx: FunmatchContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
}

