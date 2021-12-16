const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(evt) {
    const isValid = evt.currentTarget.value.length === parseInt(inputRef.dataset.length);
    isValid ? onValidValue() : onInvalidValue();
}

function onValidValue() {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid')
}

function onInvalidValue() {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid')
}