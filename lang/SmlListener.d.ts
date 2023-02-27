import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
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
