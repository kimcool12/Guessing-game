'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

// --- CHECK BUTTON EVENT LISTENER ---
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // WHEN PLAYER INPUTS AN INVALID NUMBER
  if (!guess) {
    document.querySelector('.message').textContent =
      '...Please enter a valide number.✖️';
  }
  // WHEN THE PLAYER GUESSES THE RIGHT NUMBER
  else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > HighScore) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
    // when the guess is not correct
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high 📉 , Go lower' : 'Too Low 📉 , Go higher';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose😔';
      document.querySelector('.score').textContent = 0;
    }
  }
  // // WHEN THE PLAYER GUESSES A HIGHER NUMBER
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📉 , Go lower';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😔';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // WHEN THE PLAYER GUESSES A LOWER NUMBER
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low 📉 , Go higher';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😔';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// --- AGAIN BUTTON EVENT LISTENER (Moved outside) ---
document.querySelector('.again').addEventListener('click', function () {
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').style.color = '#60b347';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#333';
});
