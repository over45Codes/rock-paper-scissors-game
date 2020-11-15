let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll("selection-choice");
const displayResults = document.querySelector(".displayResults");

const rock = document.getElementById("rock");
rock.addEventListener("click", () => showResults("rock"));

const paper = document.getElementById("paper");
paper.addEventListener("click", () => showResults("paper"));

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => showResults("scissors"));

function getComputerChoice() {
  const getComputerChoiceArray = ["rock", "paper", "scissors"];
  const randomizeComputerChoice = Math.floor(Math.random() * 3);
  const computerChose = getComputerChoiceArray[randomizeComputerChoice];
  return computerChose;
}

function win(userChoice, computerChoice) {
  const updatePlayerScore = document.getElementById("player-scores");
  playerScore++;
  updatePlayerScore.textContent = playerScore;
  const winner = (displayResults.textContent = `Player chose ${userChoice}. Computer chose ${computerChoice}. You win!`);

  return winner;
}

function lose(userChoice, computerChoice) {
  const updateComputerScore = document.getElementById("computer-scores");
  computerScore++;
  updateComputerScore.textContent = computerScore;
  const loser = (displayResults.textContent = `Player chose ${userChoice}. Computer chose ${computerChoice}.
  You lose!`);

  return loser;
}

function tie(userChoice, computerChoice) {
  const tied = (displayResults.textContent = `Player chose ${userChoice}. Computer chose ${computerChoice}. It's a tie !`);

  return tied;
}

function showResults(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);

      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);

      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);

      break;
  }
}
