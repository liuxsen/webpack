const Button = {
  button: '<button id="myButton">press me</button>',
  attachEl: ()=>{
    document.getElementById('myButton').addEventListener('click', ()=>{
      console.log('clicked')
    })
  }
}

export default  Button