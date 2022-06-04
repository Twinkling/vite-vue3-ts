module.exports = {
    rules: {
        /**
         * 【关闭】强制constructor必须有内容
         */
        'no-useless-constructor': 'off',
        /**
         * 【强制】要求箭头函数参数必须有括号
         */
        'arrow-parens': ['error', 'always'],

        /**
         * 【关闭】强制 getter 和 setter 在对象中成对出现
         */
        'accessor-pairs': 'off',

        /**
         * 【强制】数组的方法除了 forEach 之外，回调函数必须有返回值
         */
        'array-callback-return': 'error',

        /**
         * 【关闭】箭头函数体必须由大括号包裹
         *  代码格式问题，最好由 Prettier 解决
         */
        'arrow-body-style': 'off',

        /**
         *【关闭】将 var 定义的变量视为块作用域，禁止在块外使用
         * 因为已经禁止使用var了
         */
        'block-scoped-var': 'off',

        /**
         *【关闭】使用小驼峰命名风格
         * TODO 严格模式开启
         * 很多 api 或文件名都不是 camelCase 风格的
         */
        camelcase: 'off',

        /**
         *【强制】用逗号分隔的多行结构，始终加上最后一个逗号（单行不用）
         */
        'comma-dangle': ['error', 'always-multiline'],

        /**
         * 【强制】 强制使用一致的缩进
         * 4个缩进
         */
        indent: 'off',

        /**
         * 【强制】要求使用 let 或 const 而不是 var
         */
        'no-var': 'error',

        /**
         * 【推荐】声明的变量必须被使用
         */
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],

        /**
         * 【关闭】禁止不必要的try-catch
         */
        'no-useless-catch': 'off',

        /**
         * 【关闭】禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * 几乎不会遇到这种场景
         */
        'no-control-regex': 'off',

        /**
         * 【推荐】禁止对 function 的参数进行重新赋值
         * 几乎不会遇到这种场景
         */
        'no-param-reassign': 'off',

        /**
         *【推荐】代码块嵌套的深度禁止超过 5 层
         */
        'max-depth': ['warn', 5],

        /**
         * 【推荐】Promise 的 reject 需要传入 Error 对象
         */
        'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

        /**
         * 【推荐】该规则强制块内空行填充的一致性。
         * 块的开始和结束不能是空行
         */
        'padded-blocks': [
            'warn',
            { blocks: 'never', classes: 'never', switches: 'never' },
        ],

        /**
         * 【强制】需要使用分号结尾
         */
        semi: ['error', 'always'],

        /**
         * 【强制】函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
         */
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
    },
};
