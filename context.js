"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./typechecker/environment");
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
        typeEnvironments: (0, environment_1.createInitialTypeEnvironments)()
    };
};
// TODO: cleanup this function.
// currently used by the frontend, can update the way its called
const createContext = (externalSymbols = [], externalContext) => {
    return createEmptyContext(externalSymbols, externalContext);
};
exports.default = createContext;
//# sourceMappingURL=context.js.map