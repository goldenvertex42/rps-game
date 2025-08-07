// SET funtion that randomly generates a choice for the computer //
function getComputerChoice() {
    const pcInput = Math.floor(Math.random() * 3);
    if (pcInput === 0) {
        return "rock";
    } else if (pcInput === 1) {
        return "paper";
    } else if (pcInput === 2) {
        return "scissors";
    }
}
// SET function that prompts user to make a choice //
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

function playGame() {

let computerScore = 0
let humanScore = 0

function playRound() {
    // SET variables to hold choices within scope of playRound function to obtain new choices //
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log(`You tied! You both picked ${humanChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won! Rock beats Scissors!"); 
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won! Paper beats Rock!");
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won! Scissors beats Paper!");
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost! Paper beats Rock!");
        ++computerScore; 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost! Scissors beats Paper!");
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost! Rock beats Scissors!");
        ++computerScore;
    } else {
        console.log("Invalid choice. Please try again.");
    }
    
}


//COMPUTE who the winner is
//Display a message oriented to the user's final place
if (humanScore > computerScore) {
    console.log(`YOU WON! You beat the computer ${humanScore} - ${computerScore}`);
} else if (computerScore > humanScore) {
    console.log(`YOU LOST! The computer beat you ${computerScore} - ${humanScore}`);
} else if (humanScore === computerScore) {
    console.log(`DRAW!! You tied the computer ${humanScore} - ${computerScore}`);
}
}

playGame();