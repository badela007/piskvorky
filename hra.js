import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';

const chooseButton = async (event) => {
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

  //Vytváření pole a znaků pro hru
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

  //Hledání vítěze a vypsání hlášky
  const winner = findWinner(gameFieldSymbols);

  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Hurá, vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 300);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert(`Neraduj se, hra skončila nerozhodně`);
      location.reload();
    }, 300);
  }
  if (currentPlayer === 'cross') {
    playButtons.forEach((playButton) => {
      playButton.disabled = true;
    });
    //Požadavek na API
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          board: gameFieldSymbols,
          player: 'x',
        }),
      },
    );

    //Vrácení souřadnic z API
    const data = await response.json();
    const { x, y } = data.position;
    const index = playButtons[x + y * 10];

    playButtons.forEach((playButton) => {
      if (
        playButton.classList.contains('play__field--cirle') ||
        playButton.classList.contains('play__field--cross')
      ) {
        playButton.disabled = true;
      } else {
        playButton.disabled = false;
      }
    });
    index.click();
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
