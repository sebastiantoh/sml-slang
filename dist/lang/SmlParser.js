"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.ValbindContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatConstantContext = exports.PatContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ConstantContext = exports.ExpContext = exports.StringContext = exports.CharacterContext = exports.FloatingPointContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SmlParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return SmlParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Sml.g4"; }
    // @Override
    get ruleNames() { return SmlParser.ruleNames; }
    // @Override
    get serializedATN() { return SmlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SmlParser._ATN, this);
    }
    // @RuleVersion(0)
    con() {
        let _localctx = new ConContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 2;
        this.enterRecursionRule(_localctx, 2, SmlParser.RULE_exp, _p);
        let _la;
        try {
            let _alt;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 43;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 41;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 26;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 27;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.SLASH) | (1 << SmlParser.DIV) | (1 << SmlParser.MOD) | (1 << SmlParser.STAR))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 28;
                                        _localctx._op2 = this.exp(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 29;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 30;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.PLUS) | (1 << SmlParser.MINUS) | (1 << SmlParser.CARET))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 31;
                                        _localctx._op2 = this.exp(6);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 32;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 33;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === SmlParser.CONS || _la === SmlParser.AT)) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 34;
                                        _localctx._op2 = this.exp(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 35;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 36;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.EQ) | (1 << SmlParser.NEQ) | (1 << SmlParser.LT) | (1 << SmlParser.GT) | (1 << SmlParser.LTE) | (1 << SmlParser.GTE))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 37;
                                        _localctx._op2 = this.exp(4);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 38;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 39;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 40;
                                        _localctx._op2 = this.exp(3);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pat() {
        let _localctx = new PatContext(this._ctx, this.state);
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
                        _localctx._id = this.match(SmlParser.ID);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dec() {
        let _localctx = new DecContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SmlParser.RULE_dec);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valbind() {
        let _localctx = new ValbindContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SmlParser.RULE_valbind);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    prog() {
        let _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SmlParser.RULE_prog);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.exp_sempred(_localctx, predIndex);
        }
        return true;
    }
    exp_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!SmlParser.__ATN) {
            SmlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SmlParser._serializedATN));
        }
        return SmlParser.__ATN;
    }
}
exports.SmlParser = SmlParser;
SmlParser.T__0 = 1;
SmlParser.WHITESPACE = 2;
SmlParser.INT = 3;
SmlParser.FLOAT = 4;
SmlParser.CHAR = 5;
SmlParser.STRING = 6;
SmlParser.LPAREN = 7;
SmlParser.RPAREN = 8;
SmlParser.REC = 9;
SmlParser.AND = 10;
SmlParser.SLASH = 11;
SmlParser.DIV = 12;
SmlParser.MOD = 13;
SmlParser.STAR = 14;
SmlParser.PLUS = 15;
SmlParser.MINUS = 16;
SmlParser.CARET = 17;
SmlParser.CONS = 18;
SmlParser.AT = 19;
SmlParser.EQ = 20;
SmlParser.NEQ = 21;
SmlParser.LT = 22;
SmlParser.GT = 23;
SmlParser.LTE = 24;
SmlParser.GTE = 25;
SmlParser.ID = 26;
SmlParser.RULE_con = 0;
SmlParser.RULE_exp = 1;
SmlParser.RULE_pat = 2;
SmlParser.RULE_dec = 3;
SmlParser.RULE_valbind = 4;
SmlParser.RULE_prog = 5;
// tslint:disable:no-trailing-whitespace
SmlParser.ruleNames = [
    "con", "exp", "pat", "dec", "valbind", "prog",
];
SmlParser._LITERAL_NAMES = [
    undefined, "'val'", undefined, undefined, undefined, undefined, undefined,
    "'('", "')'", "'rec'", "'and'", "'/'", "'div'", "'mod'", "'*'", "'+'",
    "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING",
    "LPAREN", "RPAREN", "REC", "AND", "SLASH", "DIV", "MOD", "STAR", "PLUS",
    "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE",
    "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1CJ\x04\x02" +
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
class ConContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_con; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ConContext = ConContext;
class IntegerContext extends ConContext {
    INT() { return this.getToken(SmlParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerContext = IntegerContext;
class FloatingPointContext extends ConContext {
    FLOAT() { return this.getToken(SmlParser.FLOAT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFloatingPoint) {
            listener.enterFloatingPoint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFloatingPoint) {
            listener.exitFloatingPoint(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFloatingPoint) {
            return visitor.visitFloatingPoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FloatingPointContext = FloatingPointContext;
class CharacterContext extends ConContext {
    CHAR() { return this.getToken(SmlParser.CHAR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCharacter) {
            listener.enterCharacter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCharacter) {
            listener.exitCharacter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCharacter) {
            return visitor.visitCharacter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CharacterContext = CharacterContext;
class StringContext extends ConContext {
    STRING() { return this.getToken(SmlParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_exp; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpContext = ExpContext;
class ConstantContext extends ExpContext {
    con() {
        return this.getRuleContext(0, ConContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantContext = ConstantContext;
class InfixApplicationContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    SLASH() { return this.tryGetToken(SmlParser.SLASH, 0); }
    DIV() { return this.tryGetToken(SmlParser.DIV, 0); }
    MOD() { return this.tryGetToken(SmlParser.MOD, 0); }
    STAR() { return this.tryGetToken(SmlParser.STAR, 0); }
    PLUS() { return this.tryGetToken(SmlParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(SmlParser.MINUS, 0); }
    CARET() { return this.tryGetToken(SmlParser.CARET, 0); }
    CONS() { return this.tryGetToken(SmlParser.CONS, 0); }
    AT() { return this.tryGetToken(SmlParser.AT, 0); }
    EQ() { return this.tryGetToken(SmlParser.EQ, 0); }
    NEQ() { return this.tryGetToken(SmlParser.NEQ, 0); }
    LT() { return this.tryGetToken(SmlParser.LT, 0); }
    GT() { return this.tryGetToken(SmlParser.GT, 0); }
    LTE() { return this.tryGetToken(SmlParser.LTE, 0); }
    GTE() { return this.tryGetToken(SmlParser.GTE, 0); }
    ID() { return this.tryGetToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInfixApplication) {
            listener.enterInfixApplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInfixApplication) {
            listener.exitInfixApplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInfixApplication) {
            return visitor.visitInfixApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InfixApplicationContext = InfixApplicationContext;
class ParenthesesContext extends ExpContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesContext = ParenthesesContext;
class PatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_pat; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PatContext = PatContext;
class PatConstantContext extends PatContext {
    con() {
        return this.getRuleContext(0, ConContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatConstant) {
            listener.enterPatConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatConstant) {
            listener.exitPatConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatConstant) {
            return visitor.visitPatConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatConstantContext = PatConstantContext;
class PatVariableContext extends PatContext {
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatVariable) {
            listener.enterPatVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatVariable) {
            listener.exitPatVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatVariable) {
            return visitor.visitPatVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatVariableContext = PatVariableContext;
class DecContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_dec; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.DecContext = DecContext;
class ValueDeclContext extends DecContext {
    valbind(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValbindContext);
        }
        else {
            return this.getRuleContext(i, ValbindContext);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.AND);
        }
        else {
            return this.getToken(SmlParser.AND, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValueDecl) {
            listener.enterValueDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueDecl) {
            listener.exitValueDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueDecl) {
            return visitor.visitValueDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueDeclContext = ValueDeclContext;
class ValbindContext extends ParserRuleContext_1.ParserRuleContext {
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    EQ() { return this.getToken(SmlParser.EQ, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    REC() { return this.tryGetToken(SmlParser.REC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_valbind; }
    // @Override
    enterRule(listener) {
        if (listener.enterValbind) {
            listener.enterValbind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValbind) {
            listener.exitValbind(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValbind) {
            return visitor.visitValbind(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValbindContext = ValbindContext;
class ProgContext extends ParserRuleContext_1.ParserRuleContext {
    dec(i) {
        if (i === undefined) {
            return this.getRuleContexts(DecContext);
        }
        else {
            return this.getRuleContext(i, DecContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_prog; }
    // @Override
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
//# sourceMappingURL=SmlParser.js.map