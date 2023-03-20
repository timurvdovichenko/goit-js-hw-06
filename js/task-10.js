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
  minInputQuantity: Number(document.querySelector('input').attributes.min.nodeValue),
  maxInputQuantity: Number(document.querySelector('input').attributes.max.nodeValue),
  stepInputValue: Number(document.querySelector('input').attributes.step.nodeValue),
};

refs.createCollectionButton.addEventListener('click', createBoxes);
refs.destroyCollectionButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = refs.inputNumberCollection.value;
  const divBoxes = [];
  if (amount < refs.minInputQuantity || amount > refs.maxInputQuantity) {
    alert(`Введіть число від ${refs.minInputQuantity} до ${refs.maxInputQuantity}`);
    destroyBoxes();
  } else {
    for (let i = 0; i < amount; i += refs.stepInputValue) {
      // divBoxes.push(divBox);
      const divBox = document.createElement('div');
      divBox.style.width = 30 + 10 * i + 'px';
      divBox.style.height = 30 + 10 * i + 'px';
      divBox.style.background = getRandomHexColor();

      divBoxes[i] = divBox;
    }
  }
  refs.divBoxesMarkup.append(...divBoxes);
  // console.dir(refs.divBoxesMarkup);
}

function destroyBoxes() {
  refs.inputNumberCollection.value = '';
  refs.divBoxesMarkup.innerHTML = '';
}
