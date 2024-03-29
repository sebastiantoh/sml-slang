grammar Sml;

/** Tokens */

WHITESPACE: [ \r\n\t]+ -> skip;
COMMENT: '(*' .*? '*)' -> skip;

INT
    : '~'? NUM
    ;

// Not supporting scientific notation for now since the tilde complicates thing
REAL
    : '~'? NUM '.' NUM
    ;

CHAR
    : '#"' ASCII '"'
    ;

STRING
    : '"' ASCII* '"'
    ;

fragment DIGIT: [0-9];

fragment NUM: DIGIT+;

fragment LETTER: [a-zA-Z];

fragment ESC: '\\' (["\\/bfnrt]);

fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

// reference: https://stackoverflow.com/questions/66902057/antlr-how-to-accept-double-quotes-inside-double-quoted-string-while-parsing
fragment ASCII: ESC | SAFECODEPOINT;

TRUE: 'true';
FALSE: 'false';

LPAREN: '(';
RPAREN: ')';
LSQUARE: '[';
RSQUARE: ']';
REC: 'rec';
AND: 'and';
SEMICOLON: ';';
COLON: ':';
COMMA: ',';
UNIT: '()';
UNDERSCORE: '_';

SLASH: '/';
DIV: 'div';
MOD: 'mod';
STARDOT: '*.';
STAR: '*';
PLUSDOT: '+.';
PLUS: '+';
MINUSDOT: '-.';
MINUS: '-';
CARET: '^';
CONS: '::';
AT: '@';
EQ: '=';
NEQ: '<>';
LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';
ANDALSO: 'andalso';
ORELSE: 'orelse';
QUOTE: '\'';

ID
    : LETTER (LETTER | DIGIT | '\'' | '_' )*
    | ( '!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' |
        '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '`' | '^' | '|' | '*' )+
    ;

VAR
    : QUOTE (LETTER | DIGIT | QUOTE | UNDERSCORE)*
    | QUOTE QUOTE (LETTER | DIGIT | QUOTE | UNDERSCORE)*
    ;

/** Productions */

con
    : INT              # Integer
    | REAL             # Real
    | CHAR             # Character
    | STRING           # String
    | (TRUE | FALSE)   # Boolean
    | UNIT             # Unit
    ;

exp
    : con                                                                # Constant
    | id=ID                                                              # ExpVariable
    | fn=exp arg=exp                                                     # Application
    // Precedence levels can be found on Page 98 of https://smlfamily.github.io/sml90-defn.pdf
    | op1=exp id=(SLASH | DIV | MOD | STAR | STARDOT) op2=exp            # InfixApplication
    | op1=exp id=(PLUS | PLUSDOT | MINUS | MINUSDOT | CARET) op2=exp     # InfixApplication
    | <assoc=right> op1=exp id=(CONS | AT) op2=exp                       # InfixApplication
    | op1=exp id=(EQ | NEQ | LT | GT | LTE | GTE) op2=exp                # InfixApplication
    | op1=exp id=ID op2=exp                                              # InfixApplication
    | LPAREN exp RPAREN                                                  # Parentheses
    | LSQUARE (exp (COMMA exp)*)? RSQUARE                                # List
    | LPAREN exp (SEMICOLON exp)+ RPAREN                                 # ExpSequence
    | 'let' decSequence 'in' exp (SEMICOLON exp)* 'end'                  # LetExpression
    | exp COLON typ 	                                                 # ExpTypeAnnotation
    | op1=exp ANDALSO op2=exp                                            # Conjunction
    | op1=exp ORELSE op2=exp                                             # Disjunction
    | 'if' pred=exp 'then' cons=exp 'else' alt=exp                       # Conditional
    | 'case' exp 'of' matches                                            # CaseAnalysis
    | 'fn' matches                                                       # Function
    ;

// Note: this is named patmatch instead of match because
// Antlr's parser has a match function internally, which
// conflicts with the function generated by this rule
patmatch: pat '=>' exp;

matches: patmatch ('|' patmatch)*;

pat
    : con                                                             # PatConstant
    | UNDERSCORE                                                      # PatWildcard
    | UNIT                                                            # PatUnit
    | id=ID                                                           # PatVariable
    | <assoc=right> pat1=pat CONS pat2=pat                            # PatInfixConstruction
    | LPAREN pat RPAREN                                               # PatParentheses
    | LSQUARE (pat (COMMA pat)*)? RSQUARE                             # PatList
    | pat COLON typ 	                                              # PatTypeAnnotation
    ;

typ
    : VAR                                                             # TypeVariable
    | id=ID                                                           # TypeConstructor
    | typ id=ID                                                       # TypeConstructor
    // Example of this rule:
    // datatype ('a, 'b) pair = empty | cons of 'a * 'b
    | LPAREN typ (COMMA typ)+ RPAREN id=ID                            # TypeConstructor
    | LPAREN typ RPAREN                                               # TypeParentheses
    | argTy=typ '->' retTy=typ                                        # TypeFunction
    ;
dec
    : 'val' valbind (AND valbind)*                                    # ValueDecl
    | 'fun' funbind (AND funbind)*                                    # FunDecl
    | 'local' localDecs=decSequence 'in' decs=decSequence 'end'       # LocalDecl
    ;

decSequence: (dec SEMICOLON?)* dec;

valbind: REC? pat EQ exp;

funbind: funmatches;

funmatches: funmatch ('|' funmatch)*;

funmatch: id=ID pat pat* EQ exp;

prog: decSequence;
