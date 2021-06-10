const accountDetails = document.querySelector("#editDetails");
accountDetails.addEventListener("click", enableForm);

function enableForm(){
    const formInputs = document.querySelectorAll("#account-update-form input");
    console.log(formInputs);
    formInputs.forEach(input => input.removeAttribute("disabled"));
}