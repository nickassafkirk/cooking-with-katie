
const addIngredientsButton = document.getElementById("addIngredientsButton");
addIngredientsButton.addEventListener("click", addMoreRows);

function addMoreRows() {
    console.log("Button Pressed")
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    console.log(numberOfIngredients);
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="col">
                        <label for="ingredient-${numberOfIngredients + 1}">Ingredient</label>
                        <input type="text" name="ingredient-${numberOfIngredients+1}">
                    </div>
                    <div class="col">
                        <label for="ingredient-quantity-${numberOfIngredients + 1}">Weight</label>
                        <input type="text" name="ingredient-quantity-${numberOfIngredients + 1}" placeholder="Optional">
                    </div>`;  
    console.log(newIngredientRow);
    const ingredientsContainer = document.getElementById("ingredientsContainer");
    console.log(ingredientsContainer.lastChild);
};

const addInstructionsButton = document.getElementById("addInstructionsButton");
addInstructionsButton.addEventListener("click", addInstructionRows);

function addInstructionRows(){
    console.log("Test why is this happening?")
    let numberOfInstructions = document.querySelectorAll(".instruction-n").length;
    let newInstructionRow = document.createElement("div");
    newInstructionRow.setAttribute("class", "instruction-n")
    newInstructionRow.innerHTML = `
        <label for="step-${numberOfInstructions + 1}" class="instructions-n__label">Step ${numberOfInstructions + 1}:</label>
        <textarea name="step-${numberOfInstructions + 1}" id="step-${numberOfInstructions + 1}" cols="50" rows="1"></textarea>`
    const instructionsContainer = document.getElementById("instructionsContainer");
    console.log(instructionsContainer.lastChild);
};