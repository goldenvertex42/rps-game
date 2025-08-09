// SET buttons variable and initial scores
let buttons = document.querySelectorAll('button')
let computerScore = 0
let humanScore = 0

// SET function that plays a round of the game and increments winner's score
function playRound(e) {

    const button = e.currentTarget
    const value = button.textContent.toLowerCase()

    // SET functions to generate/retrieve data
    function getHumanChoice() {
        let userInput = value;
        if (userInput === "rock") {
            return "rock";
        } else if (userInput === "paper") {
            return "paper";
        } else if (userInput === "scissors") {
            return "scissors";
        }
}
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
// SET variables to hold data from generation/retrieval
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

// COMPETITIVE CONDITIONALS (Need to be changed from console.log to DOM)
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

// ATTACH event listener to buttons
buttons.forEach(button => {button.addEventListener('click', playRound);})


//COMPUTE who the winner is
//Display a message oriented to the user's final place **NEED TO CHANGE TO DOM 
if (humanScore > computerScore) {
    console.log(`YOU WON! You beat the computer ${humanScore} - ${computerScore}`);
} else if (computerScore > humanScore) {
    console.log(`YOU LOST! The computer beat you ${computerScore} - ${humanScore}`);
} else if (humanScore === computerScore) {
    console.log(`DRAW!! You tied the computer ${humanScore} - ${computerScore}`);
}