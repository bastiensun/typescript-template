import js from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import node from "eslint-plugin-n";
import perfectionist from "eslint-plugin-perfectionist";
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import ts from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  /* eslint-disable sonarjs/no-duplicate-string */
  comments.recommended,
  node.configs["flat/recommended-module"],
  perfectionist.configs["recommended-natural"],
  promise.configs["flat/recommended"],
  regexp.configs["flat/recommended"],
  security.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs["flat/recommended"],
  /* eslint-enable */
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["PascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
          selector: "variable",
          types: ["boolean"],
        },
      ],
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "arrow-body-style": "error",
      "n/no-missing-import": [
        "error",
        {
          tryExtensions: [".js", ".json", ".node", ".ts"],
        },
      ],
      "prefer-arrow-callback": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}", "vitest.config.ts"],
    ...ts.configs.disableTypeChecked,
  },
];
