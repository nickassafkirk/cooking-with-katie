
const addRowsButton = document.getElementById("addRows");
addRowsButton.addEventListener("click", addMoreRows);

function addMoreRows() {
    console.log("Button Pressed")
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    console.log(numberOfIngredients);
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "row ingredient-n");
    newIngredientRow.innerHTML= `
                    <div class="col">
                        <label for="ingredient-${numberOfIngredients+1}">Ingredient</label>
                        <input type="text" name="ingredient-${numberOfIngredients+1}">
                    </div>
                    <div class="col">
                        <label for="ingredient-quantity-${numberOfIngredients+1}">Weight (Optional)</label>
                        <input type="text" name="ingredient-quantity-${numberOfIngredients+1}">
                    </div>
                </div>`;  
    console.log(newIngredientRow);
    const ingredientsContainer = document.getElementById("ingredientsContainer");
    ingredientsContainer.appendChild(newIngredientRow);
};
