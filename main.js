const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById('country');
const countryError = document.querySelector("#country + span.error");
const zipCode = document.getElementById("zipCode");
const zipCodeError = document.querySelector("#zipCode + span.error");
const password = document.getElementById('password');
const passwordValue = document.getElementById('password').value
const passwordError = document.querySelector("#password + span.error")
const eightCharacters = document.getElementById('eightCharacters');
const lowerCase = document.getElementById('lowerCase');
const upperCase = document.getElementById('upperCase');
const containNumber = document.getElementById('containNumber');
const specialCharacters = document.getElementById('specialCharacters');



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

zipCode.addEventListener("input", (event) => {
    if (zipCode.validity.valid) {
        zipCodeError.textContent = ""
        zipCodeError.className = "error"
    } else {
        showError();
    }
})

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        zipCodeError.textContent = ''
        zipCodeError.className = 'error'
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
    else if (!zipCode.validity.valid) {
        showError()
        event.preventDefault()
    }
    else if (!password.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    const passwordValue = document.getElementById('password').value
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
    else if (zipCode.validity.valueMissing){
        zipCodeError.textContent = "You need to enter a zip code"
    }
    else if (zipCode.validity.typeMismatch) {
        zipCodeError.textContent = "You need to enter a valid zip code"
    }
    else if (zipCode.validity.tooShort) {
        zipCodeError.textContent = `Zip should be at least ${zipCode.minLength} characters; you entered ${zipCode.value.length}.`
    }
    // else if (country.validity.tooLong) {
    //     zipCodeError.textContent = `Zip should be less than ${zipCode.maxLength} characters; you entered ${zipCode.value.length}.`
    // }
    // else if(password.validity.valueMissing) {
    //     passwordError.textContent = 'You need to enter a password'
    // }
    // else if (password.validity.tooShort) {
    //     passwordError.textContent = `Zip should be at least ${password.minLength} characters; you entered ${password.value.length}.`
    // }
    // else if (passwordValue.search(/[a-z]/i) < 0) {
    //     passwordError.textContent = "Your password must contain one  letter"
    // }
    emailError.className = "error active"
}

password.onkeyup = () => {
    let userPassword = password.value;
    let lowerCaseCharacter = /[a-z]/g;
    let upperCaseCharacter = /[A-Z]/g;
    let number = /[0-9]/g;
    let specialCharactersCheck = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g


    if (userPassword.match(lowerCaseCharacter)) {
        lowerCase.classList.add('valid');
        lowerCase.classList.remove('invalid');
    } else {
        lowerCase.classList.remove('valid');
        lowerCase.classList.add('invalid');
    }

    if (userPassword.match(upperCaseCharacter)) {
        upperCase.classList.add('valid');
        upperCase.classList.remove('invalid');
    } else {
        upperCase.classList.remove('valid');
        upperCase.classList.add('invalid');
    }
    if (userPassword.match(upperCaseCharacter)) {
        upperCase.classList.add('valid');
        upperCase.classList.remove('invalid');
    } else {
        upperCase.classList.remove('valid');
        upperCase.classList.add('invalid');
    }
    if (userPassword.match(number)) {
        containNumber.classList.add('valid');
        containNumber.classList.remove('invalid');
    } else {
        containNumber.classList.remove('valid');
        containNumber.classList.add('invalid');
    }
    if (userPassword.length > 8) {
        eightCharacters.classList.add('valid');
        eightCharacters.classList.remove('invalid');
    } else {
        eightCharacters.classList.remove('valid');
        eightCharacters.classList.add('invalid');
    }
    if (userPassword.match(specialCharactersCheck)) {
        specialCharacters.classList.add('valid');
        specialCharacters.classList.remove('invalid');
    } else {
        specialCharacters.classList.remove('valid');
        specialCharacters.classList.add('invalid');
    }
}