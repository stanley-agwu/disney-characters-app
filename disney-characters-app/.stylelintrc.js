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
      '^[a-z][-a-zA-Z0-9]+$',
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
  },
};
