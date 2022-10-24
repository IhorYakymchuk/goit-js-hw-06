function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');


btnRef.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  spanRef.textContent = color;
})