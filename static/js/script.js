
const addIngredientsButton = document.getElementById("addIngredientsButton");
addIngredientsButton.addEventListener("click", addMoreRows);

function addMoreRows() {
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="col">
                        <label for="ingredient">Ingredient</label>
                        <input type="text" name="ingredient">
                    </div>
                    <div class="col">
                        <label for="quantity">Quantity</label>
                        <input type="text" name="quantity" placeholder="Optional">
                    </div>
                    <div class="col">
                        <label for="unit" class="form-label">Unit</label>
                        <select name="unit">
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
        <textarea name="step" id="step-${numberOfInstructions + 1}" cols="50" rows="1"></textarea>`
    const instructionsContainer = document.getElementById("instructionsContainer");
    instructionsContainer.insertBefore(newInstructionRow, document.querySelectorAll(".button-container")[1]);
};