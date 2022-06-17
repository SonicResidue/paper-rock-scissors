
// Computer randomly selects paper, rock, or scissors
function computerPlay() {
    let pick = ['rock', 'paper', 'scissors'];
    let random = pick[Math.floor(Math.random() * 3)];
    return random;
}

//  Plays a round between computer and user
function round(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {alert("Paper wraps rock, you win!");}

    
}

round(prompt("paper, rock, scissors?"), computerPlay());





