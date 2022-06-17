
// Computer randomly selects paper, rock, or scissors
function computerPlay() {
    let pick = ['rock', 'paper', 'scissors'];
    let random = pick[Math.floor(Math.random() * 3)];
    return random;
}

//  Plays a round between computer and user
function round(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert("Paper wraps rock, you win!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert("Rock blunts scissors, you win!");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("Scissors cut paper - you win!");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert("Scissors cut paper - I win!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert("Paper wraps rock - I win!");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert("Rock blunts scissors - I win!");
    } else {
        alert("It's a tie!");
    }
  
}

round(prompt("paper, rock, scissors?"), computerPlay());





