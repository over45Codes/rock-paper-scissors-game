const playerScore = 0;
const computerScore = 0;
const playerScores_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreResults = document.querySelector(".results");

function game(userChoice) {
  console.log(" player choose   " + userChoice);
}
function getPlayerChoice() {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", function () {
    game("rock");
    showResults("rock");
  });

  const paper = document.getElementById("paper");
  paper.addEventListener("click", function () {});

  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", function () {});
}

function getComputerChoice() {
  const getComputerChoiceArray = ["rock", "paper", "scissors"];
  const randomizeComputerChoice = Math.floor(Math.random() * 3);
  const computerChose = getComputerChoiceArray[randomizeComputerChoice];
  //replace the console.log with -  Create a variable that returns a text in the browser
  console.log("The computer chose ", computerChose);
  return computerChose;
}

//function win() {
//console.log("WIN");
//}

getPlayerChoice();

function showResults(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win();
      //console.log("You win");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      //console.log("You loose");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
    //console.log("It's a draw.");
  }
}
