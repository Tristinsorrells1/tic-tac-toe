class Player {
  constructor (token) {
    this.token = token
    this.wins = 0
    this.boxes = []
  }
    
  increaseWins() {
    this.wins ++ 
  }
}
