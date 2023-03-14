"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitialTypeEnvironments = void 0;
const utils_1 = require("./utils");
const primitiveFuncs = [
    ['/', (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY)],
    ['div', (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY)],
    ['mod', (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY)],
    ['div', (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY)],
    ['+', [(0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY)]],
    ['*', [(0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY)]],
    ['-', [(0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.INT_TY), (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.REAL_TY)]],
    ['^', (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.STR_TY)],
    // TODO: shd be able to do smt like this instead of all the
    // repeated code, debug later
    // ...['=', '<>', '<', '>', '<=', '>='].map(comp => [
    //     [comp, [
    //         makeMatchType(INT_TY, INT_TY, BOOL_TY),
    //         makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
    //         makeMatchType(STR_TY, STR_TY, BOOL_TY),
    //         makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY),
    //     ]]
    // ])
    [
        '=',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    [
        '<>',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    [
        '<',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    [
        '>',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    [
        '<=',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    [
        '>=',
        [
            (0, utils_1.makeMatchType)(utils_1.INT_TY, utils_1.INT_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.REAL_TY, utils_1.REAL_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.STR_TY, utils_1.STR_TY, utils_1.BOOL_TY),
            (0, utils_1.makeMatchType)(utils_1.CHAR_TY, utils_1.CHAR_TY, utils_1.BOOL_TY)
        ]
    ],
    ['andalso', (0, utils_1.makeMatchType)(utils_1.BOOL_TY, utils_1.BOOL_TY, utils_1.BOOL_TY)],
    ['orelse', (0, utils_1.makeMatchType)(utils_1.BOOL_TY, utils_1.BOOL_TY, utils_1.BOOL_TY)]
];
function createInitialTypeEnvironments() {
    // initial type env only contains inbuilt funcs
    return { frame: Object.fromEntries(primitiveFuncs) };
}
exports.createInitialTypeEnvironments = createInitialTypeEnvironments;
//# sourceMappingURL=environment.js.map