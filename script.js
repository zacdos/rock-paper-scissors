let humanScore = 0;
let computerScore = 0; 

function playRound() {
    for (i=0; i<9; i++) {
        const humanChoice = prompt('rock, paper, or scissors?')
        console.log('Human plays ' + humanChoice);
        const computerChoice = Math.floor(Math.random() * 3 + 1); 
        console.log('Computer plays ' + computerChoice)
        if (humanChoice === computerChoice) {
            console.log('Tie round!');
            humanScore += 0;
        } else if (humanChoice === 'rock') {
            console.log('Human wins round!');
            humanScore += 1;
        } else if (humanChoice === 'rock') {
            console.log('Human wins round!');
            humanScore += 1;
        } else if (humanChoice === 'rock') {
            console.log('Human wins round!');
            humanScore += 1;
        } else {
            console.log('Computer wins round!');
            computerScore += 1;
        }
        console.log('Human: ' + humanScore + ', Computer: ' + computerScore);
        if (humanScore === 5) {
            console.log('Human wins the match!')
            break;
        }
        if (computerScore === 5) {
            console.log('Computer wins the match!')
            break;
        }
    }
}

playRound();