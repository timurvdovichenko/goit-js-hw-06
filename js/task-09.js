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

refs.buttonChangeColor.addEventListener('click', onButtonChangeBgColor);

function onButtonChangeBgColor(event) {
  const colorRandom = getRandomHexColor();
  refs.bodyBackgroundColor.style.background = colorRandom;
  refs.spanColorText.textContent = colorRandom;
}
