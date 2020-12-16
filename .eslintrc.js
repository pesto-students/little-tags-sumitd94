module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
