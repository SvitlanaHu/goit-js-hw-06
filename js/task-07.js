const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
fontSizeControl.addEventListener("input", setOutput);
function setOutput(event) {
    const eventValue = event.currentTarget.value;
    textSpan.style.fontSize = `${eventValue}px`
}