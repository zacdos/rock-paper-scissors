function getHumanChoice() {
    let choice = prompt('rock paper or scissors?');
}

function getComputerChoice(max = 3) {
    const computerSelection = Math.floor(Math.random() * 3 + 1);
    console.log('Computer plays: ');
    if (computerSelection === 1) {
        console.log('rock');
        return 'rock';
    } else if (computerSelection === 2) {
        console.log('paper');
        return 'paper';
    } else if (computerSelection === 3) {
        console.log('scissors');
        return 'scissors';
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function playRound() {
    if(humanSelection === computerSelection) {
        console.log('tie!');
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        console.log('you win');
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        console.log('you win');
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        console.log('you win');
    } else {
        console.log('computer wins!')
    }
 } 
playRound()