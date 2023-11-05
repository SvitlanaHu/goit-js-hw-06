const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputNumber = document.querySelector("input");
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.padding = "20px";
boxes.style.backgroundColor = "gray";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

inputNumber.addEventListener("change", handleInput);
function handleInput(event) {
  const amount = event.currentTarget.value;
  console.log(amount);
  return amount;
}

btnCreate.addEventListener("click", createBoxes);
function createBoxes(amount) {
  const number = amount.currentTarget.value;
  let widthItem = 20;

  // boxes.reduce.
  for (let i = 0; i < number; i++) {

    const listDiv = boxes.createElement("div");
    widthItem += 10;
    listDiv.style.width = `${widthItem}px`;
    listDiv.style.height = `${widthItem}px`;
    listDiv.children.style.backgroundColor = getRandomHexColor();
    listDiv.append(listDiv)
    console.log(listDiv);
  }
}

btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.length = 0;
}
