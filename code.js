
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

    //userChoice = getUserChoice();

    buttons = document.querySelectorAll("button");
    displaybox = document.querySelector("#displayBox");
    buttons.forEach(button => button.addEventListener("click", () => {
        result = playRound(button.outerText, getComputerChoice());
        displayBox.textContent = result;

        if (result[0] === "You Win!") {
            displayBox.textContent = result[0] + " " + result[2] + " beats " + result[1] + "! Score: " + userScore + " to " + computerScore;
            userScore++;
        } else if (result[0] === "You Lose!") {
            displayBox.textContent = result[0] + " " + result[1] + " beats " + result[2] + "! Score: " + userScore + " to " + computerScore;
            computerScore++;
        } else {
            displayBox.textContent = result[0] + " Score: " + userScore + " to " + computerScore;
        }
    
        if (userScore > computerScore) {
            displayBox.textConent = "Congrats! You win the entire game!";
        } else if (computerScore > userScore) {
            displayBox.textContent = "To bad! You lose the entire game!";
        } else {
            displayBox.textContent = "The game ends in a tie!";
        }
    }));
 
}

game();