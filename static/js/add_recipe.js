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
                        <span class="reorder-button my-handle"><i class="fas fa-arrows-alt"></i></span>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="ingredient-${numberOfIngredients + 1}" class="form-label">Ingredient ${numberOfIngredients + 1}</label>
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
                        <span class="reorder-button my-handle"><i class="fas fa-arrows-alt"></i></span>
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

function deleteRow() {
    targetRow = this.parentNode.parentNode;
    classes = targetRow.classList;
    classname = "." + targetRow.classList[0];
    targetRow.remove();
    reorderLabels(classname);
}

enableDragSorting("#instructionsContainer");
enableDragSorting("#ingredientsContainer");

/**
 * Allows drag and drop sorting on selected html elements
 * credit CodingNepal: https://www.youtube.com/watch?v=z54suepKiIU
 * sortable cdn https://cdnjs.com/libraries/Sortable
 * use of draggable and onsort methods were figured out by reading official documentation
 * https://github.com/SortableJS/Sortable
 */
function enableDragSorting(selector){
    let dragArea = document.querySelector(selector);
    let allowDragOn;
    if (selector == "#instructionsContainer") {
        allowDragOn = ".instruction-n"
    } else if (selector == "#ingredientsContainer") {
        allowDragOn = ".ingredient-n"
    }
    new Sortable(dragArea, {
        
        draggable: allowDragOn,
        handle: ".my-handle",
        animation: 350,
        filter: ".fa-trash-alt",
        onSort: function(){
            console.log("Test")
            reorderLabels(allowDragOn)
        }});
}

/**
 * event listener to rename reordered form instructions
 */

 /*
const instructionRows = document.querySelectorAll("#instructionsContainer .instruction-n");
instructionRows.forEach(row => row.addEventListener("drop", function(event){
    console.log(EventTarget)
    event.preventDefault();
    let parent = event.target.parentNode.parentNode;
    parentClass = "." + parent.classList[0];
    console.log(parentClass)
    reorderLabels(parentClass);
})); 


const ingredientRows = document.querySelectorAll("#ingredientsContainer .ingredient-n");
ingredientRows.forEach(row => row.addEventListener("drop", function(event){
    console.log(EventTarget)
    event.preventDefault();
    let ingredientParent = event.target.parentNode.parentNode;
    console.log(ingredientParent)
    let ingredientParentClass = "." + ingredientParent.classList[0]
    console.log(ingredientParentClass)
    reorderLabels(ingredientParentClass);
})); */

function reorderLabels(targetElements) {
    console.log("reorder called")
    let allTargetElements = document.querySelectorAll(targetElements);
    if (targetElements == ".instruction-n") {
        for (i = 0; i < allTargetElements.length; i++) {
            let targetLabel = allTargetElements[i].children[1].children[0];
            console.log(targetLabel);
            targetLabel.innerText = `Step ${i + 1}`;
            targetLabel.setAttribute('for', `Step-${i + 1}`)
            let targetInput = allTargetElements[i].children[1].children[1];
            targetInput.setAttribute('name', `Step-${i + 1}`);
            targetInput.setAttribute('id', `Step-${i + 1}`);
        }
    } else if (targetElements == ".ingredient-n"){
        for (i = 0; i < allTargetElements.length; i++) {
            let targetChildren = allTargetElements[i];
            /* ingredient input + label */
            let col1 = targetChildren.children[1].children;
            /* quantity input + label */
            col2 = targetChildren.children[2].children;
            /* unit select + label */
            col3 = targetChildren.children[3].children;

            col1[0].setAttribute('for', `ingredient-${i + 1}`)
            col1[0].innerText = `ingredient ${i + 1}`
            col1[1].setAttribute('name', `ingredient-${i + 1}`)
            col2[0].setAttribute('for', `quantity-${i + 1}`)
            col2[1].setAttribute('name', `quantity-${i + 1}`)
            col3[0].setAttribute('for', `unit-${i + 1}`)
            col3[1].setAttribute('name', `unit-${i + 1}`)
        }
    }
}

const addRecipeSubmitButton = document.querySelector("#add-recipe__submit-button")
addRecipeSubmitButton.addEventListener('click', function(event){
    event.preventDefault();
    const spinner = document.querySelector(".spinner-custom")
    spinner.classList.add("take-off")
    form = document.querySelector('#add_recipe-form')
    form.submit();
})