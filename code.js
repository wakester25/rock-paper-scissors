
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    let userInput = prompt("Please enter your choice (Rock, Paper, Scissor): ").toLowerCase();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    
    if (userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissor') {
        return userInput;
    } else {
        return "Error: Invalid choice selected";
    }
}

function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case 'Rock':
            if (computerChoice === 'Paper') {
                return ["You Lose!", computerChoice, userChoice]; 
            } else if (computerChoice === 'Scissor') {
                return ["You Win!", computerChoice, userChoice];
            } else {
                return ["Its a tie!", computerChoice, userChoice];
            }
        case 'Paper':
            if (computerChoice === 'Scissor') {
                return ["You Lose!", computerChoice, userChoice]; 
            } else if (computerChoice === 'Rock') {
                return ["You Win!", computerChoice, userChoice];
            } else {
                return ["Its a tie!", computerChoice, userChoice];
            }
        case 'Scissor':
            if (computerChoice === 'Rock') {
                return ["You Lose!", computerChoice, userChoice]; 
            } else if (computerChoice === 'Paper') {
                return ["You Win!", computerChoice, userChoice];
            } else {
                return ["Its a tie!", computerChoice, userChoice];
            }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
    }
}