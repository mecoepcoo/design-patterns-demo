module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    // 'project': './tsconfig.json',
    tsconfigRootDir: './',
    extraFileExtensions: []
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error','single'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'no-global-assign': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
  }

}
