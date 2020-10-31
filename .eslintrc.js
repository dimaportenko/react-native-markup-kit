module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'arrow-parens': 'off',
    // TODO: remove after migration of legacy lifecycle methods
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-mixed-operators': ['off'],
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
    'max-len': ['warn', {code: 120}],
    'function-paren-newline': ['warn', 'never'],
    'new-cap': ['off'], // TODO: fix this in colors.js and remove this
    'default-case': ['off'],
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    // "@typescript-eslint/no-unused-vars": [2, {"args": "all", "argsIgnorePattern": "^_"}],
    "@typescript-eslint/no-unused-vars": 0, //todo: uncomment this line and use the the better unused rule above ^
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/indent": 0,
  },
  plugins: ['@typescript-eslint'],
};

// OLD ESlint configuration
// const validColors = require('./src/style/colorsPalette').colorsPalette;
// const extraFixColorsMap = require('./src/style/colorsPalette').extraFixColorsMap;
// const assetsDepJson = require('./eslint-rules/tests/assets_deprecation.json');
// const deprecationsJson = require('./eslint-rules/tests/component_deprecation.json');

// module.exports = {
//   parser: 'babel-eslint',
//   extends: 'wix/react-native',
//   // plugins: ['react', 'react-native', 'uilib'],
//   // extends: ['airbnb'],
//   rules: {
//     'arrow-body-style': 'off',
//     'arrow-parens': 'off',
//     // TODO: remove after migration of legacy lifecycle methods
//     'camelcase': 'off',
//     'class-methods-use-this': 'off',
//     'consistent-return': 'off',
//     'comma-dangle': 'off',
//     'global-require': 'off',
//     'max-len': [2, 130, 4, {ignoreUrls: true}],
//     'no-nested-ternary': 'off',
//     'no-else-return': 'off',
//     'no-mixed-operators': ['off'],
//     'no-param-reassign': ['warn'],
//     'no-plusplus': 'off',
//     'no-return-assign': 'off',
//     'no-trailing-spaces': 'off',
//     'no-use-before-define': 'off',
//     'no-unneeded-ternary': 'off',
//     'no-mixed-operators': 'off',
//     'no-underscore-dangle': ['error', {'allowAfterThis': true}],
//     'object-curly-spacing': 'off',
//     'operator-linebreak': 'off',
//     'react/forbid-prop-types': 'off',
//     'react/jsx-filename-extension': 'off',
//     'react/jsx-space-before-closing': 'off',
//     'react/jsx-tag-spacing': 'off',
//     'react/prefer-stateless-function': 'off',
//     'react/prop-types': ['error', {ignore: ['children', 'style', 'testID']}],
//     'react/require-default-props': 'off',
//     "react/sort-comp": ['warn'],
//     'react/jsx-no-bind': [
//       'warn',
//       {
//         ignoreRefs: true,
//         allowArrowFunctions: false,
//         allowBind: false,
//       },
//     ],
//     'import/prefer-default-export': 'off'
//   },
//   env: {
//     browser: true,
//     node: true,
//     jest: true,
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.ios.js', '.android.js'],
//       },
//     },
//   },
// };
