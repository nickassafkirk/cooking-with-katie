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
