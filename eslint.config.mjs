import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  ...nextVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
