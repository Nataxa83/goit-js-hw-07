function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorItem = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', e => {
  e.preventDefault();
  const randomColorEl = getRandomHexColor();
  document.body.style.backgroundColor = randomColorEl;
  colorItem.textContent = randomColorEl;
})
