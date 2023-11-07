const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
textSpan.style.fontSize = "56px";
fontSizeControl.addEventListener("input", setOutput);
function setOutput(event) {
    const eventValue = event.currentTarget.value;
    textSpan.style.fontSize = `${eventValue}px`;
}