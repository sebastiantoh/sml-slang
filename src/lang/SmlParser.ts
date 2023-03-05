// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SmlListener } from "./SmlListener";
import { SmlVisitor } from "./SmlVisitor";


export class SmlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly WHITESPACE = 11;
	public static readonly INT = 12;
	public static readonly FLOAT = 13;
	public static readonly CHAR = 14;
	public static readonly STRING = 15;
	public static readonly TRUE = 16;
	public static readonly FALSE = 17;
	public static readonly LPAREN = 18;
	public static readonly RPAREN = 19;
	public static readonly REC = 20;
	public static readonly AND = 21;
	public static readonly SEMICOLON = 22;
	public static readonly UNIT = 23;
	public static readonly SLASH = 24;
	public static readonly DIV = 25;
	public static readonly MOD = 26;
	public static readonly STAR = 27;
	public static readonly PLUS = 28;
	public static readonly MINUS = 29;
	public static readonly CARET = 30;
	public static readonly CONS = 31;
	public static readonly AT = 32;
	public static readonly EQ = 33;
	public static readonly NEQ = 34;
	public static readonly LT = 35;
	public static readonly GT = 36;
	public static readonly LTE = 37;
	public static readonly GTE = 38;
	public static readonly ANDALSO = 39;
	public static readonly ORELSE = 40;
	public static readonly ID = 41;
	public static readonly RULE_con = 0;
	public static readonly RULE_exp = 1;
	public static readonly RULE_patmatch = 2;
	public static readonly RULE_matches = 3;
	public static readonly RULE_pat = 4;
	public static readonly RULE_dec = 5;
	public static readonly RULE_decSequence = 6;
	public static readonly RULE_valbind = 7;
	public static readonly RULE_prog = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"con", "exp", "patmatch", "matches", "pat", "dec", "decSequence", "valbind", 
		"prog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'fn'", 
		"'=>'", "'|'", "'val'", undefined, undefined, undefined, undefined, undefined, 
		"'true'", "'false'", "'('", "')'", "'rec'", "'and'", "';'", "'()'", "'/'", 
		"'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", 
		"'<'", "'>'", "'<='", "'>='", "'andalso'", "'orelse'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "WHITESPACE", "INT", "FLOAT", 
		"CHAR", "STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "REC", "AND", "SEMICOLON", 
		"UNIT", "SLASH", "DIV", "MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", 
		"AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SmlParser._ATN, this);
	}
	// @RuleVersion(0)
	public con(): ConContext {
		let _localctx: ConContext = new ConContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SmlParser.RULE_con);
		let _la: number;
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.match(SmlParser.INT);
				}
				break;
			case SmlParser.FLOAT:
				_localctx = new FloatingPointContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.match(SmlParser.FLOAT);
				}
				break;
			case SmlParser.CHAR:
				_localctx = new CharacterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 20;
				this.match(SmlParser.CHAR);
				}
				break;
			case SmlParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 21;
				this.match(SmlParser.STRING);
				}
				break;
			case SmlParser.TRUE:
			case SmlParser.FALSE:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 22;
				_la = this._input.LA(1);
				if (!(_la === SmlParser.TRUE || _la === SmlParser.FALSE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SmlParser.UNIT:
				_localctx = new UnitContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 23;
				this.match(SmlParser.UNIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, SmlParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
			case SmlParser.FLOAT:
			case SmlParser.CHAR:
			case SmlParser.STRING:
			case SmlParser.TRUE:
			case SmlParser.FALSE:
			case SmlParser.UNIT:
				{
				_localctx = new ConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 27;
				this.con();
				}
				break;
			case SmlParser.ID:
				{
				_localctx = new ExpVariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				(_localctx as ExpVariableContext)._id = this.match(SmlParser.ID);
				}
				break;
			case SmlParser.LPAREN:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 29;
				this.match(SmlParser.LPAREN);
				this.state = 30;
				this.exp(0);
				this.state = 31;
				this.match(SmlParser.RPAREN);
				}
				break;
			case SmlParser.T__0:
				{
				_localctx = new LetExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(SmlParser.T__0);
				this.state = 34;
				this.decSequence();
				this.state = 35;
				this.match(SmlParser.T__1);
				this.state = 36;
				this.exp(0);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.SEMICOLON) {
					{
					{
					this.state = 37;
					this.match(SmlParser.SEMICOLON);
					this.state = 38;
					this.exp(0);
					}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 44;
				this.match(SmlParser.T__2);
				}
				break;
			case SmlParser.T__3:
				{
				_localctx = new ConditionalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				this.match(SmlParser.T__3);
				this.state = 47;
				(_localctx as ConditionalContext)._pred = this.exp(0);
				this.state = 48;
				this.match(SmlParser.T__4);
				this.state = 49;
				(_localctx as ConditionalContext)._cons = this.exp(0);
				this.state = 50;
				this.match(SmlParser.T__5);
				this.state = 51;
				(_localctx as ConditionalContext)._alt = this.exp(2);
				}
				break;
			case SmlParser.T__6:
				{
				_localctx = new FunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(SmlParser.T__6);
				this.state = 54;
				this.matches();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 82;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 80;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ApplicationContext)._fn = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 57;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 58;
						(_localctx as ApplicationContext)._arg = this.exp(13);
						}
						break;

					case 2:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 59;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 60;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.SLASH) | (1 << SmlParser.DIV) | (1 << SmlParser.MOD) | (1 << SmlParser.STAR))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 61;
						(_localctx as InfixApplicationContext)._op2 = this.exp(12);
						}
						break;

					case 3:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 62;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 63;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.PLUS) | (1 << SmlParser.MINUS) | (1 << SmlParser.CARET))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 64;
						(_localctx as InfixApplicationContext)._op2 = this.exp(11);
						}
						break;

					case 4:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 65;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 66;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SmlParser.CONS || _la === SmlParser.AT)) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 67;
						(_localctx as InfixApplicationContext)._op2 = this.exp(9);
						}
						break;

					case 5:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 68;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 69;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.EQ - 33)) | (1 << (SmlParser.NEQ - 33)) | (1 << (SmlParser.LT - 33)) | (1 << (SmlParser.GT - 33)) | (1 << (SmlParser.LTE - 33)) | (1 << (SmlParser.GTE - 33)))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 70;
						(_localctx as InfixApplicationContext)._op2 = this.exp(9);
						}
						break;

					case 6:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 71;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 72;
						(_localctx as InfixApplicationContext)._id = this.match(SmlParser.ID);
						this.state = 73;
						(_localctx as InfixApplicationContext)._op2 = this.exp(8);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ConjunctionContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 74;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 75;
						this.match(SmlParser.ANDALSO);
						this.state = 76;
						(_localctx as ConjunctionContext)._op2 = this.exp(5);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
						(_localctx as DisjunctionContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 77;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 78;
						this.match(SmlParser.ORELSE);
						this.state = 79;
						(_localctx as DisjunctionContext)._op2 = this.exp(4);
						}
						break;
					}
					}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patmatch(): PatmatchContext {
		let _localctx: PatmatchContext = new PatmatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmlParser.RULE_patmatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.pat();
			this.state = 86;
			this.match(SmlParser.T__7);
			this.state = 87;
			this.exp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matches(): MatchesContext {
		let _localctx: MatchesContext = new MatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmlParser.RULE_matches);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.patmatch();
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 90;
					this.match(SmlParser.T__8);
					this.state = 91;
					this.patmatch();
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pat(): PatContext {
		let _localctx: PatContext = new PatContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmlParser.RULE_pat);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new PatConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.con();
				}
				break;

			case 2:
				_localctx = new PatUnitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.match(SmlParser.UNIT);
				}
				break;

			case 3:
				_localctx = new PatVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				(_localctx as PatVariableContext)._id = this.match(SmlParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dec(): DecContext {
		let _localctx: DecContext = new DecContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SmlParser.RULE_dec);
		let _la: number;
		try {
			_localctx = new ValueDeclContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(SmlParser.T__9);
			this.state = 103;
			this.valbind();
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.AND) {
				{
				{
				this.state = 104;
				this.match(SmlParser.AND);
				this.state = 105;
				this.valbind();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decSequence(): DecSequenceContext {
		let _localctx: DecSequenceContext = new DecSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmlParser.RULE_decSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 111;
				this.dec();
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmlParser.SEMICOLON) {
					{
					this.state = 112;
					this.match(SmlParser.SEMICOLON);
					}
				}

				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valbind(): ValbindContext {
		let _localctx: ValbindContext = new ValbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmlParser.RULE_valbind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmlParser.REC) {
				{
				this.state = 119;
				this.match(SmlParser.REC);
				}
			}

			this.state = 122;
			this.pat();
			this.state = 123;
			this.match(SmlParser.EQ);
			this.state = 124;
			this.exp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmlParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.decSequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.exp_sempred(_localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\x83\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02\x1B\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"*\n\x03\f\x03\x0E\x03-\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03S\n\x03\f\x03\x0E\x03V\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05_\n\x05\f\x05" +
		"\x0E\x05b\v\x05\x03\x06\x03\x06\x03\x06\x05\x06g\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07m\n\x07\f\x07\x0E\x07p\v\x07\x03\b\x03\b\x05\b" +
		"t\n\b\x06\bv\n\b\r\b\x0E\bw\x03\t\x05\t{\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x02\x07\x03\x02\x12\x13\x03\x02\x1A\x1D\x03" +
		"\x02\x1E \x03\x02!\"\x03\x02#(\x02\x93\x02\x1A\x03\x02\x02\x02\x049\x03" +
		"\x02\x02\x02\x06W\x03\x02\x02\x02\b[\x03\x02\x02\x02\nf\x03\x02\x02\x02" +
		"\fh\x03\x02\x02\x02\x0Eu\x03\x02\x02\x02\x10z\x03\x02\x02\x02\x12\x80" +
		"\x03\x02\x02\x02\x14\x1B\x07\x0E\x02\x02\x15\x1B\x07\x0F\x02\x02\x16\x1B" +
		"\x07\x10\x02\x02\x17\x1B\x07\x11\x02\x02\x18\x1B\t\x02\x02\x02\x19\x1B" +
		"\x07\x19\x02\x02\x1A\x14\x03\x02\x02\x02\x1A\x15\x03\x02\x02\x02\x1A\x16" +
		"\x03\x02\x02\x02\x1A\x17\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x19" +
		"\x03\x02\x02\x02\x1B\x03\x03\x02\x02\x02\x1C\x1D\b\x03\x01\x02\x1D:\x05" +
		"\x02\x02\x02\x1E:\x07+\x02\x02\x1F \x07\x14\x02\x02 !\x05\x04\x03\x02" +
		"!\"\x07\x15\x02\x02\":\x03\x02\x02\x02#$\x07\x03\x02\x02$%\x05\x0E\b\x02" +
		"%&\x07\x04\x02\x02&+\x05\x04\x03\x02\'(\x07\x18\x02\x02(*\x05\x04\x03" +
		"\x02)\'\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02" +
		"\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02./\x07\x05\x02\x02/:\x03\x02" +
		"\x02\x0201\x07\x06\x02\x0212\x05\x04\x03\x0223\x07\x07\x02\x0234\x05\x04" +
		"\x03\x0245\x07\b\x02\x0256\x05\x04\x03\x046:\x03\x02\x02\x0278\x07\t\x02" +
		"\x028:\x05\b\x05\x029\x1C\x03\x02\x02\x029\x1E\x03\x02\x02\x029\x1F\x03" +
		"\x02\x02\x029#\x03\x02\x02\x0290\x03\x02\x02\x0297\x03\x02\x02\x02:T\x03" +
		"\x02\x02\x02;<\f\x0E\x02\x02<S\x05\x04\x03\x0F=>\f\r\x02\x02>?\t\x03\x02" +
		"\x02?S\x05\x04\x03\x0E@A\f\f\x02\x02AB\t\x04\x02\x02BS\x05\x04\x03\rC" +
		"D\f\v\x02\x02DE\t\x05\x02\x02ES\x05\x04\x03\vFG\f\n\x02\x02GH\t\x06\x02" +
		"\x02HS\x05\x04\x03\vIJ\f\t\x02\x02JK\x07+\x02\x02KS\x05\x04\x03\nLM\f" +
		"\x06\x02\x02MN\x07)\x02\x02NS\x05\x04\x03\x07OP\f\x05\x02\x02PQ\x07*\x02" +
		"\x02QS\x05\x04\x03\x06R;\x03\x02\x02\x02R=\x03\x02\x02\x02R@\x03\x02\x02" +
		"\x02RC\x03\x02\x02\x02RF\x03\x02\x02\x02RI\x03\x02\x02\x02RL\x03\x02\x02" +
		"\x02RO\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02" +
		"\x02U\x05\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x05\n\x06\x02XY\x07\n\x02" +
		"\x02YZ\x05\x04\x03\x02Z\x07\x03\x02\x02\x02[`\x05\x06\x04\x02\\]\x07\v" +
		"\x02\x02]_\x05\x06\x04\x02^\\\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02a\t\x03\x02\x02\x02b`\x03\x02\x02\x02cg" +
		"\x05\x02\x02\x02dg\x07\x19\x02\x02eg\x07+\x02\x02fc\x03\x02\x02\x02fd" +
		"\x03\x02\x02\x02fe\x03\x02\x02\x02g\v\x03\x02\x02\x02hi\x07\f\x02\x02" +
		"in\x05\x10\t\x02jk\x07\x17\x02\x02km\x05\x10\t\x02lj\x03\x02\x02\x02m" +
		"p\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\r\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02qs\x05\f\x07\x02rt\x07\x18\x02\x02sr\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tv\x03\x02\x02\x02uq\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x0F\x03\x02\x02\x02y{\x07\x16\x02" +
		"\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x05\n\x06" +
		"\x02}~\x07#\x02\x02~\x7F\x05\x04\x03\x02\x7F\x11\x03\x02\x02\x02\x80\x81" +
		"\x05\x0E\b\x02\x81\x13\x03\x02\x02\x02\r\x1A+9RT`fnswz";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlParser.__ATN) {
			SmlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlParser._serializedATN));
		}

		return SmlParser.__ATN;
	}

}

export class ConContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_con; }
	public copyFrom(ctx: ConContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerContext extends ConContext {
	public INT(): TerminalNode { return this.getToken(SmlParser.INT, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatingPointContext extends ConContext {
	public FLOAT(): TerminalNode { return this.getToken(SmlParser.FLOAT, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFloatingPoint) {
			listener.enterFloatingPoint(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFloatingPoint) {
			listener.exitFloatingPoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFloatingPoint) {
			return visitor.visitFloatingPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharacterContext extends ConContext {
	public CHAR(): TerminalNode { return this.getToken(SmlParser.CHAR, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterCharacter) {
			listener.enterCharacter(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitCharacter) {
			listener.exitCharacter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitCharacter) {
			return visitor.visitCharacter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ConContext {
	public STRING(): TerminalNode { return this.getToken(SmlParser.STRING, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends ConContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.FALSE, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitContext extends ConContext {
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_exp; }
	public copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstantContext extends ExpContext {
	public con(): ConContext {
		return this.getRuleContext(0, ConContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpVariableContext extends ExpContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(SmlParser.ID, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterExpVariable) {
			listener.enterExpVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitExpVariable) {
			listener.exitExpVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitExpVariable) {
			return visitor.visitExpVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplicationContext extends ExpContext {
	public _fn!: ExpContext;
	public _arg!: ExpContext;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixApplicationContext extends ExpContext {
	public _op1!: ExpContext;
	public _id!: Token;
	public _op2!: ExpContext;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SmlParser.SLASH, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SmlParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(SmlParser.MOD, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SmlParser.STAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.MINUS, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(SmlParser.CARET, 0); }
	public CONS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.CONS, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.AT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SmlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SmlParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LTE, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GTE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SmlParser.ID, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterInfixApplication) {
			listener.enterInfixApplication(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitInfixApplication) {
			listener.exitInfixApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitInfixApplication) {
			return visitor.visitInfixApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExpContext {
	public LPAREN(): TerminalNode { return this.getToken(SmlParser.LPAREN, 0); }
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SmlParser.RPAREN, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetExpressionContext extends ExpContext {
	public decSequence(): DecSequenceContext {
		return this.getRuleContext(0, DecSequenceContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.SEMICOLON);
		} else {
			return this.getToken(SmlParser.SEMICOLON, i);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLetExpression) {
			listener.enterLetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLetExpression) {
			listener.exitLetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLetExpression) {
			return visitor.visitLetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConjunctionContext extends ExpContext {
	public _op1!: ExpContext;
	public _op2!: ExpContext;
	public ANDALSO(): TerminalNode { return this.getToken(SmlParser.ANDALSO, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterConjunction) {
			listener.enterConjunction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitConjunction) {
			listener.exitConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisjunctionContext extends ExpContext {
	public _op1!: ExpContext;
	public _op2!: ExpContext;
	public ORELSE(): TerminalNode { return this.getToken(SmlParser.ORELSE, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterDisjunction) {
			listener.enterDisjunction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitDisjunction) {
			listener.exitDisjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitDisjunction) {
			return visitor.visitDisjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalContext extends ExpContext {
	public _pred!: ExpContext;
	public _cons!: ExpContext;
	public _alt!: ExpContext;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionContext extends ExpContext {
	public matches(): MatchesContext {
		return this.getRuleContext(0, MatchesContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatmatchContext extends ParserRuleContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_patmatch; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatmatch) {
			listener.enterPatmatch(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatmatch) {
			listener.exitPatmatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatmatch) {
			return visitor.visitPatmatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchesContext extends ParserRuleContext {
	public patmatch(): PatmatchContext[];
	public patmatch(i: number): PatmatchContext;
	public patmatch(i?: number): PatmatchContext | PatmatchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatmatchContext);
		} else {
			return this.getRuleContext(i, PatmatchContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_matches; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterMatches) {
			listener.enterMatches(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitMatches) {
			listener.exitMatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitMatches) {
			return visitor.visitMatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_pat; }
	public copyFrom(ctx: PatContext): void {
		super.copyFrom(ctx);
	}
}
export class PatConstantContext extends PatContext {
	public con(): ConContext {
		return this.getRuleContext(0, ConContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatConstant) {
			listener.enterPatConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatConstant) {
			listener.exitPatConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatConstant) {
			return visitor.visitPatConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatUnitContext extends PatContext {
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatUnit) {
			listener.enterPatUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatUnit) {
			listener.exitPatUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatUnit) {
			return visitor.visitPatUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatVariableContext extends PatContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(SmlParser.ID, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatVariable) {
			listener.enterPatVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatVariable) {
			listener.exitPatVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatVariable) {
			return visitor.visitPatVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_dec; }
	public copyFrom(ctx: DecContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueDeclContext extends DecContext {
	public valbind(): ValbindContext[];
	public valbind(i: number): ValbindContext;
	public valbind(i?: number): ValbindContext | ValbindContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValbindContext);
		} else {
			return this.getRuleContext(i, ValbindContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.AND);
		} else {
			return this.getToken(SmlParser.AND, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterValueDecl) {
			listener.enterValueDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitValueDecl) {
			listener.exitValueDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitValueDecl) {
			return visitor.visitValueDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecSequenceContext extends ParserRuleContext {
	public dec(): DecContext[];
	public dec(i: number): DecContext;
	public dec(i?: number): DecContext | DecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecContext);
		} else {
			return this.getRuleContext(i, DecContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.SEMICOLON);
		} else {
			return this.getToken(SmlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_decSequence; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterDecSequence) {
			listener.enterDecSequence(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitDecSequence) {
			listener.exitDecSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitDecSequence) {
			return visitor.visitDecSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValbindContext extends ParserRuleContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public EQ(): TerminalNode { return this.getToken(SmlParser.EQ, 0); }
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public REC(): TerminalNode | undefined { return this.tryGetToken(SmlParser.REC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_valbind; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterValbind) {
			listener.enterValbind(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitValbind) {
			listener.exitValbind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitValbind) {
			return visitor.visitValbind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgContext extends ParserRuleContext {
	public decSequence(): DecSequenceContext {
		return this.getRuleContext(0, DecSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_prog; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


