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

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (userInput === "rock") {
        return "rock";
    } else if (userInput === "paper") {
        return "paper";
    } else if (userInput === "scissors") {
        return "scissors";
    }
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "Scissors") {
        console.log("You won! Rock beats Scissors!");
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        console.log("You won! Paper beats Rock!");
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log("You won! Scissors beats Paper!");
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log("You lost! Paper beats Rock!");
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log("You lost! Scissors beats Paper!");
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log("You lost! Rock beats Scissors!");
    } 
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);