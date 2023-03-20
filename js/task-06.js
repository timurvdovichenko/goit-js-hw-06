const refs = {
  inputField: document.querySelector('#validation-input'),
  inputFieldMaxLength: Number(document.querySelector('#validation-input').dataset.length),
};

// refs.inputField.addEventListener('blur', onInputDataValidate);

refs.inputField.addEventListener('blur', onInputDataValidate);

function onInputDataValidate() {
  refs.inputField.value.trim().length === refs.inputFieldMaxLength
    ? (refs.inputField.className = 'valid')
    : (refs.inputField.className = 'invalid');
}

// function onInputDataValidate() {
//   console.log(refs.inputField.value.trim().length);
// }

console.dir(refs.inputField);
