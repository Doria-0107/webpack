
const { resolve } = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output:{
        filename:'buuild.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        // html-webpack-plugin
        //功能：默认创建一个空的HTML文件，自动引入打包输入的所有资源（JS/CSS）,所以在HTML文件中不需要引入JS文件
        //template：需要有结构的HTML文件
        new HtmlWebPackPlugin({

            template:'./src/index.html' //复制 './src/index.html' 文件，并自动引入打包输入的所有资源（JS/CSS）
        })
    ],
    mode:'development'
}