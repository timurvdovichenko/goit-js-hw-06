const refsCounter = {
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  numberValue: document.querySelector('#value'),
  counterValue: 0,
};

refsCounter.buttonIncrement.addEventListener('click', onIcrementValue);
function onIcrementValue() {
  refsCounter.counterValue += 1;
  refsCounter.numberValue.textContent = refsCounter.counterValue;
}

refsCounter.buttonDecrement.addEventListener('click', onDecrementValue);
function onDecrementValue() {
  refsCounter.counterValue -= 1;
  refsCounter.numberValue.textContent = refsCounter.counterValue;
}
