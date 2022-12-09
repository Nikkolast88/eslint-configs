module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@uni-daily/eslint-config-base',
    '@uni-daily/eslint-config-typescript'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    'vue/max-attributes-per-line': 'off'
  }
}
