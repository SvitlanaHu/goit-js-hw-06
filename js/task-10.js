const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";
boxesContainer.style.padding = "20px";
boxesContainer.style.backgroundColor = "gray";

inputNumber.addEventListener('input', handleInput);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function handleInput(event) {
  const amount = event.target.value;
  console.log(amount);
  return amount;
}

function createBoxes() {
  const amount = handleInput();
  let widthItem = 30;
  let heightItem = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const boxMarkup = `<div style="width:${widthItem}px; height:${heightItem}px; background-color:${color}"></div>`;
    boxesMarkup += boxMarkup;

    widthItem += 10;
    heightItem += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  // boxesContainer.innerHTML = '';
  boxesContainer.length = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}