window.addEventListener("load", clipParagraph(".recipe-intro", 150));

/**
 * Clips inner text of selected dom Element/s
 * To specified number of charachters.
 * @param {string} selector add ".", "#" etc.. for class, ID etc..
 * @param {number} maxLength  max # characters in selector's innerText
 */
function clipParagraph(selector, maxLength) {
    let focusElements = document.querySelectorAll(selector);
    for (i = 0; i < focusElements.length; i++) {
        let singleElement = focusElements[i];
        text = singleElement.innerText;
         if (text.length > maxLength) {
           let clippedElement = text.substr(0, maxLength) + " ...";
           singleElement.innerText = clippedElement;
        }; 
    };
}; 

/**
 * Click each star button to submit a rating
 */
const ratingFormButtons = document.querySelectorAll(".rating-button");
ratingFormButtons.forEach(button => button.addEventListener('click', selectRating));
    
function selectRating(){
    let buttonId = this.id
    let rating = this.id[0]
    let Id = buttonId.split("-",2)[1]
    let formId = `#rating-form-${Id}`
    let originalRating = document.querySelectorAll(`${formId} .fas`).length;
    formChildren = document.querySelectorAll(`${formId} .rating-button`);
    for (i = 0; i < 5; i++ ){
        let buttonNumber = formChildren[i].getAttribute("id")[0];
        if (buttonNumber <= rating) {
            formChildren[i].classList.add("gold-star")
            formChildren[i].innerHTML = `<i class="fas fa-star"></i>`
        } else {
            formChildren[i].classList.remove("gold-star");
            formChildren[i].innerHTML = `<i class="far fa-star"></i>`
        }
    } 
    addSubmitButton(formId, formChildren, originalRating, rating)
};

/**
 * Asks for confirmation before rating submission to limit accidental clicks
 */
function addSubmitButton(formId, formChildren, originalRating, rating) {
    let targetForm = document.querySelector(formId);
    let submitButtonExists = document.querySelector(`${formId} button[name="submit-button"]`);

    /* Check if submit button exists before creating annother */
    if (!submitButtonExists){
        let submitButton = document.createElement("button");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("name", "submit-button");
        submitButton.setAttribute("value", rating);
        submitButton.innerHTML = "Submit Rating";
        const cancelButton = document.createElement("button");
        cancelButton.setAttribute("class", "cancel-button");
        cancelButton.setAttribute("type", "button"); 
        cancelButton.innerHTML = "Cancel";
        targetForm.appendChild(submitButton);
        targetForm.appendChild(cancelButton);
        /* Reset orignal form values on cancel */
        cancelButton.addEventListener("click", function(){
        for (i = 0; i < 5; i++ ){
            formChildren[i].classList.remove("gold-star");
            if (i < originalRating){
                formChildren[i].innerHTML = `<i class="fas fa-star"></i>`;
            } else {
                formChildren[i].innerHTML = `<i class="far fa-star"></i>`;
            };
        submitButton.remove();
        event.target.remove();  
        }});
    /* If submit button exists just update it's rating value */
    } else {
        submitButtonExists.setAttribute("value", rating);
        cancelButton?.addEventListener("click", function(){
        for (i = 0; i < 5; i++ ){
            formChildren[i].classList.remove("gold-star");
            if (i < originalRating){
                formChildren[i].innerHTML = `<i class="fas fa-star"></i>`;
            } else {
                formChildren[i].innerHTML = `<i class="far fa-star"></i>`;
            };
        submitButton.remove();
        event.target.remove();  
        }});
    };
};
  