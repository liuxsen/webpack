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
### babel

法力无边的stage-0

为什么说“stage-0” 法力无边呢，因为它包含stage-1, stage-2以及stage-3的所有功能，

[babel用法总结](https://github.com/wy-ei/notebook/issues/40)
[webpack2 终极优化](http://imweb.io/topic/5868e1abb3ce6d8e3f9f99bb)

配置babel让它在编译转化es6代码时不把import export转换为cmd的module.export，配置如下：
```json
"presets": [
  [
    "es2015",
    {
      "modules": false
    }
  ]
]
```