class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.plays = 0
        this.turn = 1
        this.winner = null
        this.icon = null
    }

    determineTurn() {
        console.log("turn", this.turn)
        if (this.turn % 2 === 0){
            this.icon = player2.token
        }
        else {
            this.icon = player1.token
        }
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
            console.log("player1box", player1.boxes)
            console.log("player2box", player2.boxes)
        }
    


    checkForWinner() {
        var winningPlays = [
            ['1,2,3'],
            ['4,5,6'],
            ['7,8,9'],
            ['1,4,7'],
            ['2,5,8'],
            ['3,6,9'],
            ['1,5,9'],
            ['3,5,7']
        ]
        for (var i = 0; i < winningPlays.length; i++) {
            player1.boxes.sort();
            player2.boxes.sort();
            var player1StringBoxes = player1.boxes.toString();
            var player2StringBoxes = player2.boxes.toString();

            if (winningPlays[i].includes(player1StringBoxes)) {
                player1.increaseWins()
                this.winner = "player1"
                console.log("player 1 wins")
            }
            else if (winningPlays[i].includes(player2StringBoxes)) {
                player2.increaseWins()
                this.winner = "player2" 
                console.log("player 2 wins")
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
