//----------------------------------------querySelectors-------------------------------

var gameBoard = document.querySelector('.game-board')


//----------------------------------------eventListeners-------------------------------

gameBoard.addEventListener('click', function(event){
    makePlay(event)

})

//----------------------------------------global variables-------------------------------

//----------------------------------------functions-------------------------------

function makePlay(event) {
    console.log(event.target.id)

}