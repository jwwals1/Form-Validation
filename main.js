const email = document.getElementById("email")
const form = document.querySelector("form");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById('country')
const countryError = document.querySelector("#country + span.error")


email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error";
    } else {
        showError();
    }
});

country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        countryError.textContent = ""
        countryError.className = "error"
    } else {
        showError();
    }
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError()
        event.preventDefault()
    }
    else if (!country.validity.valid) {
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
    else if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter a country"
    }
    else if (country.validity.typeMismatch) {
        countryError.textContent = "You need to enter a valid country"
    }
    else if (country.validity.tooShort) {
        countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`
    }
    emailError.className = "error active"
}