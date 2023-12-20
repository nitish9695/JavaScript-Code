let score =JSON.parse(localStorage.getItem('score')) ||{
  wins: 0,
  losses: 0,
  ties: 0
};
updateScore();
  
function pickComputerMove(){

  let computerMove = '';
  const randomNumber = Math.random();            

  if (randomNumber>=0 && randomNumber<1/3){      
    computerMove = 'Rock';
  } else if (randomNumber>=1/3 && randomNumber<2/3){
    computerMove = 'Paper';
  } else if (randomNumber>=2/3 && randomNumber<1){
    computerMove = 'Scissors';
  }
  return computerMove
}

let isautoPlaying = false;
let intervalId;
function autoplay(){
  if (!isautoPlaying){
  intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isautoPlaying =true;
  }else {
    clearInterval(intervalId);
    isautoPlaying = false;
  }
}

function playGame(playerMove){

  const computerMove = pickComputerMove(); 
  let result = '';

  if (playerMove === 'Scissors'){        
    if (computerMove === 'Rock'){
      result = 'You Lose.';
    } else if (computerMove === 'Paper'){
      result = 'You Win.';
    } else if (computerMove === 'Scissors'){
      result = 'Tie.';
    }      
  }else if (playerMove === 'Rock') {
    if (computerMove === 'Rock'){
      result = 'Tie.';
    } else if (computerMove === 'Paper'){
      result = 'You Lose.';
    } else if (computerMove === 'Scissors'){
      result = 'You Win.';
    }
  } else if (playerMove === 'Paper'){
    if (computerMove === 'Rock'){
      result = 'You Win.';
    } else if (computerMove === 'Paper'){
      result = 'Tie.';
    } else if (computerMove === 'Scissors'){
      result = 'You Lose.';
    }
  }
  if (result === 'You Win.'){
    score.wins ++;
  }else if (result == 'You Lose.'){
    score.losses ++;
  }else{
    score.ties ++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-move').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-emogi">
<img src="images/${computerMove}-emoji.png" class="move-emogi">
Computer`;
  
}

function updateScore(){      
  document.querySelector('.js-score').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}