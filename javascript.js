function getComputerChoice() {
    const pcInput = Math.floor(Math.random() * 3);
    if (pcInput === 0) {
        return "Rock";
    } else if (pcInput === 1) {
        return "Paper";
    } else if (pcInput === 2) {
        return "Scissors";
    }
}

const pcchoice = getComputerChoice();

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    if (userInput === "Rock" || userInput === "rock") {
        return "Rock";
    } else if (userInput === "Paper" || userInput === "paper") {
        return "Paper";
    } else if (userInput === "Scissors" || userInput === "scissors") {
        return "Scissors";
    }
}

const humanchoice = getHumanChoice()