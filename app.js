/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, preDice, goals,dice1,dice2,
rollDice;

function newGame() {
   scores = [0, 0];
   roundScore = 0;
   activePlayer = 0;
   gamePlaying = true;
  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
  
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'PLAYER 1' 
  document.getElementById('name-1').textContent = 'PLAYER 2' 
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  preDice = [0, 0];
}

newGame();

document.getElementById('submit-btn').addEventListener('click', function() {
  goals = document.getElementById('goal').value;
})

// function  dicefinal ()  {
//   if(preDice.indexOf(6) >= 0 && (dice1 === 6 || dice2 === 6) ) {
//     scores[activePlayer] = 0;
//     document.getElementById('score-' + activePlayer).textContent = '0';
//     console.log(dice1,dice2);
//     console.log('reset');
//     nextPlayer();
//   } else if (dice1 !== 1 && dice2 !== 1) {
//     roundScore += (dice1 + dice2);
//     document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     preDice = [dice1, dice2];
//     console.log(dice1,dice2);
//     console.log(preDice);
//   } else {
//     console.log(dice1,dice2);
//     nextPlayer();
//   }
// }




document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    rollDice = 0;
    function loopSlow (fn, loop, inter) {
      for (i = 0; i < loop; i ++) {
        setTimeout(fn, i * inter);
        rollDice ++ ;
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        if (rollDice === 20) {
          if(preDice.indexOf(6) >= 0 && (dice1 === 6 || dice2 === 6) ) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            console.log(dice1,dice2);
            console.log('reset');
            nextPlayer();
          } else if (dice1 !== 1 && dice2 !== 1) {
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            preDice = [dice1, dice2];
            console.log(dice1,dice2);
            console.log(preDice);
          } else {
            console.log(dice1,dice2);
            nextPlayer();
          }
        }
      }
    }
    function diceRool () {
      
      let diceDOM1 = document.querySelector('.dice-1');
      let diceDOM2 = document.querySelector('.dice-2');
    
      diceDOM1.style.display = 'block';
      diceDOM2.style.display = 'block';
      diceDOM1.src = 'dice-' + dice1 + '.png';
      diceDOM2.src = 'dice-' + dice2 + '.png';
      console.log(dice1,dice2);
    }

    
    
    
    loopSlow(diceRool, 20,20);
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() { 
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
  
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (goals > 0) {
      if (scores[activePlayer] >= goals ) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !!';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
      }else {
        nextPlayer();
      }
    }else {
      if (scores[activePlayer] >= 30 ) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !!';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
      }else {
        nextPlayer();
      }
    }
  }


  


  
}) 

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    preDice = [0,0];
    console.log(preDice);
}

document.querySelector('.btn-new').addEventListener('click', newGame);







































