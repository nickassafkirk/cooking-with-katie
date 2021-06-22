const accountDetails = document.querySelector("#editDetails");
accountDetails.addEventListener("click", enableForm);

function enableForm(){
    accountDetails.classList.add("d-none");
    const formInputs = document.querySelectorAll("#account-update-form input");
    console.log(formInputs);
    formInputs.forEach(input => input.disabled = false);
    updateAccountButton = document.querySelector("#update_account_button");
    updateAccountButton.classList.remove("d-none");
    cancelUpdateButton = document.querySelector("#cancel_update_button");
    cancelUpdateButton.classList.remove("d-none");
    /* Disable form and revert changes on cancel */
    cancelUpdateButton.addEventListener("click", function() {
        updateAccountButton.classList.add("d-none");
        cancelUpdateButton.classList.add("d-none");
        accountDetails.classList.remove("d-none");
        formInputs.forEach(input => input.disabled = true);
    });
};

const addCategory = document.querySelector("#add-category");
addCategory.addEventListener("change", addNewInput)

function addNewInput(){
    let inputParent = document.querySelector("#add-category-parent");
    let num = document.querySelectorAll(".new-category-input").length;
    let newRow = document.createElement('input');
    newRow.innerHTML = `<input type="text" name="new-category-${num + 1}" class="new-category-input" id="add-category-${num + 1}">`
    inputParent.appendChild(newRow);
}

let editButtons = document.querySelectorAll("#account-categories form button[type=button]");
console.log(editButtons);
editButtons.forEach(button => button.addEventListener('click', confirmChoice));

function confirmChoice(event) {
    form = event.target.parentNode.parentNode

    let confirmPopUp = document.createElement('div');
    confirmPopUp.setAttribute("id",'confirm-popup');
    confirmPopUp.innerHTML = `<div>
                                  <p>Are you Sure you?</p>
                                  <div>
                                      <button type="button" id="confirmation-button" class="btn btn-success">Yes</button>
                                      <button type="button" id="cancel-button" class="btn btn-danger">Cancel</button>
                                  </div>
                               </div>`
    
    parentContainer = document.querySelector(".insert-popup")
    parentContainer.appendChild(confirmPopUp);

    let confirmationButton = document.querySelector('#confirmation-button')
    let cancelButton = document.querySelector('#cancel-button')
    cancelButton.addEventListener('click', cancel)
    confirmationButton.addEventListener('click', update)

    function cancel() {
        form.reset();
        confirmPopUp.remove();
    }

    function update() {
        form.submit();
    }
};

const accountMenuLinks = document.querySelectorAll("#account-menu a");
accountMenuLinks.forEach(link => link.addEventListener("click", goToAccountSection));

function goToAccountSection(event){
    let accountSections = document.querySelectorAll(".account-container")
    accountSections.forEach(section => section.classList.add("d-none"));
    selectedMenuLink = event.target.getAttribute('href');
    let revealSection = document.querySelector(selectedMenuLink).classList.remove("d-none")
}


const changePasswordConfirm = document.querySelector('#confirm-existing-password');  
changePasswordConfirm.addEventListener('change', checkPassword);

    function checkPassword(event){
        console.log(event.target)
        let passwordField = document.querySelector('#existing-password')
        let confirmField = document.querySelector('#confirm-existing-password')
        let password1 = passwordField.value;
        let password2 = confirmField.value;
        let validationMessage = document.querySelector(".validation-message")
        
            if (password1 === password2){
            console.log("match")
            confirmField.classList.remove("invalid-field")
            validationMessage.innerText = "Passwords Match";
            passwordField.classList.add("valid-field")
            confirmField.classList.add("valid-field")
            const changePassword = document.querySelector('#existing-password');
            changePassword.addEventListener('change', checkPassword);
            } else {
                console.log("no match")
                confirmField.classList.add("invalid-field")
                validationMessage.innerText = "Passwords Don't Match";
            }
        
    } 



