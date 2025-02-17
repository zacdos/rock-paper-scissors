let humanScore = 0;
let computerScore = 0; 

function playRound() {
    for (i=0; i<=99; i++) {
        const humanChoice = prompt('rock, paper, or scissors?'); 
        console.log('Human plays ' + humanChoice);
        let computerChoice = Math.floor(Math.random() * 3 + 1);
            if (computerChoice === 1) {
                console.log('rock');
                computerChoice = 'rock';
            } else if (computerChoice === 2) {
                console.log('paper');
                computerChoice = 'paper';
            } else if (computerChoice === 3) {
                console.log('scissors');
                computerChoice = 'scissors';
            };
        console.log('Computer plays ' + computerChoice)
        if (humanChoice === computerChoice) {
            console.log('Tie round!');
            humanScore += 0;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('Human wins round!');
            humanScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('Human wins round!');
            humanScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('Human wins round!');
            humanScore += 1;
        } else {
            console.log('Computer wins round!');
            computerScore += 1;
        }
        console.log('SCORES: Human ' + humanScore + ', Computer ' + computerScore);
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