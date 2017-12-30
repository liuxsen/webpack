live/hot reload
+ rebuild bundle.js
+ refresh browser
+ refresh only bundle.js in browser

hot module replacement hmr
+ rebuild chunk
+ replace chunk in browser


热模块的更换用Node.js的API

在在线模式类似，用户必须进行更改的WebPack配置。

需要三个转变：

+ 切入点添加到配置的WebPack： webpack/hot/dev-server。
+ 添加new webpack.HotModuleReplacementPlugin()到的WebPack配置。
+ 添加到的WebPack-dev的服务器配置，使服务器上HMR。hot: true
利用上面的配置：

```js
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true
  ...
});
server.listen(8080);
```