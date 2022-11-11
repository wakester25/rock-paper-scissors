
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