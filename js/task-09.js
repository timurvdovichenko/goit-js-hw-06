function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanColorText: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('button.change-color'),
  bodyBackgroundColor: document.body,
};

// console.log(refs.spanColorText);
// console.log(refs.buttonChangeColor);
// console.dir(refs.bodyBackgroundColor);
// refs.bodyBackgroundColor.style.background = 'red';

refs.buttonChangeColor.addEventListener('click', onButtonChangeBgColor);

function onButtonChangeBgColor(event) {
  refs.bodyBackgroundColor.style.background = getRandomHexColor();
  refs.spanColorText.textContent = getRandomHexColor();
}
