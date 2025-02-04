const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
document.querySelector('.js-score').innerHTML = `Score:\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
function computerPick() {
    const randomValue = Math.random();
    if (randomValue < 1 / 3) return 'Rock';
    if (randomValue < 2 / 3) return 'Paper';
    return 'Scissor';
}


function play(playerChoice) {
    const computerChoice = computerPick();
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Tie';
        score.ties += 1;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        result = 'Win';
        score.wins += 1;
    } else {
        result = 'Loss';
        score.losses += 1;
    }

   if(result==='Win')
   {
    document.querySelector('.vido').innerHTML =`<video src="Salute.mp4" class="vid"  controls autoplay muted>`;
    setTimeout(() => {
        document.querySelector('.vido').innerHTML =` `;
    },4000);
   
}
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score').innerHTML = `Score:\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
 document.querySelector('.result').innerHTML = `Result : ${result}`;
 document.querySelector('.picked').innerHTML = `You: <img src="${playerChoice}.png" class="img"> Computer: <img src="${computerChoice}.png" class="img">`

    
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score').innerHTML =`Game reset! Score is now:\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
