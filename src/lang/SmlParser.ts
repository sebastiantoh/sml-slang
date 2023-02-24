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
	public static readonly WHITESPACE = 2;
	public static readonly INT = 3;
	public static readonly FLOAT = 4;
	public static readonly CHAR = 5;
	public static readonly STRING = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly REC = 9;
	public static readonly AND = 10;
	public static readonly SLASH = 11;
	public static readonly DIV = 12;
	public static readonly MOD = 13;
	public static readonly STAR = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly CARET = 17;
	public static readonly CONS = 18;
	public static readonly AT = 19;
	public static readonly EQ = 20;
	public static readonly NEQ = 21;
	public static readonly LT = 22;
	public static readonly GT = 23;
	public static readonly LTE = 24;
	public static readonly GTE = 25;
	public static readonly ID = 26;
	public static readonly RULE_con = 0;
	public static readonly RULE_exp = 1;
	public static readonly RULE_pat = 2;
	public static readonly RULE_dec = 3;
	public static readonly RULE_valbind = 4;
	public static readonly RULE_prog = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"con", "exp", "pat", "dec", "valbind", "prog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'val'", undefined, undefined, undefined, undefined, undefined, 
		"'('", "')'", "'rec'", "'and'", "'/'", "'div'", "'mod'", "'*'", "'+'", 
		"'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", 
		"LPAREN", "RPAREN", "REC", "AND", "SLASH", "DIV", "MOD", "STAR", "PLUS", 
		"MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", 
		"ID",
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
		try {
			this.state = 16;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 12;
				this.match(SmlParser.INT);
				}
				break;
			case SmlParser.FLOAT:
				_localctx = new FloatingPointContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 13;
				this.match(SmlParser.FLOAT);
				}
				break;
			case SmlParser.CHAR:
				_localctx = new CharacterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 14;
				this.match(SmlParser.CHAR);
				}
				break;
			case SmlParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 15;
				this.match(SmlParser.STRING);
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
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
			case SmlParser.FLOAT:
			case SmlParser.CHAR:
			case SmlParser.STRING:
				{
				_localctx = new ConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 19;
				this.con();
				}
				break;
			case SmlParser.LPAREN:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.match(SmlParser.LPAREN);
				this.state = 21;
				this.exp(0);
				this.state = 22;
				this.match(SmlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 43;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 41;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 26;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 27;
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
						this.state = 28;
						(_localctx as InfixApplicationContext)._op2 = this.exp(7);
						}
						break;

					case 2:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 29;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 30;
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
						this.state = 31;
						(_localctx as InfixApplicationContext)._op2 = this.exp(6);
						}
						break;

					case 3:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 32;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 33;
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
						this.state = 34;
						(_localctx as InfixApplicationContext)._op2 = this.exp(4);
						}
						break;

					case 4:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 35;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 36;
						(_localctx as InfixApplicationContext)._id = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.EQ) | (1 << SmlParser.NEQ) | (1 << SmlParser.LT) | (1 << SmlParser.GT) | (1 << SmlParser.LTE) | (1 << SmlParser.GTE))) !== 0))) {
							(_localctx as InfixApplicationContext)._id = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 37;
						(_localctx as InfixApplicationContext)._op2 = this.exp(4);
						}
						break;

					case 5:
						{
						_localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._op1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
						this.state = 38;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 39;
						(_localctx as InfixApplicationContext)._id = this.match(SmlParser.ID);
						this.state = 40;
						(_localctx as InfixApplicationContext)._op2 = this.exp(3);
						}
						break;
					}
					}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public pat(): PatContext {
		let _localctx: PatContext = new PatContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmlParser.RULE_pat);
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
			case SmlParser.FLOAT:
			case SmlParser.CHAR:
			case SmlParser.STRING:
				_localctx = new PatConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.con();
				}
				break;
			case SmlParser.ID:
				_localctx = new PatVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				(_localctx as PatVariableContext)._id = this.match(SmlParser.ID);
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
	public dec(): DecContext {
		let _localctx: DecContext = new DecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmlParser.RULE_dec);
		let _la: number;
		try {
			_localctx = new ValueDeclContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(SmlParser.T__0);
			this.state = 51;
			this.valbind();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.AND) {
				{
				{
				this.state = 52;
				this.match(SmlParser.AND);
				this.state = 53;
				this.valbind();
				}
				}
				this.state = 58;
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
	public valbind(): ValbindContext {
		let _localctx: ValbindContext = new ValbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmlParser.RULE_valbind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmlParser.REC) {
				{
				this.state = 59;
				this.match(SmlParser.REC);
				}
			}

			this.state = 62;
			this.pat();
			this.state = 63;
			this.match(SmlParser.EQ);
			this.state = 64;
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
		this.enterRule(_localctx, 10, SmlParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.dec();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.T__0);
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
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1CJ\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x13\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03,\n\x03\f\x03\x0E\x03/\v\x03\x03\x04" +
		"\x03\x04\x05\x043\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x059\n\x05" +
		"\f\x05\x0E\x05<\v\x05\x03\x06\x05\x06?\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x06\x07F\n\x07\r\x07\x0E\x07G\x03\x07\x02\x02\x03\x04\b\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x06\x03\x02\r\x10\x03\x02\x11" +
		"\x13\x03\x02\x14\x15\x03\x02\x16\x1B\x02P\x02\x12\x03\x02\x02\x02\x04" +
		"\x1A\x03\x02\x02\x02\x062\x03\x02\x02\x02\b4\x03\x02\x02\x02\n>\x03\x02" +
		"\x02\x02\fE\x03\x02\x02\x02\x0E\x13\x07\x05\x02\x02\x0F\x13\x07\x06\x02" +
		"\x02\x10\x13\x07\x07\x02\x02\x11\x13\x07\b\x02\x02\x12\x0E\x03\x02\x02" +
		"\x02\x12\x0F\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x11\x03\x02\x02" +
		"\x02\x13\x03\x03\x02\x02\x02\x14\x15\b\x03\x01\x02\x15\x1B\x05\x02\x02" +
		"\x02\x16\x17\x07\t\x02\x02\x17\x18\x05\x04\x03\x02\x18\x19\x07\n\x02\x02" +
		"\x19\x1B\x03\x02\x02\x02\x1A\x14\x03\x02\x02\x02\x1A\x16\x03\x02\x02\x02" +
		"\x1B-\x03\x02\x02\x02\x1C\x1D\f\b\x02\x02\x1D\x1E\t\x02\x02\x02\x1E,\x05" +
		"\x04\x03\t\x1F \f\x07\x02\x02 !\t\x03\x02\x02!,\x05\x04\x03\b\"#\f\x06" +
		"\x02\x02#$\t\x04\x02\x02$,\x05\x04\x03\x06%&\f\x05\x02\x02&\'\t\x05\x02" +
		"\x02\',\x05\x04\x03\x06()\f\x04\x02\x02)*\x07\x1C\x02\x02*,\x05\x04\x03" +
		"\x05+\x1C\x03\x02\x02\x02+\x1F\x03\x02\x02\x02+\"\x03\x02\x02\x02+%\x03" +
		"\x02\x02\x02+(\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03" +
		"\x02\x02\x02.\x05\x03\x02\x02\x02/-\x03\x02\x02\x0203\x05\x02\x02\x02" +
		"13\x07\x1C\x02\x0220\x03\x02\x02\x0221\x03\x02\x02\x023\x07\x03\x02\x02" +
		"\x0245\x07\x03\x02\x025:\x05\n\x06\x0267\x07\f\x02\x0279\x05\n\x06\x02" +
		"86\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02" +
		";\t\x03\x02\x02\x02<:\x03\x02\x02\x02=?\x07\v\x02\x02>=\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x05\x06\x04\x02AB\x07\x16\x02\x02" +
		"BC\x05\x04\x03\x02C\v\x03\x02\x02\x02DF\x05\b\x05\x02ED\x03\x02\x02\x02" +
		"FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\r\x03\x02\x02" +
		"\x02\n\x12\x1A+-2:>G";
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
	public dec(): DecContext[];
	public dec(i: number): DecContext;
	public dec(i?: number): DecContext | DecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecContext);
		} else {
			return this.getRuleContext(i, DecContext);
		}
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


