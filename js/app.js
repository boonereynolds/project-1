////////// CONNECTED? //////////
console.log('Connected!')

////////// VARIABLES //////////
var boxes = ['green', 'red', 'yellow', 'blue']

var compArray = []

var userArray = []

var computerChoice = boxes[Math.floor(Math.random() * boxes.length)]
console.log(computerChoice)

////////// FUNCTIONS //////////
function changeOpacity(){
  $(`#${computerChoice}`).css({opacity: 0.5})
  setTimeout(function(){
    $(`#${computerChoice}`).css({opacity: 1})
  }, 1000)
}

// function userOpacity(){
//   $(this).css({opacity: 0.5})
//   setTimeout(function(){
//     $(this).css({opacity: 1})
//   }, 1000)
//   console.log('Clicked!')
// }

////check user vs computer////
// function checkPattern(){
//   for(var i = 0; i < userArray.length; i++){
//     if(userArray[i] !== compArray[i]){
//       alert('Please try again')
//     }
//   }
// }


////////// ACTIONS //////////
$('#startButton').click(function(){
  setTimeout(changeOpacity, 1000)
  compArray.push(computerChoice)
  console.log(compArray)
})

$(`#${computerChoice}`).click(function(){
  changeOpacity()
  userArray.push($(this).attr('id'))
  console.log(userArray)
})
