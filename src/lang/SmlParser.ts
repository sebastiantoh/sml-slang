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
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly WHITESPACE = 16;
	public static readonly COMMENT = 17;
	public static readonly INT = 18;
	public static readonly REAL = 19;
	public static readonly CHAR = 20;
	public static readonly STRING = 21;
	public static readonly TRUE = 22;
	public static readonly FALSE = 23;
	public static readonly LPAREN = 24;
	public static readonly RPAREN = 25;
	public static readonly LSQUARE = 26;
	public static readonly RSQUARE = 27;
	public static readonly REC = 28;
	public static readonly AND = 29;
	public static readonly SEMICOLON = 30;
	public static readonly COLON = 31;
	public static readonly COMMA = 32;
	public static readonly UNIT = 33;
	public static readonly UNDERSCORE = 34;
	public static readonly SLASH = 35;
	public static readonly DIV = 36;
	public static readonly MOD = 37;
	public static readonly STAR = 38;
	public static readonly PLUS = 39;
	public static readonly MINUS = 40;
	public static readonly CARET = 41;
	public static readonly CONS = 42;
	public static readonly AT = 43;
	public static readonly EQ = 44;
	public static readonly NEQ = 45;
	public static readonly LT = 46;
	public static readonly GT = 47;
	public static readonly LTE = 48;
	public static readonly GTE = 49;
	public static readonly ANDALSO = 50;
	public static readonly ORELSE = 51;
	public static readonly QUOTE = 52;
	public static readonly ID = 53;
	public static readonly VAR = 54;
	public static readonly RULE_con = 0;
	public static readonly RULE_exp = 1;
	public static readonly RULE_patmatch = 2;
	public static readonly RULE_matches = 3;
	public static readonly RULE_pat = 4;
	public static readonly RULE_typ = 5;
	public static readonly RULE_dec = 6;
	public static readonly RULE_decSequence = 7;
	public static readonly RULE_valbind = 8;
	public static readonly RULE_funbind = 9;
	public static readonly RULE_funmatches = 10;
	public static readonly RULE_funmatch = 11;
	public static readonly RULE_prog = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"con", "exp", "patmatch", "matches", "pat", "typ", "dec", "decSequence", 
		"valbind", "funbind", "funmatches", "funmatch", "prog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'case'", 
		"'of'", "'fn'", "'=>'", "'|'", "'->'", "'val'", "'fun'", "'local'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'true'", "'false'", 
		"'('", "')'", "'['", "']'", "'rec'", "'and'", "';'", "':'", "','", "'()'", 
		"'_'", "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", 
		"'='", "'<>'", "'<'", "'>'", "'<='", "'>='", "'andalso'", "'orelse'", 
		"'''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "WHITESPACE", "COMMENT", "INT", "REAL", "CHAR", 
		"STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC", 
		"AND", "SEMICOLON", "COLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV", 
		"MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", 
		"GT", "LTE", "GTE", "ANDALSO", "ORELSE", "QUOTE", "ID", "VAR",
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
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.match(SmlParser.INT);
				}
				break;
			case SmlParser.REAL:
				_localctx = new RealContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.match(SmlParser.REAL);
				}
				break;
			case SmlParser.CHAR:
				_localctx = new CharacterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 28;
				this.match(SmlParser.CHAR);
				}
				break;
			case SmlParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 29;
				this.match(SmlParser.STRING);
				}
				break;
			case SmlParser.TRUE:
			case SmlParser.FALSE:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 30;
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
				this.state = 31;
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
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new ConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 35;
				this.con();
				}
				break;

			case 2:
				{
				_localctx = new ExpVariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 36;
				(_localctx as ExpVariableContext)._id = this.match(SmlParser.ID);
				}
				break;

			case 3:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this.match(SmlParser.LPAREN);
				this.state = 38;
				this.exp(0);
				this.state = 39;
				this.match(SmlParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 41;
				this.match(SmlParser.LSQUARE);
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.T__3) | (1 << SmlParser.T__6) | (1 << SmlParser.T__8) | (1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN) | (1 << SmlParser.LSQUARE))) !== 0) || _la === SmlParser.UNIT || _la === SmlParser.ID) {
					{
					this.state = 42;
					this.exp(0);
					this.state = 47;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SmlParser.COMMA) {
						{
						{
						this.state = 43;
						this.match(SmlParser.COMMA);
						this.state = 44;
						this.exp(0);
						}
						}
						this.state = 49;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 52;
				this.match(SmlParser.RSQUARE);
				}
				break;

			case 5:
				{
				_localctx = new ExpSequenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(SmlParser.LPAREN);
				this.state = 54;
				this.exp(0);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 55;
					this.match(SmlParser.SEMICOLON);
					this.state = 56;
					this.exp(0);
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SmlParser.SEMICOLON);
				this.state = 61;
				this.match(SmlParser.RPAREN);
				}
				break;

			case 6:
				{
				_localctx = new LetExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 63;
				this.match(SmlParser.T__0);
				this.state = 64;
				this.decSequence();
				this.state = 65;
				this.match(SmlParser.T__1);
				this.state = 66;
				this.exp(0);
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.SEMICOLON) {
					{
					{
					this.state = 67;
					this.match(SmlParser.SEMICOLON);
					this.state = 68;
					this.exp(0);
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 74;
				this.match(SmlParser.T__2);
				}
				break;

			case 7:
				{
				_localctx = new ConditionalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.match(SmlParser.T__3);
				this.state = 77;
				(_localctx as ConditionalContext)._pred = this.exp(0);
				this.state = 78;
				this.match(SmlParser.T__4);
				this.state = 79;
				(_localctx as ConditionalContext)._cons = this.exp(0);
				this.state = 80;
				this.match(SmlParser.T__5);
				this.state = 81;
				(_localctx as ConditionalContext)._alt = this.exp(3);
				}
				break;

			case 8:
				{
				_localctx = new CaseAnalysisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this.match(SmlParser.T__6);
				this.state = 84;
				this.exp(0);
				this.state = 85;
				this.match(SmlParser.T__7);
				this.state = 86;
				this.matches();
				}
				break;

			case 9:
				{
				_localctx = new FunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this.match(SmlParser.T__8);
				this.state = 89;
				this.matches();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 120;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 118;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ApplicationContext)._fn = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 92;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 93;
						(_localctx as ApplicationContext)._arg = this.exp(17);
						}
						break;

					case 2:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 94;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 95;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SmlParser.SLASH - 35)) | (1 << (SmlParser.DIV - 35)) | (1 << (SmlParser.MOD - 35)) | (1 << (SmlParser.STAR - 35)))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 96;
						(_localctx as InfixApplicationContext)._op2 = this.exp(16);
						}
						break;

					case 3:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 97;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 98;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SmlParser.PLUS - 39)) | (1 << (SmlParser.MINUS - 39)) | (1 << (SmlParser.CARET - 39)))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 99;
						(_localctx as InfixApplicationContext)._op2 = this.exp(15);
						}
						break;

					case 4:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 100;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 101;
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
						this.state = 102;
						(_localctx as InfixApplicationContext)._op2 = this.exp(13);
						}
						break;

					case 5:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 103;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 104;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SmlParser.EQ - 44)) | (1 << (SmlParser.NEQ - 44)) | (1 << (SmlParser.LT - 44)) | (1 << (SmlParser.GT - 44)) | (1 << (SmlParser.LTE - 44)) | (1 << (SmlParser.GTE - 44)))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 105;
						(_localctx as InfixApplicationContext)._op2 = this.exp(13);
						}
						break;

					case 6:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 106;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 107;
						(_localctx as InfixApplicationContext)._id = this.match(SmlParser.ID);
						this.state = 108;
						(_localctx as InfixApplicationContext)._op2 = this.exp(12);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ConjunctionContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 109;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 110;
						this.match(SmlParser.ANDALSO);
						this.state = 111;
						(_localctx as ConjunctionContext)._op2 = this.exp(6);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
						(_localctx as DisjunctionContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 112;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 113;
						this.match(SmlParser.ORELSE);
						this.state = 114;
						(_localctx as DisjunctionContext)._op2 = this.exp(5);
						}
						break;

					case 9:
						{
						_localctx = new ExpTypeAnnotationContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 115;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 116;
						this.match(SmlParser.COLON);
						this.state = 117;
						this.typ(0);
						}
						break;
					}
					}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
			this.state = 123;
			this.pat(0);
			this.state = 124;
			this.match(SmlParser.T__9);
			this.state = 125;
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
			this.state = 127;
			this.patmatch();
			this.state = 132;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 128;
					this.match(SmlParser.T__10);
					this.state = 129;
					this.patmatch();
					}
					}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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

	public pat(): PatContext;
	public pat(_p: number): PatContext;
	// @RuleVersion(0)
	public pat(_p?: number): PatContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatContext = new PatContext(this._ctx, _parentState);
		let _prevctx: PatContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, SmlParser.RULE_pat, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				_localctx = new PatConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 136;
				this.con();
				}
				break;

			case 2:
				{
				_localctx = new PatWildcardContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				this.match(SmlParser.UNDERSCORE);
				}
				break;

			case 3:
				{
				_localctx = new PatUnitContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 138;
				this.match(SmlParser.UNIT);
				}
				break;

			case 4:
				{
				_localctx = new PatVariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				(_localctx as PatVariableContext)._id = this.match(SmlParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new PatParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(SmlParser.LPAREN);
				this.state = 141;
				this.pat(0);
				this.state = 142;
				this.match(SmlParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 152;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new PatInfixConstructionContext(new PatContext(_parentctx, _parentState));
						(_localctx as PatInfixConstructionContext)._pat1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_pat);
						this.state = 146;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 147;
						this.match(SmlParser.CONS);
						this.state = 148;
						(_localctx as PatInfixConstructionContext)._pat2 = this.pat(3);
						}
						break;

					case 2:
						{
						_localctx = new PatTypeAnnotationContext(new PatContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_pat);
						this.state = 149;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 150;
						this.match(SmlParser.COLON);
						this.state = 151;
						this.typ(0);
						}
						break;
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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

	public typ(): TypContext;
	public typ(_p: number): TypContext;
	// @RuleVersion(0)
	public typ(_p?: number): TypContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypContext = new TypContext(this._ctx, _parentState);
		let _prevctx: TypContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, SmlParser.RULE_typ, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				_localctx = new TypeVariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 158;
				this.match(SmlParser.VAR);
				}
				break;

			case 2:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SmlParser.VAR) {
						{
						this.state = 159;
						this.match(SmlParser.VAR);
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 162;
					this.match(SmlParser.VAR);
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 163;
						this.match(SmlParser.COMMA);
						this.state = 164;
						this.match(SmlParser.VAR);
						}
						}
						this.state = 167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === SmlParser.COMMA);
					}
					}
					break;
				}
				this.state = 171;
				(_localctx as TypeConstructorContext)._id = this.match(SmlParser.ID);
				}
				break;

			case 3:
				{
				_localctx = new TypeParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.match(SmlParser.LPAREN);
				this.state = 173;
				this.typ(0);
				this.state = 174;
				this.match(SmlParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 183;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeFunctionContext(new TypContext(_parentctx, _parentState));
					(_localctx as TypeFunctionContext)._argTy = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_typ);
					this.state = 178;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 179;
					this.match(SmlParser.T__11);
					this.state = 180;
					(_localctx as TypeFunctionContext)._retTy = this.typ(2);
					}
					}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
	public dec(): DecContext {
		let _localctx: DecContext = new DecContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmlParser.RULE_dec);
		let _la: number;
		try {
			this.state = 210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.T__12:
				_localctx = new ValueDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.match(SmlParser.T__12);
				this.state = 187;
				this.valbind();
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.AND) {
					{
					{
					this.state = 188;
					this.match(SmlParser.AND);
					this.state = 189;
					this.valbind();
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SmlParser.T__13:
				_localctx = new FunDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.match(SmlParser.T__13);
				this.state = 196;
				this.funbind();
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.AND) {
					{
					{
					this.state = 197;
					this.match(SmlParser.AND);
					this.state = 198;
					this.funbind();
					}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SmlParser.T__14:
				_localctx = new LocalDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this.match(SmlParser.T__14);
				this.state = 205;
				(_localctx as LocalDeclContext)._localDecs = this.decSequence();
				this.state = 206;
				this.match(SmlParser.T__1);
				this.state = 207;
				(_localctx as LocalDeclContext)._decs = this.decSequence();
				this.state = 208;
				this.match(SmlParser.T__2);
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
	// @RuleVersion(0)
	public decSequence(): DecSequenceContext {
		let _localctx: DecSequenceContext = new DecSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmlParser.RULE_decSequence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 212;
					this.dec();
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SmlParser.SEMICOLON) {
						{
						this.state = 213;
						this.match(SmlParser.SEMICOLON);
						}
					}

					}
					}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 221;
			this.dec();
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
		this.enterRule(_localctx, 16, SmlParser.RULE_valbind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmlParser.REC) {
				{
				this.state = 223;
				this.match(SmlParser.REC);
				}
			}

			this.state = 226;
			this.pat(0);
			this.state = 227;
			this.match(SmlParser.EQ);
			this.state = 228;
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
	public funbind(): FunbindContext {
		let _localctx: FunbindContext = new FunbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmlParser.RULE_funbind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.funmatches();
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
	public funmatches(): FunmatchesContext {
		let _localctx: FunmatchesContext = new FunmatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmlParser.RULE_funmatches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.funmatch();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.T__10) {
				{
				{
				this.state = 233;
				this.match(SmlParser.T__10);
				this.state = 234;
				this.funmatch();
				}
				}
				this.state = 239;
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
	public funmatch(): FunmatchContext {
		let _localctx: FunmatchContext = new FunmatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmlParser.RULE_funmatch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			_localctx._id = this.match(SmlParser.ID);
			this.state = 241;
			this.pat(0);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.UNIT - 33)) | (1 << (SmlParser.UNDERSCORE - 33)) | (1 << (SmlParser.ID - 33)))) !== 0)) {
				{
				{
				this.state = 242;
				this.pat(0);
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this.match(SmlParser.EQ);
			this.state = 249;
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
		this.enterRule(_localctx, 24, SmlParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
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

		case 4:
			return this.pat_sempred(_localctx as PatContext, predIndex);

		case 5:
			return this.typ_sempred(_localctx as TypContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private pat_sempred(_localctx: PatContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typ_sempred(_localctx: TypContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u0100\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x030\n\x03\f\x03\x0E\x033\v\x03\x05\x035\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03<\n\x03\r\x03\x0E\x03" +
		"=\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03H\n\x03\f\x03\x0E\x03K\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03]\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03y\n\x03\f\x03\x0E\x03|\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x85\n\x05\f\x05\x0E" +
		"\x05\x88\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\x93\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x07\x06\x9B\n\x06\f\x06\x0E\x06\x9E\v\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xA3\n\x07\x03\x07\x03\x07\x03\x07\x06\x07\xA8\n\x07\r" +
		"\x07\x0E\x07\xA9\x05\x07\xAC\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xB3\n\x07\x03\x07\x03\x07\x03\x07\x07\x07\xB8\n\x07\f\x07" +
		"\x0E\x07\xBB\v\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xC1\n\b\f\b\x0E\b\xC4" +
		"\v\b\x03\b\x03\b\x03\b\x03\b\x07\b\xCA\n\b\f\b\x0E\b\xCD\v\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xD5\n\b\x03\t\x03\t\x05\t\xD9\n\t\x07" +
		"\t\xDB\n\t\f\t\x0E\t\xDE\v\t\x03\t\x03\t\x03\n\x05\n\xE3\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\xEE\n\f\f\f\x0E\f\xF1" +
		"\v\f\x03\r\x03\r\x03\r\x07\r\xF6\n\r\f\r\x0E\r\xF9\v\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x02\x02\x05\x04\n\f\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x07\x03\x02\x18\x19\x03\x02%(\x03\x02)+\x03\x02,-\x03\x02" +
		".3\x02\u0122\x02\"\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06}\x03\x02" +
		"\x02\x02\b\x81\x03\x02\x02\x02\n\x92\x03\x02\x02\x02\f\xB2\x03\x02\x02" +
		"\x02\x0E\xD4\x03\x02\x02\x02\x10\xDC\x03\x02\x02\x02\x12\xE2\x03\x02\x02" +
		"\x02\x14\xE8\x03\x02\x02\x02\x16\xEA\x03\x02\x02\x02\x18\xF2\x03\x02\x02" +
		"\x02\x1A\xFD\x03\x02\x02\x02\x1C#\x07\x14\x02\x02\x1D#\x07\x15\x02\x02" +
		"\x1E#\x07\x16\x02\x02\x1F#\x07\x17\x02\x02 #\t\x02\x02\x02!#\x07#\x02" +
		"\x02\"\x1C\x03\x02\x02\x02\"\x1D\x03\x02\x02\x02\"\x1E\x03\x02\x02\x02" +
		"\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#\x03\x03" +
		"\x02\x02\x02$%\b\x03\x01\x02%]\x05\x02\x02\x02&]\x077\x02\x02\'(\x07\x1A" +
		"\x02\x02()\x05\x04\x03\x02)*\x07\x1B\x02\x02*]\x03\x02\x02\x02+4\x07\x1C" +
		"\x02\x02,1\x05\x04\x03\x02-.\x07\"\x02\x02.0\x05\x04\x03\x02/-\x03\x02" +
		"\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0225\x03\x02" +
		"\x02\x0231\x03\x02\x02\x024,\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02" +
		"\x02\x026]\x07\x1D\x02\x0278\x07\x1A\x02\x028;\x05\x04\x03\x029:\x07 " +
		"\x02\x02:<\x05\x04\x03\x02;9\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02" +
		"\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x07\x1B\x02\x02@]\x03\x02" +
		"\x02\x02AB\x07\x03\x02\x02BC\x05\x10\t\x02CD\x07\x04\x02\x02DI\x05\x04" +
		"\x03\x02EF\x07 \x02\x02FH\x05\x04\x03\x02GE\x03\x02\x02\x02HK\x03\x02" +
		"\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02" +
		"\x02\x02LM\x07\x05\x02\x02M]\x03\x02\x02\x02NO\x07\x06\x02\x02OP\x05\x04" +
		"\x03\x02PQ\x07\x07\x02\x02QR\x05\x04\x03\x02RS\x07\b\x02\x02ST\x05\x04" +
		"\x03\x05T]\x03\x02\x02\x02UV\x07\t\x02\x02VW\x05\x04\x03\x02WX\x07\n\x02" +
		"\x02XY\x05\b\x05\x02Y]\x03\x02\x02\x02Z[\x07\v\x02\x02[]\x05\b\x05\x02" +
		"\\$\x03\x02\x02\x02\\&\x03\x02\x02\x02\\\'\x03\x02\x02\x02\\+\x03\x02" +
		"\x02\x02\\7\x03\x02\x02\x02\\A\x03\x02\x02\x02\\N\x03\x02\x02\x02\\U\x03" +
		"\x02\x02\x02\\Z\x03\x02\x02\x02]z\x03\x02\x02\x02^_\f\x12\x02\x02_y\x05" +
		"\x04\x03\x13`a\f\x11\x02\x02ab\t\x03\x02\x02by\x05\x04\x03\x12cd\f\x10" +
		"\x02\x02de\t\x04\x02\x02ey\x05\x04\x03\x11fg\f\x0F\x02\x02gh\t\x05\x02" +
		"\x02hy\x05\x04\x03\x0Fij\f\x0E\x02\x02jk\t\x06\x02\x02ky\x05\x04\x03\x0F" +
		"lm\f\r\x02\x02mn\x077\x02\x02ny\x05\x04\x03\x0Eop\f\x07\x02\x02pq\x07" +
		"4\x02\x02qy\x05\x04\x03\brs\f\x06\x02\x02st\x075\x02\x02ty\x05\x04\x03" +
		"\x07uv\f\b\x02\x02vw\x07!\x02\x02wy\x05\f\x07\x02x^\x03\x02\x02\x02x`" +
		"\x03\x02\x02\x02xc\x03\x02\x02\x02xf\x03\x02\x02\x02xi\x03\x02\x02\x02" +
		"xl\x03\x02\x02\x02xo\x03\x02\x02\x02xr\x03\x02\x02\x02xu\x03\x02\x02\x02" +
		"y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\x05\x03\x02\x02" +
		"\x02|z\x03\x02\x02\x02}~\x05\n\x06\x02~\x7F\x07\f\x02\x02\x7F\x80\x05" +
		"\x04\x03\x02\x80\x07\x03\x02\x02\x02\x81\x86\x05\x06\x04\x02\x82\x83\x07" +
		"\r\x02\x02\x83\x85\x05\x06\x04\x02\x84\x82\x03\x02\x02\x02\x85\x88\x03" +
		"\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\t\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\b\x06\x01\x02\x8A\x93\x05" +
		"\x02\x02\x02\x8B\x93\x07$\x02\x02\x8C\x93\x07#\x02\x02\x8D\x93\x077\x02" +
		"\x02\x8E\x8F\x07\x1A\x02\x02\x8F\x90\x05\n\x06\x02\x90\x91\x07\x1B\x02" +
		"\x02\x91\x93\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x92\x8B\x03\x02\x02" +
		"\x02\x92\x8C\x03\x02\x02\x02\x92\x8D\x03\x02\x02\x02\x92\x8E\x03\x02\x02" +
		"\x02\x93\x9C\x03\x02\x02\x02\x94\x95\f\x05\x02\x02\x95\x96\x07,\x02\x02" +
		"\x96\x9B\x05\n\x06\x05\x97\x98\f\x03\x02\x02\x98\x99\x07!\x02\x02\x99" +
		"\x9B\x05\f\x07\x02\x9A\x94\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02\x9B" +
		"\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
		"\v\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\b\x07\x01\x02\xA0\xB3" +
		"\x078\x02\x02\xA1\xA3\x078\x02\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03" +
		"\x02\x02\x02\xA3\xAC\x03\x02\x02\x02\xA4\xA7\x078\x02\x02\xA5\xA6\x07" +
		"\"\x02\x02\xA6\xA8\x078\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02" +
		"\x02\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA4\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xB3\x077\x02\x02\xAE\xAF\x07\x1A\x02\x02\xAF\xB0\x05\f\x07" +
		"\x02\xB0\xB1\x07\x1B\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\x9F\x03\x02\x02" +
		"\x02\xB2\xAB\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB3\xB9\x03\x02\x02" +
		"\x02\xB4\xB5\f\x03\x02\x02\xB5\xB6\x07\x0E\x02\x02\xB6\xB8\x05\f\x07\x04" +
		"\xB7\xB4\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\r\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBC\xBD\x07\x0F\x02\x02\xBD\xC2\x05\x12\n\x02\xBE\xBF\x07\x1F\x02\x02" +
		"\xBF\xC1\x05\x12\n\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02" +
		"\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xD5\x03\x02\x02\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\x10\x02\x02\xC6\xCB\x05\x14\v\x02" +
		"\xC7\xC8\x07\x1F\x02\x02\xC8\xCA\x05\x14\v\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\xD5\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xCF\x07\x11\x02\x02" +
		"\xCF\xD0\x05\x10\t\x02\xD0\xD1\x07\x04\x02\x02\xD1\xD2\x05\x10\t\x02\xD2" +
		"\xD3\x07\x05\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xBC\x03\x02\x02\x02\xD4" +
		"\xC5\x03\x02\x02\x02\xD4\xCE\x03\x02\x02\x02\xD5\x0F\x03\x02\x02\x02\xD6" +
		"\xD8\x05\x0E\b\x02\xD7\xD9\x07 \x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\xDE" +
		"\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF" +
		"\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x05\x0E\b\x02\xE0\x11" +
		"\x03\x02\x02\x02\xE1\xE3\x07\x1E\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3" +
		"\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x05\n\x06\x02\xE5\xE6" +
		"\x07.\x02\x02\xE6\xE7\x05\x04\x03\x02\xE7\x13\x03\x02\x02\x02\xE8\xE9" +
		"\x05\x16\f\x02\xE9\x15\x03\x02\x02\x02\xEA\xEF\x05\x18\r\x02\xEB\xEC\x07" +
		"\r\x02\x02\xEC\xEE\x05\x18\r\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02" +
		"\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\x17\x03\x02" +
		"\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x077\x02\x02\xF3\xF7\x05\n\x06" +
		"\x02\xF4\xF6\x05\n\x06\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02" +
		"\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02" +
		"\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\x07.\x02\x02\xFB\xFC\x05\x04\x03" +
		"\x02\xFC\x19\x03\x02\x02\x02\xFD\xFE\x05\x10\t\x02\xFE\x1B\x03\x02\x02" +
		"\x02\x1B\"14=I\\xz\x86\x92\x9A\x9C\xA2\xA9\xAB\xB2\xB9\xC2\xCB\xD4\xD8" +
		"\xDC\xE2\xEF\xF7";
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
export class RealContext extends ConContext {
	public REAL(): TerminalNode { return this.getToken(SmlParser.REAL, 0); }
	constructor(ctx: ConContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitReal) {
			return visitor.visitReal(this);
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
export class ListContext extends ExpContext {
	public LSQUARE(): TerminalNode { return this.getToken(SmlParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(SmlParser.RSQUARE, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.COMMA);
		} else {
			return this.getToken(SmlParser.COMMA, i);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpSequenceContext extends ExpContext {
	public LPAREN(): TerminalNode { return this.getToken(SmlParser.LPAREN, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SmlParser.RPAREN, 0); }
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
		if (listener.enterExpSequence) {
			listener.enterExpSequence(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitExpSequence) {
			listener.exitExpSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitExpSequence) {
			return visitor.visitExpSequence(this);
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
export class ExpTypeAnnotationContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public COLON(): TerminalNode { return this.getToken(SmlParser.COLON, 0); }
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterExpTypeAnnotation) {
			listener.enterExpTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitExpTypeAnnotation) {
			listener.exitExpTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitExpTypeAnnotation) {
			return visitor.visitExpTypeAnnotation(this);
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
export class CaseAnalysisContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public matches(): MatchesContext {
		return this.getRuleContext(0, MatchesContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterCaseAnalysis) {
			listener.enterCaseAnalysis(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitCaseAnalysis) {
			listener.exitCaseAnalysis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitCaseAnalysis) {
			return visitor.visitCaseAnalysis(this);
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
export class PatWildcardContext extends PatContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(SmlParser.UNDERSCORE, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatWildcard) {
			listener.enterPatWildcard(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatWildcard) {
			listener.exitPatWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatWildcard) {
			return visitor.visitPatWildcard(this);
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
export class PatInfixConstructionContext extends PatContext {
	public _pat1!: PatContext;
	public _pat2!: PatContext;
	public CONS(): TerminalNode { return this.getToken(SmlParser.CONS, 0); }
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatInfixConstruction) {
			listener.enterPatInfixConstruction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatInfixConstruction) {
			listener.exitPatInfixConstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatInfixConstruction) {
			return visitor.visitPatInfixConstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatParenthesesContext extends PatContext {
	public LPAREN(): TerminalNode { return this.getToken(SmlParser.LPAREN, 0); }
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SmlParser.RPAREN, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatParentheses) {
			listener.enterPatParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatParentheses) {
			listener.exitPatParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatParentheses) {
			return visitor.visitPatParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatTypeAnnotationContext extends PatContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public COLON(): TerminalNode { return this.getToken(SmlParser.COLON, 0); }
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatTypeAnnotation) {
			listener.enterPatTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatTypeAnnotation) {
			listener.exitPatTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatTypeAnnotation) {
			return visitor.visitPatTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_typ; }
	public copyFrom(ctx: TypContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeVariableContext extends TypContext {
	public VAR(): TerminalNode { return this.getToken(SmlParser.VAR, 0); }
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTypeVariable) {
			listener.enterTypeVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTypeVariable) {
			listener.exitTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends TypContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(SmlParser.ID, 0); }
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.VAR);
		} else {
			return this.getToken(SmlParser.VAR, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.COMMA);
		} else {
			return this.getToken(SmlParser.COMMA, i);
		}
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParenthesesContext extends TypContext {
	public LPAREN(): TerminalNode { return this.getToken(SmlParser.LPAREN, 0); }
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SmlParser.RPAREN, 0); }
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTypeParentheses) {
			listener.enterTypeParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTypeParentheses) {
			listener.exitTypeParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTypeParentheses) {
			return visitor.visitTypeParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFunctionContext extends TypContext {
	public _argTy!: TypContext;
	public _retTy!: TypContext;
	public typ(): TypContext[];
	public typ(i: number): TypContext;
	public typ(i?: number): TypContext | TypContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypContext);
		} else {
			return this.getRuleContext(i, TypContext);
		}
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTypeFunction) {
			listener.enterTypeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTypeFunction) {
			listener.exitTypeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTypeFunction) {
			return visitor.visitTypeFunction(this);
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
export class FunDeclContext extends DecContext {
	public funbind(): FunbindContext[];
	public funbind(i: number): FunbindContext;
	public funbind(i?: number): FunbindContext | FunbindContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunbindContext);
		} else {
			return this.getRuleContext(i, FunbindContext);
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
		if (listener.enterFunDecl) {
			listener.enterFunDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunDecl) {
			listener.exitFunDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunDecl) {
			return visitor.visitFunDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalDeclContext extends DecContext {
	public _localDecs!: DecSequenceContext;
	public _decs!: DecSequenceContext;
	public decSequence(): DecSequenceContext[];
	public decSequence(i: number): DecSequenceContext;
	public decSequence(i?: number): DecSequenceContext | DecSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecSequenceContext);
		} else {
			return this.getRuleContext(i, DecSequenceContext);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLocalDecl) {
			listener.enterLocalDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLocalDecl) {
			listener.exitLocalDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLocalDecl) {
			return visitor.visitLocalDecl(this);
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


export class FunbindContext extends ParserRuleContext {
	public funmatches(): FunmatchesContext {
		return this.getRuleContext(0, FunmatchesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_funbind; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunbind) {
			listener.enterFunbind(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunbind) {
			listener.exitFunbind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunbind) {
			return visitor.visitFunbind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunmatchesContext extends ParserRuleContext {
	public funmatch(): FunmatchContext[];
	public funmatch(i: number): FunmatchContext;
	public funmatch(i?: number): FunmatchContext | FunmatchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunmatchContext);
		} else {
			return this.getRuleContext(i, FunmatchContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_funmatches; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunmatches) {
			listener.enterFunmatches(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunmatches) {
			listener.exitFunmatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunmatches) {
			return visitor.visitFunmatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunmatchContext extends ParserRuleContext {
	public _id!: Token;
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(SmlParser.EQ, 0); }
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public ID(): TerminalNode { return this.getToken(SmlParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_funmatch; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunmatch) {
			listener.enterFunmatch(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunmatch) {
			listener.exitFunmatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunmatch) {
			return visitor.visitFunmatch(this);
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


