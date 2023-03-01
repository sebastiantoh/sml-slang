"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.ValbindContext = exports.DecSequenceContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatConstantContext = exports.PatContext = exports.ConditionalContext = exports.DisjunctionContext = exports.ConjunctionContext = exports.LetExpressionContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ExpVariableContext = exports.ConstantContext = exports.ExpContext = exports.BooleanContext = exports.StringContext = exports.CharacterContext = exports.FloatingPointContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
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
        let _la;
        try {
            this.state = 19;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.INT:
                    _localctx = new IntegerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 14;
                        this.match(SmlParser.INT);
                    }
                    break;
                case SmlParser.FLOAT:
                    _localctx = new FloatingPointContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 15;
                        this.match(SmlParser.FLOAT);
                    }
                    break;
                case SmlParser.CHAR:
                    _localctx = new CharacterContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 16;
                        this.match(SmlParser.CHAR);
                    }
                    break;
                case SmlParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 17;
                        this.match(SmlParser.STRING);
                    }
                    break;
                case SmlParser.TRUE:
                case SmlParser.FALSE:
                    _localctx = new BooleanContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 18;
                        _la = this._input.LA(1);
                        if (!(_la === SmlParser.TRUE || _la === SmlParser.FALSE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
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
                this.state = 48;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SmlParser.INT:
                    case SmlParser.FLOAT:
                    case SmlParser.CHAR:
                    case SmlParser.STRING:
                    case SmlParser.TRUE:
                    case SmlParser.FALSE:
                        {
                            _localctx = new ConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 22;
                            this.con();
                        }
                        break;
                    case SmlParser.ID:
                        {
                            _localctx = new ExpVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 23;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case SmlParser.LPAREN:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 24;
                            this.match(SmlParser.LPAREN);
                            this.state = 25;
                            this.exp(0);
                            this.state = 26;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case SmlParser.T__0:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 28;
                            this.match(SmlParser.T__0);
                            this.state = 29;
                            this.decSequence();
                            this.state = 30;
                            this.match(SmlParser.T__1);
                            this.state = 31;
                            this.exp(0);
                            this.state = 36;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 32;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 33;
                                        this.exp(0);
                                    }
                                }
                                this.state = 38;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 39;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case SmlParser.T__3:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 41;
                            this.match(SmlParser.T__3);
                            this.state = 42;
                            _localctx._pred = this.exp(0);
                            this.state = 43;
                            this.match(SmlParser.T__4);
                            this.state = 44;
                            _localctx._cons = this.exp(0);
                            this.state = 45;
                            this.match(SmlParser.T__5);
                            this.state = 46;
                            _localctx._alt = this.exp(1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 73;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 71;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 50;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 51;
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
                                        this.state = 52;
                                        _localctx._op2 = this.exp(11);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 53;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 54;
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
                                        this.state = 55;
                                        _localctx._op2 = this.exp(10);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 56;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 57;
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
                                        this.state = 58;
                                        _localctx._op2 = this.exp(8);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 59;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 60;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (SmlParser.EQ - 29)) | (1 << (SmlParser.NEQ - 29)) | (1 << (SmlParser.LT - 29)) | (1 << (SmlParser.GT - 29)) | (1 << (SmlParser.LTE - 29)) | (1 << (SmlParser.GTE - 29)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 61;
                                        _localctx._op2 = this.exp(8);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 62;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 63;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 64;
                                        _localctx._op2 = this.exp(7);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 65;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 66;
                                        this.match(SmlParser.ANDALSO);
                                        this.state = 67;
                                        _localctx._op2 = this.exp(4);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 68;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 69;
                                        this.match(SmlParser.ORELSE);
                                        this.state = 70;
                                        _localctx._op2 = this.exp(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 75;
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
            this.state = 78;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.INT:
                case SmlParser.FLOAT:
                case SmlParser.CHAR:
                case SmlParser.STRING:
                case SmlParser.TRUE:
                case SmlParser.FALSE:
                    _localctx = new PatConstantContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 76;
                        this.con();
                    }
                    break;
                case SmlParser.ID:
                    _localctx = new PatVariableContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
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
                this.state = 80;
                this.match(SmlParser.T__6);
                this.state = 81;
                this.valbind();
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.AND) {
                    {
                        {
                            this.state = 82;
                            this.match(SmlParser.AND);
                            this.state = 83;
                            this.valbind();
                        }
                    }
                    this.state = 88;
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
    decSequence() {
        let _localctx = new DecSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SmlParser.RULE_decSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 89;
                            this.dec();
                            this.state = 91;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SmlParser.SEMICOLON) {
                                {
                                    this.state = 90;
                                    this.match(SmlParser.SEMICOLON);
                                }
                            }
                        }
                    }
                    this.state = 95;
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
    // @RuleVersion(0)
    valbind() {
        let _localctx = new ValbindContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SmlParser.RULE_valbind);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 97;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 100;
                this.pat();
                this.state = 101;
                this.match(SmlParser.EQ);
                this.state = 102;
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
        this.enterRule(_localctx, 12, SmlParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 104;
                            this.dec();
                            this.state = 106;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SmlParser.SEMICOLON) {
                                {
                                    this.state = 105;
                                    this.match(SmlParser.SEMICOLON);
                                }
                            }
                        }
                    }
                    this.state = 110;
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
                return this.precpred(this._ctx, 10);
            case 1:
                return this.precpred(this._ctx, 9);
            case 2:
                return this.precpred(this._ctx, 8);
            case 3:
                return this.precpred(this._ctx, 7);
            case 4:
                return this.precpred(this._ctx, 6);
            case 5:
                return this.precpred(this._ctx, 3);
            case 6:
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
SmlParser.TRUE = 13;
SmlParser.FALSE = 14;
SmlParser.LPAREN = 15;
SmlParser.RPAREN = 16;
SmlParser.REC = 17;
SmlParser.AND = 18;
SmlParser.SEMICOLON = 19;
SmlParser.SLASH = 20;
SmlParser.DIV = 21;
SmlParser.MOD = 22;
SmlParser.STAR = 23;
SmlParser.PLUS = 24;
SmlParser.MINUS = 25;
SmlParser.CARET = 26;
SmlParser.CONS = 27;
SmlParser.AT = 28;
SmlParser.EQ = 29;
SmlParser.NEQ = 30;
SmlParser.LT = 31;
SmlParser.GT = 32;
SmlParser.LTE = 33;
SmlParser.GTE = 34;
SmlParser.ANDALSO = 35;
SmlParser.ORELSE = 36;
SmlParser.ID = 37;
SmlParser.RULE_con = 0;
SmlParser.RULE_exp = 1;
SmlParser.RULE_pat = 2;
SmlParser.RULE_dec = 3;
SmlParser.RULE_decSequence = 4;
SmlParser.RULE_valbind = 5;
SmlParser.RULE_prog = 6;
// tslint:disable:no-trailing-whitespace
SmlParser.ruleNames = [
    "con", "exp", "pat", "dec", "decSequence", "valbind", "prog",
];
SmlParser._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'val'",
    undefined, undefined, undefined, undefined, undefined, "'true'", "'false'",
    "'('", "')'", "'rec'", "'and'", "';'", "'/'", "'div'", "'mod'", "'*'",
    "'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='",
    "'>='", "'andalso'", "'orelse'",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", "TRUE", "FALSE",
    "LPAREN", "RPAREN", "REC", "AND", "SEMICOLON", "SLASH", "DIV", "MOD",
    "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT",
    "LTE", "GTE", "ANDALSO", "ORELSE", "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'s\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
    "\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x16\n\x02" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
    "\x033\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03J\n\x03\f\x03\x0E\x03M\v\x03" +
    "\x03\x04\x03\x04\x05\x04Q\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
    "W\n\x05\f\x05\x0E\x05Z\v\x05\x03\x06\x03\x06\x05\x06^\n\x06\x06\x06`\n" +
    "\x06\r\x06\x0E\x06a\x03\x07\x05\x07e\n\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\b\x03\b\x05\bm\n\b\x06\bo\n\b\r\b\x0E\bp\x03\b\x02\x02\x03\x04" +
    "\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x07\x03\x02\x0F" +
    "\x10\x03\x02\x16\x19\x03\x02\x1A\x1C\x03\x02\x1D\x1E\x03\x02\x1F$\x02" +
    "\x82\x02\x15\x03\x02\x02\x02\x042\x03\x02\x02\x02\x06P\x03\x02\x02\x02" +
    "\bR\x03\x02\x02\x02\n_\x03\x02\x02\x02\fd\x03\x02\x02\x02\x0En\x03\x02" +
    "\x02\x02\x10\x16\x07\v\x02\x02\x11\x16\x07\f\x02\x02\x12\x16\x07\r\x02" +
    "\x02\x13\x16\x07\x0E\x02\x02\x14\x16\t\x02\x02\x02\x15\x10\x03\x02\x02" +
    "\x02\x15\x11\x03\x02\x02\x02\x15\x12\x03\x02\x02\x02\x15\x13\x03\x02\x02" +
    "\x02\x15\x14\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x18\b\x03\x01" +
    "\x02\x183\x05\x02\x02\x02\x193\x07\'\x02\x02\x1A\x1B\x07\x11\x02\x02\x1B" +
    "\x1C\x05\x04\x03\x02\x1C\x1D\x07\x12\x02\x02\x1D3\x03\x02\x02\x02\x1E" +
    "\x1F\x07\x03\x02\x02\x1F \x05\n\x06\x02 !\x07\x04\x02\x02!&\x05\x04\x03" +
    "\x02\"#\x07\x15\x02\x02#%\x05\x04\x03\x02$\"\x03\x02\x02\x02%(\x03\x02" +
    "\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(&\x03" +
    "\x02\x02\x02)*\x07\x05\x02\x02*3\x03\x02\x02\x02+,\x07\x06\x02\x02,-\x05" +
    "\x04\x03\x02-.\x07\x07\x02\x02./\x05\x04\x03\x02/0\x07\b\x02\x0201\x05" +
    "\x04\x03\x0313\x03\x02\x02\x022\x17\x03\x02\x02\x022\x19\x03\x02\x02\x02" +
    "2\x1A\x03\x02\x02\x022\x1E\x03\x02\x02\x022+\x03\x02\x02\x023K\x03\x02" +
    "\x02\x0245\f\f\x02\x0256\t\x03\x02\x026J\x05\x04\x03\r78\f\v\x02\x028" +
    "9\t\x04\x02\x029J\x05\x04\x03\f:;\f\n\x02\x02;<\t\x05\x02\x02<J\x05\x04" +
    "\x03\n=>\f\t\x02\x02>?\t\x06\x02\x02?J\x05\x04\x03\n@A\f\b\x02\x02AB\x07" +
    "\'\x02\x02BJ\x05\x04\x03\tCD\f\x05\x02\x02DE\x07%\x02\x02EJ\x05\x04\x03" +
    "\x06FG\f\x04\x02\x02GH\x07&\x02\x02HJ\x05\x04\x03\x05I4\x03\x02\x02\x02" +
    "I7\x03\x02\x02\x02I:\x03\x02\x02\x02I=\x03\x02\x02\x02I@\x03\x02\x02\x02" +
    "IC\x03\x02\x02\x02IF\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02" +
    "KL\x03\x02\x02\x02L\x05\x03\x02\x02\x02MK\x03\x02\x02\x02NQ\x05\x02\x02" +
    "\x02OQ\x07\'\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\x07\x03\x02" +
    "\x02\x02RS\x07\t\x02\x02SX\x05\f\x07\x02TU\x07\x14\x02\x02UW\x05\f\x07" +
    "\x02VT\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02" +
    "\x02Y\t\x03\x02\x02\x02ZX\x03\x02\x02\x02[]\x05\b\x05\x02\\^\x07\x15\x02" +
    "\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_[\x03\x02" +
    "\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\v\x03" +
    "\x02\x02\x02ce\x07\x13\x02\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02ef\x03" +
    "\x02\x02\x02fg\x05\x06\x04\x02gh\x07\x1F\x02\x02hi\x05\x04\x03\x02i\r" +
    "\x03\x02\x02\x02jl\x05\b\x05\x02km\x07\x15\x02\x02lk\x03\x02\x02\x02l" +
    "m\x03\x02\x02\x02mo\x03\x02\x02\x02nj\x03\x02\x02\x02op\x03\x02\x02\x02" +
    "pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\x0F\x03\x02\x02\x02\x0E\x15&2IK" +
    "PX]adlp";
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
class BooleanContext extends ConContext {
    TRUE() { return this.tryGetToken(SmlParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(SmlParser.FALSE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean) {
            listener.enterBoolean(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean) {
            listener.exitBoolean(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanContext = BooleanContext;
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
class ExpVariableContext extends ExpContext {
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVariable) {
            listener.enterExpVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVariable) {
            listener.exitExpVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVariable) {
            return visitor.visitExpVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVariableContext = ExpVariableContext;
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
    decSequence() {
        return this.getRuleContext(0, DecSequenceContext);
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
class ConjunctionContext extends ExpContext {
    ANDALSO() { return this.getToken(SmlParser.ANDALSO, 0); }
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
        if (listener.enterConjunction) {
            listener.enterConjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConjunction) {
            listener.exitConjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConjunction) {
            return visitor.visitConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConjunctionContext = ConjunctionContext;
class DisjunctionContext extends ExpContext {
    ORELSE() { return this.getToken(SmlParser.ORELSE, 0); }
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
        if (listener.enterDisjunction) {
            listener.enterDisjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDisjunction) {
            listener.exitDisjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDisjunction) {
            return visitor.visitDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DisjunctionContext = DisjunctionContext;
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
class DecSequenceContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return SmlParser.RULE_decSequence; }
    // @Override
    enterRule(listener) {
        if (listener.enterDecSequence) {
            listener.enterDecSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecSequence) {
            listener.exitDecSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecSequence) {
            return visitor.visitDecSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecSequenceContext = DecSequenceContext;
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