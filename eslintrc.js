module.exports = {
    root: true,
    env: {
      browser: true,
      amd: true,
      node: true,
      es6: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:jsx-a11y/recommended',
      'plugin:import/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'no-unused-vars': 0,
      'react/no-unescaped-entities': 0,
    },
  }