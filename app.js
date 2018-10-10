/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

init();
var activePlayer,playerPoints,prevPoints,gamePlaying,prevDiceValue;

function init(){
activePlayer = 0;
playerPoints = 0;
prevPoints = [0,0];
gamePlaying = true;
prevDiceValue = [];

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice, diceDOM;
        dice = Math.ceil(Math.random() * 6);
        prevDiceValue.push(dice);
        diceArraySize = prevDiceValue.length;
        if(prevDiceValue[diceArraySize-1] === prevDiceValue[diceArraySize-2] && prevDiceValue[diceArraySize-2] === 6){
            document.getElementById('score-'+activePlayer).textContent = 0;
            prevDiceValue = [];
            nextPlayer();
        }else if(dice !== 1){
        playerPoints += dice;
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        document.getElementById('current-'+activePlayer).textContent = playerPoints;
        }else{
            prevDiceValue = [];
            nextPlayer();
        }    
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    var setGoal;
    setGoal = document.querySelector('.setGoal').value;
    console.log(setGoal);
        if(gamePlaying){
        prevPoints[activePlayer] += playerPoints;
    document.getElementById('score-'+activePlayer).textContent = prevPoints[activePlayer];
    if(prevPoints[activePlayer] >= setGoal){
        gamePlaying = false;
        document.getElementById('name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('winner');
        return;
    }else{
    nextPlayer();
    }
}
});

function nextPlayer(){
    document.querySelector('.dice').style.display = 'none';        
    document.getElementById('current-'+activePlayer).textContent = 0;    
    playerPoints = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;  

}

document.querySelector('.btn-new').addEventListener('click',init);