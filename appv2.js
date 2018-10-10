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

document.querySelector('#popup1').style.display = 'none';
document.querySelector('#popup2').style.display = 'none';
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';
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
        var dice1, dice2, diceDOM;
        dice1 = Math.ceil(Math.random() * 6);
        dice2 = Math.ceil(Math.random() * 6);
        prevDiceValue.push(dice1);
        prevDiceValue.push(dice2);
        diceArraySize = prevDiceValue.length;
        if(prevDiceValue[diceArraySize-1] === prevDiceValue[diceArraySize-2] && prevDiceValue[diceArraySize-2] === 6){
            document.querySelector('#popup1').style.display = 'block';
            gamePlaying = false;
            document.getElementById('score-'+activePlayer).textContent = 0;
        prevDiceValue = [];
        prevPoints[activePlayer] = 0;
        nextPlayer();
        }else if(dice1 !== 1 && dice2 !== 1){
        playerPoints += dice1 + dice2;
        dice1DOM = document.querySelector('.dice1');
        dice2DOM = document.querySelector('.dice2');
        dice1DOM.style.display = 'block';
        dice2DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        document.getElementById('current-'+activePlayer).textContent = playerPoints;
        }else{
            document.querySelector('#popup2').style.display = 'block';
            gamePlaying = false;
            prevDiceValue = [];
            nextPlayer();
        }    
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    var setGoal;
    setGoal = document.querySelector('.setGoal').value;
    if(setGoal === ''){
        setGoal = 100;
    }
        if(gamePlaying){
        prevPoints[activePlayer] += playerPoints;
    document.getElementById('score-'+activePlayer).textContent = prevPoints[activePlayer];
    if(prevPoints[activePlayer] >= setGoal){
        gamePlaying = false;
        document.getElementById('name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('winner');
        return;
    }else{
    nextPlayer();
    }
}
});

function nextPlayer(){
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';        
    document.getElementById('current-'+activePlayer).textContent = 0;    
    playerPoints = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;  

}

document.querySelector('.btn-new').addEventListener('click',init);

document.querySelector('.close1').addEventListener('click',function(){
    gamePlaying = true;
    document.querySelector('#popup1').style.display = 'none';
});

document.querySelector('.close2').addEventListener('click',function(){
    gamePlaying = true;
    document.querySelector('#popup2').style.display = 'none';
});