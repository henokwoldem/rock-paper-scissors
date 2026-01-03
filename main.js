const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const form = document.querySelector("form");
const roundInput = document.querySelector(".formInput");

let rounds = 0;
let userScore = 0;
let computerScore = 0;
let gameActive = false;

// display area
const gameDiv = document.createElement("div");
document.body.appendChild(gameDiv);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    rounds = Number(roundInput.value);
    gameActive = true;
    gameDiv.textContent = `Game started: ${rounds} rounds`;
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(userChoice) {
    if (!gameActive || rounds <= 0) return;

    const computerChoice = getComputerChoice();
    let result = "";

    if (userChoice === computerChoice) {
        result = "Tie!";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        result = "You win!";
    } 
    else {
        computerScore++;
        result = "You lose!";
    }

    rounds--;

    const h3 = document.createElement("h3");
    h3.textContent = `
You: ${userChoice}
Computer: ${computerChoice}
${result}
Score — You: ${userScore}, Computer: ${computerScore}
Rounds left: ${rounds}
    `;
    h3.style.whiteSpace = "pre-line";
    gameDiv.appendChild(h3);

    if (rounds === 0) {
        const gameOver = document.createElement("h2");
        gameOver.textContent = `GAME OVER — Final Score: You ${userScore}, Computer ${computerScore}`;
        gameDiv.appendChild(gameOver);
        gameActive = false;
    }
}

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
