module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'prettier/prettier': [true, { singleQuote: true, tabWidth: 2, endOfLine: 'auto' }],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)*$',
      {
        message: 'Expected custom property name to be lowerCamelCase or kebab-case',
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'after-same-name'],
      },
    ],
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^[a-zA-Z]",
    "scss/selector-no-redundant-nesting-selector": true
  },
};
