// Updated by trungquandev.com's author on May 13 2023
// Updated to ESLint Stylistic version by ChatGPT
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "react-refresh", "@stylistic"],
  rules: {
    // React & Hooks
    "react-refresh/only-export-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0,
    "react/display-name": 0,

    // Non-stylistic core rules
    "no-console": 1,
    "no-lonely-if": 1,
    "no-unused-vars": 1,
    "no-unexpected-multiline": "warn",
    "linebreak-style": 0,

    // Stylistic rules (migrated)
    "@stylistic/no-trailing-spaces": 1,
    "@stylistic/no-multi-spaces": 1,
    "@stylistic/no-multiple-empty-lines": 1,

    "@stylistic/space-before-blocks": ["error", "always"],
    "@stylistic/object-curly-spacing": [1, "always"],
    "@stylistic/array-bracket-spacing": 1,

    "@stylistic/indent": ["warn", 2],
    "@stylistic/semi": [1, "never"],
    "@stylistic/quotes": ["error", "single"],

    "@stylistic/keyword-spacing": 1,
    "@stylistic/comma-dangle": 1,
    "@stylistic/comma-spacing": 1,
    "@stylistic/arrow-spacing": 1,
  },
};
