// starting properties for landing page //
document.getElementById('rock').className = 'choice';
document.getElementById('paper').className = 'choice';
document.getElementById('scissors').className = 'choice';
document.getElementById('cpuRock').style.display = 'none';
document.getElementById('cpuPaper').style.display = 'none';
document.getElementById('cpuScissors').style.display = 'none';

function hidePanels() {     // Hides panels that are not the active one //
  document.getElementById('rock').style.display = 'none';
  document.getElementById('paper').style.display = 'none';
  document.getElementById('scissors').style.display = 'none';
  document.getElementById('cpuRock').style.display = 'none';
  document.getElementById('cpuPaper').style.display = 'none';
  document.getElementById('cpuScissors').style.display = 'none';
}

function getComputerChoice() { // Computer will make a randomized choice after the player chooses //
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return computerRock();
      break;
    case 1:
      return computerPaper();
      break;
    case 2:
      return computerScissors();
      break;
  }
}


let computerChoice = ""

function computerRock() { // When person chooses, computer randomly picks rock //
  document.getElementById('cpuRock').style.display = 'block';
  document.getElementById('cpuRock').className = 'afterChoice';
  let computerChoice = "rock"
}

function computerPaper() { // When person chooses, computer randomly picks paper //
  document.getElementById('cpuPaper').style.display = 'block';
  document.getElementById('cpuPaper').className = 'afterChoice';
  let computerChoice = "paper"
}

function computerScissors() { // When person chooses, computer randomly picks scissors //
  document.getElementById('cpuScissors').style.display = 'block';
  document.getElementById('cpuScissors').className = 'afterChoice';
  let computerChoice = "scissors"
}

let userChoice = ""

function playRock() { // When rock is clicked, person will play rock //
  hidePanels();
  document.getElementById('rock').style.display = 'block';
  let userChoice = "rock"
}
function playPaper() { // When paper is clicked, person will play paper //
  hidePanels();
  document.getElementById('paper').style.display = 'block';
  let userChoice = "paper"
}
function playScissors() { // When scissors is clicked, person will play scissors //
  hidePanels();
  document.getElementById('scissors').style.display = 'block';
  let userChoice = "scissors"
}
function reset() { // Resets the game //
  document.getElementById('rock').style.display = '';
  document.getElementById('paper').style.display = '';
  document.getElementById('scissors').style.display = '';
  document.getElementById('cpuRock').style.display = 'none';
  document.getElementById('cpuPaper').style.display = 'none';
  document.getElementById('cpuScissors').style.display = 'none';
}

let playerScore = 0
let computerScore = 0

// Determines the winner 
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return document.getElementById("result").innerHTML = "You tied with the computer!"
  }
}