
const { resolve } = require('path')
const  HtmlWebpackPlugin  = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //打包其他资源
            {
              exclude:/\.(css|js|html|less)$/,  // 排除这些文件
              loader:'file-loader',  //file-loder 在打包图片资源时已经引入
              options:{
                  name:'[hash:10].[ext]'
              }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
          })
    ],
    mode: 'development'

}