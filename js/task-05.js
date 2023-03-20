const refs = {
  inputNameField: document.querySelector('#name-input'),
  outputNameField: document.querySelector('#name-output'),
};

refs.inputNameField.addEventListener('input', onInputName);

function onInputName(event) {
  if (event.currentTarget.value.trim() === '') {
    refs.outputNameField.textContent = 'Anonymous';
  } else if (event.currentTarget.value.trim() !== '') {
    refs.outputNameField.textContent = event.currentTarget.value.trim();
  } else {
    refs.outputNameField.textContent = 'Anonymous';
  }
}
