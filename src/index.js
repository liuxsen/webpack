var style = require('./globalStyle.css')
var messages = require('./messages')
import Button from './button'
import { cube } from './math'

console.log(cube())
var newMessage = () =>(
   `
   <div class="${style.box}">
    <p>
        dev:${DEVELOPMENT.toString()}<br>
        prod: ${PRODUCTION.toString()}<br>
      </p>
   </div>
  `
)
// var newMessage2 = () => Button.button
var image = require('./image')
var app = document.getElementById('app')
app.innerHTML = `
  <div id="menu">
    <button id="loadpage1">load page1</button>
    <button id="loadpage2">load page2</button>
  </div>
  <div id="content">
    <h1>
      this is content
    </h1>
  </div>
`
// Button.attachEl()
document.getElementById('loadpage1').addEventListener('click', () => {
  System.import('./page1')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    })
})
document.getElementById('loadpage2').addEventListener('click', () => {
  System.import('./page2')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    })
})
if(DEVELOPMENT){
  if (module.hot) {
    module.hot.accept()
  }
}