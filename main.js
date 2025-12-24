getComputerChoice = function(){
    return Math.floor(Math.random()*3)
}

let userChoice = +prompt("Enter 0 for Rock. 1 for Scissors. 2 for Paper");
let computerChoice = getComputerChoice();

// Tie
if(userChoice === computerChoice){
    console.log("Its a tie! Refresh to play again")
}

// Invalid input
if(userChoice > 2 || userChoice < 0 || isNaN(userChoice)){
    console.log("Please select a number between 0 and 2! Refresh to play again")
}

// Rock (0)
if(userChoice === 0 && computerChoice === 1){
    console.log(`YOU WIN!
Computer got Scissors, and Rock beats Scissors
Refresh to play again` )
} 

if(userChoice === 0 && computerChoice === 2) {
    console.log(`YOU LOSE!
Computer got Paper, and Paper beats Rock
Refresh to play again` )
}

// Scissors (1)
if(userChoice === 1 && computerChoice === 0){
    console.log(`YOU LOSE!
Computer got Rock, and Rock beats Scissors
Refresh to play again`)
}

if(userChoice === 1 && computerChoice === 2){
    console.log(`YOU WIN!
Computer got Paper, and Scissors beats Paper
Refresh to play again`)
}

// Paper (2)
if(userChoice === 2 && computerChoice === 0){
    console.log(`YOU WIN!
Computer got Rock, and Paper beats Rock
Refresh to play again`)
}

if(userChoice === 2 && computerChoice === 1){
    console.log(`YOU LOSE!
Computer got Scissors, and Scissors beats Paper
Refresh to play again`)
}
