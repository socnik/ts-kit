import ts from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'

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
  }
  // TODO: add Vitest ESLint plugin
)
