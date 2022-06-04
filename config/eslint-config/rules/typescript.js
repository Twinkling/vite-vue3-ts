/**
 * @link https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        // !跟lint速度关联
        project: './tsconfig.*?.json', // default project config
        createDefaultProgram: true,
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
    },
    rules: {
        /**
         * 【强制】关键字前后有一个空格
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
         * @extend
         */
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true },
                },
            },
        ],

        /**
         * 【关闭】禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * 几乎不会遇到这种场景
         */
        'no-control-regex': 'off',

        /**
         * 【关闭】禁止使用指定的类型
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
         */
        '@typescript-eslint/ban-types': 'off',

        /**
         * 【关闭】模版字符串中的变量类型必须是字符串
         *  @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
         */
        '@typescript-eslint/restrict-template-expressions': 'off',

        /**
         * 【关闭】禁止使用 non-null 断言（感叹号）
         */
        '@typescript-eslint/no-non-null-assertion': 'off',

        /**
         * 【关闭】使用 ?? 替代 ||
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        /**
         * 【关闭】限制 toString 方法的使用
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
         */
        '@typescript-eslint/no-base-to-string': 'off',

        /**
         * 【关闭】禁止使用 require 来引入模块，被 no-require-imports 规则包含
         */
        '@typescript-eslint/no-var-requires': 'off',

        /**
         * 【关闭】不建议使用 require 引入模块，使用 import
         */
        '@typescript-eslint/no-require-imports': 'off',

        /**
         * 【关闭】使用 optional chaining 替代 &&
         * TODO：由于对 ts 版本有要求，暂不开启
         */
        '@typescript-eslint/prefer-optional-chain': 'off',

        /**
         * 【推荐】禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
         */
        '@typescript-eslint/no-inferrable-types': 'warn',

        /**
         * 【关闭】导出的函数或类中的 public 方法必须定义输入输出参数的类型
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /**
         * 【强制】禁止出现空函数，普通函数（非 async/await/generator）、箭头函数、类上的方法除外
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
         * @extend
         */
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'functions', 'methods'],
            },
        ],

        /**
         * 【关闭】禁止使用 any
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
         */
        '@typescript-eslint/no-explicit-any': 'off',

        /**
         * 【强制】禁止在定义变量之前就使用它
         * @extend
         */
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: false },
        ],

        /**
         * 【推荐】不建议将 this 赋值给其他变量，解构赋值除外
         */
        '@typescript-eslint/no-this-alias': 'off',

        /**
         * 【强制】函数名与调用它的括号间无空格
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
         */
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],

        /**
         * 【关闭】变量必须在定义的时候赋值
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
         * @extend
         */
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        /**
         * 【关闭】interface 中的方法用属性的方式定义
         * A method and a function property of the same type behave differently.
         * Methods are always bivariant in their argument, while function properties
         * are contravariant in their argument under strictFunctionTypes.
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
         */
        '@typescript-eslint/method-signature-style': 'off',

        /**
         * 【关闭】限制各种变量或类型的命名规则
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/naming-convention': 'off',

        /**
         * 【关闭】禁止在 class 外使用 this
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
         * @extend
         */
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',

        /**
         * 【关闭】禁止使用 magic numbers
         * @extend
         */
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',

        /**
         * 【关闭】禁止将变量或属性的类型设置为 any
         */
        '@typescript-eslint/no-unsafe-assignment': 'off',

        /**
         * 【关闭】禁止调用 any 类型的变量上的方法
         */
        '@typescript-eslint/no-unsafe-call': 'off',

        /**
         * 【关闭】禁止获取 any 类型的变量中的属性
         */
        '@typescript-eslint/no-unsafe-member-access': 'off',

        /**
         * 【关闭】禁止函数的返回值的类型是 any
         */
        '@typescript-eslint/no-unsafe-return': 'off',

        /**
         * 【强制】禁止无用的表达式
         * @extend
         */
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],

        /**
         * 【关闭】async 函数中必须存在 await 语句
         */
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',

        /**
         * 【推荐】使用 @ts-expect-error/@ts-ignore/@ts-nocheck/@ts-check 等指令时需跟随注释描述
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
         */
        '@typescript-eslint/ban-ts-comment': [
            'warn',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
            },
        ],

        /**
         * 【推荐】当设定当前值为当前类型时，推荐使用 as const 替代 as 'bar'
         */
        '@typescript-eslint/prefer-as-const': 'warn',

        /**
         * 【推荐】禁止出现空的 interface
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
         */
        '@typescript-eslint/no-empty-interface': 'warn',

        /**
         * 【推荐】禁止使用容易混淆的非空断言
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',

        /**
         * 【推荐】优先使用 interface 而不是 type 定义对象类型
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
         */
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

        /**
         * 【推荐】声明的变量必须被使用
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
         */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    },
    settings: {
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
        },
        // Append 'ts' extensions to 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [
                    '.mjs',
                    '.js',
                    '.ts',
                    '.json',
                    '.jsx',
                    '.tsx',
                    '.d.ts',
                ],
            },
        },
        // Append 'ts' extensions to 'import/extensions' setting
        'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx', '.d.ts'],
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                /**
                 * 【关闭】导出校验
                 * 在ts定义模块内有可能导出多个default
                 */
                'import/export': 'off',
                'import/no-duplicates': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // Disable `no-undef` rule within TypeScript files because it incorrectly errors when exporting default interfaces
                // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
                // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
                'no-undef': 'off',
                /* Using TypeScript makes it safe enough to disable the checks below */
                // Disable ESLint-based module resolution check for improved monorepo support
                'import/no-unresolved': 'off',
            },
        },
    ],
};
