const loginForm = document.querySelector(".login-form");
const user = { email: "", password: "" };
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        console.log("Please fill in all the fields!");
        return alert("Please fill in all the fields!");
    }

    user.email = email;
    user.password = password;
    console.log(user);

    form.reset();
});
