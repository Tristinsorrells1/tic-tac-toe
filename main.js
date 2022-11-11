//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')
var gameStatus = document.querySelector('.game-status')
var personScore = document.querySelector('.person-score')
var bearScore = document.querySelector('.bear-score')


//----------------------------------------eventListeners-------------------------------


gameBoard.addEventListener('click', function(event){
    updateText()
    game.determineTurn()
    game.makePlay(event)
    game.checkForWinner()
    game.checkForDraw()
    placeIcon(event)
    updateScore()

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

function updateScore() {
    if (game.winner === "player1") {
        personScore.innerText = `${player1.wins} wins`
        gameStatus.innerText = `${player1.token} won this round!`
    }
    else if (game.winner === "player2") {
        bearScore.innerText = `${player2.wins} wins`
        gameStatus.innerText = `${player2.token} won this round!`
    }
    else if (game.winner === "draw") {
        gameStatus.innerText = "It is a DRAW!"
    }

}