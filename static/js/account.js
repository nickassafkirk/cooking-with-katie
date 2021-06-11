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