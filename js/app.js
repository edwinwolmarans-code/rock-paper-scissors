let humanScore = 0;
let computerScore = 0; 

// Randomly returns 0, 1 or 2
function getComputerChoice (){
    return Math.floor(Math.random() * 3);
}

// Takes player's input

function getHumanChoice () {
    let playerChoice = prompt("Choose rock, paper or scissors:");
    if (playerChoice.toLowerCase() === "rock") {
        playerChoice = 0;
        return playerChoice;
      } else if (playerChoice.toLowerCase() === "paper") {
        playerChoice = 1;
        return playerChoice;
      } else if (playerChoice.toLowerCase() === "scissors") {
        playerChoice = 2;
        return playerChoice;
      } else {
        alert("Invalid option")
        // recursive call 
        getHumanChoice()
      }

}

// play round
function playRound(humanChoice, computerChoice) {
    if (humanChoice < computerChoice){
        console.log('Computer wins!');
        computerScore ++;
    } else if (humanChoice > computerChoice) {
        console.log('Player wins!')
        humanScore ++;
    } else {
        console.log('Draw!')
    }

}


function playGame() {
 
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        console.log(humanSelection)
        const computerSelection = getComputerChoice();
        console.log(computerSelection)

        playRound(humanSelection, computerSelection);
        
        console.log(`Player's current score is: ${humanScore}`)
        console.log(`Computer's current score is: ${computerScore}`)
      }

}

playGame()