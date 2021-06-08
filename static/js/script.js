const ratingFormButtons = document.querySelectorAll(".rating-button");
ratingFormButtons.forEach(button => button.addEventListener('click', selectRating))
    
function selectRating(){
buttonId = this.id
    rating = this.id[0]
    Id = buttonId.split("-",2)[1]
    formId = `#rating-form-${Id}`
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
    addSubmitButton(formId, formChildren, rating)
};
function addSubmitButton(formId, formChildren, rating) {
    
    targetForm = document.querySelector(formId);
    console.log(targetForm);
    let submitButtonExists = document.querySelector("#submit-button");
    if (!submitButtonExists){
        submitButton = document.createElement("button");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("id", "submit-button");
        submitButton.setAttribute("value", rating);
        submitButton.innerHTML = "Submit Rating";
        cancelButton = document.createElement("button");
        cancelButton.setAttribute("type", "button"); 
        cancelButton.innerHTML = "Cancel";
        console.log(submitButton);
        targetForm.appendChild(submitButton);
        targetForm.appendChild(cancelButton);
        cancelButton.addEventListener("click", function(){
            for (i = 0; i < 5; i++ ){
                formChildren[i].classList.remove("gold-star"); 
             }
            submitButton.remove();
            cancelButton.remove(); 
        });
    } else {
        submitButtonExists.setAttribute("value", rating);
        console.log(submitButton);
        console.log(submitButtonExists);
    }
};

const addIngredientsButton = document.getElementById("addIngredientsButton");
addIngredientsButton.addEventListener("click", addMoreRows);

function addMoreRows() {
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="col">
                        <label for="ingredient-${numberOfIngredients + 1}">Ingredient</label>
                        <input type="text" name="ingredient-${numberOfIngredients + 1}">
                    </div>
                    <div class="col">
                        <label for="quantity-${numberOfIngredients + 1}">Quantity</label>
                        <input type="text" name="quantity-${numberOfIngredients + 1}" placeholder="Optional">
                    </div>
                    <div class="col">
                        <label for="unit-${numberOfIngredients + 1}" class="form-label">Unit</label>
                        <select name="unit-${numberOfIngredients + 1}">
                            <option value="" selected disabled hidden>Select Unit</option>
                            <option value="tsp">Teaspoons</option>
                            <option value="tbsp">Tablepoons</option>
                            <option value="g">Grams</option>
                            <option value="lbs">Pounds</option>
                            <option value="oz">Ounces</option>
                            <option value="none">None</option>
                        </select>
                    </div>`;  
    const ingredientsContainer = document.getElementById("ingredientsContainer");
    ingredientsContainer.insertBefore(newIngredientRow, document.querySelector(".button-container"));
};

const addInstructionsButton = document.getElementById("addInstructionsButton");
addInstructionsButton.addEventListener("click", addInstructionRows);

function addInstructionRows(){
    let numberOfInstructions = document.querySelectorAll(".instruction-n").length;
    let newInstructionRow = document.createElement("div");
    newInstructionRow.setAttribute("class", "instruction-n")
    newInstructionRow.innerHTML = `
        <label for="step" class="instructions-n__label">Step ${numberOfInstructions + 1}:</label>
        <textarea name="step-${numberOfInstructions + 1}" id="step-${numberOfInstructions + 1}" cols="50" rows="1"></textarea>`
    const instructionsContainer = document.getElementById("instructionsContainer");
    instructionsContainer.insertBefore(newInstructionRow, document.querySelectorAll(".button-container")[1]);
};





