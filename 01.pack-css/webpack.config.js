/*
    验证：在build的文件夹下建一个HTML文件 引入打包后的文件(build.js)
*/

const { resolve } = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        // 输出文件名
        filename: 'build.js',
        // 输出路径
        // __dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                //use 的执行顺序从上往上 or  从右往左
                use: [
                    'style-loader', //style-loader：创建style标签，将js中的样式资源插入进行，添加到header中生效
                    'css-loader' //css-loader:将css文件编译成commonjs加载到js中，以字符串的形式
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader' //less-loader:将less文件转换成css文件   注意：使用less-loader 需要安装less-loader 和 less
                ]
            }
        ]
    },
    plugins: [
    ],
    mode: 'development', // 开发模式
    // mode: 'production'
}