import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  js.configs.recommended,
  ...nextVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
