getComputerChoice = function(){
    return Math.floor(Math.random()*3)
}

let userChoice = +prompt("Enter 1 for Rock. 2 for Scissors. 3 for Paper");
let computerChoice = getComputerChoice();

if(userChoice === computerChoice){
    console.log("Its a tie! Refresh to play again")
}

if(userChoice === 1 && computerChoice === 1){
    console.log(`YOU WIN!
        Computer got Scissors, and Rock beats Scissors
        Refresh to play again` )
 } 

if(userChoice === 1 && computerChoice === 2) {
    console.log(`YOU WIN !
        Computer got Paper, and Rock beats Paper
        Refresh to play again` )
}

if(userChoice === 2 && computerChoice === 0){
    console.log(`YOU LOSE!
        Computer got Rock, and Rock beats Scissors
        Refresh to play again`)
}

if(userChoice === 2 && computerChoice === 2){
    console.log(`YOU WIN!
        Computer got Paper and Scissors beats Paper
        Refresh to play again`)
}

if(userChoice === 3 && computerChoice === 0){
    console.log(`YOU WIN!
        Computer got Rock, and Paper beats Rock
        Refresh to play again`)
}

if(userChoice === 3 && computerChoice === 1){
    console.log(`YOU WIN!
        Computer got Scissors and Scissors beats Paper
        Refresh to play again`)
}


