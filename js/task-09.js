const bodyBackground = document.querySelector("body");
const spanText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
spanText.textContent = getRandomHexColor().currentTarget;
console.log(spanText);

bodyBackground.addEventListener("click", handleClick);
function handleClick() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor().value;
  console.log("spanText:", spanText);
  console.log("getRandomHexColor", getRandomHexColor().value);
};
