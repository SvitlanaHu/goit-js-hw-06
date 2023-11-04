const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
    if (nameOutput.textContent === "") {
        nameOutput.textContent = "Anonymous";
        return nameOutput;
    }

});
