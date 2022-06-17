
// Computer randomly selects paper, rock, or scissors
function computerPlay() {
    let pick = ['rock', 'paper', 'scissors'];
    let random = pick[Math.floor(Math.random() * 3)];
    return random;
}

//  Plays a round between computer and user
function round(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert("Paper wraps rock, you win!");
        playerWin ++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert("Rock blunts scissors, you win!");
        playerWin ++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("Scissors cut paper - you win!");
        playerWin ++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert("Scissors cut paper - I win!");
        computerWin ++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert("Paper wraps rock - I win!");
        computerWin ++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert("Rock blunts scissors - I win!");
        computerWin++;
    } else {
        alert("It's a tie!");
        tie++;
    }

}

// Sets a loop to play five games
function game() {
    
    for (let i = 0; i<5; i++){
        round(prompt("Paper, rock or scissors?"), computerPlay());
    }
    
    alert(`You won ${playerWin}, I won ${computerWin}, we tied ${tie}.`);    
}


// Keeps track of score
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;

//Function call to start game
game()






