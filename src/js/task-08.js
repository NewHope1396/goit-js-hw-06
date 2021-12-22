const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();
    const {
        elements: { email, password }
    } = ev.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены!!!')
    }

    console.log({
        email: email.value,
        password: password.value
    })

    formRef.reset()
}
