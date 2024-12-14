import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("plugin:jsx-a11y/recommended"),
  ...compat.extends("plugin:import/recommended"),
  {
    rules: {
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      curly: "error",
      "require-await": "error",
      "no-unreachable": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "react/prop-types": "off", 
    },
  },
];

export default eslintConfig;
