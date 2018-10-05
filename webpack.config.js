const path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');
let HtmlWebpackPlugin = require('html-webpack-plugin'); // 添加在这里
//const Jarvis = require("webpack-jarvis");

module.exports = {
    devtool: "source-map",
    entry: {
        //公共chunk
        eventHub: './src/js/event-hub.js',
        //PC管理界面的js文件
        admin: './src/js/admin.js',
        avMin: './src/js/vendors/av-min.js',
        moxie: './src/js/vendors/moxie.js',
        qiniuMin: './src/js/vendors/qiniu.min.js',
        plupLoadMin: './src/js/vendors/plupload.min.js',
        newSong: './src/js/new-song.js',
        songForm: './src/js/song-form.js',
        songList: './src/js/song-list.js',
        uploadSong: './src/js/upload-song.js',
        av: './src/js/av.js',
        svg: './src/assets/svg.js',
        header: './src/js/header.js',
        loading: './src/js/loading.js',
        //移动端界面的js
        mobileSvg: './src/assets/mobile-svg.js',
        index: './src/js/index.js',
        indexTabItems: "./src/js/index-tabItems.js",
        indexPlayLists: "./src/js/index-playLists.js",
        indexLatestMusic: "./src/js/index-latestMusic.js",
        tabHotList: "./src/js/tab-hotList.js",
        tabSearch: "./src/js/tab-search.js",
        song: "./src/js/song.js",
        recommend: "./src/js/recommend.js"
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
            title: 'Admin管理界面',
            filename: '../html/admin.html', // 处理后的 html 文件名称
            template: './src/html/admin.html', // 需要处理的 html 文件，即模板
            chunks: ['av','qiniuMin','eventHub','svg','header','admin','newSong','songForm','songList','uploadSong','loading'],
            //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
            chunksSortMode: 'manual',
            inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
            //hash: true, // chunk 的 hash 值，若为 true，则默认在 chunk 文件后面添加 “？ + hash”
            //minify: { // html 压缩优化选项
            //    removeComments: true, //移除 html 中的注释
            //    // removeAttributeQuotes: true, // 移除属性的引号
            //    // collapseWhitespace: true // 删除空白符与换行符，效果为将 html 全部压缩为一行
            ///}
        }),
        new HtmlWebpackPlugin({
            title: '网易云音乐',
            filename: '../html/index.html', // 处理后的 html 文件名称
            template: './src/html/index.html', // 需要处理的 html 文件，即模板
            chunks: ['av','mobileSvg','eventHub','index','indexTabItems','tabHotList','tabSearch'],
            //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
            chunksSortMode: 'manual',
            inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
            //hash: true, // chunk 的 hash 值，若为 true，则默认在 chunk 文件后面添加 “？ + hash”
            //minify: { // html 压缩优化选项
            //    removeComments: true, //移除 html 中的注释
            //    // removeAttributeQuotes: true, // 移除属性的引号
            //    // collapseWhitespace: true // 删除空白符与换行符，效果为将 html 全部压缩为一行
            ///}
        }),
        new HtmlWebpackPlugin({
            title: '网易云音乐',
            filename: '../html/song.html', // 处理后的 html 文件名称
            template: './src/html/song.html', // 需要处理的 html 文件，即模板
            chunks: ['av','mobileSvg','song'],
            //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
            chunksSortMode: 'manual',
            inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
            //hash: true, // chunk 的 hash 值，若为 true，则默认在 chunk 文件后面添加 “？ + hash”
            //minify: { // html 压缩优化选项
            //    removeComments: true, //移除 html 中的注释
            //    // removeAttributeQuotes: true, // 移除属性的引号
            //    // collapseWhitespace: true // 删除空白符与换行符，效果为将 html 全部压缩为一行
            ///}
        }),
        new HtmlWebpackPlugin({
            title: '网易云音乐',
            filename: '../html/recommend.html', // 处理后的 html 文件名称
            template: './src/html/recommend.html', // 需要处理的 html 文件，即模板
            chunks: ['av','mobileSvg','eventHub','recommend'],
            //chunks: ['eventsHub', 'index', 'contactMe', 'pageNav', 'pageContainer', 'pageRemd', 'pageHottop', 'pagePlay', 'searchBox', 'searchHottop', 'searchResult'], // chunks，即该 html 模板中需要引入的 js，名称与上面 entry 中的 key 一致则表示引入
            chunksSortMode: 'manual',
            inject: 'body', // 布尔值或者 ‘body‘、’head’，设置 script 引入的位置
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
                        name:'../assets/[name].[ext]'
                    }
                },{
                    loader: 'image-webpack-loader',// 压缩图片
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 60
                        }
                    }
                }]
            }
        ]
    }
};
