
let humanScore = 0;
let computerScore = 0;

function playRound() {
    for (i=0; i < 9; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    function getHumanChoice() {
        let choice = prompt('rock paper or scissors?');
        console.log ('You play: ' + choice);
        return choice;
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
        if(humanSelection === computerSelection) {
            console.log('tie!');
            return humanScore + 0;
        } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            console.log('Human: ' + (humanScore+1) + ', Computer: ' + computerScore)
            return humanScore + 1;
        } else if (humanSelection === 'paper' && computerSelection === 'rock') {
            console.log('Human: ' + (humanScore+1) + ', Computer: ' + computerScore)
            return humanScore + 1;
        } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            console.log('Human: ' + (humanScore+1) + ', Computer: ' + computerScore)
            return humanScore + 1;
        } else {
            console.log('Human: ' + humanScore + ', Computer: ' + (computerScore+1))
            return computerScore + 1;
        }
        let totalRounds = i;
        console.log('Total Rounds: ' + totalRounds);
    }
}

playRound();



