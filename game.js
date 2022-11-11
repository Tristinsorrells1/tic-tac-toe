class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.plays = 0
        this.turn = 0
        this.winner = null
        this.icon = "🐻"
    }

    determineTurn() {
        if (this.turn % 2 === 0){
            this.icon = player2.token
        }
        else {
            this.icon = player1.token
        }
        console.log("turn", this.turn)
        
    }

    makePlay(event) {
    this.plays++
    var moveString = event.target.id
    var move = parseInt(moveString)
        for (var i = 0; i < this.plays; i++) {
            if (player1.boxes[i] === move || player2.boxes[i] === move) {
                console.log("taken")
                return
            }
        }
        if (this.turn % 2 === 0) {
            player2.boxes.push(move)
            this.turn++
        }
        else {
            player1.boxes.push(move)
            this.turn++
        }
            // console.log("player1box", player1.boxes)
            // console.log("player2box", player2.boxes)
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
                var checkPlayer1Arrays = winningPlays[i].every(val =>player1.boxes.includes(val))
                var checkPlayer2Arrays = winningPlays[i].every(val => player2.boxes.includes(val))

                if (checkPlayer1Arrays) {
                player1.increaseWins()
                this.winner = "player1"
                console.log("player1 won")
            }
                else if (checkPlayer2Arrays) {
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
            if (this.winner === "player1") {
                console.log(this.winner)
                console.log("yup")
                this.turn = 2
                this.icon = player2.token
            }
            else if (this.winner === "player2") {
                console.log("hmm")
                this.turn = 1
                this.icon = player1.token
            }
            this.winner = null
            
        } 
    }

}
