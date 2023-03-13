"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.FunmatchContext = exports.FunmatchesContext = exports.FunbindContext = exports.ValbindContext = exports.DecSequenceContext = exports.LocalDeclContext = exports.FunDeclContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatUnitContext = exports.PatConstantContext = exports.PatContext = exports.MatchesContext = exports.PatmatchContext = exports.FunctionContext = exports.ConditionalContext = exports.DisjunctionContext = exports.ConjunctionContext = exports.LetExpressionContext = exports.ExpSequenceContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ApplicationContext = exports.ExpVariableContext = exports.ConstantContext = exports.ExpContext = exports.UnitContext = exports.BooleanContext = exports.StringContext = exports.CharacterContext = exports.RealContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
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
            this.state = 30;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.INT:
                    _localctx = new IntegerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 24;
                        this.match(SmlParser.INT);
                    }
                    break;
                case SmlParser.REAL:
                    _localctx = new RealContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 25;
                        this.match(SmlParser.REAL);
                    }
                    break;
                case SmlParser.CHAR:
                    _localctx = new CharacterContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 26;
                        this.match(SmlParser.CHAR);
                    }
                    break;
                case SmlParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 27;
                        this.match(SmlParser.STRING);
                    }
                    break;
                case SmlParser.TRUE:
                case SmlParser.FALSE:
                    _localctx = new BooleanContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 28;
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
                case SmlParser.UNIT:
                    _localctx = new UnitContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 29;
                        this.match(SmlParser.UNIT);
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
                this.state = 71;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            _localctx = new ConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 33;
                            this.con();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ExpVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 34;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 35;
                            this.match(SmlParser.LPAREN);
                            this.state = 36;
                            this.exp(0);
                            this.state = 37;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new ExpSequenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 39;
                            this.match(SmlParser.LPAREN);
                            this.state = 40;
                            this.exp(0);
                            this.state = 43;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 41;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 42;
                                        this.exp(0);
                                    }
                                }
                                this.state = 45;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SmlParser.SEMICOLON);
                            this.state = 47;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 49;
                            this.match(SmlParser.T__0);
                            this.state = 50;
                            this.decSequence();
                            this.state = 51;
                            this.match(SmlParser.T__1);
                            this.state = 52;
                            this.exp(0);
                            this.state = 57;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 53;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 54;
                                        this.exp(0);
                                    }
                                }
                                this.state = 59;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 60;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 62;
                            this.match(SmlParser.T__3);
                            this.state = 63;
                            _localctx._pred = this.exp(0);
                            this.state = 64;
                            this.match(SmlParser.T__4);
                            this.state = 65;
                            _localctx._cons = this.exp(0);
                            this.state = 66;
                            this.match(SmlParser.T__5);
                            this.state = 67;
                            _localctx._alt = this.exp(2);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new FunctionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 69;
                            this.match(SmlParser.T__6);
                            this.state = 70;
                            this.matches();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 98;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 96;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._fn = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 73;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 74;
                                        _localctx._arg = this.exp(14);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 75;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 76;
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
                                        this.state = 77;
                                        _localctx._op2 = this.exp(13);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 78;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 79;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (SmlParser.PLUS - 31)) | (1 << (SmlParser.MINUS - 31)) | (1 << (SmlParser.CARET - 31)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 80;
                                        _localctx._op2 = this.exp(12);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 81;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 82;
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
                                        this.state = 83;
                                        _localctx._op2 = this.exp(10);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 84;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 85;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SmlParser.EQ - 36)) | (1 << (SmlParser.NEQ - 36)) | (1 << (SmlParser.LT - 36)) | (1 << (SmlParser.GT - 36)) | (1 << (SmlParser.LTE - 36)) | (1 << (SmlParser.GTE - 36)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 86;
                                        _localctx._op2 = this.exp(10);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 87;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 88;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 89;
                                        _localctx._op2 = this.exp(9);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 90;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 91;
                                        this.match(SmlParser.ANDALSO);
                                        this.state = 92;
                                        _localctx._op2 = this.exp(5);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 93;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 94;
                                        this.match(SmlParser.ORELSE);
                                        this.state = 95;
                                        _localctx._op2 = this.exp(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 100;
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
                this.state = 101;
                this.pat();
                this.state = 102;
                this.match(SmlParser.T__7);
                this.state = 103;
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
                this.state = 105;
                this.patmatch();
                this.state = 110;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 106;
                                this.match(SmlParser.T__8);
                                this.state = 107;
                                this.patmatch();
                            }
                        }
                    }
                    this.state = 112;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
            this.state = 116;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    _localctx = new PatConstantContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 113;
                        this.con();
                    }
                    break;
                case 2:
                    _localctx = new PatUnitContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 114;
                        this.match(SmlParser.UNIT);
                    }
                    break;
                case 3:
                    _localctx = new PatVariableContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 115;
                        _localctx._id = this.match(SmlParser.ID);
                    }
                    break;
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
            this.state = 142;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.T__9:
                    _localctx = new ValueDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 118;
                        this.match(SmlParser.T__9);
                        this.state = 119;
                        this.valbind();
                        this.state = 124;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 120;
                                    this.match(SmlParser.AND);
                                    this.state = 121;
                                    this.valbind();
                                }
                            }
                            this.state = 126;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__10:
                    _localctx = new FunDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 127;
                        this.match(SmlParser.T__10);
                        this.state = 128;
                        this.funbind();
                        this.state = 133;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 129;
                                    this.match(SmlParser.AND);
                                    this.state = 130;
                                    this.funbind();
                                }
                            }
                            this.state = 135;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__11:
                    _localctx = new LocalDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 136;
                        this.match(SmlParser.T__11);
                        this.state = 137;
                        _localctx._localDecs = this.decSequence();
                        this.state = 138;
                        this.match(SmlParser.T__1);
                        this.state = 139;
                        _localctx._decs = this.decSequence();
                        this.state = 140;
                        this.match(SmlParser.T__2);
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
    decSequence() {
        let _localctx = new DecSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SmlParser.RULE_decSequence);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 144;
                                this.dec();
                                this.state = 146;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SmlParser.SEMICOLON) {
                                    {
                                        this.state = 145;
                                        this.match(SmlParser.SEMICOLON);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 152;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
                this.state = 153;
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
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 155;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 158;
                this.pat();
                this.state = 159;
                this.match(SmlParser.EQ);
                this.state = 160;
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
    funbind() {
        let _localctx = new FunbindContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SmlParser.RULE_funbind);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.funmatches();
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
    funmatches() {
        let _localctx = new FunmatchesContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SmlParser.RULE_funmatches);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.funmatch();
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.T__8) {
                    {
                        {
                            this.state = 165;
                            this.match(SmlParser.T__8);
                            this.state = 166;
                            this.funmatch();
                        }
                    }
                    this.state = 171;
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
    funmatch() {
        let _localctx = new FunmatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SmlParser.RULE_funmatch);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                _localctx._id = this.match(SmlParser.ID);
                this.state = 173;
                this.pat();
                this.state = 177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (SmlParser.INT - 15)) | (1 << (SmlParser.REAL - 15)) | (1 << (SmlParser.CHAR - 15)) | (1 << (SmlParser.STRING - 15)) | (1 << (SmlParser.TRUE - 15)) | (1 << (SmlParser.FALSE - 15)) | (1 << (SmlParser.UNIT - 15)) | (1 << (SmlParser.ID - 15)))) !== 0)) {
                    {
                        {
                            this.state = 174;
                            this.pat();
                        }
                    }
                    this.state = 179;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 180;
                this.match(SmlParser.EQ);
                this.state = 181;
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
        this.enterRule(_localctx, 22, SmlParser.RULE_prog);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
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
                return this.precpred(this._ctx, 13);
            case 1:
                return this.precpred(this._ctx, 12);
            case 2:
                return this.precpred(this._ctx, 11);
            case 3:
                return this.precpred(this._ctx, 10);
            case 4:
                return this.precpred(this._ctx, 9);
            case 5:
                return this.precpred(this._ctx, 8);
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
SmlParser.T__10 = 11;
SmlParser.T__11 = 12;
SmlParser.WHITESPACE = 13;
SmlParser.COMMENT = 14;
SmlParser.INT = 15;
SmlParser.REAL = 16;
SmlParser.CHAR = 17;
SmlParser.STRING = 18;
SmlParser.TRUE = 19;
SmlParser.FALSE = 20;
SmlParser.LPAREN = 21;
SmlParser.RPAREN = 22;
SmlParser.REC = 23;
SmlParser.AND = 24;
SmlParser.SEMICOLON = 25;
SmlParser.UNIT = 26;
SmlParser.SLASH = 27;
SmlParser.DIV = 28;
SmlParser.MOD = 29;
SmlParser.STAR = 30;
SmlParser.PLUS = 31;
SmlParser.MINUS = 32;
SmlParser.CARET = 33;
SmlParser.CONS = 34;
SmlParser.AT = 35;
SmlParser.EQ = 36;
SmlParser.NEQ = 37;
SmlParser.LT = 38;
SmlParser.GT = 39;
SmlParser.LTE = 40;
SmlParser.GTE = 41;
SmlParser.ANDALSO = 42;
SmlParser.ORELSE = 43;
SmlParser.ID = 44;
SmlParser.RULE_con = 0;
SmlParser.RULE_exp = 1;
SmlParser.RULE_patmatch = 2;
SmlParser.RULE_matches = 3;
SmlParser.RULE_pat = 4;
SmlParser.RULE_dec = 5;
SmlParser.RULE_decSequence = 6;
SmlParser.RULE_valbind = 7;
SmlParser.RULE_funbind = 8;
SmlParser.RULE_funmatches = 9;
SmlParser.RULE_funmatch = 10;
SmlParser.RULE_prog = 11;
// tslint:disable:no-trailing-whitespace
SmlParser.ruleNames = [
    "con", "exp", "patmatch", "matches", "pat", "dec", "decSequence", "valbind",
    "funbind", "funmatches", "funmatch", "prog",
];
SmlParser._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'fn'",
    "'=>'", "'|'", "'val'", "'fun'", "'local'", undefined, undefined, undefined,
    undefined, undefined, undefined, "'true'", "'false'", "'('", "')'", "'rec'",
    "'and'", "';'", "'()'", "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'",
    "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='", "'andalso'",
    "'orelse'",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "WHITESPACE",
    "COMMENT", "INT", "REAL", "CHAR", "STRING", "TRUE", "FALSE", "LPAREN",
    "RPAREN", "REC", "AND", "SEMICOLON", "UNIT", "SLASH", "DIV", "MOD", "STAR",
    "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE",
    "GTE", "ANDALSO", "ORELSE", "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\xBC\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02!\n\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x06\x03.\n\x03\r\x03\x0E\x03/\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x05\x03J\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
    "c\n\x03\f\x03\x0E\x03f\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
    "\x05\x03\x05\x07\x05o\n\x05\f\x05\x0E\x05r\v\x05\x03\x06\x03\x06\x03\x06" +
    "\x05\x06w\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07}\n\x07\f\x07\x0E" +
    "\x07\x80\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x86\n\x07\f\x07" +
    "\x0E\x07\x89\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
    "\x07\x91\n\x07\x03\b\x03\b\x05\b\x95\n\b\x07\b\x97\n\b\f\b\x0E\b\x9A\v" +
    "\b\x03\b\x03\b\x03\t\x05\t\x9F\n\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
    "\x03\v\x03\v\x03\v\x07\v\xAA\n\v\f\v\x0E\v\xAD\v\v\x03\f\x03\f\x03\f\x07" +
    "\f\xB2\n\f\f\f\x0E\f\xB5\v\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02" +
    "\x03\x04\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x02\x07\x03\x02\x15\x16\x03\x02\x1D " +
    "\x03\x02!#\x03\x02$%\x03\x02&+\x02\xD0\x02 \x03\x02\x02\x02\x04I\x03\x02" +
    "\x02\x02\x06g\x03\x02\x02\x02\bk\x03\x02\x02\x02\nv\x03\x02\x02\x02\f" +
    "\x90\x03\x02\x02\x02\x0E\x98\x03\x02\x02\x02\x10\x9E\x03\x02\x02\x02\x12" +
    "\xA4\x03\x02\x02\x02\x14\xA6\x03\x02\x02\x02\x16\xAE\x03\x02\x02\x02\x18" +
    "\xB9\x03\x02\x02\x02\x1A!\x07\x11\x02\x02\x1B!\x07\x12\x02\x02\x1C!\x07" +
    "\x13\x02\x02\x1D!\x07\x14\x02\x02\x1E!\t\x02\x02\x02\x1F!\x07\x1C\x02" +
    "\x02 \x1A\x03\x02\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02\x02\x02 \x1D" +
    "\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\x03\x03\x02" +
    "\x02\x02\"#\b\x03\x01\x02#J\x05\x02\x02\x02$J\x07.\x02\x02%&\x07\x17\x02" +
    "\x02&\'\x05\x04\x03\x02\'(\x07\x18\x02\x02(J\x03\x02\x02\x02)*\x07\x17" +
    "\x02\x02*-\x05\x04\x03\x02+,\x07\x1B\x02\x02,.\x05\x04\x03\x02-+\x03\x02" +
    "\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02" +
    "\x02\x0212\x07\x18\x02\x022J\x03\x02\x02\x0234\x07\x03\x02\x0245\x05\x0E" +
    "\b\x0256\x07\x04\x02\x026;\x05\x04\x03\x0278\x07\x1B\x02\x028:\x05\x04" +
    "\x03\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02" +
    "\x02\x02<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x05\x02\x02?J\x03\x02" +
    "\x02\x02@A\x07\x06\x02\x02AB\x05\x04\x03\x02BC\x07\x07\x02\x02CD\x05\x04" +
    "\x03\x02DE\x07\b\x02\x02EF\x05\x04\x03\x04FJ\x03\x02\x02\x02GH\x07\t\x02" +
    "\x02HJ\x05\b\x05\x02I\"\x03\x02\x02\x02I$\x03\x02\x02\x02I%\x03\x02\x02" +
    "\x02I)\x03\x02\x02\x02I3\x03\x02\x02\x02I@\x03\x02\x02\x02IG\x03\x02\x02" +
    "\x02Jd\x03\x02\x02\x02KL\f\x0F\x02\x02Lc\x05\x04\x03\x10MN\f\x0E\x02\x02" +
    "NO\t\x03\x02\x02Oc\x05\x04\x03\x0FPQ\f\r\x02\x02QR\t\x04\x02\x02Rc\x05" +
    "\x04\x03\x0EST\f\f\x02\x02TU\t\x05\x02\x02Uc\x05\x04\x03\fVW\f\v\x02\x02" +
    "WX\t\x06\x02\x02Xc\x05\x04\x03\fYZ\f\n\x02\x02Z[\x07.\x02\x02[c\x05\x04" +
    "\x03\v\\]\f\x06\x02\x02]^\x07,\x02\x02^c\x05\x04\x03\x07_`\f\x05\x02\x02" +
    "`a\x07-\x02\x02ac\x05\x04\x03\x06bK\x03\x02\x02\x02bM\x03\x02\x02\x02" +
    "bP\x03\x02\x02\x02bS\x03\x02\x02\x02bV\x03\x02\x02\x02bY\x03\x02\x02\x02" +
    "b\\\x03\x02\x02\x02b_\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02" +
    "\x02de\x03\x02\x02\x02e\x05\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x05\n" +
    "\x06\x02hi\x07\n\x02\x02ij\x05\x04\x03\x02j\x07\x03\x02\x02\x02kp\x05" +
    "\x06\x04\x02lm\x07\v\x02\x02mo\x05\x06\x04\x02nl\x03\x02\x02\x02or\x03" +
    "\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\t\x03\x02\x02\x02rp" +
    "\x03\x02\x02\x02sw\x05\x02\x02\x02tw\x07\x1C\x02\x02uw\x07.\x02\x02vs" +
    "\x03\x02\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02w\v\x03\x02\x02\x02" +
    "xy\x07\f\x02\x02y~\x05\x10\t\x02z{\x07\x1A\x02\x02{}\x05\x10\t\x02|z\x03" +
    "\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02" +
    "\x7F\x91\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x82\x07\r\x02\x02\x82" +
    "\x87\x05\x12\n\x02\x83\x84\x07\x1A\x02\x02\x84\x86\x05\x12\n\x02\x85\x83" +
    "\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88" +
    "\x03\x02\x02\x02\x88\x91\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8B" +
    "\x07\x0E\x02\x02\x8B\x8C\x05\x0E\b\x02\x8C\x8D\x07\x04\x02\x02\x8D\x8E" +
    "\x05\x0E\b\x02\x8E\x8F\x07\x05\x02\x02\x8F\x91\x03\x02\x02\x02\x90x\x03" +
    "\x02\x02\x02\x90\x81\x03\x02\x02\x02\x90\x8A\x03\x02\x02\x02\x91\r\x03" +
    "\x02\x02\x02\x92\x94\x05\f\x07\x02\x93\x95\x07\x1B\x02\x02\x94\x93\x03" +
    "\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x92\x03" +
    "\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03" +
    "\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9C\x05" +
    "\f\x07\x02\x9C\x0F\x03\x02\x02\x02\x9D\x9F\x07\x19\x02\x02\x9E\x9D\x03" +
    "\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x05" +
    "\n\x06\x02\xA1\xA2\x07&\x02\x02\xA2\xA3\x05\x04\x03\x02\xA3\x11\x03\x02" +
    "\x02\x02\xA4\xA5\x05\x14\v\x02\xA5\x13\x03\x02\x02\x02\xA6\xAB\x05\x16" +
    "\f\x02\xA7\xA8\x07\v\x02\x02\xA8\xAA\x05\x16\f\x02\xA9\xA7\x03\x02\x02" +
    "\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02" +
    "\x02\xAC\x15\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07.\x02" +
    "\x02\xAF\xB3\x05\n\x06\x02\xB0\xB2\x05\n\x06\x02\xB1\xB0\x03\x02\x02\x02" +
    "\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
    "\xB4\xB6\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\x07&\x02\x02" +
    "\xB7\xB8\x05\x04\x03\x02\xB8\x17\x03\x02\x02\x02\xB9\xBA\x05\x0E\b\x02" +
    "\xBA\x19\x03\x02\x02\x02\x12 /;Ibdpv~\x87\x90\x94\x98\x9E\xAB\xB3";
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
class RealContext extends ConContext {
    REAL() { return this.getToken(SmlParser.REAL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReal) {
            listener.enterReal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReal) {
            listener.exitReal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RealContext = RealContext;
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
class UnitContext extends ConContext {
    UNIT() { return this.getToken(SmlParser.UNIT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
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
class ExpSequenceContext extends ExpContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
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
        if (listener.enterExpSequence) {
            listener.enterExpSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpSequence) {
            listener.exitExpSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpSequence) {
            return visitor.visitExpSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpSequenceContext = ExpSequenceContext;
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
class PatUnitContext extends PatContext {
    UNIT() { return this.getToken(SmlParser.UNIT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatUnit) {
            listener.enterPatUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatUnit) {
            listener.exitPatUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatUnit) {
            return visitor.visitPatUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatUnitContext = PatUnitContext;
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
class FunDeclContext extends DecContext {
    funbind(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunbindContext);
        }
        else {
            return this.getRuleContext(i, FunbindContext);
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
        if (listener.enterFunDecl) {
            listener.enterFunDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunDecl) {
            listener.exitFunDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunDecl) {
            return visitor.visitFunDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunDeclContext = FunDeclContext;
class LocalDeclContext extends DecContext {
    decSequence(i) {
        if (i === undefined) {
            return this.getRuleContexts(DecSequenceContext);
        }
        else {
            return this.getRuleContext(i, DecSequenceContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalDecl) {
            listener.enterLocalDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalDecl) {
            listener.exitLocalDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalDecl) {
            return visitor.visitLocalDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalDeclContext = LocalDeclContext;
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
class FunbindContext extends ParserRuleContext_1.ParserRuleContext {
    funmatches() {
        return this.getRuleContext(0, FunmatchesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funbind; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunbind) {
            listener.enterFunbind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunbind) {
            listener.exitFunbind(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunbind) {
            return visitor.visitFunbind(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunbindContext = FunbindContext;
class FunmatchesContext extends ParserRuleContext_1.ParserRuleContext {
    funmatch(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunmatchContext);
        }
        else {
            return this.getRuleContext(i, FunmatchContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funmatches; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunmatches) {
            listener.enterFunmatches(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunmatches) {
            listener.exitFunmatches(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunmatches) {
            return visitor.visitFunmatches(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunmatchesContext = FunmatchesContext;
class FunmatchContext extends ParserRuleContext_1.ParserRuleContext {
    pat(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatContext);
        }
        else {
            return this.getRuleContext(i, PatContext);
        }
    }
    EQ() { return this.getToken(SmlParser.EQ, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funmatch; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunmatch) {
            listener.enterFunmatch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunmatch) {
            listener.exitFunmatch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunmatch) {
            return visitor.visitFunmatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunmatchContext = FunmatchContext;
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