const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", (event) => {
    const inputContent = event.target.value.trim();
    const dataLength = textInput.getAttribute("data-length");
    console.log(dataLength);
    textInput.classList.remove("valid", "invalid");
    if (inputContent.length === 6) {
        textInput.classList.add("valid");
    } else {
        textInput.classList.add("invalid");
    }
});

