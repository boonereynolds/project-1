////////// CONNECTED? //////////
console.log('Connected!')

////////// VARIABLES //////////
var boxes = ['green', 'red', 'yellow', 'blue']

var compArray = []

var userArray = []

var computerChoice

var round = 1

////////// FUNCTIONS //////////
function winGame(){
    alert ('You win!')
    resetGame()
}

function resetGame() {
  $('.boxes').off('click')
  $('#counter').text('0')
  compArray = []
  userArray = []
}

function compMove() {
  computerChoice = boxes[Math.floor(Math.random() * boxes.length)]
  compArray.push(computerChoice)
  round += 1
  console.log(compArray)
}

function changeOpacity(choice) {
  var audio = $(`#${choice}Sound`)[0]
  $(`#${choice}`).css({
    opacity: 0.5
  })
  audio.play()
  setTimeout(function() {
    $(`#${choice}`).css({
      opacity: 1
    })
  }, 1000)
}

function checkMove() {
  // var audioLose = $('#lose')[0]
  if (compArray.toString() === userArray.toString()) {
    console.log('correct')
    $('#counter').text(userArray.length)
    compMove()
    var i = 0
    var sequence = setInterval(function() {
      var currentSquare = compArray[i]
      setTimeout(changeOpacity(currentSquare), 500)
      i++
      if (i === compArray.length) {
        clearInterval(sequence)
      }
    }, 2000)
  } else {
    setTimeout(function() {
      // audioLose.play()
      alert('You lose!')
      resetGame()
    }, 1500)

  } if (userArray.length === 5){
    winGame()
  }
  userArray = []
}



////////// ACTIONS //////////
////////// START BUTTON INITIATES GAME //////////
$('#startButton').click(function start() {
  compMove()
  setTimeout(function() {
    changeOpacity(computerChoice)
  }, 1000)
  ////////// CAPTURE USER CLICKS ON ANY DIV INTO USERARRAY //////////
  $('.boxes').click(function() {
    userArray.push($(this).attr('id'))
    changeOpacity(userArray[userArray.length - 1])
    if (userArray.length === compArray.length) {
      checkMove()
    }
    console.log(userArray)
  })
})

$('#resetButton').click(function() {
  resetGame()
})
