const refs = {
  inputNameField: document.querySelector('#name-input'),
  outputNameField: document.querySelector('#name-output'),
};

refs.inputNameField.addEventListener('input', onInputName);

function onInputName(event) {
  refs.outputNameField.textContent = event.currentTarget.value;
}
