const refs = {
  inputField: document.querySelector('#validation-input'),
  inputFieldMaxLength: document.querySelector('#validation-input').dataset.length,
};

refs.inputField.addEventListener('blur', onInputDataValidate);

function onInputDataValidate() {
  refs.inputField.value.length < refs.inputFieldMaxLength
    ? (refs.inputField.className = 'invalid')
    : (refs.inputField.className = 'valid');
}
