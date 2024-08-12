import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["**/node_modules/", ".dist/"],
    rules: {
      "no-undef":"error",
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-console":"warn"
  }
  
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];