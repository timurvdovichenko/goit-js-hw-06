const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  textSpan: document.querySelector('#text'),
  fontSizeDefault: (document.querySelector('#text').style.fontSize = `${
    document.querySelector('#font-size-control').value
  }px`),
};

refs.fontSizeControl.addEventListener('input', onMoveInput);

function onMoveInput() {
  refs.textSpan.style.fontSize = `${refs.fontSizeControl.value}px`;
}
