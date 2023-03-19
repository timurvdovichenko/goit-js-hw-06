const formRefs = {
  loginForm: document.querySelector('.login-form'),
};

console.dir(formRefs.loginForm);

formRefs.loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     formData[name] = value;
  //   });

  //   console.log(formData);

  const formEmail = event.currentTarget.email.value;
  const formPassword = event.currentTarget.password.value;

  if (!formEmail || !formPassword) {
    alert('Будь ласка заповніть всі поля реєстрації!');
  } else {
    const formDetails = {
      login: `Login is: ${formEmail}`,
      password: `Password is: ${formPassword}`,
    };
    console.table(formDetails);
    event.currentTarget.reset();
  }
}
