
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

function checkGameWinner(userScore, computerScore) {
    if (userScore >= 5 || computerScore >= 5 ) return true;
    return false;
}

function resetGame() {
        userScore = 0;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        userScoreDisplay.textContent = userScore;
        displayBox.textContent = "Select Rock, Paper or Scissor to start game";
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    rpsButtons = document.querySelectorAll(".rps-button");
    resetButton = document.querySelector(".reset-button");
    displayBox = document.querySelector("#displayBox");
    userScoreDisplay = document.querySelector("#userScore");
    computerScoreDisplay = document.querySelector("#computerScore");

    displayBox.textContent = "Select Rock, Paper or Scissor to start game";
    
    resetButton.addEventListener("click", () => resetGame());

    rpsButtons.forEach(button => button.addEventListener("click", () => {
        
        result = playRound(button.outerText, getComputerChoice());

        if (!checkGameWinner(userScore, computerScore)) {
            if (result[0] === "You Win!") {
                displayBox.textContent = result[0] + " " + result[2] + " beats " + result[1] + "!"
                userScore++;
                userScoreDisplay.textContent = userScore;
                computerScoreDisplay.textContent = computerScore;
            } else if (result[0] === "You Lose!") {
                displayBox.textContent = result[0] + " " + result[1] + " beats " + result[2] + "!";
                computerScore++;
                userScoreDisplay.textContent = userScore;
                computerScoreDisplay.textContent = computerScore;
            } else {
                displayBox.textContent = result[0] + " Both players chose " + result[1];
                userScoreDisplay.textContent = userScore;
                computerScoreDisplay.textContent = computerScore;
            }
    
            if (checkGameWinner(userScore, computerScore)) {
                if (userScore > computerScore) {
                    displayBox.textContent = "Congrats! You win the game!";
                } else {
                    displayBox.textContent = "To bad! You lose the game!";
                }
            }
        }
    }));
 
}

game()