import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import * as parser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['vite.config.ts'] // Move ignores to top level
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser, // Add browser globals
        JSX: true // Enable JSX global
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@stylistic/indent': ['error', 2],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }]
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} }
    }
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
];
