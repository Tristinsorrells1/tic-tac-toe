class Player {
    constructor (id, token) {
    this.id = id
    this.token = token
    this.wins = 0
    this.boxes = []
    }
    
    increaseWins() {
        this.wins ++ 
    }
}
