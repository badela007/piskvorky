import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';

const chooseButton = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('play__field--circle');
    currentPlayer = 'cross';
    document.getElementById('currentPlayer').src = 'obrazky/cross.svg';
  } else {
    event.target.classList.add('play__field--cross');
    currentPlayer = 'circle';
    document.getElementById('currentPlayer').src = 'obrazky/circle.svg';
  }

  //Výběr políček + posluchač
  const playButtons = document.querySelectorAll('.play__button');
  playButtons.forEach((button) => {
    button.addEventListener('click', chooseButton);
  });
  const gameField = Array.from(playButtons);

  const gameFieldSymbols = gameField.map((clickedSymbols) => {
    if (clickedSymbols.classList.contains('play__field--circle')) {
      return 'o';
    } else if (clickedSymbols.classList.contains('play__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  console.log(gameFieldSymbols);

  //Hledání vítěze
  const winner = findWinner(gameFieldSymbols);

  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Hurá, vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 250);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert(`Neraduj se, hra skončila nerozhodně`);
      location.reload();
    }, 250);
  }
};

//Výběr políček + posluchač
const playButtons = document.querySelectorAll('.play__button');
playButtons.forEach((button) => {
  button.addEventListener('click', chooseButton);
});

document
  .querySelector('.nav__game--restart')
  .addEventListener('click', function (evt) {
    const result = confirm('Opravdu chcete restartovat hru?');
    if (!result) {
      evt.preventDefault();
    }
  });
