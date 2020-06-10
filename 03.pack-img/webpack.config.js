/*
    1.图片在css/less文件中
*/



const { resolve } = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            //处理css 资源
            {
                test: /\.css$/,
                //需要使用多个loader时 用use,只使用一个loader时用loader 
                use: ['style-loader', 'css-loader']
            },
            //处理图片资源，只能处理css/less中的，不能处理HTML中的
            {
                test: /\.(jpg|png|gif)$/,
                //注意：这里是需要使用url-loader,但是需要下载两个：url-loader file-loader
                loader: 'url-loader',
                options: {
                    //limit:图片大小小于8kb的，就会被base64处理，一般10kb左右的文件可以用
                    //优点：减少请求数量（减少服务器压力）
                    //缺点：图片体积会变大（文件请求速度会变慢）
                    limit: 8 * 1024,
                    esModule:false,
                    //name:给图片从命名  [hash:10]：取图片hash的前10位  [ext]：取文件的原扩展名
                    name:'[hash:10].[ext]'
                }
            },
            //处理HTML文件中的img （负责引入img，从而能被url-loader进行处理）
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
}