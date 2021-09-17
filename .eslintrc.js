module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/core-modules": ["styled-jsx/css"],
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", 'react-hooks'],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "no-multi-assign": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // React Hooks.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
