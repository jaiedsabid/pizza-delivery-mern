module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'babelOptions': {
      'presets': ['@babel/preset-react'],
    },
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
    'requireConfigFile': false,
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 0,
    'react/prop-types': 'off',
    'new-cap': 0,
  },
};
