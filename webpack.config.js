var path = require('path')
var webpack = require('webpack')
// 提取公共样式到一个css文件中
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// html 模板 动态插入html文件
var HTMLWebpackPlugin = require('html-webpack-plugin')

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
      new webpack.optimize.UglifyJsPlugin(),
      // 提取样式文件 并且做文件名hash
    new ExtractTextPlugin('style-[contenthash:10].css'),
    // 动态注入 css js文件 会根据 publicPath 生成路径
    new HTMLWebpackPlugin({
      template: 'index-template.html'
    })
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

const cssIdentfier = PRODUCTION ? '[hash:base64:15]' : '[path][name]---[local]'

// 生产环境下，提取文件
const cssLoader = PRODUCTION 
  ? ExtractTextPlugin.extract('css-loader?localIdentName=' + cssIdentfier)
  : ['style-loader', 'css-loader?localIdentName=' + cssIdentfier]

module.exports = {
  // 文件地址保存下来
  devtool: PRODUCTION ? 'none' : 'source-map',
  entry: entry,
  plugins: plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
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
      },
      {
        test: /\.(css)$/,
        use: cssLoader,
        exclude: '/node_modules/'
      },
    ]
  }
}