var path = require('path')
var webpack = require('webpack')

console.log('----------------------')
console.log(process.env.NODE_ENV)
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
    ? [
      // 删除没有用过的 模块
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [
      // 添加热更新 插件
      new webpack.HotModuleReplacementPlugin()
    ]
  plugins.push(
    // 这个插件用来定义全局变量，在webpack打包的时候会对这些变量做替换。
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION)
    })
  )
module.exports = {
  // 文件地址保存下来
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        // 排除node_modules 文件编译
        exclude: '/node_modules/'
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 当文件大于 10000btyes 的时候 自动找 file-loader 编译成文件保存在images文件夹下面
        // 1kb = 1024b 1MB = 1024k
        // 如果大于10k左右就用file-loader
        use: ['url-loader?limit=10000&name=images/[name]_[hash:12].[ext]'],
        exclude: '/node_modules/'
      }
    ]
  }
}