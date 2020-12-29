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
  },
};
