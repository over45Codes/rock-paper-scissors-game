let playerScore = document.getElementById("player-scores");
let computerScore = document.getElementById("computer-scores");
const displayResults = document.querySelector(".displayResults");
const playerChoices = document.querySelectorAll("selection-choice");

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
  //replace the console.log with -  Create a variable that returns a text in the browser
  console.log("The computer chose ", computerChose);
  return computerChose;
}

getPlayerChoice();

function win(userChoice, computerChoice) {
  const winner = (displayResults.textContent =
    " Player chose " +
    userChoice +
    ". Computer chose " +
    computerChoice +
    ". You win! ");

  return winner;
  //console.log("You win !!");
}

function lose(userChoice, computerChoice) {
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
