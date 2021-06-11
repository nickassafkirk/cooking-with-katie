const accountDetails = document.querySelector("#editDetails");
accountDetails.addEventListener("click", enableForm);

function enableForm(){
    accountDetails.classList.add("d-none");
    const formInputs = document.querySelectorAll("#account-update-form input");
    console.log(formInputs);
    formInputs.forEach(input => input.removeAttribute("disabled"));
    updateAccountButton = document.querySelector("#update_account_button");
    updateAccountButton.classList.remove("d-none");
    cancelUpdateButton = document.querySelector("#cancel_update_button");
    cancelUpdateButton.classList.remove("d-none");

    
}