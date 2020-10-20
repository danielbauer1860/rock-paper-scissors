const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultMessage = document.getElementById("resultMessage");
const gameOverMessage = document.getElementById("gameOverMessage");
const playerScoreDisplay = document.getElementById("playerScore");
const compScoreDisplay = document.getElementById("compScore");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

rockButton.onclick = function () {
    game("rock");
    if (playerScore == 5 | computerScore == 5) {
        gameOverMessage.innerText = gameOver();
        reset();
    }else {
        gameOverMessage.innerText ="";
    }
}

paperButton.onclick = function () {
    game("paper");
    if (playerScore == 5 | computerScore == 5) {
        gameOverMessage.innerText = gameOver();
        reset();
    } else {
        gameOverMessage.innerText ="";
    }
}


scissorsButton.onclick = function () {
    game("scissors");
    if (playerScore == 5 | computerScore == 5) {
        gameOverMessage.innerText = gameOver();
        reset();
    } else {
        gameOverMessage.innerText ="";
    }
}

function game(playerSelection) {
    computerSelection = computerPlay();
    resultMessage.innerText = `Player selected ${playerSelection.toLowerCase()} 
    Computer selected  ${computerSelection} 
${playRound(playerSelection, computerSelection)}`;
    updateScore();
}

function updateScore(){
    playerScoreDisplay.innerText = "Player: " + playerScore;
    compScoreDisplay.innerText = "Computer: " + computerScore;
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
        return "It's a tie!";
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

