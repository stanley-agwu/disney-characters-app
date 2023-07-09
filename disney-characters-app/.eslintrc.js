module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-uses-react': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-misused-promises': 1,
    '@typescript-eslint/no-floating-promises': 0,
    'import/no-extraneous-dependencies': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'sort-imports': 0,
    'import/order': 0,
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // react and react scoped imports first, then next, and other packages
          ['^react', '^next', '^[a-zA-Z]'],
          // Packages starting with '@'
          ['^@'],
          // Packages starting with '~'
          ['^~'],
          // Side effects imports
          ['^\\u0000'],
          // Other local absolute imports
          [
            '^components',
            '^features',
            '^constants',
            '^types',
            '^hooks',
            '^pages',
            '^mocks',
            '^tests',
            '^services',
            '^store',
            '^assets',
            '^utils',
            '^app',
          ],
          // Relative imports
          ['^\\.'],
          // Parent relative imports '../'
          ['^\\.{2}/(?!.*\\.(css|s[ac]ss)$).+$'],
          // Siblings relative imports './'
          ['^\\./(?!.*\\.(css|s[ac]ss)$).+$'],
          // Styles imports
          ['\\.(css|s[ac]ss)$'],
        ],
      },
    ],
  },
  ignorePatterns: ['build/*', 'coverage/*', 'public/*'],
};
