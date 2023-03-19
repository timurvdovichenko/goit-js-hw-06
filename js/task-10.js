function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createCollectionButton: document.querySelector('button[data-create]'),
  destroyCollectionButton: document.querySelector('button[data-destroy]'),
  inputNumberCollection: document.querySelector('input'),
  divBoxesMarkup: document.querySelector('#boxes'),
};

refs.createCollectionButton.addEventListener('click', createBoxes);
refs.destroyCollectionButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = refs.inputNumberCollection.value;
  const divBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    // divBoxes.push(divBox);
    const divBox = document.createElement('div');
    divBox.style.width = 30 + 10 * i + 'px';
    divBox.style.height = 30 + 10 * i + 'px';
    divBox.style.background = getRandomHexColor();

    divBoxes[i] = divBox;
  }
  refs.divBoxesMarkup.append(...divBoxes);
  console.dir(refs.divBoxesMarkup);
}

function destroyBoxes() {
  refs.inputNumberCollection.value = '';
  refs.divBoxesMarkup.innerHTML = '';
}
// console.dir(refs.divBoxesMarkup);
