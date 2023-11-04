const bodyBackground = document.querySelector("body")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bodyBackground.addEventListener("click", handleClick);
function handleClick() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
};
