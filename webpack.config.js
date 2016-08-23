module.exports = {
    //在log中定位源文件位置，跟sass的sourcemap一样
    devtool: 'source-map',
    //webpack-dev-server配置
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    //页面入口文件配置，支持数组多文件模式
    entry: './page',
    //打包输出文件的文件名以及路径配置
    output: {
        filename: 'bundle.js'
    },
    module: {
        //加载器配置，这些loader会解析不同格式的文件，然后一起打包成js文件
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.js$/, loader: "babel", query: {presets: ['es2015','react']}}
        ]
    },
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss', '.styl'],
    }
};
