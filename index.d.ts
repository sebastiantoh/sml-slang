export declare const INIT_ENV: import("./typechecker/environment").TypeEnvironment;
export declare const parseTypeCheckAndEvaluateExp: (exp: string, outputWithType?: boolean) => import("./types").Result;
export declare const parseTypeCheckAndEvaluateProg: (prog: string) => import("./types").Result;
