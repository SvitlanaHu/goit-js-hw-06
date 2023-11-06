const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";
boxesContainer.style.padding = "20px";
boxesContainer.style.gap = "10px";
boxesContainer.style.backgroundColor = "lightgray";

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputNumber.value;
  console.log(amount);
  let boxesMarkup = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const sizeItem = 30 + i * 10;
    box.style.width = `${sizeItem}px`;
    box.style.height = `${sizeItem}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.border = "2px solid white";
    boxesMarkup.push(box);
  }

  boxesContainer.append(...boxesMarkup);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}