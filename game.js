
 function game() {
    
    let computerScore = 0;
    let playerScore = 0;

    const playerSelection = playerInput();
    const computerSelection = computerPlay();

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log("Your score- " + playerScore + "    Computer Score- " + computerScore);
    }

        // Return a random output for computerPlay
    function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
        let choice = choices[Math.floor(Math.random()*choices.length)];
        return  choice;
    }
    // Take playerInput and check is it match the requirements
        function playerInput() {
            let input = prompt("Rock, Paper or Scissors?");
            return input.toLowerCase();
        }
         
    // Create a for loop in order to keep score for each round and the game overall
    function playRound(playerSelection, computerSelection) {
        
        if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore += 1;
            let lose = "You lose" + computerSelection + " beats " + playerSelection;
            return lose;
        }
        else  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
            playerScore += 1;
            let win = "You win" + playerSelection + " beats " + computerSelection;
            return win;
        }
        else {
            let tie = "It's a tie"
            return tie;
        }
    
        
    }
    
        //To declare winner
    if (computerScore > playerScore) {
        console.log("You Lost \n Looser!");
    }
    if (computerScore < playerScore) {
        console.log("You Won \n Yaay!");
    }
    if (computerScore === playerScore) {
        console.log("Game tie");
    }

 }

 

 game();
