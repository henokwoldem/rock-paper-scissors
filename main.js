let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

while (round < 5) {
    let userChoice = prompt("Enter 0 for Rock, 1 for Scissors, 2 for Paper (5 ROUNDS) (or Cancel to quit)");

    if (userChoice === null) {
        console.log("Game over!");
        console.log(`Final Score - You: ${userScore}, Computer: ${computerScore}`);
        break;
    }

    userChoice = +userChoice;
    let computerChoice = getComputerChoice();

    // Invalid input
    if (userChoice > 2 || userChoice < 0 || isNaN(userChoice)) {
        console.log("Please select a number between 0 and 2!");
        continue; // skip to next loop iteration
    }

    // Tie
    if (userChoice === computerChoice) {
        console.log("It's a tie! No points awarded.");
        round++;
    }
    // Rock (0)
    else if (userChoice === 0 && computerChoice === 1) {
        console.log(`YOU WIN! Computer got Scissors, and Rock beats Scissors`);
        userScore++;
        round++;
    }
    else if (userChoice === 0 && computerChoice === 2) {
        console.log(`YOU LOSE! Computer got Paper, and Paper beats Rock`);
        computerScore++;
        round++;
    }
    // Scissors (1)
    else if (userChoice === 1 && computerChoice === 0) {
        console.log(`YOU LOSE! Computer got Rock, and Rock beats Scissors`);
        computerScore++;
        round++;
    }
    else if (userChoice === 1 && computerChoice === 2) {
        console.log(`YOU WIN! Computer got Paper, and Scissors beats Paper`);
        userScore++;
        round++;
    }
    // Paper (2)
    else if (userChoice === 2 && computerChoice === 0) {
        console.log(`YOU WIN! Computer got Rock, and Paper beats Rock`);
        userScore++;
        round++;
    }
    else if (userChoice === 2 && computerChoice === 1) {
        console.log(`YOU LOSE! Computer got Scissors, and Scissors beats Paper`);
        computerScore++;
        round++;
    }

    console.log(`Current Score - You: ${userScore}, Computer: ${computerScore}`);
    console.log("---------------------------------------------------");
}

// After 5 rounds
if (round >= 5) {
    console.log("5 rounds completed!");
    console.log(`Final Score - You: ${userScore}, Computer: ${computerScore}`);
}
