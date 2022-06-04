module.exports = {
    root: true,
    /**
     * @link https://eslint.org/docs/user-guide/configuring#specifying-environments
     */
    env: {
        browser: true,
        es6: true,
        node: true,
        es2021: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'standard',
        require.resolve('./rules/basic'),
        require.resolve('./rules/imports'),
        require.resolve('./rules/node'),
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
        requireConfigFile: false,
        ecmaVersion: 2020,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true,
        },
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
    },
};
