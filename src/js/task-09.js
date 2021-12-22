function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
}