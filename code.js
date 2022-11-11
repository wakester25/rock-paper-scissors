
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let playerInput = prompt("Please enter your choice (Rock, Paper, Scissor): ").toLowerCase();
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    
    if (playerInput === 'Rock' || playerInput === 'Paper' || playerInput === 'Scissor') {
        return playerInput;
    } else {
        return "Error: Invalid choice selected";
    }
}

function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case 'Rock':
            if (computerChoice === 'Paper') {
                return "You Lose! " + computerChoice + " beats " + userChoice;
            } else if (computerChoice === 'Scissor') {
                return "You Win! " + userChoice + " beats " + computerChoice;
            } else {
                return "Its a tie!";
            }
        case 'Paper':
            if (computerChoice === 'Scissor') {
                return "You Lose! " + computerChoice + " beats " + userChoice;
            } else if (computerChoice === 'Rock') {
                return "You Win! " + userChoice + " beats " + computerChoice;
            } else {
                return "Its a tie!";
            }
        case 'Scissor':
            if (computerChoice === 'Rock') {
                return "You Lose! " + computerChoice + " beats " + userChoice;
            } else if (computerChoice === 'Paper') {
                return "You Win! " + userChoice + " beats " + computerChoice;
            } else {
                return "Its a tie!";
            }
    }
}