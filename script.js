'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let number = document.querySelector('.number');
let currScore = document.querySelector('.score');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  }
  
  if (guess === secretNumber) {
    displayMessage('Correct number! You guess it :)');
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'rgb(0, 127, 0)';
    number.style.width = '25rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high+++' : 'Too low---');
      score--;
      currScore.textContent = score;
    } else {
      displayMessage('Game over. Try again!');
      currScore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  currScore.textContent = score;
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 255)';
});
