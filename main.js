//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')


//----------------------------------------eventListeners-------------------------------

gameBoard.addEventListener('click', function(event){
    game.determineTurn()
    game.makePlay(event)
    game.checkForWinner()
    game.checkForDraw()
    placeIcon(event)

})

//----------------------------------------global variables-------------------------------

var game = new Game(player1, player2)
var player1 = new Player(1,"🏃‍♀️")
var player2 = new Player(2, "🐻")

//----------------------------------------functions-------------------------------

function placeIcon(event) {
    console.log(event.target.innerText)
    console.log(game.icon)
    event.target.innerText = `${game.icon}`
}