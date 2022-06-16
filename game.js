


console.log(computerPlay());






function computerPlay() {
    let pick = ['rock', 'paper', 'scissors'];
    let random = pick[Math.floor(Math.random() * 3)];

    return random;
}
