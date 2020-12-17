let l = 0 
let w = 0
let t = 0

function game() {
    function playRound(playerSelection, computerSelection) { 
        if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        t++ ; return "It is a tie, Rock cannot beat Rock";
        } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        l++ ; return "You lose, paper gets around your Rock";
        } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        w++ ; return "You win, your Rock crush the Scissors";
        } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        w++ ; return "You win, your paper gets around the Rock "; 
        } else if ((playerSelection === "Paper") && (computerSelection === "Paper")) {
        t++ ; return "It is a tie, Paper cannot beat Paper";
        } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        l++ ; return "You lose, Scissors cut your Paper";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        l++ ; return "You lose, the Rock destroys your Scissors";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        w++ ; return "You win, your Scissors cut the Paper";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        t++ ; return "It is a tie, Scissros and Scissors"; 
        } else {
          return "Something went wrong";
        }
      }
      
      function random(number) {
      
       return Math.floor(Math.random()*number);
      
      }
      
      function computerPlay() {
        let result = random(3)
         if (result === 0) {
         return "Rock";
      }
         else if (result === 1) {
         return "Paper";
      }
         else {
         return "Scissors";
      } 
      }
      
      let playerSelection = prompt("Your turn, play rock, paper or scissors!");
      
      if (playerSelection.toLowerCase() == "rock") {
        playerSelection = "Rock";
      } else if (playerSelection.toLowerCase() == "paper") {
        playerSelection = "Paper";
      } else if (playerSelection.toLowerCase() == "scissors") {
        playerSelection = "Scissors";
      } else {
        playerSelection = undefined; alert("You should input a valid answer, Rock, Paper or Scissors!");
      }
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
}

let i = 0
while (i < 5) {
game();
    i++;
  }

anotherRound()

while (l + w + t != 5) {
    anotherRound()
}

finalResult()

function anotherRound() {
    if (l + w + t != 5) {
        game()
    }
}

function finalResult() {
if (l < w) {
  alert("CONGRATULATIONS, YOU ARE THE CHAMPION OF THE WORLD") ; console.log("CONGRATULATIONS, YOU ARE THE CHAMPION OF THE WORLD");
} else if (l > w) {
  alert("YOU ARE A LOSER") ; console.log("YOU ARE A LOSER");
} else {
  alert("WE NEED ONE MORE ROUND TO DECLARE THE WINNER") ; game (); finalResult();
  }
}
