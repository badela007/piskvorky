let currentPlayer = 'circle';
const buttons = document.querySelectorAll('button');

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
};

buttons.forEach((button) => {
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
