"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.ValbindContext = exports.DecSequenceContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatConstantContext = exports.PatContext = exports.MatchesContext = exports.PatmatchContext = exports.FunctionContext = exports.ConditionalContext = exports.DisjunctionContext = exports.ConjunctionContext = exports.LetExpressionContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ApplicationContext = exports.ExpVariableContext = exports.ConstantContext = exports.ExpContext = exports.BooleanContext = exports.StringContext = exports.CharacterContext = exports.FloatingPointContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
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
            this.state = 23;
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
                this.state = 54;
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
                            this.state = 26;
                            this.con();
                        }
                        break;
                    case SmlParser.ID:
                        {
                            _localctx = new ExpVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 27;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case SmlParser.LPAREN:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 28;
                            this.match(SmlParser.LPAREN);
                            this.state = 29;
                            this.exp(0);
                            this.state = 30;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case SmlParser.T__0:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 32;
                            this.match(SmlParser.T__0);
                            this.state = 33;
                            this.decSequence();
                            this.state = 34;
                            this.match(SmlParser.T__1);
                            this.state = 35;
                            this.exp(0);
                            this.state = 40;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 36;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 37;
                                        this.exp(0);
                                    }
                                }
                                this.state = 42;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 43;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case SmlParser.T__3:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 45;
                            this.match(SmlParser.T__3);
                            this.state = 46;
                            _localctx._pred = this.exp(0);
                            this.state = 47;
                            this.match(SmlParser.T__4);
                            this.state = 48;
                            _localctx._cons = this.exp(0);
                            this.state = 49;
                            this.match(SmlParser.T__5);
                            this.state = 50;
                            _localctx._alt = this.exp(2);
                        }
                        break;
                    case SmlParser.T__6:
                        {
                            _localctx = new FunctionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 52;
                            this.match(SmlParser.T__6);
                            this.state = 53;
                            this.matches();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 81;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 79;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._fn = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 56;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 57;
                                        _localctx._param = this.exp(13);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 58;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 59;
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
                                        this.state = 60;
                                        _localctx._op2 = this.exp(12);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 61;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 62;
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
                                        this.state = 63;
                                        _localctx._op2 = this.exp(11);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 64;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 65;
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
                                        this.state = 66;
                                        _localctx._op2 = this.exp(9);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 67;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 68;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SmlParser.EQ - 32)) | (1 << (SmlParser.NEQ - 32)) | (1 << (SmlParser.LT - 32)) | (1 << (SmlParser.GT - 32)) | (1 << (SmlParser.LTE - 32)) | (1 << (SmlParser.GTE - 32)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 69;
                                        _localctx._op2 = this.exp(9);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 70;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 71;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 72;
                                        _localctx._op2 = this.exp(8);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 73;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 74;
                                        this.match(SmlParser.ANDALSO);
                                        this.state = 75;
                                        _localctx._op2 = this.exp(5);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 76;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 77;
                                        this.match(SmlParser.ORELSE);
                                        this.state = 78;
                                        _localctx._op2 = this.exp(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 83;
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
    patmatch() {
        let _localctx = new PatmatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SmlParser.RULE_patmatch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.pat();
                this.state = 85;
                this.match(SmlParser.T__7);
                this.state = 86;
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
    matches() {
        let _localctx = new MatchesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SmlParser.RULE_matches);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this.patmatch();
                this.state = 93;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 89;
                                this.match(SmlParser.T__8);
                                this.state = 90;
                                this.patmatch();
                            }
                        }
                    }
                    this.state = 95;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
    pat() {
        let _localctx = new PatContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SmlParser.RULE_pat);
        try {
            this.state = 98;
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
                        this.state = 96;
                        this.con();
                    }
                    break;
                case SmlParser.ID:
                    _localctx = new PatVariableContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 97;
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
        this.enterRule(_localctx, 10, SmlParser.RULE_dec);
        let _la;
        try {
            _localctx = new ValueDeclContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.match(SmlParser.T__9);
                this.state = 101;
                this.valbind();
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.AND) {
                    {
                        {
                            this.state = 102;
                            this.match(SmlParser.AND);
                            this.state = 103;
                            this.valbind();
                        }
                    }
                    this.state = 108;
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
        this.enterRule(_localctx, 12, SmlParser.RULE_decSequence);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 109;
                                this.dec();
                                this.state = 111;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SmlParser.SEMICOLON) {
                                    {
                                        this.state = 110;
                                        this.match(SmlParser.SEMICOLON);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 117;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                }
                this.state = 118;
                this.dec();
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
        this.enterRule(_localctx, 14, SmlParser.RULE_valbind);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 120;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 123;
                this.pat();
                this.state = 124;
                this.match(SmlParser.EQ);
                this.state = 125;
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
        this.enterRule(_localctx, 16, SmlParser.RULE_prog);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.decSequence();
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
SmlParser.T__7 = 8;
SmlParser.T__8 = 9;
SmlParser.T__9 = 10;
SmlParser.WHITESPACE = 11;
SmlParser.INT = 12;
SmlParser.FLOAT = 13;
SmlParser.CHAR = 14;
SmlParser.STRING = 15;
SmlParser.TRUE = 16;
SmlParser.FALSE = 17;
SmlParser.LPAREN = 18;
SmlParser.RPAREN = 19;
SmlParser.REC = 20;
SmlParser.AND = 21;
SmlParser.SEMICOLON = 22;
SmlParser.SLASH = 23;
SmlParser.DIV = 24;
SmlParser.MOD = 25;
SmlParser.STAR = 26;
SmlParser.PLUS = 27;
SmlParser.MINUS = 28;
SmlParser.CARET = 29;
SmlParser.CONS = 30;
SmlParser.AT = 31;
SmlParser.EQ = 32;
SmlParser.NEQ = 33;
SmlParser.LT = 34;
SmlParser.GT = 35;
SmlParser.LTE = 36;
SmlParser.GTE = 37;
SmlParser.ANDALSO = 38;
SmlParser.ORELSE = 39;
SmlParser.ID = 40;
SmlParser.RULE_con = 0;
SmlParser.RULE_exp = 1;
SmlParser.RULE_patmatch = 2;
SmlParser.RULE_matches = 3;
SmlParser.RULE_pat = 4;
SmlParser.RULE_dec = 5;
SmlParser.RULE_decSequence = 6;
SmlParser.RULE_valbind = 7;
SmlParser.RULE_prog = 8;
// tslint:disable:no-trailing-whitespace
SmlParser.ruleNames = [
    "con", "exp", "patmatch", "matches", "pat", "dec", "decSequence", "valbind",
    "prog",
];
SmlParser._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'fn'",
    "'=>'", "'|'", "'val'", undefined, undefined, undefined, undefined, undefined,
    "'true'", "'false'", "'('", "')'", "'rec'", "'and'", "';'", "'/'", "'div'",
    "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'",
    "'>'", "'<='", "'>='", "'andalso'", "'orelse'",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "WHITESPACE", "INT", "FLOAT",
    "CHAR", "STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "REC", "AND", "SEMICOLON",
    "SLASH", "DIV", "MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT",
    "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE", "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\x84\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
    "\x02\x05\x02\x1A\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03)\n\x03" +
    "\f\x03\x0E\x03,\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x039\n\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x07\x03R\n\x03\f\x03\x0E\x03U\v\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05^\n\x05\f\x05\x0E" +
    "\x05a\v\x05\x03\x06\x03\x06\x05\x06e\n\x06\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x07\x07k\n\x07\f\x07\x0E\x07n\v\x07\x03\b\x03\b\x05\br\n\b\x07\b" +
    "t\n\b\f\b\x0E\bw\v\b\x03\b\x03\b\x03\t\x05\t|\n\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\n\x03\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02\x06\x02\b\x02\n" +
    "\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x07\x03\x02\x12\x13\x03\x02\x19" +
    "\x1C\x03\x02\x1D\x1F\x03\x02 !\x03\x02\"\'\x02\x92\x02\x19\x03\x02\x02" +
    "\x02\x048\x03\x02\x02\x02\x06V\x03\x02\x02\x02\bZ\x03\x02\x02\x02\nd\x03" +
    "\x02\x02\x02\ff\x03\x02\x02\x02\x0Eu\x03\x02\x02\x02\x10{\x03\x02\x02" +
    "\x02\x12\x81\x03\x02\x02\x02\x14\x1A\x07\x0E\x02\x02\x15\x1A\x07\x0F\x02" +
    "\x02\x16\x1A\x07\x10\x02\x02\x17\x1A\x07\x11\x02\x02\x18\x1A\t\x02\x02" +
    "\x02\x19\x14\x03\x02\x02\x02\x19\x15\x03\x02\x02\x02\x19\x16\x03\x02\x02" +
    "\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x03\x03\x02\x02" +
    "\x02\x1B\x1C\b\x03\x01\x02\x1C9\x05\x02\x02\x02\x1D9\x07*\x02\x02\x1E" +
    "\x1F\x07\x14\x02\x02\x1F \x05\x04\x03\x02 !\x07\x15\x02\x02!9\x03\x02" +
    "\x02\x02\"#\x07\x03\x02\x02#$\x05\x0E\b\x02$%\x07\x04\x02\x02%*\x05\x04" +
    "\x03\x02&\'\x07\x18\x02\x02\')\x05\x04\x03\x02(&\x03\x02\x02\x02),\x03" +
    "\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+-\x03\x02\x02\x02,*\x03" +
    "\x02\x02\x02-.\x07\x05\x02\x02.9\x03\x02\x02\x02/0\x07\x06\x02\x0201\x05" +
    "\x04\x03\x0212\x07\x07\x02\x0223\x05\x04\x03\x0234\x07\b\x02\x0245\x05" +
    "\x04\x03\x0459\x03\x02\x02\x0267\x07\t\x02\x0279\x05\b\x05\x028\x1B\x03" +
    "\x02\x02\x028\x1D\x03\x02\x02\x028\x1E\x03\x02\x02\x028\"\x03\x02\x02" +
    "\x028/\x03\x02\x02\x0286\x03\x02\x02\x029S\x03\x02\x02\x02:;\f\x0E\x02" +
    "\x02;R\x05\x04\x03\x0F<=\f\r\x02\x02=>\t\x03\x02\x02>R\x05\x04\x03\x0E" +
    "?@\f\f\x02\x02@A\t\x04\x02\x02AR\x05\x04\x03\rBC\f\v\x02\x02CD\t\x05\x02" +
    "\x02DR\x05\x04\x03\vEF\f\n\x02\x02FG\t\x06\x02\x02GR\x05\x04\x03\vHI\f" +
    "\t\x02\x02IJ\x07*\x02\x02JR\x05\x04\x03\nKL\f\x06\x02\x02LM\x07(\x02\x02" +
    "MR\x05\x04\x03\x07NO\f\x05\x02\x02OP\x07)\x02\x02PR\x05\x04\x03\x06Q:" +
    "\x03\x02\x02\x02Q<\x03\x02\x02\x02Q?\x03\x02\x02\x02QB\x03\x02\x02\x02" +
    "QE\x03\x02\x02\x02QH\x03\x02\x02\x02QK\x03\x02\x02\x02QN\x03\x02\x02\x02" +
    "RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x05\x03\x02\x02" +
    "\x02US\x03\x02\x02\x02VW\x05\n\x06\x02WX\x07\n\x02\x02XY\x05\x04\x03\x02" +
    "Y\x07\x03\x02\x02\x02Z_\x05\x06\x04\x02[\\\x07\v\x02\x02\\^\x05\x06\x04" +
    "\x02][\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02" +
    "\x02`\t\x03\x02\x02\x02a_\x03\x02\x02\x02be\x05\x02\x02\x02ce\x07*\x02" +
    "\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02e\v\x03\x02\x02\x02fg\x07\f\x02" +
    "\x02gl\x05\x10\t\x02hi\x07\x17\x02\x02ik\x05\x10\t\x02jh\x03\x02\x02\x02" +
    "kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\r\x03\x02\x02" +
    "\x02nl\x03\x02\x02\x02oq\x05\f\x07\x02pr\x07\x18\x02\x02qp\x03\x02\x02" +
    "\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02so\x03\x02\x02\x02tw\x03\x02\x02" +
    "\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02" +
    "\x02xy\x05\f\x07\x02y\x0F\x03\x02\x02\x02z|\x07\x16\x02\x02{z\x03\x02" +
    "\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x05\n\x06\x02~\x7F\x07" +
    "\"\x02\x02\x7F\x80\x05\x04\x03\x02\x80\x11\x03\x02\x02\x02\x81\x82\x05" +
    "\x0E\b\x02\x82\x13\x03\x02\x02\x02\r\x19*8QS_dlqu{";
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
class ApplicationContext extends ExpContext {
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
        if (listener.enterApplication) {
            listener.enterApplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitApplication) {
            listener.exitApplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitApplication) {
            return visitor.visitApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ApplicationContext = ApplicationContext;
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
class FunctionContext extends ExpContext {
    matches() {
        return this.getRuleContext(0, MatchesContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionContext = FunctionContext;
class PatmatchContext extends ParserRuleContext_1.ParserRuleContext {
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_patmatch; }
    // @Override
    enterRule(listener) {
        if (listener.enterPatmatch) {
            listener.enterPatmatch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatmatch) {
            listener.exitPatmatch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatmatch) {
            return visitor.visitPatmatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatmatchContext = PatmatchContext;
class MatchesContext extends ParserRuleContext_1.ParserRuleContext {
    patmatch(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatmatchContext);
        }
        else {
            return this.getRuleContext(i, PatmatchContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_matches; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatches) {
            listener.enterMatches(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatches) {
            listener.exitMatches(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMatches) {
            return visitor.visitMatches(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MatchesContext = MatchesContext;
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
    decSequence() {
        return this.getRuleContext(0, DecSequenceContext);
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