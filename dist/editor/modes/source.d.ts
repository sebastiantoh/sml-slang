import { Variant } from '../../types';
/**
 * Source Mode for Ace Editor
 * (Modified from javascript mode in default brace package)
 * The link to the original JavaScript mode can be found here:
 * https://github.com/ajaxorg/ace-builds/blob/master/src/mode-javascript.js
 *
 * Changes includes:
 * 1) change code styles so that it passes tslint test
 * 2) refactor some code to ES2015 class syntax
 * 3) Encapsulate the orginal mode and higlightrules in two selectors so as to change according to source chapter
 * 4) changed regex to mark certain operators in pink
 * 5) use SourceDocumentation to include all library functions and constants from source
 * 6) include all external libraries
 */
export declare function HighlightRulesSelector(id: number, variant: Variant, external?: String, externalLibraries?: ({
    caption: string;
    value: string;
    meta: any;
    docHTML: any;
} | {
    caption: string;
    value: string;
    meta: string;
    docHTML?: undefined;
})[]): void;
export declare function ModeSelector(id: number, variant?: Variant, external?: string): void;
