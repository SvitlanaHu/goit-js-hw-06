const textInput = document.querySelector("#validation-input")

textInput.addEventListener("blur", (event) => {
    textInput.textContent = event.currentTarget.value.trim();
    const dataLength = textInput.elements;
    console.log(dataLength);
    if (textInput.textContent.length === 6) {
        textInput.style.borderColor = "green";
    } else {
        textInput.style.borderColor = "red";

    }
});