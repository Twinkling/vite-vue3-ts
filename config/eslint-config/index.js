module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        require.resolve('./base-config'),
        require.resolve('./rules/typescript'),
        require.resolve('./rules/vue'),
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    plugins: ['vue', '@typescript-eslint'],
    rules: {},
};
