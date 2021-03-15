module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  parser: "babel-eslint",
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
  },
};
