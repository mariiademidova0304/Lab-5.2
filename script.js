const registrationForm = document.getElementById(`registrationForm`);
const usernameInput = document.getElementById(`username`);
const emailInput = document.getElementById(`email`);
const passwordInput = document.getElementById(`password`);
const passwordMatch = document.getElementById(`confirmPassword`);
const submitButton = document.querySelector(`.button`);
const usernameError = document.getElementById(`usernameError`);
const emailError = document.getElementById(`emailError`);
const passwordError = document.getElementById(`passwordError`);
const passwordMatchError = document.getElementById(`confirmPasswordError`);

//checking whether username is saved to local storage
window.addEventListener(`load`, (event) => {
    const savedUsername = localStorage.getItem(`username`);
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
})

//adding event listener to username input
usernameInput.addEventListener(`blur`, (event) => {
    if (usernameInput.validity.valueMissing) {
        usernameInput.setCustomValidity(`Please, enter your name`);
//adding invalid class to have a red border - not working, though class is added
        usernameInput.classList.add(`invalid`);
    } else {
        usernameInput.setCustomValidity(``);
        if (usernameInput.classList.contains(`invalid`)) {
            usernameInput.classList.remove(`invalid`);
        }
        usernameInput.classList.add(`valid`);
    }
    usernameError.textContent = usernameInput.validationMessage;
})
//event listener to check email
emailInput.addEventListener(`blur`, (event) => {
    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity(`Please, enter your email`);
        emailInput.classList.add(`invalid`);
//checking whether the type is correct
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity(`Please, enter valid email address`);
        emailInput.classList.add(`invalid`);
    } else {
        emailInput.setCustomValidity(``);
        if (emailInput.classList.contains(`invalid`)) {
            emailInput.classList.remove(`invalid`);
        }
        emailInput.classList.add(`valid`);
    }
    emailError.textContent = emailInput.validationMessage;
})
//checking input for password
passwordInput.addEventListener(`blur`, (event) => {
    if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity(`Please, enter your password`);
//checking if password is too short as per requirement to use tooshort
    } else if (passwordInput.validity.tooShort) {
        passwordInput.setCustomValidity(`Password should be at least 8 characters`);
//checking mismatch with the pattern
    } else if (passwordInput.validity.patternMismatch) {
        passwordInput.setCustomValidity(`Password must contain at least one uppercase letter, one lowercase letter and one number`);
    } else {
        passwordInput.setCustomValidity(``);
        if (passwordInput.classList.contains(`invalid`)) {
            passwordInput.classList.remove(`invalid`);
        }
        passwordInput.classList.add(`valid`);
    }
    passwordError.textContent = passwordInput.validationMessage;
})

//checking if matching password is empty and if it's exactly the same
passwordMatch.addEventListener(`blur`, (event) => {
    console.log(`password input`, passwordInput.value);
    console.log(`password match`, passwordMatch.value);
    if (passwordMatch.validity.valueMissing) {
        passwordMatch.setCustomValidity(`Please, confirm your password`);
    } else if (passwordMatch.value !== passwordInput.value) {
        passwordMatch.setCustomValidity(`Passwords do not match!`);
    } else {
        passwordMatch.setCustomValidity(``);
        if (passwordMatch.classList.contains(`invalid`)) {
            passwordMatch.classList.remove(`invalid`);
        }
        passwordMatch.classList.add(`valid`);
    }
    passwordMatchError.textContent = passwordMatch.validationMessage;
})

//submitting the form with a final check, alerting if something is wrong
registrationForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    if (!registrationForm.checkValidity()) {
        alert(`Please, check the fields again!`);
    } else {
        alert(`Form submitted`);
//saving username to local storage and clearing input fields
        localStorage.setItem(`username`, usernameInput.value);
        usernameInput.value = ``;
        emailInput.value = ``;
        passwordInput.value = ``;
        passwordMatch.value = ``;
    }
})


