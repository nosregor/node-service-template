module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
    'function-paren-newline': 1,
    'implicit-arrow-linebreak': 1,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'eslint-env es6': true,
  },
};
