"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.ValbindContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatConstantContext = exports.PatContext = exports.ConditionalContext = exports.LetExpressionContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ConstantContext = exports.ExpContext = exports.StringContext = exports.CharacterContext = exports.FloatingPointContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
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
                this.state = 44;
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
                    case SmlParser.T__0:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 24;
                            this.match(SmlParser.T__0);
                            this.state = 25;
                            this.dec();
                            this.state = 26;
                            this.match(SmlParser.T__1);
                            this.state = 27;
                            this.exp(0);
                            this.state = 32;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 28;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 29;
                                        this.exp(0);
                                    }
                                }
                                this.state = 34;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 35;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case SmlParser.T__3:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 37;
                            this.match(SmlParser.T__3);
                            this.state = 38;
                            _localctx._pred = this.exp(0);
                            this.state = 39;
                            this.match(SmlParser.T__4);
                            this.state = 40;
                            _localctx._cons = this.exp(0);
                            this.state = 41;
                            this.match(SmlParser.T__5);
                            this.state = 42;
                            _localctx._alt = this.exp(1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 63;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 61;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 46;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 47;
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
                                        this.state = 48;
                                        _localctx._op2 = this.exp(9);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 49;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 50;
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
                                        this.state = 51;
                                        _localctx._op2 = this.exp(8);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 52;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 53;
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
                                        this.state = 54;
                                        _localctx._op2 = this.exp(6);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 55;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 56;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (SmlParser.EQ - 27)) | (1 << (SmlParser.NEQ - 27)) | (1 << (SmlParser.LT - 27)) | (1 << (SmlParser.GT - 27)) | (1 << (SmlParser.LTE - 27)) | (1 << (SmlParser.GTE - 27)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 57;
                                        _localctx._op2 = this.exp(6);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 58;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 59;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 60;
                                        _localctx._op2 = this.exp(5);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 65;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
            this.state = 68;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.INT:
                case SmlParser.FLOAT:
                case SmlParser.CHAR:
                case SmlParser.STRING:
                    _localctx = new PatConstantContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 66;
                        this.con();
                    }
                    break;
                case SmlParser.ID:
                    _localctx = new PatVariableContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 67;
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
                this.state = 70;
                this.match(SmlParser.T__6);
                this.state = 71;
                this.valbind();
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.AND) {
                    {
                        {
                            this.state = 72;
                            this.match(SmlParser.AND);
                            this.state = 73;
                            this.valbind();
                        }
                    }
                    this.state = 78;
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
                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 79;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 82;
                this.pat();
                this.state = 83;
                this.match(SmlParser.EQ);
                this.state = 84;
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
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 86;
                            this.dec();
                            this.state = 88;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SmlParser.SEMICOLON) {
                                {
                                    this.state = 87;
                                    this.match(SmlParser.SEMICOLON);
                                }
                            }
                        }
                    }
                    this.state = 92;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SmlParser.T__6);
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
                return this.precpred(this._ctx, 8);
            case 1:
                return this.precpred(this._ctx, 7);
            case 2:
                return this.precpred(this._ctx, 6);
            case 3:
                return this.precpred(this._ctx, 5);
            case 4:
                return this.precpred(this._ctx, 4);
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
SmlParser.T__1 = 2;
SmlParser.T__2 = 3;
SmlParser.T__3 = 4;
SmlParser.T__4 = 5;
SmlParser.T__5 = 6;
SmlParser.T__6 = 7;
SmlParser.WHITESPACE = 8;
SmlParser.INT = 9;
SmlParser.FLOAT = 10;
SmlParser.CHAR = 11;
SmlParser.STRING = 12;
SmlParser.LPAREN = 13;
SmlParser.RPAREN = 14;
SmlParser.REC = 15;
SmlParser.AND = 16;
SmlParser.SEMICOLON = 17;
SmlParser.SLASH = 18;
SmlParser.DIV = 19;
SmlParser.MOD = 20;
SmlParser.STAR = 21;
SmlParser.PLUS = 22;
SmlParser.MINUS = 23;
SmlParser.CARET = 24;
SmlParser.CONS = 25;
SmlParser.AT = 26;
SmlParser.EQ = 27;
SmlParser.NEQ = 28;
SmlParser.LT = 29;
SmlParser.GT = 30;
SmlParser.LTE = 31;
SmlParser.GTE = 32;
SmlParser.ID = 33;
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
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'val'",
    undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'rec'",
    "'and'", "';'", "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'",
    "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", "LPAREN", "RPAREN",
    "REC", "AND", "SEMICOLON", "SLASH", "DIV", "MOD", "STAR", "PLUS", "MINUS",
    "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#a\x04\x02\t\x02" +
    "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x13\n\x02\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x07\x03!\n\x03\f\x03\x0E\x03$\v\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03/\n\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03@\n\x03\f\x03\x0E\x03C\v\x03\x03" +
    "\x04\x03\x04\x05\x04G\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05M\n" +
    "\x05\f\x05\x0E\x05P\v\x05\x03\x06\x05\x06S\n\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x07\x03\x07\x05\x07[\n\x07\x06\x07]\n\x07\r\x07\x0E\x07^" +
    "\x03\x07\x02\x02\x03\x04\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02" +
    "\x06\x03\x02\x14\x17\x03\x02\x18\x1A\x03\x02\x1B\x1C\x03\x02\x1D\"\x02" +
    "k\x02\x12\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06F\x03\x02\x02\x02\b" +
    "H\x03\x02\x02\x02\nR\x03\x02\x02\x02\f\\\x03\x02\x02\x02\x0E\x13\x07\v" +
    "\x02\x02\x0F\x13\x07\f\x02\x02\x10\x13\x07\r\x02\x02\x11\x13\x07\x0E\x02" +
    "\x02\x12\x0E\x03\x02\x02\x02\x12\x0F\x03\x02\x02\x02\x12\x10\x03\x02\x02" +
    "\x02\x12\x11\x03\x02\x02\x02\x13\x03\x03\x02\x02\x02\x14\x15\b\x03\x01" +
    "\x02\x15/\x05\x02\x02\x02\x16\x17\x07\x0F\x02\x02\x17\x18\x05\x04\x03" +
    "\x02\x18\x19\x07\x10\x02\x02\x19/\x03\x02\x02\x02\x1A\x1B\x07\x03\x02" +
    "\x02\x1B\x1C\x05\b\x05\x02\x1C\x1D\x07\x04\x02\x02\x1D\"\x05\x04\x03\x02" +
    "\x1E\x1F\x07\x13\x02\x02\x1F!\x05\x04\x03\x02 \x1E\x03\x02\x02\x02!$\x03" +
    "\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#%\x03\x02\x02\x02$" +
    "\"\x03\x02\x02\x02%&\x07\x05\x02\x02&/\x03\x02\x02\x02\'(\x07\x06\x02" +
    "\x02()\x05\x04\x03\x02)*\x07\x07\x02\x02*+\x05\x04\x03\x02+,\x07\b\x02" +
    "\x02,-\x05\x04\x03\x03-/\x03\x02\x02\x02.\x14\x03\x02\x02\x02.\x16\x03" +
    "\x02\x02\x02.\x1A\x03\x02\x02\x02.\'\x03\x02\x02\x02/A\x03\x02\x02\x02" +
    "01\f\n\x02\x0212\t\x02\x02\x022@\x05\x04\x03\v34\f\t\x02\x0245\t\x03\x02" +
    "\x025@\x05\x04\x03\n67\f\b\x02\x0278\t\x04\x02\x028@\x05\x04\x03\b9:\f" +
    "\x07\x02\x02:;\t\x05\x02\x02;@\x05\x04\x03\b<=\f\x06\x02\x02=>\x07#\x02" +
    "\x02>@\x05\x04\x03\x07?0\x03\x02\x02\x02?3\x03\x02\x02\x02?6\x03\x02\x02" +
    "\x02?9\x03\x02\x02\x02?<\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02" +
    "\x02AB\x03\x02\x02\x02B\x05\x03\x02\x02\x02CA\x03\x02\x02\x02DG\x05\x02" +
    "\x02\x02EG\x07#\x02\x02FD\x03\x02\x02\x02FE\x03\x02\x02\x02G\x07\x03\x02" +
    "\x02\x02HI\x07\t\x02\x02IN\x05\n\x06\x02JK\x07\x12\x02\x02KM\x05\n\x06" +
    "\x02LJ\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02" +
    "\x02O\t\x03\x02\x02\x02PN\x03\x02\x02\x02QS\x07\x11\x02\x02RQ\x03\x02" +
    "\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x05\x06\x04\x02UV\x07\x1D" +
    "\x02\x02VW\x05\x04\x03\x02W\v\x03\x02\x02\x02XZ\x05\b\x05\x02Y[\x07\x13" +
    "\x02\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\X\x03" +
    "\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\r" +
    "\x03\x02\x02\x02\f\x12\".?AFNRZ^";
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
class LetExpressionContext extends ExpContext {
    dec() {
        return this.getRuleContext(0, DecContext);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.SEMICOLON);
        }
        else {
            return this.getToken(SmlParser.SEMICOLON, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetExpression) {
            listener.enterLetExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetExpression) {
            listener.exitLetExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetExpression) {
            return visitor.visitLetExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetExpressionContext = LetExpressionContext;
class ConditionalContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConditional) {
            listener.enterConditional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditional) {
            listener.exitConditional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditional) {
            return visitor.visitConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionalContext = ConditionalContext;
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
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.SEMICOLON);
        }
        else {
            return this.getToken(SmlParser.SEMICOLON, i);
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