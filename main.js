//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')
var gameStatus = document.querySelector('.game-status')
var personScore = document.querySelector('.person-score')
var bearScore = document.querySelector('.bear-score')
var gameGrid = document.querySelectorAll('.grid')


//----------------------------------------eventListeners-------------------------------


gameBoard.addEventListener('click', function(event){
    placeIcon(event)
    game.makePlay(event)
    updateText()
    game.checkForWinner()
    game.checkForDraw()
    updateScore()
    game.newGame()

})

//----------------------------------------global variables-------------------------------

var game = new Game(player1, player2)
var player1 = new Player(1,"🏃‍♀️")
var player2 = new Player(2, "🐻")
var checkPlayer1Arrays
var checkPlayer2Arrays

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
        gameStatus.innerText =  `🏃‍♀️ won this round!`
    }
    else if (game.winner === "player2") {
        bearScore.innerText = `${player2.wins} wins`
        gameStatus.innerText = `🐻 won this round!`
    }
    else if (game.winner === "draw") {
        gameStatus.innerText = "It is a DRAW!"
    }
    if (game.winner !== null) {
        pauseThenReset()
    }
}

function pauseThenReset(){
    setTimeout(resetBoard, 1000)
}

function resetBoard() {
    gameStatus.innerText = `Home`
    for (var i = 0; i < gameGrid.length; i++) {
        gameGrid[i].innerText = "" 
        gameGrid[i].classList.remove('taken') 
    }
}