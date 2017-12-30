var path = require('path')
var webpack = require('webpack')

console.log('----------------------')
console.log(process.env)
var DEVELOPMENT = process.env.NODE_ENV === 'development'
var PRODUCTION = process.env.NODE_ENV === 'produciton'

var entry = PRODUCTION
  ? ['./src/index.js']
  : [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8083/'
    ]
var plugins = PRODUCTION
    ? []
    : [
      // 添加热更新 插件
      new webpack.HotModuleReplacementPlugin()
    ]
module.exports = {
  entry: entry,
  plugins: plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}