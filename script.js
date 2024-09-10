
const playerText = document.querySelector("#playerChoice h3")
const computerText = document.querySelector("#computerChoice h3")
const playerScoreDisplay = document.querySelector("#playerScore h3")
const computerScoreDisplay = document.querySelector("#computerScore h3")

const choiceBtns = document.querySelectorAll(".btn")

const resetBtn = document.querySelector("#reset-btn")

let player;
let computer;


choiceBtns.forEach(button => { button.addEventListener("click", () => {

  player = button.textContent.toUpperCase();
  getComputerChoice();

  playerText.textContent = `You Choose : ${player}`;
  computerText.textContent = `The Computer choose : ${computer}`;

  checkScore();
  updateScoreDisplay();
})
  
});

/* computer choice for rock, paper and scissor */
function getComputerChoice () {
  const ranNum = Math.floor(Math.random()*3)+1;
  

  switch (ranNum){
    case 1 : 
      computer = "ROCK";
      break;
    case 2 :
      computer = "PAPER";
      break;
    case 3 : 
      computer = "SCISSORS";
      break;
  }
  
}



let playerScore = 0;
let computerScore =0;




function checkScore(){
  if(player === computer){
    //handle the logic
    playerText.textContent = "You guys chose the same. 🥹 It is a tie.";
    
    computerText.textContent = "";
  }
  else if (
    (player ==="ROCK" && computer ==="PAPER")||
    (player ==="PAPER" && computer ==="SCISSORS") ||
    (player === "SCISSORS" && computer === "ROCK")){
    computerScore++;
  }
  else {
    playerScore++;
  }
}


function updateScoreDisplay(){
  playerScoreDisplay.textContent = `Player Score : ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
}



resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  playerText.textContent = "Game has been reset.";
  computerText.textContent = "Start again!";
});