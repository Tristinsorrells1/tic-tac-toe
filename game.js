class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.plays = 0
    this.turn = "player2"
    this.winner = null
    this.icon = "🐻"
    this.winningPlays = [
      [1, 2, 3], 
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ] 
  }

  changeTurn() {
    if (this.turn === "player1") {
      this.turn = "player2"
      this.icon = player2.token
    }
      else if (this.turn === "player2") {
        this.turn = "player1"
        this.icon = player1.token
      }  
  }

  makePlay() {
    var move = parseInt(moveString)
    for (var i = 0; i < this.plays; i++) {
      if (player1.boxes[i] === move || player2.boxes[i] === move) {
        return
      }
    }
    if (this.turn === "player2") {
      player2.boxes.push(move)
      this.plays++
      this.changeTurn()
    }
      else if (this.turn === "player1") {
        player1.boxes.push(move)
        this.plays++
        this.changeTurn()
      }
  }

  checkForWinner() {
    for (var i = 0; i < this.winningPlays.length; i++) {
      if ((player1.boxes.includes(this.winningPlays[i][0]) &&
        player1.boxes.includes(this.winningPlays[i][1]) &&
        player1.boxes.includes(this.winningPlays[i][2]))) {
          player1.increaseWins()
          this.winner = "player1"
      }
        else if ((player2.boxes.includes(this.winningPlays[i][0]) &&
          player2.boxes.includes(this.winningPlays[i][1]) &&
          player2.boxes.includes(this.winningPlays[i][2]))) {
            player2.increaseWins()
            this.winner = "player2"
        }
    }
  }

  checkForDraw() {
    if (this.plays === 9  && this.winner === null) {
      this.winner = "draw"
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
      else if (this.winner === "player2" || this.winner === "draw") {
        this.turn = "player1"
        this.icon = player1.token
      }
    this.winner = null     
  }
}
