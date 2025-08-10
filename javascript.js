// SET variables initial scores
let computerScore = 0
let humanScore = 0

// SET and CREATE variables for the scorecard
const div = document.getElementById("scorecard");
const score = document.createElement("h1");
score.textContent = `${humanScore} - ${computerScore}`;
div.appendChild(score);
const declaration = document.createElement("h1");
div.appendChild(declaration);    

// SET variable for reset button and function to reset scores to zero
const resetButton = document.getElementById("reset");    
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    score.textContent = `${humanScore} - ${computerScore}`;
    declaration.textContent = "New Game!"
}


// ATTACH event listener to the reset button
resetButton.addEventListener('click',resetGame);

// CREATE buttons variable (that excludes the reset button) and ATTACH event listener to buttons
const buttons = document.querySelectorAll('button:not(#reset)')
buttons.forEach(button => {button.addEventListener('click', playRound);})

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

// SET function to generate the result of the round
    function roundResult(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `You tied!`;
        } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")  
        ) {return "You won!";
        } else {return "You lost!"}
    }
// SET function to increment the winner's score
    function handleScore(result) {
        if (result === 'You won!') {
            ++humanScore;
        } else if (result === 'You lost!') {
            ++computerScore;
        } else {}
    }
// SET variable to hold results of round (You tied!, You lost!, You won!)    
    result = roundResult(humanChoice, computerChoice);

// RUN function to increment the winner's score    
    handleScore(result); 

// DECLARE results in two elements - declaration of win, loss, or tie, and the score    
    
    declaration.textContent = result;
    
    score.textContent = `${humanScore} - ${computerScore}`;
    
    if (humanScore >= 5) {
        declaration.textContent = "You are the WINNER!"
    } else if (computerScore >= 5) {
        declaration.textContent = "GAME OVER! Try again!"
    }

}