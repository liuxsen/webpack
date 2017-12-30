var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8083/'
  ],
  plugins: [
    // 添加热更新 插件
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}