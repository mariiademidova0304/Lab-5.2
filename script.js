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

usernameInput.addEventListener(`blur`, (event) => {
    if (usernameInput.validity.valueMissing) {
        usernameInput.setCustomValidity(`Please, enter your name`);
        usernameInput.classList.add(`invalid`);
    } else {
        usernameInput.setCustomValidity(``);
        if(usernameInput.classList.contains(`invalid`)){
            usernameInput.classList.remove(`invalid`);
        }
        usernameInput.classList.add(`valid`);
    }
    usernameError.textContent = usernameInput.validationMessage;
})

emailInput.addEventListener(`blur`, (event) => {
    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity(`Please, enter your email`);
        emailInput.classList.add(`invalid`);
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity(`Please, enter valid email address`);
        emailInput.classList.add(`invalid`);
    } else {
        emailInput.setCustomValidity(``);
        if(emailInput.classList.contains(`invalid`)){
            emailInput.classList.remove(`invalid`);
        }
        emailInput.classList.add(`valid`);
    }
    emailError.textContent = emailInput.validationMessage;
})

passwordInput.addEventListener(`blur`, (event) => {
    if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity(`Please, enter your password`);
    } else if (passwordInput.validity.tooShort) {
        passwordInput.setCustomValidity(`Password should be at least 8 characters`);
    } else if(passwordInput.validity.patternMismatch){
passwordInput.setCustomValidity(`Password must contain at least one uppercase letter, one lowercase letter and one number`);
    } else {
        passwordInput.setCustomValidity(``);
        if(passwordInput.classList.contains(`invalid`)){
            passwordInput.classList.remove(`invalid`);
        }
        passwordInput.classList.add(`valid`);
    }
    passwordError.textContent = passwordInput.validationMessage;
})
passwordMatch.addEventListener(`blur`, (event) =>{
    console.log(`password input`, passwordInput.value);
    console.log(`password match`, passwordMatch.value);
    if (passwordMatch.validity.valueMissing) {
        passwordMatch.setCustomValidity(`Please, confirm your password`);
    } else if(passwordMatch.value !== passwordInput.value){
passwordMatch.setCustomValidity(`Passwords do not match!`);
    } else {
        passwordMatch.setCustomValidity(``);
        if(passwordMatch.classList.contains(`invalid`)){
            passwordMatch.classList.remove(`invalid`);
        }
        passwordMatch.classList.add(`valid`);
    }
    passwordMatchError.textContent = passwordMatch.validationMessage;
})


registrationForm.addEventListener(`submit`, (event) => {
        event.preventDefault();
        if(!registrationForm.checkValidity()){
            alert(`Please, check the fields again!`);
        } else {
            alert(`Form submitted`);
        }
})


