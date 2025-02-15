function getComputerChoice(max = 3) {
    const computerSelection = Math.floor(Math.random() * 3 + 1);
    console.log('Computer plays: ' + computerSelection);
    return computerSelection;
  }
  
 function getHumanChoice() {
    const choice = prompt('rock paper or scissors?');
    console.log(choice);
    return choice;
 }

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function playRound(humanSelection, computerSelection) {
    getHumanChoice();
    getComputerChoice();
    if(humanSelection < computerSelection) {
        console.log('you lose');
    } else if (humanSelection > computerSelection) {
        console.log('you win');
    } else {
        console.log('tie!')
    }
 }  
 playRound();