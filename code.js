
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userInput, computerInput) {
    const userSelection = userInput.toLowerCase();
    const computerSelection = computerInput.toLowerCase();

    if (userSelection === "rock") {
        switch(computerSelection) {
            case "rock":
                return "It is a tie";
            case "paper":
                return "You lose!";  
            case "scissor":
                return "You win!";  
            default:
                return "Oops! There was a error!";
        }
    } else if (userSelection === "paper") {
        switch(computerSelection) {
            case "paper":
                return "It is a tie";
            case "scissor":
                return "You lose!";  
            case "rock":
                return "You win!";  
            default:
                return "Oops! There was a error!";
        }
    } else if (userSelection === "scissor") {
        switch(computerSelection) {
            case "scissor":
                return "It is a tie";
            case "rock":
                return "You lose!";
            case "paper":
                return "You win!";  
            default:
                return "Oops! There was a error!";
        }
    } else {
        return "Error : Invalid Input"
    }
}

function game() {
    userScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Enter rock, paper or scissor: ");
        result = playRound(userInput, getComputerChoice);
        if (result === "You win!") {
            userScore += 1;
        } else if (result === "You lose!") {
            computerScore += 1;
        }

        console.log(result);
    }

    if (computerScore > userScore) {
        console.log("The computer wins the game!")
    } else if (userScore > computerScore) {
        console.log("The user winds the game!")
    } else {
        console.log("Its a tie!")
    }
}

game();