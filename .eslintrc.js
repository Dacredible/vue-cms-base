module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4],
        'comma-dangle': 'off',
        'max-len': 'off',
        'prefer-destructuring': 'off',
        'no-new': 'off',
        'vue/require-v-for-key': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: 2017,
        sourceType: 'module',
    },
    settings: {
        'import/extensions': ['js']
    }
};