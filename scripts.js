const roll = document.getElementById("roll");
const playerPicker = document.getElementById("playerPicker");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

roll.onclick = function () {
    game()
    if (playerScore == 5 | computerScore == 5) {
        console.log(gameOver());
        reset();
    }
}

function game() {
    playerSelection = playerPicker.value;
    computerSelection = computerPlay();
    console.log("Player selected " + playerSelection.toLowerCase());
    console.log("Computer selected " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log ("Player: " + playerScore + " Computer: "+ computerScore);
}

function reset() {
    computerScore = 0;
    playerScore = 0;
}

function gameOver() {
    if (playerScore == 5) {
        return "Congratulations! You win!"
    }else {
        return "You lose!"
    }
}

function computerPlay (){
    let roll = Math.floor(Math.random() * 3) + 1;
    switch (roll) {
        case 1 : 
        return "rock";
        case 2 : 
        return "paper";
        case 3 : 
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection){
        return "It's a tie";
    } 
    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        computerScore++;
        return "Rock beats Scissors! Computer wins";
    }
    else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        playerScore++;
        return "Rock beats Scissors! Player wins";
    }
    else if (playerSelection.toLowerCase() == "rock" & computerSelection == "paper") {
        computerScore++;
        return "Paper beats Rock! Computer wins";
    }
    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        playerScore++;
        return "Paper beats Rock! Player wins";
    }
    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        computerScore++;
        return "Scissors beats Paper! Computer wins";
    }
    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        playerScore++;
        return "Scissors beats Paper! Player wins";
    }
}

