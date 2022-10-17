module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2019,
    'project': 'tsconfig.json',
    'sourceType': 'module',
    'tsconfigRootDir': __dirname,
  },
  'extends': [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  'plugins': [
    'jsx-a11y',
    'import',
    'react',
    'react-hooks'
  ],
  'rules': {
    '@typescript-eslint/semi': ['warn', 'never'],
    'comma-dangle': ['warn', 'only-multiline'],
    'func-names': ['warn', 'as-needed'],
    'import/no-cycle': ['off'],
    'import/prefer-default-export': ['off'],
    'prefer-arrow-callback': ['warn', {'allowNamedFunctions': true, 'allowUnboundThis': false}],
    'max-len': ['warn', { 'code': 130 }],
    'no-console': ['warn'],
    'no-trailing-spaces': ['warn', { 'skipBlankLines': true }],
    'no-underscore-dangle': ['off'],
    'object-curly-newline': ['off'],
    'object-curly-spacing': ['warn', 'never'],
    'object-shorthand': ['off'],
    'prefer-destructuring': ['off'],
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-curly-brace-presence': ['warn', {'props': 'never', 'children': 'never'}],
    'react/jsx-tag-spacing': ['warn', {'beforeSelfClosing': 'never'}],
    'react-hooks/rules-of-hooks': ['warn'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/prop-types': ['off'],
    'semi': ['warn', 'never'],
    'spaced-comment': ['warn', 'always', {'markers': ['/']}]
  }
}
