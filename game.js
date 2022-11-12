class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.plays = 0
        this.turn = "player2"
        this.winner = null
        this.icon = "🐻"
    }

    determineTurn() {
        console.log(this.turn)
        if (this.turn === "player1"){
            this.turn = "player2"
            this.icon = player2.token
        }
        else if (this.turn === "player2") {
            this.turn = "player1"
            this.icon = player1.token

        }
        
    }

    makePlay(event) {
    var moveString = event.target.id
    var move = parseInt(moveString)
        for (var i = 0; i < this.plays; i++) {
            if (player1.boxes[i] === move || player2.boxes[i] === move) {
                return
            }
        }
        if (this.turn === "player2") {
            player2.boxes.push(move)
            console.log("should be player2", this.turn)
            console.log("player2boxes", player2.boxes)
            this.plays++
            this.determineTurn()
            }
        else if (this.turn === "player1") {
            player1.boxes.push(move)
            console.log("should be player1", this.turn)
            console.log("player1boxes", player1.boxes)
            this.plays++
            this.determineTurn()
            }
    }
        
    checkForWinner() {
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
           
        for (var i = 0; i < winningPlays.length; i++) {
            if ((player1.boxes.includes(winningPlays[i][0]) &&
                player1.boxes.includes(winningPlays[i][1]) &&
                player1.boxes.includes(winningPlays[i][2]))) {
                player1.increaseWins()
                this.winner = "player1"
                console.log("player1 won")
            }
            else if ((player2.boxes.includes(winningPlays[i][0]) &&
                player2.boxes.includes(winningPlays[i][1]) &&
                player2.boxes.includes(winningPlays[i][2]))) {
                player2.increaseWins()
                this.winner = "player2"
                console.log("player2 won")
            }
        }
    }

    checkForDraw() {
        if (this.plays === 9  && this.winner === null) {
            this.winner = "draw"
            console.log("it's a draw")
        }
    }

    newGame() {
        if (this.winner !== null) {
            player1.boxes = []
            player2.boxes = []
            this.plays = 0
            this.turn = null
            this.icon = null
        }
        if (this.winner === "player1") {
            this.turn = "player2"
            this.icon = player2.token
        }
        else if (this.winner === "player2") {
            this.turn = "player1"
            this.icon = player1.token
        }
            this.winner = null     
    }

}
