let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll("selection-choice");

const displayResults = document.querySelector(".displayResults");

function getPlayerChoice() {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", function () {
    showResults("rock");
    playerChoices.textContent = "Player picked rock";
  });
}
const paper = document.getElementById("paper");
paper.addEventListener("click", function () {
  showResults("paper");
  playerChoices.textContent = "Player picked paper";
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function () {
  showResults("scissors");
  playerChoices.textContent = "Player picked scissors";
});

function getComputerChoice() {
  const getComputerChoiceArray = ["rock", "paper", "scissors"];
  const randomizeComputerChoice = Math.floor(Math.random() * 3);
  const computerChose = getComputerChoiceArray[randomizeComputerChoice];
  return computerChose;
}

getPlayerChoice();

function win(userChoice, computerChoice) {
  const updatePlayerScore = document.getElementById("playerScore");
  playerScore++;
  updatePlayerScore.textContent = playerScore;
  const winner = (displayResults.textContent =
    " Player chose " +
    userChoice +
    ". Computer chose " +
    computerChoice +
    ". You win! ");

  return winner;
}

function lose(userChoice, computerChoice) {
  const updateComputerScore = document.getElementById("computerScore");
  computerScore++;
  updateComputerScore.textContent = computerScore;
  const loser = (displayResults.textContent =
    " Player chose " +
    userChoice +
    ". Computer chose " +
    computerChoice +
    ". You lose! ");

  return loser;
}

function tie(userChoice, computerChoice) {
  const tied = (displayResults.textContent =
    " Player chose " +
    userChoice +
    ". Computer chose " +
    computerChoice +
    ". It's a tie ! ");

  return tied;
}

function showResults(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      console.log("You win");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      console.log("You lose");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      console.log("It's a tie.");
      break;
  }
}
