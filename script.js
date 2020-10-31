function getPlayerChoice() {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", function () {
    const result = "rock";
    //replace the console.log with -  Create a variable that returns a text in the browser
    console.log("You chose ", result);
    showResults("rock");
    getComputerChoice();
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

getPlayerChoice();

function showResults(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      console.log("You win");
  }
}
