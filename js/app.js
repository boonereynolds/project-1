////////// CONNECTED? //////////
console.log('Connected!')

////////// VARIABLES //////////
var boxes = ['green', 'red', 'yellow', 'blue']

var compArray = []

var userArray = []

var computerChoice

var round = 1

function  compMove (){
  for(var i = 0; i < round; i++){
    computerChoice = boxes[Math.floor(Math.random() * boxes.length)]
    console.log(computerChoice)
  }
  round++
}
////////// FUNCTIONS //////////
function changeOpacity(choice){
  $(`#${choice}`).css({opacity: 0.5})
  setTimeout(function(){
    $(`#${choice}`).css({opacity: 1})
  }, 1000)
}

function checkWin(){
  if(compArray.toString() === userArray.toString()){
    console.log('User wins!')
  } else {
    console.log('loser!')
  }
  compMove()
}



////////// ACTIONS //////////

////////// START BUTTON INITIATES GAME //////////
$('#startButton').click(function(){
  compMove()
  setTimeout(function(){changeOpacity(computerChoice)}, 1000)
  compArray.push(computerChoice)
  console.log(compArray)

})



////////// CAPTURE USER CLICKS ON ANY DIV INTO USERARRAY //////////

$('.boxes').click(function(){
  userArray.push($(this).attr('id'))
  changeOpacity(userArray[userArray.length -1])
  if(userArray.length === compArray.length){
    checkWin()
  }
  console.log(userArray)
})
