'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const number = Number(document.querySelector('.guess').value);
  console.log(number, typeof number);

  if (!number) {
    displayMessage('Please Enter a Number!!');
  } else if (number !== SecretNumber) {
    if (score > 0) {
      displayMessage(number > SecretNumber ? 'To High' : 'To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      displayMessage('You Lost');
    }
  } else if (number === SecretNumber) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = SecretNumber;
    displayMessage('Well Done!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
