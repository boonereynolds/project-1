console.log('Connected!')

var boxes = ['green', 'red', 'yellow', 'blue']

var compArray = []

var userArray = []

var computerChoice = boxes[Math.floor(Math.random() * boxes.length)]
console.log(computerChoice)

function changeOpacity(){
  $(`#${computerChoice}`).css({opacity: 0.5})
  setTimeout(function(){
    $(`#${computerChoice}`).css({opacity: 1})
  }, 1000)
}

// $('#startButton').click(function(){
//   $(`#${computerChoice}`).css({opacity: 0.5})
// })

$('#startButton').click(function(){
  setTimeout(changeOpacity, 1000)
  compArray.push(computerChoice)
  // userArray.push(userChoice)
  console.log(compArray)
})


$(`#${computerChoice}`).click(function(){
  setTimeout(changeOpacity, 1000)
})
