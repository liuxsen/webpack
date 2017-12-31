var messages = require('./messages')
import Button from './button'
import { cube } from './math'
console.log(cube())
var newMessage = () =>( `<p>
                        dev:${DEVELOPMENT.toString()}<br>
                        prod: ${PRODUCTION.toString()}<br>
                      </p>`
)
// var newMessage2 = () => Button.button
var image = require('./image')
var app = document.getElementById('app')
app.innerHTML = newMessage()
// Button.attachEl()

if(DEVELOPMENT){
  if (module.hot) {
    module.hot.accept()
  }
}