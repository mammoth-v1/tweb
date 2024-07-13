module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'src/vendor/**',
    'src/solid/**',
    'src/opus-recorder/**',
    'public/**'
  ],
  overrides: [{
    files: ['*.ts'],

    parserOptions: {
      project: ['./tsconfig.json'],
    },
  }]
};
