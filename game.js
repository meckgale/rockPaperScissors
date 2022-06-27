// Return a random output for computerPlay
function computerPlay () {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return  choice;
}
// Take playerInput and check is it match the requirements
function  playerInput() {
    let input = prompt("Rock, Paper or Scissors?");
    if ( input.toLowerCase() == "rock" || "paper" || "scissors") {
        return input.toLocaleLowerCase;
    }
    else {
        alert("Please enter Rock, Paper or Scissors as an input")
        return playerInput();
    }
}

// Create a for loop in order to keep score for each round and the game overall
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It`s a draw"
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It`s a draw"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It`s a draw"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It`s a draw"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You loose!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You loose!"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You loose!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!"
    }
  }

const playerSelection = playerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

 function game () {
    for (let i = 0; i < 5; i++) {
        
     }
 }
