//----------------------------------------querySelectors-------------------------------
var gameBoard = document.querySelector('.game-board')
var displayTurn = document.querySelector('.display-turn')
var personScore = document.querySelector('.person-score')
var bearScore = document.querySelector('.bear-score')
var gameGrids = document.querySelectorAll('.grid')
//----------------------------------------eventListeners-------------------------------
gameBoard.addEventListener('click', function(event) {
  placeIcon(event)
  game.makePlay()
  updateText()
  game.checkForWinner()
  game.checkForDraw()
  updateScore()
  game.newGame()
})
//----------------------------------------global variables-------------------------------
var player1 = new Player(1,"🏃‍♀️")
var player2 = new Player(2, "🐻")
var game = new Game(player1, player2)
var moveString 
var winningPlays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
] 
//----------------------------------------functions-------------------------------
function placeIcon(event) {
  moveString = event.target.id
  if (!event.target.classList.contains('taken')) {
    event.target.innerText = `${game.icon}`
    event.target.classList.add('taken')
  }
}

function updateText() {
  displayTurn.innerText = `It is ${game.icon}'s turn`
}

function updateScore() {
  if (game.winner === "player1") {
    personScore.innerText = `${player1.wins} wins`
    displayTurn.innerText =  `🏃‍♀️ won this round!`
  }
  else if (game.winner === "player2") {
    bearScore.innerText = `${player2.wins} wins`
    displayTurn.innerText = `🐻 won this round!`
  }
  else if (game.winner === "draw") {
    displayTurn.innerText = "It is a DRAW!"
  }
  if (game.winner !== null) {
    pauseThenReset()
  }
}

function pauseThenReset() {
  setTimeout(resetBoard, 2000);
}

function resetBoard() {
  displayTurn.innerText = `It's ${game.icon}'s turn`
  for (var i = 0; i < gameGrids.length; i++) {
    gameGrids[i].innerText = "" 
    gameGrids[i].classList.remove('taken') 
  }
}