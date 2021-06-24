/* Validate password matches for account change password form */
const changePasswordConfirm = document.querySelector('#confirm-existing-password');  
changePasswordConfirm?.addEventListener('change', checkPassword);
const newPasswordConfirm = document.querySelector('#confirm-new-password');  
newPasswordConfirm?.addEventListener('change', checkPassword);
const signUpPasswordConfirm = document.querySelector('#confirm-sign-up-password')
signUpPasswordConfirm?.addEventListener('change', checkPassword);

/**
 * Checks a password form input and a confirm password form input for equality.
 * confirm password ID must match password ID but with prefix: "confirm-"
 * @param {*} event 
 */
function checkPassword(event) {
    const targetFieldId = event.target.id;
    let confirmField;
    let passwordField;
    let confirmFieldId;
    let passWordFieldId;
    if (targetFieldId.includes("confirm-")) {
        confirmField = event.target
        confirmFieldId = confirmField.id
        passWordFieldId = confirmFieldId.split("confirm-").pop();
        passwordField = document.querySelector(`#${passWordFieldId}`)
    } else {
        passwordField = event.target;
        confirmFieldId = "confirm-" + passwordField.id;
        console.log(confirmFieldId)
        confirmField = document.querySelector(`#${confirmFieldId}`);
    }
    
    console.log(confirmField)
    console.log(passwordField)
    let password1 = passwordField.value;
    let password2 = confirmField.value;
    let validationMessage = confirmField.nextElementSibling;
    console.log(validationMessage)

    if (password1 === password2) {
        console.log("match")
        confirmField.classList.remove("invalid-field")
        validationMessage.innerText = "Passwords Match";
        passwordField.classList.add("valid-field")
        confirmField.classList.add("valid-field")
        passwordField.addEventListener('change', checkPassword);
    } else {
        console.log("no match")
        passwordField.classList.remove("valid-field")
        confirmField.classList.remove("valid-field")
        confirmField.classList.add("invalid-field")
        validationMessage.innerText = "Passwords Don't Match";
    }
} 

// contact form validation

const contactSubmit = document.querySelector('#contact-form');
contactSubmit?.addEventListener('submit', validate);

/**
 * form validation for contact page
 * @param {e} event 
 */
function validate(event) {
    event.preventDefault();
    let fname = document.querySelector("#contact-fname");
    const fnameMessage = fname.parentNode.lastElementChild;
    let email = document.querySelector("#contact-email");
    const emailMessage = email.parentNode.lastElementChild;
    let message = document.querySelector("#contact-message");
    const messageMessage = message.parentNode.lastElementChild;

    if (fname.value === "") {
        fname.classList.add('invalid-field')
        fnameMessage.innerText = "You need to add your name"
        return false;
    } else if (fname.value.length < 3 || fname.value.length > 30 ){
        fname.classList.add('invalid-field')
        fnameMessage.innerText = "Your name must be more than 3 charachters and less than 30";
        return false;
    } else {
        removeValMessage(fname)
    }

    if (!emailIsValid(email.value)) {
        email.classList.add('invalid-field')
        emailMessage.innerText = 'Please enter a valid email address'
        return false;
    } else {
        removeValMessage(email)
    }

    if (message.value === "") {
        message.classList.add('invalid-field')
        messageMessage.innerText = 'You forgot to add a message'
        return false;
    } else if (message.value.length > 500) {
        message.classList.add('invalid-field')
        messageMessage.innerText = 'Your message is too long: max 500 charachters'
        return false;
    } else {
        removeValMessage(message)
    }

    contactSubmit.submit();
}


/**
 * Helper function removes negative validation messages.
 */
function removeValMessage(identifier){
    `${identifier}Message`.innerText = ""
    identifier.classList.remove('invalid-field');
    identifier.classList.add('valid-field');
}


/**
 * Helper function to check email is formatted correctly
 * credit: Tyler McGinnis: https://ui.dev/validate-email-address-javascript/
 * @param {string} email 
 */
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


