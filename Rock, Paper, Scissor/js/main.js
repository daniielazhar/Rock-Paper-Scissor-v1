// My First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissor?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissor.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissor"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissor"
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissor" && computer === "rock"
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissor.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
