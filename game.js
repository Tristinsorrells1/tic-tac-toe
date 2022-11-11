class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.plays = 0
        this.turn = 1
        this.winner = null
    }

    determineTurn() {
        this.plays ++
        if (this.turn === 1){
            this.turn = player1.id
        }
        else {
            this.turn = player2.id
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
                player1.wins++
                this.winner = player1
            }
            else if (player2.boxes.includes(winningPlays[i])) {
                player2.wins++
                this.winner = player2 
            }
        }
    }

    checkForDraw() {
        if (this.plays === 9 && this.winner === null) {
            this.winner = "draw"
        }
    }


}
