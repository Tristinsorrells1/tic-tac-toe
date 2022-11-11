//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')


//----------------------------------------eventListeners-------------------------------

gameBoard.addEventListener('click', function(event){
    makePlay(event)

})

//----------------------------------------global variables-------------------------------

var game = new Game(player1, player2)

//----------------------------------------functions-------------------------------

function makePlay(event) {
    var move = event.target.id
    if (game.turn % 2 === 0) {
        player2.boxes[move].push(player2.id)
    }
    else {
        player1.boxes[move].push(player2.id)
    }

}