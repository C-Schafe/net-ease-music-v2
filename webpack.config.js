const path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');
let HtmlWebpackPlugin = require('html-webpack-plugin'); // 添加在这里
//const Jarvis = require("webpack-jarvis");

/*
module.exports = {
    entry: './test.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'hello.js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'fuck-webpack',
        //     filename: './html/lalala.html', // 处理后的 html 文件名称
        //     template: './src/html/index.html', // 需要处理的 html 文件，即模板
        //     chunks: ['test']
        //     //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
        //     //chunksSortMode: 'manual',
        //     //inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
        //     //hash: true, // chunk 的 hash 值，若为 true，则默认在 chunk 文件后面添加 “？ + hash”
        //     //minify: { // html 压缩优化选项
        //     //    removeComments: true, //移除 html 中的注释
        //     //    // removeAttributeQuotes: true, // 移除属性的引号
        //     //    // collapseWhitespace: true // 删除空白符与换行符，效果为将 html 全部压缩为一行
        //     ///}
        // })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }]
    }
};
*/


module.exports = {
    devtool: "source-map",
    entry: {
        index: './src/js/index.js',
        test: './test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js/')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 9000
    },
    plugins:[
        new WebpackNotifierPlugin({
            title: 'Webpack 编译成功',
            contentImage: path.resolve(process.cwd(), './img/avatar.jpeg'),
            alwaysNotify: true
        }),
        new HtmlWebpackPlugin({
            title: 'webpack-demos',
            filename: 'index.html', // 处理后的 html 文件名称
            template: './src/html/index.html', // 需要处理的 html 文件，即模板
            chunks: ['']
            //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
            //chunksSortMode: 'manual',
            //inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
            //hash: true, // chunk 的 hash 值，若为 true，则默认在 chunk 文件后面添加 “？ + hash”
            //minify: { // html 压缩优化选项
            //    removeComments: true, //移除 html 中的注释
            //    // removeAttributeQuotes: true, // 移除属性的引号
            //    // collapseWhitespace: true // 删除空白符与换行符，效果为将 html 全部压缩为一行
            ///}
        })
        // new Jarvis({
        //     port: 1337 // optional: set a port
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader",
                    options: { importLoaders: 1}
                },{
                    loader: "postcss-loader"
                },{
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                use: [{
                    loader:'url-loader',
                    options: {
                        limit:8192,
                        name:'../images/[hash:8].[name].[ext]'
                    }
                },{
                    loader: 'image-webpack-loader',// 压缩图片
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 10
                        }
                    }
                }]
            }
        ]
    }
};
