////////// CONNECTED? //////////
console.log('Connected!')

////////// VARIABLES //////////
var boxes = ['green', 'red', 'yellow', 'blue']

var compArray = []

var userArray = []

var computerChoice

var round = 1

////////// FUNCTIONS //////////
function compMove() {
  // for (var i = 0; i < round; i++) {
    computerChoice = boxes[Math.floor(Math.random() * boxes.length)]
    compArray.push(computerChoice)
  // }
  round +=1
  console.log(compArray)
}

function changeOpacity(choice) {
  $(`#${choice}`).css({
    opacity: 0.5
  })
  setTimeout(function() {
    $(`#${choice}`).css({
      opacity: 1
    })
  }, 1000)
}


function checkWin() {
  if (compArray.toString() === userArray.toString()) {
    console.log('correct')
  } else {
    console.log('loser!')
  }
  compMove()

  var i = 0
  var sequence = setInterval(function(){
    var currentSquare = compArray[i]
    setTimeout(changeOpacity(currentSquare), 1000)
    i++
    if(i === compArray.length){
      clearInterval(sequence)
    }
  }, 1000)

  // for(var i = 0; i < compArray.length; i++){
    //   (function(i) {
    //     setTimeout(function() {
    //         changeOpacity(compArray[i])
    //       }, 1000)
    //     console.log(i)
    //   })(i)
    // }
    userArray = []
  }

//   for (var i = 0; i < compArray.length; i++) {
//     setTimeout(function() {
//       changeOpacity(compArray)
//     }, 1000)
//   }
//   userArray = []
// }

////////// ACTIONS //////////

////////// START BUTTON INITIATES GAME //////////
$('#startButton').click(function() {
  compMove()
  setTimeout(function() {
    changeOpacity(computerChoice)
  }, 1000)
  // console.log(compArray)
})

////////// CAPTURE USER CLICKS ON ANY DIV INTO USERARRAY //////////

$('.boxes').click(function() {
  userArray.push($(this).attr('id'))
  changeOpacity(userArray[userArray.length - 1])
  if (userArray.length === compArray.length) {
    checkWin()
  }
  console.log(userArray)
})
