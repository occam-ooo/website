module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react'],
  globals: { fetch: false },
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-indent': [2, 2]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  }
};
