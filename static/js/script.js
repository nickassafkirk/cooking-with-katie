
const ratingFormButtons = document.querySelectorAll(".rating-button");
ratingFormButtons.forEach(button => button.addEventListener('click', selectRating))
    
function selectRating(){
    let buttonId = this.id
    let rating = this.id[0]
    let Id = buttonId.split("-",2)[1]
    let formId = `#rating-form-${Id}`
    let originalRating = document.querySelectorAll(`${formId} .fas`).length;
    formChildren = document.querySelectorAll(`${formId} .rating-button`);
    for (i = 0; i < 5; i++ ){
        let buttonNumber = formChildren[i].getAttribute("number");
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
        let cancelButton = document.createElement("button");
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
    };
};

let lastIngredientIndex = document.querySelectorAll(".ingredient-n").length;
let lastIngredientInput = document.querySelector(`input[name="ingredient-${lastIngredientIndex}"]`);
lastIngredientInput.addEventListener("change", addMoreRows);

const addIngredientsButton = document.getElementById("addIngredientsButton");
addIngredientsButton.addEventListener("click", addMoreRows);

function addMoreRows() {
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    let selectOptions = document.querySelector("[name=unit-1]");
    let newSelect = selectOptions.innerHTML;
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="delete-row">
                        <span class="delete-button">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="ingredient-${numberOfIngredients + 1}" class="form-label">Ingredient</label>
                        <input type="text" name="ingredient-${numberOfIngredients + 1}">
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="quantity-${numberOfIngredients + 1}" class="form-label">Quantity</label>
                        <input type="text" name="quantity-${numberOfIngredients + 1}" placeholder="Optional">
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="unit-${numberOfIngredients + 1}" class="form-label">Unit</label>
                        <select name="unit-${numberOfIngredients + 1}">
                            ${newSelect}
                        </select>
                    </div>`;  
    const ingredientsContainer = document.getElementById("ingredientsContainer");
    ingredientsContainer.insertBefore(newIngredientRow, document.querySelector(".button-container"));
    enableDeleteButton("#ingredientsContainer", "click")
};

const addInstructionsButton = document.getElementById("addInstructionsButton");
addInstructionsButton.addEventListener("click", addInstructionRows);

function addInstructionRows(){
    let numberOfInstructions = document.querySelectorAll(".instruction-n").length;
    let newInstructionRow = document.createElement("div");
    newInstructionRow.setAttribute("class", "instruction-n")
    newInstructionRow.innerHTML = `
        <div class="delete-row">
                        <span class="delete-button">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </div>
        <label for="step" class="instructions-n__label">Step ${numberOfInstructions + 1}:</label>
        <textarea name="step-${numberOfInstructions + 1}" id="step-${numberOfInstructions + 1}" cols="50" rows="1"></textarea>`

    const instructionsContainer = document.getElementById("instructionsContainer");
    instructionsContainer.insertBefore(newInstructionRow, document.querySelectorAll(".button-container")[1]);
    enableDeleteButton("#instructionsContainer", "click")
};

function enableDeleteButton(parentContainer, listener) {
    deleteButtons = document.querySelectorAll(`${parentContainer} .delete-button`);
    newDeleteButton = deleteButtons[((deleteButtons.length)-1)];
    newDeleteButton.addEventListener(listener, deleteRow);
}

let deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach(button => button.addEventListener('click', deleteRow))

function deleteRow(event) {
    targetRow = this.parentNode.parentNode;
    classname = "." + targetRow.getAttribute('class');
    console.log(classname);
    targetRow.remove();
    reorderLabels(classname);
}

instructionRow = document.querySelectorAll("#instructionsContainer .instruction-n");

const dragArea = document.querySelector("#instructionsContainer");
new Sortable(dragArea, {
    animation: 350
});

function reorderLabels(targetElements){
    let allTargetElements = document.querySelectorAll(`${targetElements}`);
    for (i = 0; i < allTargetElements.length; i++) {
        let targetLabel = allTargetElements[i].children[1];
        console.log(targetLabel);
        targetLabel.innerText = `Step ${i+1}`;
        targetLabel.setAttribute('for', `Step-${i+1}`)
        let targetInput = allTargetElements[i].children[2];
        console.log(targetInput);
        targetInput.setAttribute('name', `Step-${i+1}`);
        targetInput.setAttribute('id', `Step-${i+1}`);
    }
}



