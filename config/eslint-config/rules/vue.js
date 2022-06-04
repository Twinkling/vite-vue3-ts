module.exports = {
    parser: 'vue-eslint-parser',
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off',
        /**
         * 【关闭】防止错误的
         */
        'vue/component-definition-name-casing': 'off',

        /**
         * 【强制】限制每行的最大属性/属性数以提高可读性
         */
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 4,
                multiline: {
                    max: 1,
                },
            },
        ],

        /**
         * 【强制】将自动关闭标志作为配置的样式
         */
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],

        /**
         * 【强制】模版中已定义的变量必须使用
         */
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_',
            },
        ],

        /**
         * 【关闭】自定义事件名必须用 kebab-case 风格
         */
        'vue/custom-event-name-casing': 'off',

        /**
         * 【关闭】属性按照指定的顺序，太过严格
         */
        'vue/attributes-order': 'off',

        /**
         * 【关闭】限制自定义组件的属性风格，太过严格
         */
        'vue/attribute-hyphenation': 'off',
    },
};
