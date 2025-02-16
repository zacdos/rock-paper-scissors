function humanChoice() {
    let choice = prompt('rock paper or scissors?');
    if (choice === "rock") {
        console.log(1);
        return 1;
    } else if (choice === "paper") {
        console.log(2);
        return 2;
    } else if (choice === "scissors") {
        console.log(3);
        return 3;
    } else {
        console.log(null);
        return null;
    }
}

humanChoice();