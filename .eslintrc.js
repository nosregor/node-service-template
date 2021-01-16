module.exports = {
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    // allowImportExportEverywhere: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': 0,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'function-paren-newline': 1,
    'implicit-arrow-linebreak': 1,
  },
};
