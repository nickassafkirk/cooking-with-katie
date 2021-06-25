const accountDetails = document.querySelector("#editDetails");
accountDetails?.addEventListener("click", enableForm);

function enableForm(){
    accountDetails.classList.add("d-none");
    const formInputs = document.querySelectorAll("#account-update-form input");
    formInputs.forEach(input => input.disabled = false);
    let updateAccountButton = document.querySelector("#update_account_button");
    updateAccountButton.classList.remove("d-none");
    let cancelUpdateButton = document.querySelector("#cancel_update_button");
    cancelUpdateButton.classList.remove("d-none");
    /* Disable form and revert changes on cancel */
    cancelUpdateButton.addEventListener("click", function() {
        updateAccountButton.classList.add("d-none");
        cancelUpdateButton.classList.add("d-none");
        accountDetails.classList.remove("d-none");
        formInputs.forEach(input => input.disabled = true);
    });
}

const addCategory = document.querySelector("#add-category");
addCategory?.addEventListener("change", addNewInput);

function addNewInput(){
    let inputParent = document.querySelector("#add-category-parent");
    let num = document.querySelectorAll(".new-category-input").length;
    let newRow = document.createElement('input');
    newRow.innerHTML = `<input type="text" name="new-category-${num + 1}" class="new-category-input" id="add-category-${num + 1}">`;
    inputParent.appendChild(newRow);
}

let editButtons = document.querySelectorAll("#account-categories form button[type=button]");
editButtons.forEach(button => button.addEventListener('click', confirmChoice));

function confirmChoice(event) {
    editButtons.forEach(button => button.removeEventListener('click', confirmChoice, true));
    let form = event.target.parentNode.parentNode;
    let confirmPopUp = document.createElement('div');
    confirmPopUp.setAttribute("id",'confirm-popup');
    confirmPopUp.innerHTML = `<div>
                                  <h4>Are you Sure You?</h4>
                                  <div>
                                      <button type="button" id="confirmation-button" class="btn btn-success">Yes</button>
                                      <button type="button" id="cancel-button" class="btn btn-danger">Cancel</button>
                                  </div>
                               </div>`;
    
    let parentContainer = document.querySelector(".insert-popup");
    parentContainer.appendChild(confirmPopUp);

    let confirmationButton = document.querySelector('#confirmation-button');
    let cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', cancel);
    confirmationButton.addEventListener('click', update);

    function cancel() {
        confirmPopUp.remove();
        return form.reset();
    }

    function update() {
        return form.submit();
    }
    return editButtons.forEach(button => button.addEventListener('click', confirmChoice));
}

const accountMenuLinks = document.querySelectorAll("#account-menu a");
accountMenuLinks.forEach(link => link.addEventListener("click", goToAccountSection));

function goToAccountSection(event){
    let accountSections = document.querySelectorAll(".account-container");
    accountSections.forEach(section => section.classList.add("d-none"));
    let selectedMenuLink = event.target.getAttribute('href');
    let revealSection = document.querySelector(selectedMenuLink);
    revealSection.classList.remove("d-none");
}




