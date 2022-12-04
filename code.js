
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

function checkWinner(userScore, computerScore) {
    if (userScore >= 5 || computerScore >= 5 ) return true;
    return false;
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    //userChoice = getUserChoice();

    buttons = document.querySelectorAll("button");
    displayBox = document.querySelector("#displayBox");
    scoreBox = document.querySelector("#scoreBox");
    buttons.forEach(button => button.addEventListener("click", () => {

        if (!checkWinner(userScore, computerScore)) {
            result = playRound(button.outerText, getComputerChoice());
            displayBox.textContent = result;

            if (result[0] === "You Win!") {
                displayBox.textContent = result[0] + " " + result[2] + " beats " + result[1] + "!"
                userScore++;
                scoreBox.textContent = "Score: " + userScore + " to " + computerScore;
            } else if (result[0] === "You Lose!") {
                displayBox.textContent = result[0] + " " + result[1] + " beats " + result[2] + "!";
                computerScore++;
                scoreBox.textContent = "Score: " + userScore + " to " + computerScore;
            } else {
                scoreBox.textContent = "Score: " + userScore + " to " + computerScore;
            }
        } else {
            if (userScore > computerScore) {
                displayBox.textConent = "Congrats! You win the game!";
            } else {
                displayBox.textContent = "To bad! You lose the game!";
            } 
        }
    }));
 
}

game();