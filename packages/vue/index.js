const { isPackageExists } = require('local-pkg')
const TS = isPackageExists('typescript')
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    TS ? '@uni-daily/eslint-config-typescript' : '@uni-daily/eslint-config-base'
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
