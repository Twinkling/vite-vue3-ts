module.exports = {
    plugins: ['import'],
    settings: {
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        /**
         * 【推荐】在最后一个 import / require 语句后保留一个空行
         */
        'import/newline-after-import': 'warn',

        /**
         * 【关闭】确保导入的模块可以解析为本地文件系统上的模块
         * 使用 webpack 的 externals、alias 时需要安装额外的插件
         */
        'import/no-unresolved': 'off',

        /**
         * 【关闭】禁止命名空间
         */
        'import/namespace': 'off',

        /**
         * 【关闭】确保存在默认导出
         */
        'import/default': 'off',

        'import/named': 'off',
        'import/export': 'off',
        'import/no-named-as-default-member': 'off',
    },
};
