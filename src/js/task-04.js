const incrsBtn = document.querySelector('[data-action = "increment"]');
const dcrsBtn = document.querySelector('[data-action = "decrement"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

incrsBtn.addEventListener('click', onIncrementClick);
dcrsBtn.addEventListener('click', onDecrementClick);

function onIncrementClick() { 
    counterValue += 1;
    valueRef.textContent = counterValue;
}

function onDecrementClick() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
