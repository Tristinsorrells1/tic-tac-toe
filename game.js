class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.plays = 0
        this.turn = 1
        this.gamePiece = null
        this.winner = null
    }

    determineTurn() {
        this.plays ++
        if (this.turn % 2 === 0){
            this.gamePiece = player2.id
        }
        else {
            this.gamePiece = player2.id
        }
    }

    checkForWinner() {
        var winningPlays = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (var i = 0; i < winningPlays.length; i++) {

            if (player1.boxes.includes(winningPlays[i])) {
                player1.increaseWins()
                this.winner = "player1"
            }
            else if (player2.boxes.includes(winningPlays[i])) {
                player2.increaseWins()
                this.winner = "player2" 
            }
        }
    }

    checkForDraw() {
        if (this.plays === 9 && this.winner === null) {
            this.winner = "draw"
        }
    }

    newGame() {
        player1. boxes = []
        player2.boxes = []
        this.player = 0
        this.winner = null
        if (this.winner === "player1" || "draw") {
            this.turn = 2
        }
        else if (this.winner === "player2") {
            this.turn = 1
        }
    }

}
