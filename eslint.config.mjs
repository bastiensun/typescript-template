import js from "@eslint/js";
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
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...ts.configs.disableTypeChecked,
  },
];
