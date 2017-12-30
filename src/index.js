var messages = require('./messages')
import Button from './button'

var newMessage = () => `<p>${messages.event}</p>`
var newMessage2 = () => Button.button
var app = document.getElementById('app')
app.innerHTML = newMessage2()
Button.attachEl()


if(module.hot){
  module.hot.accept()
}