// --> Variables
let homeScore = document.getElementById("scoreHome")
let addHome = 0

let guestScore = document.getElementById("scoreGuest")
let addGuest = 0

// --> Home Score
function onePoint () {
    addHome++
    homeScore.textContent = addHome
}

function twoPoints () {
    addHome += 2
    homeScore.textContent = addHome
}

function threePoints () {
    addHome += 3
    homeScore.textContent = addHome    
}

// --> Guest Score
function onePoint2Guest() {
    addGuest++
    guestScore.textContent = addGuest
}

function twoPoint2Guest() {
    addGuest += 2
    guestScore.textContent = addGuest
}

function threePoint2Guest() {
    addGuest += 3
    guestScore.textContent = addGuest    
}

// Stretch Goal = "New Game" button.
function resetGame () {
    addHome = 0
    addGuest = 0
    homeScore.textContent = addHome
    guestScore.textContent = addGuest
}



//console.log(score) era apenas para testes.