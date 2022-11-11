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

    
}
