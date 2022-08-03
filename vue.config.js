const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
//配置element-plus自动引入打包
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')
// 配置Varlet自动引入
const {VarletUIResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    //关闭语法检查
    lintOnSave: false,
    transpileDependencies: true,
    //配置webpack
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver(), VarletUIResolver()],
            }),
        ],
    },
})
