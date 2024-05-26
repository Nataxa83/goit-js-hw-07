function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxEl = document.querySelector('#boxes');
boxEl.style.display = 'flex';
boxEl.style.flexWrap = 'wrap';
boxEl.style.alignItems = 'flex-start';
boxEl.style.marginTop = '30px';


createBtn.addEventListener('click', e => {
  e.preventDefault();
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
    
  }
});

 destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxesMarkup = "";
  let boxSize = 30;

  for (let i = 1; i <= amount; i++){
    boxesMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}; margin-right: 10px;"></div>`;
    boxSize += 10;
  }
  boxEl.innerHTML = boxesMarkup;
  
}

function destroyBoxes() {
 
  boxEl.innerHTML = "";
}
 