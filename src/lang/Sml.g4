grammar Sml;

/** Tokens */

WHITESPACE: [ \r\n\t]+ -> skip;

INT
    : '~'? NUM
    ;

// Not supporting scientific notation for now since the tilde complicates thing
FLOAT
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


/** Productions */

con
    : INT           # Integer
    | FLOAT         # FloatingPoint
    | CHAR          # Character
    | STRING        # String
    ;

exp
    : con                                      # Constant
    ;
