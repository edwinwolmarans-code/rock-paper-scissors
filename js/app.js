let humanScore = 0;
let computerScore = 0; 
let humanChoice; 
let computerChoice;


function displayScore (result){
  const roundWinner = document.querySelector("#roundWinner");
  const compScore = document.querySelector("#playerScore");
  const playerScore = document.querySelector("#computerScore"); 

  roundWinner.textContent = `${result}!`
  compScore.textContent = `Computer score: ${computerScore}`;
  playerScore.textContent = `Player score: ${humanScore}`;

  if (humanScore === 5) {
    const container = document.querySelector("#displayResult");
    const gameWinner = document.createElement("div");
    gameWinner.classList.add("gameWinner");
    gameWinner.textContent = "Game over Player wins!";
    container.appendChild(gameWinner);
  } else if (compScore === 5){
    const container = document.querySelector("#displayResult");
    const gameWinner = document.createElement("div");
    gameWinner.classList.add("gameWinner");
    gameWinner.textContent = "Game over Computer wins!";
    container.appendChild(gameWinner);
  }
}

// Randomly returns 0, 1 or 2
function getComputerChoice (){
    return Math.floor(Math.random() * 3);
}

function computerWins () {
  let result = "Computer wins";
    computerScore ++;
    displayScore(result);
}

function playerWins () {
  let result = "Player wins";
    humanScore ++;
    displayScore(result);
}

// play round
function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    console.log(`Player: ${computerChoice}`);
    if (computerChoice === 0 && humanChoice === 2) {
      computerWins()
    } else if (humanChoice === 0 && computerChoice === 2){
      playerWins()
    } else if(humanChoice < computerChoice){
      computerWins()
    } else if (humanChoice > computerChoice) {
      playerWins()
    } else {
      result = "Draw" 
      displayScore(result);
    }
}

// main game function
function playGame(){
  let buttons = document.querySelectorAll("button")

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.id)

      if (button.id === "rock") {
        humanChoice = 0;
        console.log(`Player: ${humanChoice}`);
        playRound(humanChoice);
      
      } else if (button.id === "paper") {
        humanChoice = 1;
        console.log(`Player: ${humanChoice}`);
        playRound(humanChoice);

      } else if (button.id === "scissors") {
        humanChoice = 2;
        console.log(`Player: ${humanChoice}`);
        playRound(humanChoice);
      }

    })
  })
}

// plays game
playGame()
