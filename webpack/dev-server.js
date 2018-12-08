
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const options = {
    contentBase: path.resolve(__dirname, '../dist'), //默认会以根文件夹提供本地服务器，这里指定文件夹
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 3000, //如果省略，默认8080
    publicPath: "/",
    hot: true, // 开启热模块替换
    host: 'localhost'

};

config.entry.unshift("webpack-dev-server/client?http://localhost:3000/", 'webpack/hot/dev-server');

WebpackDevServer.addDevServerEntrypoints(config, options);

const server = new WebpackDevServer(compiler, options);

server.listen(3000, 'localhost', function (err) {
    if (err) throw err
    console.log( 'Listening at localhost:3000' );
})
