"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// TODO: cleanup this function.
// currently used by the frontend, can update the way its called
const createContext = (variant = types_1.Variant.DEFAULT, externalSymbols = [], externalContext) => {
    return {
        errors: []
    };
};
exports.default = createContext;
//# sourceMappingURL=context.js.map