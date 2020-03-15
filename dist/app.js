"use strict";
/**
 * this is for Nullish Coalescing.
 * When value of a variable is exclusively null or undefined, then we can assign a default
 * fallback value by using Nullish Coalescing.
 */
const userinput = undefined;
const result = (userinput !== null && userinput !== void 0 ? userinput : 'Default');
console.log(result);
//# sourceMappingURL=app.js.map