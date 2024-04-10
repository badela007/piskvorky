let currentPlayer = 'circle';

const chooseButton = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('play__field--circle');
    currentPlayer = 'cross';
    document.getElementById('currentPlayer').src = 'obrazky/cross-black.svg';
  } else {
    event.target.classList.add('play__field--cross');
    currentPlayer = 'circle';
    document.getElementById('currentPlayer').src = 'obrazky/circle-black.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', chooseButton);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', chooseButton);
