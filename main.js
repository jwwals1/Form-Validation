const email = document.getElementById("email")
const form = document.querySelector("form");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "You need to enter a valid email address"
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
    }
    emailError.className = "error active"
}