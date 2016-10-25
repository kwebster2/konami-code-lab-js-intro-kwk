const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body')
  var counter = 0
  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    if(code.includes(key)){
      counter++

      if(counter === code.length - 1){
        alert("You did it!")
      }
    }

  })
}
