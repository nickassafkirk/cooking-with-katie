const ratingFormButtons = document.querySelectorAll(".rating-button");
ratingFormButtons.forEach(button => button.addEventListener('click', function(){
    buttonId = this.id
    rating = this.id[0]
    for (i=0; i < 5; i++){
        if (i < rating) {
            ratingFormButtons[i].classList.add("gold-star")
            ratingFormButtons[i].innerHTML = `<i class="fas fa-star"></i>`
        } else {
            ratingFormButtons[i].classList.remove("gold-star");
            ratingFormButtons[i].innerHTML = `<i class="far fa-star"></i>`
        } 
    }
    submitRating(buttonId)
}));

function submitRating(buttonId) {
    console.log(buttonId)
    Id = buttonId.split("-",2)[1]
    formId = `#rating-form-${Id}`
    targetForm = document.querySelector(formId);
    console.log(targetForm);
    submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Submit Rating";
    targetForm.appendChild(submitButton);
}

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





