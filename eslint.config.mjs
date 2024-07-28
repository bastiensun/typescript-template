import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  js.configs.recommended,
  ...ts.configs.recommended,
];
