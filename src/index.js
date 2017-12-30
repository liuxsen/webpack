var messages = require('./messages')
import Button from './button'

// var newMessage = () => `<p>${messages.event}</p>`
// var newMessage2 = () => Button.button
var image = require('./image')
var app = document.getElementById('app')
app.innerHTML = image.default
// Button.attachEl()


if(module.hot){
  module.hot.accept()
}