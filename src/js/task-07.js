const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(ev) {
    textRef.style.fontSize = `${ev.currentTarget.value}px`
}