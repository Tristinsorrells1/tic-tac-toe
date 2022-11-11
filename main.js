//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')
var gameStatus = document.querySelector('.game-status')


//----------------------------------------eventListeners-------------------------------


gameBoard.addEventListener('click', function(event){
    updateText()
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
    if (!event.target.classList.contains('taken')) {
        event.target.innerText = `${game.icon}`
        event.target.classList.add('taken')
    }
}

function updateText() {
        gameStatus.innerText = `It is ${game.icon}'s turn`
    }
