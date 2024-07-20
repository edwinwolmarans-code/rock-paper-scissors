let humanScore = 0;
let computerScore = 0;


// Randomly returns 0, 1 or 2
function getComputerChoice (){
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice())


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

console.log(getHumanChoice())