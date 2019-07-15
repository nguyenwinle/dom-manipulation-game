// declare variables on top
var scores, roundScores, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// this hides the dice when game starts
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// event and event handlers using click
// use callback function
// anonymous function
// change image using src
document.querySelector('.btn-roll').addEventListener('click', function(){
    // random number
    // gives us a number between 1-6
    var dice = Math.floor(Math.random() * 6) + 1;

    // this shows the dice when button is clicked
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';

    // change img
    diceDom.src = './img/dice-'+ dice + '.png';

    //update the round score if the rolled number is not 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
    }
});

// set up an event listener for the hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + roundScore;

    // update user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won game
    if (scores[activePlayer] >= 10) {
        document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // next player
        nextPlayer();
    }
    
});

function nextPlayer() {
    // next player
        // id the dice equals 1 then we switch players 
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        if (activePlayer === 0) {
            activePlayer = 1;
            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
        } else {
            activePlayer = 0;
            // document.querySelector('.player-1-panel').classList.remove('active');
            // document.querySelector('.player-0-panel').classList.add('active');
        }

        roundScore = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

//start doing dom manipulation
// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;