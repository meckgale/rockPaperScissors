/* 
Rules Of The Game

-rock beat scissors

-paper beat rock

-scissor cut paper

-5 rounds gonna played and the winner of most round will win 

-Otherwise its a tie


1. A selection will be made for player and computer

    -player can prompt the choice in order to make selection

    -computer can randomize selection with Math.random function


2. A comparison will be made between selections

    -an if statement will do the comparison


3. A score will be kept based on comparison

    - end of each round update score


4. A message will be shown end of each round

    - message should include winner & loser of the round 

    - message should display updated score


5. A round score will be kept since its a 5 round game

    -End of each round a counter will update the score


6. After 5 round the game has to end

    -Display the end game with updated score and winner and loser


7. An option to restart the game must be present when the game is over

    -Restart button to start the game


8. Start of the game

    -Game should start after the player click the start game button.

    */

let playerScore = 0;

let computerScore = 0;

let playerInput = "";

let computerInput = "";

function getPlayerInput() {
    playerInput = prompt("Weapon of Choice, please?");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

function getComputerInput() {
    const listOfChoices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor((Math.random() * 3));
    computerInput = listOfChoices[randomChoice];
    return computerInput;
}

function compareSelections() {
    if((playerInput === "rock" && computerInput === "scissors") || 
    (playerInput === "paper" && computerInput === "rock") || 
    (playerInput === "scissors" && computerInput === "paper")) {
        playerScore++;
    }
    else if((playerInput === "rock" && computerInput === "paper") || 
    (playerInput === "paper" && computerInput === "scissors") || 
    (playerInput === "scissors" && computerInput === "rock")) {
        computerScore++;
    }
}

function keepScore (){
    const roundScore = document.querySelector(".round-score");
    roundScore.textContent = `Player Score:${playerScore} Computer Score: ${computerScore}`;
    return roundScore.textContent;
}

function displayMessage() {
    const roundMessage = document.querySelector(".round-message");

    if((playerInput === "rock" && computerInput === "scissors") || 
    (playerInput === "paper" && computerInput === "rock") || 
    (playerInput === "scissors" && computerInput === "paper")) {
        roundMessage.textContent = "Well done";
        return roundMessage.textContent;
    }
    else if((playerInput === "rock" && computerInput === "paper") || 
    (playerInput === "paper" && computerInput === "scissors") || 
    (playerInput === "scissors" && computerInput === "rock")) {
        roundMessage.textContent = "Sorry, not this time...";
        return roundMessage.textContent;
    }
    else {
        roundMessage.textContent = "It's a tie";
        return roundMessage.textContent;
    }
}

function round() {
    getPlayerInput();
    getComputerInput();
    compareSelections();
    keepScore();
    displayMessage();
}

function game () {
    let roundNumber = 0;
    while(roundNumber < 5) {
        round();
        roundNumber++;
    }
}
game();

// function playRound(playerSelection, computerSelection) {
    
//     const playerInput = prompt("Weapon of Choice, please?");

//     playerSelection = playerInput.toLowerCase();

//     const listOfChoices = ["rock", "paper", "scissors"];

//     const randomChoice = Math.floor((Math.random() * 3));

//     computerSelection = listOfChoices[randomChoice];

//     const roundMessage = document.querySelector(".round-message");

//     const roundScore = document.querySelector(".round-score");

//     if((playerSelection === "rock" && computerSelection === "scissors") || 
//     (playerSelection === "paper" && computerSelection === "rock") || 
//     (playerSelection === "scissors" && computerSelection === "paper")) {
//         roundMessage.textContent = "Well done";
//         ++playerScore;
//         roundScore.textContent = `Player Score:${playerScore} Computer Score: ${computerScore}`;
//     }
//     else if((playerSelection === "rock" && computerSelection === "paper") || 
//     (playerSelection === "paper" && computerSelection === "scissors") || 
//     (playerSelection === "scissors" && computerSelection === "rock")) {
//         roundMessage.textContent = "Sorry, not this time...";
//         ++computerScore;
//         roundScore.textContent = `Player Score:${playerScore} Computer Score: ${computerScore}`;
//     }
//     else {
//         roundMessage.textContent = "It's a tie";
//         roundScore.textContent = `Player Score:${playerScore} Computer Score: ${computerScore}`;
//     }
// }

// function gamePlay () {
//     for(let round = 0; round < 5; round++) {
//         playRound();
//     }
// }

// gamePlay();
