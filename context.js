"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typechecker_1 = require("./typechecker");
const createEmptyRuntime = () => ({
    isRunning: false,
    environments: [],
    value: undefined,
    nodes: []
});
const createEmptyContext = (externalSymbols, externalContext) => {
    return {
        externalSymbols,
        externalContext,
        runtime: createEmptyRuntime(),
        numberOfOuterEnvironments: 1,
        prelude: null,
        typeEnvironments: typechecker_1.INIT_ENV
    };
};
// currently used by the frontend, can update the way its called
const createContext = (externalSymbols = [], externalContext) => {
    return createEmptyContext(externalSymbols, externalContext);
};
exports.default = createContext;
//# sourceMappingURL=context.js.map