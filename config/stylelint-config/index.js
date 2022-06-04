module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order'],
    overrides: [
        {
            files: ['**/*.(less|css|html|vue)'],
            customSyntax: 'postcss-less',
        },
        {
            files: ['**/*.(scss|vue)'],
            customSyntax: 'postcss-scss',
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        // 缩进
        indentation: null,

        'font-family-name-quotes': null,

        'alpha-value-notation': null,

        'color-function-notation': null,

        'function-url-quotes': null,

        // 忽略rpx单位校验
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],

        'no-descending-specificity': null,

        // webcomponent
        'selector-type-no-unknown': null,

        // 允许空源，太过严格且有部分特殊写法。
        'no-empty-source': null,

        'font-family-no-missing-generic-family-keyword': null,

        'declaration-block-single-line-max-declarations': null,

        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: 'consecutive-duplicates-with-different-values',
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'global',
                    'deep',
                    'local',
                    'export',
                    'v-deep',
                    'v-global',
                ],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep', 'v-global'],
            },
        ],
        'order/order': [
            [
                'dollar-variables',
                'custom-properties',
                'at-rules',
                'declarations',
                {
                    type: 'at-rule',
                    name: 'supports',
                },
                {
                    type: 'at-rule',
                    name: 'media',
                },
                'rules',
            ],
            { severity: 'warning' },
        ],
        'number-max-precision': 15,
        // https://github.com/stylelint-scss/stylelint-scss/issues/86
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    '/^at-/',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'function',
                    'if',
                    'each',
                    'include',
                    'mixin',
                    'extend',
                    'import',

                    'debug',
                    'warn',
                    'error',
                    'else',
                    'for',
                    'while',
                    'return',
                ],
            },
        ],
        'function-no-unknown': [
            true,
            { ignoreFunctions: ['pi', 'unit', 'rad', 'fact'] },
        ],
    },
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.mjs',
        '**/*.json',
        '**/*.md',
    ],
};
