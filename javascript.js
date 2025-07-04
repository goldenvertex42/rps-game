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