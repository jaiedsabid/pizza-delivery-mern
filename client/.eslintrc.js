module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'babelOptions': {
      'presets': ['@babel/preset-react'],
    },
    'ecmaFeatures': {
      'jsx': true,
      'js': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
    'requireConfigFile': false,
  },
  'plugins': [
    'react',
    'prettier',
  ],
  'rules': {
    'require-jsdoc': 0,
    'react/prop-types': 'off',
    'new-cap': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx',
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ],
    'import/prefer-default-export': 0,
    'default-param-last': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'no-shadow': 0,
    'no-useless-escape': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-extra-boolean-cast': 0,
    'react-hooks/exhaustive-deps': 0,
    'radix': 0
  },
};
