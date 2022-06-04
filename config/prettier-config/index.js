module.exports = {
    /**
     * 4个缩进
     * @default 2
     */
    tabWidth: 4,

    /**
     * 超过100个字符换行
     * @default 80
     */
    printWidth: 80,

    /**
     * 使用单引号代替双引号
     * @default false
     */
    singleQuote: true,

    /**
     * 在对象或数组最后一个元素后面是否加逗号
     * @default es5
     */
    trailingComma: 'all',

    /**
     * 箭头函数参数需要有括号
     */
    arrowParens: 'always',
    overrides: [
        {
            files: '**/*.vue',
            options: {
                htmlWhitespaceSensitivity: 'ignore',
            },
        },
        {
            files: '.*rc',
            options: { parser: 'json' },
        },
        {
            files: ['**/*.{yml,yaml,md}'],
            options: { tabWidth: 2, embeddedLanguageFormatting: 'off' },
        },
    ],
};
