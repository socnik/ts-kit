import globals from 'globals'
import ts from 'typescript-eslint'
import js from '@eslint/js'
import vitest from 'eslint-plugin-vitest'

export default ts.config(
  {
    name: 'ESLint Recommended',
    ...js.configs.recommended,
  },
  {
    name: 'Global Ignores',
    ignores: ['dist', 'reports'],
  },
  {
    name: 'Global Rules',
    rules: {
      eqeqeq: 'error',
      'no-console': 'warn',
    },
  },
  {
    name: 'JavaScript',
    files: ['eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    extends: ts.configs.recommended,
    name: 'TypeScript',
    files: ['commitlint.config.ts', 'src/**/*.ts'],
  },
  {
    name: 'Tests',
    plugins: {
      vitest,
    },
    files: ['src/**/__tests__/*.spec.ts'],
    // TODO: extract to ESLint config package
    rules: {
      'vitest/consistent-test-filename': 'off',
      'vitest/consistent-test-it': [
        'error',
        {
          fn: 'test',
          withinDescribe: 'test',
        },
      ],
      'vitest/expect-expect': 'off',
      'vitest/max-expects': 'off',
      'vitest/max-nested-describe': [
        'error',
        {
          max: 2,
        },
      ],
      'vitest/no-alias-methods': 'error',
      'vitest/no-commented-out-tests': 'error',
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-disabled-tests': 'off',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-focused-tests': 'off',
      'vitest/no-hooks': 'off',
      'vitest/no-identical-title': 'error',
      'vitest/no-import-node-test': 'error',
      'vitest/no-interpolation-in-snapshots': 'error',
      'vitest/no-large-snapshots': [
        'error',
        {
          maxSize: 256,
          inlineMaxSize: 50,
          allowedSnapshots: [],
        },
      ],
      'vitest/no-mocks-import': 'off',
      'vitest/no-restricted-matchers': 'off',
      'vitest/no-restricted-vi-methods': 'off',
      'vitest/no-standalone-expect': [
        'error',
        {
          additionalTestBlockFunctions: ['test'],
        },
      ],
      'vitest/no-test-prefixes': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-called-with': 'off', // TODO: vitest/prefer-called-with vs vitest/no-alias-methods
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-equality-matcher': 'off',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/prefer-expect-resolves': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-lowercase-title': [
        'error',
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: true,
          lowercaseFirstCharacterOnly: true,
        },
      ],
      'vitest/prefer-mock-promise-shorthand': 'error',
      'vitest/prefer-snapshot-hint': 'off', // TODO: find out what this rule does
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-strict-equal': 'off',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-be-falsy': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-be-truthy': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-todo': 'error',
      'vitest/require-hook': [
        'error',
        {
          allowedFunctionCalls: [],
        },
      ],
      'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
      'vitest/require-to-throw-message': 'off',
      'vitest/require-top-level-describe': [
        'error',
        {
          maxNumberOfTopLevelDescribes: 10,
        },
      ],
      'vitest/valid-describe-callback	': 'error',
      'vitest/valid-expect': 'error',
      'vitest/valid-title': 'error',
    },
  }
)
