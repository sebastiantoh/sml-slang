"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.FunmatchContext = exports.FunmatchesContext = exports.FunbindContext = exports.ValbindContext = exports.DecSequenceContext = exports.LocalDeclContext = exports.FunDeclContext = exports.ValueDeclContext = exports.DecContext = exports.PatVariableContext = exports.PatUnitContext = exports.PatConstantContext = exports.PatContext = exports.MatchesContext = exports.PatmatchContext = exports.FunctionContext = exports.CaseAnalysisContext = exports.ConditionalContext = exports.DisjunctionContext = exports.ConjunctionContext = exports.LetExpressionContext = exports.ExpSequenceContext = exports.ListContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ApplicationContext = exports.ExpVariableContext = exports.ConstantContext = exports.ExpContext = exports.UnitContext = exports.BooleanContext = exports.StringContext = exports.CharacterContext = exports.RealContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
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
                this.state = 88;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
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
                            _localctx = new ListContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 39;
                            this.match(SmlParser.LSQUARE);
                            this.state = 48;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.T__3) | (1 << SmlParser.T__6) | (1 << SmlParser.T__8) | (1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN) | (1 << SmlParser.LSQUARE) | (1 << SmlParser.UNIT))) !== 0) || _la === SmlParser.ID) {
                                {
                                    this.state = 40;
                                    this.exp(0);
                                    this.state = 45;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SmlParser.COMMA) {
                                        {
                                            {
                                                this.state = 41;
                                                this.match(SmlParser.COMMA);
                                                this.state = 42;
                                                this.exp(0);
                                            }
                                        }
                                        this.state = 47;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 50;
                            this.match(SmlParser.RSQUARE);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new ExpSequenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 51;
                            this.match(SmlParser.LPAREN);
                            this.state = 52;
                            this.exp(0);
                            this.state = 55;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 53;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 54;
                                        this.exp(0);
                                    }
                                }
                                this.state = 57;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SmlParser.SEMICOLON);
                            this.state = 59;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 61;
                            this.match(SmlParser.T__0);
                            this.state = 62;
                            this.decSequence();
                            this.state = 63;
                            this.match(SmlParser.T__1);
                            this.state = 64;
                            this.exp(0);
                            this.state = 69;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 65;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 66;
                                        this.exp(0);
                                    }
                                }
                                this.state = 71;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 72;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 74;
                            this.match(SmlParser.T__3);
                            this.state = 75;
                            _localctx._pred = this.exp(0);
                            this.state = 76;
                            this.match(SmlParser.T__4);
                            this.state = 77;
                            _localctx._cons = this.exp(0);
                            this.state = 78;
                            this.match(SmlParser.T__5);
                            this.state = 79;
                            _localctx._alt = this.exp(3);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new CaseAnalysisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 81;
                            this.match(SmlParser.T__6);
                            this.state = 82;
                            this.exp(0);
                            this.state = 83;
                            this.match(SmlParser.T__7);
                            this.state = 84;
                            this.matches();
                        }
                        break;
                    case 9:
                        {
                            _localctx = new FunctionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 86;
                            this.match(SmlParser.T__8);
                            this.state = 87;
                            this.matches();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 115;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 113;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._fn = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 90;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 91;
                                        _localctx._arg = this.exp(16);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 92;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 93;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SmlParser.SLASH - 32)) | (1 << (SmlParser.DIV - 32)) | (1 << (SmlParser.MOD - 32)) | (1 << (SmlParser.STAR - 32)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 94;
                                        _localctx._op2 = this.exp(15);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 95;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 96;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SmlParser.PLUS - 36)) | (1 << (SmlParser.MINUS - 36)) | (1 << (SmlParser.CARET - 36)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 97;
                                        _localctx._op2 = this.exp(14);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 98;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 99;
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
                                        this.state = 100;
                                        _localctx._op2 = this.exp(12);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 101;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 102;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SmlParser.EQ - 41)) | (1 << (SmlParser.NEQ - 41)) | (1 << (SmlParser.LT - 41)) | (1 << (SmlParser.GT - 41)) | (1 << (SmlParser.LTE - 41)) | (1 << (SmlParser.GTE - 41)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 103;
                                        _localctx._op2 = this.exp(12);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 104;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 105;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 106;
                                        _localctx._op2 = this.exp(11);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 107;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 108;
                                        this.match(SmlParser.ANDALSO);
                                        this.state = 109;
                                        _localctx._op2 = this.exp(6);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 110;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 111;
                                        this.match(SmlParser.ORELSE);
                                        this.state = 112;
                                        _localctx._op2 = this.exp(5);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 117;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
                this.state = 118;
                this.pat();
                this.state = 119;
                this.match(SmlParser.T__9);
                this.state = 120;
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
                this.state = 122;
                this.patmatch();
                this.state = 127;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 123;
                                this.match(SmlParser.T__10);
                                this.state = 124;
                                this.patmatch();
                            }
                        }
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
            this.state = 133;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    _localctx = new PatConstantContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.con();
                    }
                    break;
                case 2:
                    _localctx = new PatUnitContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.match(SmlParser.UNIT);
                    }
                    break;
                case 3:
                    _localctx = new PatVariableContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 132;
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
            this.state = 159;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.T__11:
                    _localctx = new ValueDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 135;
                        this.match(SmlParser.T__11);
                        this.state = 136;
                        this.valbind();
                        this.state = 141;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 137;
                                    this.match(SmlParser.AND);
                                    this.state = 138;
                                    this.valbind();
                                }
                            }
                            this.state = 143;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__12:
                    _localctx = new FunDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 144;
                        this.match(SmlParser.T__12);
                        this.state = 145;
                        this.funbind();
                        this.state = 150;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 146;
                                    this.match(SmlParser.AND);
                                    this.state = 147;
                                    this.funbind();
                                }
                            }
                            this.state = 152;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__13:
                    _localctx = new LocalDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 153;
                        this.match(SmlParser.T__13);
                        this.state = 154;
                        _localctx._localDecs = this.decSequence();
                        this.state = 155;
                        this.match(SmlParser.T__1);
                        this.state = 156;
                        _localctx._decs = this.decSequence();
                        this.state = 157;
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
                this.state = 167;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 161;
                                this.dec();
                                this.state = 163;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SmlParser.SEMICOLON) {
                                    {
                                        this.state = 162;
                                        this.match(SmlParser.SEMICOLON);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 169;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 170;
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
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 172;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 175;
                this.pat();
                this.state = 176;
                this.match(SmlParser.EQ);
                this.state = 177;
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
                this.state = 179;
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
                this.state = 181;
                this.funmatch();
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.T__10) {
                    {
                        {
                            this.state = 182;
                            this.match(SmlParser.T__10);
                            this.state = 183;
                            this.funmatch();
                        }
                    }
                    this.state = 188;
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
                this.state = 189;
                _localctx._id = this.match(SmlParser.ID);
                this.state = 190;
                this.pat();
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.UNIT))) !== 0) || _la === SmlParser.ID) {
                    {
                        {
                            this.state = 191;
                            this.pat();
                        }
                    }
                    this.state = 196;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 197;
                this.match(SmlParser.EQ);
                this.state = 198;
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
                this.state = 200;
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
                return this.precpred(this._ctx, 15);
            case 1:
                return this.precpred(this._ctx, 14);
            case 2:
                return this.precpred(this._ctx, 13);
            case 3:
                return this.precpred(this._ctx, 12);
            case 4:
                return this.precpred(this._ctx, 11);
            case 5:
                return this.precpred(this._ctx, 10);
            case 6:
                return this.precpred(this._ctx, 5);
            case 7:
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
SmlParser.T__7 = 8;
SmlParser.T__8 = 9;
SmlParser.T__9 = 10;
SmlParser.T__10 = 11;
SmlParser.T__11 = 12;
SmlParser.T__12 = 13;
SmlParser.T__13 = 14;
SmlParser.WHITESPACE = 15;
SmlParser.COMMENT = 16;
SmlParser.INT = 17;
SmlParser.REAL = 18;
SmlParser.CHAR = 19;
SmlParser.STRING = 20;
SmlParser.TRUE = 21;
SmlParser.FALSE = 22;
SmlParser.LPAREN = 23;
SmlParser.RPAREN = 24;
SmlParser.LSQUARE = 25;
SmlParser.RSQUARE = 26;
SmlParser.REC = 27;
SmlParser.AND = 28;
SmlParser.SEMICOLON = 29;
SmlParser.COMMA = 30;
SmlParser.UNIT = 31;
SmlParser.SLASH = 32;
SmlParser.DIV = 33;
SmlParser.MOD = 34;
SmlParser.STAR = 35;
SmlParser.PLUS = 36;
SmlParser.MINUS = 37;
SmlParser.CARET = 38;
SmlParser.CONS = 39;
SmlParser.AT = 40;
SmlParser.EQ = 41;
SmlParser.NEQ = 42;
SmlParser.LT = 43;
SmlParser.GT = 44;
SmlParser.LTE = 45;
SmlParser.GTE = 46;
SmlParser.ANDALSO = 47;
SmlParser.ORELSE = 48;
SmlParser.ID = 49;
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
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'case'",
    "'of'", "'fn'", "'=>'", "'|'", "'val'", "'fun'", "'local'", undefined,
    undefined, undefined, undefined, undefined, undefined, "'true'", "'false'",
    "'('", "')'", "'['", "']'", "'rec'", "'and'", "';'", "','", "'()'", "'/'",
    "'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'",
    "'<'", "'>'", "'<='", "'>='", "'andalso'", "'orelse'",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "WHITESPACE", "COMMENT", "INT", "REAL", "CHAR", "STRING", "TRUE",
    "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC", "AND", "SEMICOLON",
    "COMMA", "UNIT", "SLASH", "DIV", "MOD", "STAR", "PLUS", "MINUS", "CARET",
    "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE",
    "ID",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\xCD\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02!\n\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x07\x03.\n\x03\f\x03\x0E\x031\v\x03\x05\x033\n\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x06\x03:\n\x03\r\x03\x0E\x03;\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03F\n\x03\f\x03" +
    "\x0E\x03I\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x05\x03[\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03t\n\x03" +
    "\f\x03\x0E\x03w\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
    "\x03\x05\x07\x05\x80\n\x05\f\x05\x0E\x05\x83\v\x05\x03\x06\x03\x06\x03" +
    "\x06\x05\x06\x88\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x8E\n\x07" +
    "\f\x07\x0E\x07\x91\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x97\n" +
    "\x07\f\x07\x0E\x07\x9A\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x05\x07\xA2\n\x07\x03\b\x03\b\x05\b\xA6\n\b\x07\b\xA8\n\b\f\b\x0E" +
    "\b\xAB\v\b\x03\b\x03\b\x03\t\x05\t\xB0\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\v\x03\v\x03\v\x07\v\xBB\n\v\f\v\x0E\v\xBE\v\v\x03\f\x03\f" +
    "\x03\f\x07\f\xC3\n\f\f\f\x0E\f\xC6\v\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
    "\r\x02\x02\x03\x04\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
    "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x07\x03\x02\x17\x18\x03\x02" +
    "\"%\x03\x02&(\x03\x02)*\x03\x02+0\x02\xE5\x02 \x03\x02\x02\x02\x04Z\x03" +
    "\x02\x02\x02\x06x\x03\x02\x02\x02\b|\x03\x02\x02\x02\n\x87\x03\x02\x02" +
    "\x02\f\xA1\x03\x02\x02\x02\x0E\xA9\x03\x02\x02\x02\x10\xAF\x03\x02\x02" +
    "\x02\x12\xB5\x03\x02\x02\x02\x14\xB7\x03\x02\x02\x02\x16\xBF\x03\x02\x02" +
    "\x02\x18\xCA\x03\x02\x02\x02\x1A!\x07\x13\x02\x02\x1B!\x07\x14\x02\x02" +
    "\x1C!\x07\x15\x02\x02\x1D!\x07\x16\x02\x02\x1E!\t\x02\x02\x02\x1F!\x07" +
    "!\x02\x02 \x1A\x03\x02\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02\x02\x02" +
    " \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\x03\x03" +
    "\x02\x02\x02\"#\b\x03\x01\x02#[\x05\x02\x02\x02$[\x073\x02\x02%&\x07\x19" +
    "\x02\x02&\'\x05\x04\x03\x02\'(\x07\x1A\x02\x02([\x03\x02\x02\x02)2\x07" +
    "\x1B\x02\x02*/\x05\x04\x03\x02+,\x07 \x02\x02,.\x05\x04\x03\x02-+\x03" +
    "\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03" +
    "\x02\x02\x021/\x03\x02\x02\x022*\x03\x02\x02\x0223\x03\x02\x02\x0234\x03" +
    "\x02\x02\x024[\x07\x1C\x02\x0256\x07\x19\x02\x0269\x05\x04\x03\x0278\x07" +
    "\x1F\x02\x028:\x05\x04\x03\x0297\x03\x02\x02\x02:;\x03\x02\x02\x02;9\x03" +
    "\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x07\x1A\x02\x02>[\x03" +
    "\x02\x02\x02?@\x07\x03\x02\x02@A\x05\x0E\b\x02AB\x07\x04\x02\x02BG\x05" +
    "\x04\x03\x02CD\x07\x1F\x02\x02DF\x05\x04\x03\x02EC\x03\x02\x02\x02FI\x03" +
    "\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03" +
    "\x02\x02\x02JK\x07\x05\x02\x02K[\x03\x02\x02\x02LM\x07\x06\x02\x02MN\x05" +
    "\x04\x03\x02NO\x07\x07\x02\x02OP\x05\x04\x03\x02PQ\x07\b\x02\x02QR\x05" +
    "\x04\x03\x05R[\x03\x02\x02\x02ST\x07\t\x02\x02TU\x05\x04\x03\x02UV\x07" +
    "\n\x02\x02VW\x05\b\x05\x02W[\x03\x02\x02\x02XY\x07\v\x02\x02Y[\x05\b\x05" +
    "\x02Z\"\x03\x02\x02\x02Z$\x03\x02\x02\x02Z%\x03\x02\x02\x02Z)\x03\x02" +
    "\x02\x02Z5\x03\x02\x02\x02Z?\x03\x02\x02\x02ZL\x03\x02\x02\x02ZS\x03\x02" +
    "\x02\x02ZX\x03\x02\x02\x02[u\x03\x02\x02\x02\\]\f\x11\x02\x02]t\x05\x04" +
    "\x03\x12^_\f\x10\x02\x02_`\t\x03\x02\x02`t\x05\x04\x03\x11ab\f\x0F\x02" +
    "\x02bc\t\x04\x02\x02ct\x05\x04\x03\x10de\f\x0E\x02\x02ef\t\x05\x02\x02" +
    "ft\x05\x04\x03\x0Egh\f\r\x02\x02hi\t\x06\x02\x02it\x05\x04\x03\x0Ejk\f" +
    "\f\x02\x02kl\x073\x02\x02lt\x05\x04\x03\rmn\f\x07\x02\x02no\x071\x02\x02" +
    "ot\x05\x04\x03\bpq\f\x06\x02\x02qr\x072\x02\x02rt\x05\x04\x03\x07s\\\x03" +
    "\x02\x02\x02s^\x03\x02\x02\x02sa\x03\x02\x02\x02sd\x03\x02\x02\x02sg\x03" +
    "\x02\x02\x02sj\x03\x02\x02\x02sm\x03\x02\x02\x02sp\x03\x02\x02\x02tw\x03" +
    "\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v\x05\x03\x02\x02\x02" +
    "wu\x03\x02\x02\x02xy\x05\n\x06\x02yz\x07\f\x02\x02z{\x05\x04\x03\x02{" +
    "\x07\x03\x02\x02\x02|\x81\x05\x06\x04\x02}~\x07\r\x02\x02~\x80\x05\x06" +
    "\x04\x02\x7F}\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02" +
    "\x02\x02\x81\x82\x03\x02\x02\x02\x82\t\x03\x02\x02\x02\x83\x81\x03\x02" +
    "\x02\x02\x84\x88\x05\x02\x02\x02\x85\x88\x07!\x02\x02\x86\x88\x073\x02" +
    "\x02\x87\x84\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x86\x03\x02\x02" +
    "\x02\x88\v\x03\x02\x02\x02\x89\x8A\x07\x0E\x02\x02\x8A\x8F\x05\x10\t\x02" +
    "\x8B\x8C\x07\x1E\x02\x02\x8C\x8E\x05\x10\t\x02\x8D\x8B\x03\x02\x02\x02" +
    "\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02" +
    "\x90\xA2\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\x07\x0F\x02\x02" +
    "\x93\x98\x05\x12\n\x02\x94\x95\x07\x1E\x02\x02\x95\x97\x05\x12\n\x02\x96" +
    "\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98" +
    "\x99\x03\x02\x02\x02\x99\xA2\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B" +
    "\x9C\x07\x10\x02\x02\x9C\x9D\x05\x0E\b\x02\x9D\x9E\x07\x04\x02\x02\x9E" +
    "\x9F\x05\x0E\b\x02\x9F\xA0\x07\x05\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1" +
    "\x89\x03\x02\x02\x02\xA1\x92\x03\x02\x02\x02\xA1\x9B\x03\x02\x02\x02\xA2" +
    "\r\x03\x02\x02\x02\xA3\xA5\x05\f\x07\x02\xA4\xA6\x07\x1F\x02\x02\xA5\xA4" +
    "\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA3" +
    "\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA" +
    "\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD" +
    "\x05\f\x07\x02\xAD\x0F\x03\x02\x02\x02\xAE\xB0\x07\x1D\x02\x02\xAF\xAE" +
    "\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2" +
    "\x05\n\x06\x02\xB2\xB3\x07+\x02\x02\xB3\xB4\x05\x04\x03\x02\xB4\x11\x03" +
    "\x02\x02\x02\xB5\xB6\x05\x14\v\x02\xB6\x13\x03\x02\x02\x02\xB7\xBC\x05" +
    "\x16\f\x02\xB8\xB9\x07\r\x02\x02\xB9\xBB\x05\x16\f\x02\xBA\xB8\x03\x02" +
    "\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02" +
    "\x02\x02\xBD\x15\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC0\x073" +
    "\x02\x02\xC0\xC4\x05\n\x06\x02\xC1\xC3\x05\n\x06\x02\xC2\xC1\x03\x02\x02" +
    "\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
    "\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x07+\x02" +
    "\x02\xC8\xC9\x05\x04\x03\x02\xC9\x17\x03\x02\x02\x02\xCA\xCB\x05\x0E\b" +
    "\x02\xCB\x19\x03\x02\x02\x02\x14 /2;GZsu\x81\x87\x8F\x98\xA1\xA5\xA9\xAF" +
    "\xBC\xC4";
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
class ListContext extends ExpContext {
    LSQUARE() { return this.getToken(SmlParser.LSQUARE, 0); }
    RSQUARE() { return this.getToken(SmlParser.RSQUARE, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.COMMA);
        }
        else {
            return this.getToken(SmlParser.COMMA, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListContext = ListContext;
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
class CaseAnalysisContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    matches() {
        return this.getRuleContext(0, MatchesContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseAnalysis) {
            listener.enterCaseAnalysis(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseAnalysis) {
            listener.exitCaseAnalysis(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseAnalysis) {
            return visitor.visitCaseAnalysis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseAnalysisContext = CaseAnalysisContext;
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