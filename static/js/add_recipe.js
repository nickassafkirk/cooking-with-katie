const addIngredientsButton = document.querySelector("#add-ingredients-button");
addIngredientsButton?.addEventListener("click", addMoreRows);

const editIngredientsButton = document.querySelector("#edit-ingredients-button");
editIngredientsButton?.addEventListener("click", addMoreRows);

const addInstructionsButton = document.querySelector("#add-instructions-button");
addInstructionsButton?.addEventListener("click", addInstructionRows);

const editInstructionsButton = document.querySelector('#edit-instructions-button')
editInstructionsButton?.addEventListener("click", addInstructionRows);

let deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach(button => button.addEventListener('click', deleteRow))


const addRecipeSubmitButton = document.querySelector("#add-recipe__submit-button")
addRecipeSubmitButton?.addEventListener('click', takeOff);

const editRecipeSubmitButton = document.querySelector("#edit-recipe__submit-button")
editRecipeSubmitButton?.addEventListener('click', takeOff);

enableDragSorting(".instructions-container", ".instruction-n")
enableDragSorting(".ingredients-container", ".ingredient-n")

/**
 * Adds a new add recipe ingredients row
 */
function addMoreRows() {
    let formprefix = findFormPrefix(".ingredient-n")
    let ingredients = document.querySelectorAll(".ingredient-n")
    let numberOfIngredients = ingredients.length;
    let selectOptions = document.querySelector("[name=unit-1]");
    let newSelect = selectOptions.innerHTML;
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="col-12 delete-row">
                        <span class="delete-button" id="${formprefix}-ingredient-delete-button-${numberOfIngredients + 1}">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                        <span class="reorder-button my-handle"><i class="fas fa-arrows-alt"></i></span>
                    </div>
                    <div class="col-12 col-lg-4">
                        <label for="${formprefix}-ingredient-${numberOfIngredients + 1}" class="form-label">Ingredient ${numberOfIngredients + 1}</label>
                        <input type="text" name="ingredient-${numberOfIngredients + 1}" id="${formprefix}-ingredient-${numberOfIngredients + 1}">
                    </div>
                    <div class="col-6 col-lg-4">
                        <label for="${formprefix}-quantity-${numberOfIngredients + 1}" class="form-label">Quantity</label>
                        <input type="text" name="quantity-${numberOfIngredients + 1}" id="${formprefix}-quantity-${numberOfIngredients + 1}" placeholder="Optional">
                    </div>
                    <div class="col-6 col-lg-4">
                        <label for="${formprefix}-unit-${numberOfIngredients + 1}" class="form-label">Unit</label>
                        <select name="unit-${numberOfIngredients + 1}" id="${formprefix}-unit-${numberOfIngredients + 1}">
                            ${newSelect}
                        </select>
                    </div>`;  
    let ingredientsContainer = document.querySelector(`.ingredients-container`);
    ingredientsContainer.insertBefore(newIngredientRow, document.querySelector(`.button-container`));
    enableDeleteButton(".ingredients-container", "click")
};

/**
 * Adds a new add recipe instruction row
 */
function addInstructionRows(){
    let formprefix = findFormPrefix(".instruction-n")
    let numberOfInstructions = document.querySelectorAll(".instruction-n").length;
    let newInstructionRow = document.createElement("div");
    newInstructionRow.setAttribute("class", "instruction-n")
    newInstructionRow.innerHTML = `
        <div class="delete-row">
                        <span class="delete-button" id="${formprefix}-instruction-delete-button-{{loop.index}}">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                        <span class="reorder-button my-handle"><i class="fas fa-arrows-alt"></i></span>
                    </div>
                        <div class="instruction-area">
                        <label for="${formprefix}-step-${numberOfInstructions + 1}" class="instructions-n__label">Step ${numberOfInstructions + 1}:</label>
                        <textarea name="step-${numberOfInstructions + 1}" id="${formprefix}-step-${numberOfInstructions + 1}" cols="50" rows="2"></textarea>
                    </div>`
        

    const instructionsContainer = document.querySelector(".instructions-container");
    instructionsContainer.insertBefore(newInstructionRow, document.querySelector(".instructions-container .button-container"));
    enableDeleteButton(".instructions-container", "click")
};

/**
 * this deletes an ingredient or instruction row
 * when the thrash icon is pressed
 */
function deleteRow() {
    targetRow = this.parentNode.parentNode;
    classes = targetRow.classList;
    classname = "." + targetRow.classList[0];
    targetRow.remove();
    reorderLabels(classname);
}

/**
 * This is a helper function which adds an event listener
 * To enable deletion of dynamically created ingredient or instruction
 * row elements
 * @param {string} parentContainer class name of container 
 * @param {string} listener type of listener required ('click', 'change' etc...)
 */
function enableDeleteButton(parentContainer, listener) {
    deleteButtons = document.querySelectorAll(`${parentContainer} .delete-button`);
    newDeleteButton = deleteButtons[((deleteButtons.length)-1)];
    newDeleteButton.addEventListener(listener, deleteRow);
}

/**
 * Allows drag and drop sorting on selected html elements
 * credit CodingNepal: https://www.youtube.com/watch?v=z54suepKiIU
 * sortable cdn https://cdnjs.com/libraries/Sortable
 * use of draggable and onsort methods were figured out by reading official documentation
 * https://github.com/SortableJS/Sortable
 */
function enableDragSorting(parentContainer, draggableElement){
    let dragArea = document.querySelector(parentContainer);
    new Sortable(dragArea, {
        draggable: draggableElement,
        handle: ".my-handle",
        animation: 350,
        onSort: function(){
            reorderLabels(draggableElement)
        }});
}

/**
 * This function reorders the ingredient or instruction rows.
 * It is called each time a row is dragged to reorder or deleted.
 * @param {string} targetElements classname of elements to reorder
 */
function reorderLabels(targetElements) {
    let allTargetElements = document.querySelectorAll(targetElements);
    findFormPrefix(targetElements)
    let targetChildren;
    let deleteRow;
    if (targetElements == ".instruction-n") {
        for (i = 0; i < allTargetElements.length; i++) {
            targetChildren = allTargetElements[i];
            deleteRow = allTargetElements[i].children[0].children[0]
            deleteRow.classList.remove('d-none');
            deleteRow.setAttribute('id', `${parentFormPrefix}-instruction-delete-button-${i + 1}`)
            let targetLabel = allTargetElements[i].children[1].children[0];
            targetLabel.innerText = `Step ${i + 1}`;
            targetLabel.setAttribute('for', `step-${i + 1}`)
            let targetInput = allTargetElements[i].children[1].children[1];
            targetInput.setAttribute('name', `step-${i + 1}`);
            targetInput.setAttribute('id', `${parentFormPrefix}-recipe-instruction-${i + 1}`);
        }
        let firstInstructionDeleteButton = document.getElementById(`${parentFormPrefix}-instruction-delete-button-1`)
        firstInstructionDeleteButton.classList.add("d-none");

    } else if (targetElements == ".ingredient-n"){
        for (i = 0; i < allTargetElements.length; i++) {
            targetChildren = allTargetElements[i];
            deleteRow = targetChildren.children[0].children[0]
            deleteRow.classList.remove('d-none');
            deleteRow.setAttribute('id', `${parentFormPrefix}-ingredient-delete-button-${i + 1}`)
            /* ingredient input + label */
            let col1 = targetChildren.children[1].children;
            /* quantity input + label */
            let col2 = targetChildren.children[2].children;
            /* unit select + label */
            let col3 = targetChildren.children[3].children;

            col1[0].setAttribute('for', `ingredient-${i + 1}`)
            col1[0].innerText = `ingredient ${i + 1}`
            col1[1].setAttribute('name', `ingredient-${i + 1}`)
            col1[1].setAttribute('id', `${parentFormPrefix}-recipe-ingredient-${i + 1}`)
            col2[0].setAttribute('for', `quantity-${i + 1}`)
            col2[1].setAttribute('name', `quantity-${i + 1}`)
            col3[0].setAttribute('for', `unit-${i + 1}`)
            col3[1].setAttribute('name', `unit-${i + 1}`)
        }
        let firstIngredientDeleteButton = document.getElementById(`${parentFormPrefix}-ingredient-delete-button-1`)
        firstIngredientDeleteButton.classList.add("d-none");
    }
}

function findFormPrefix(rowClass){
    let parentForm = document.querySelector(rowClass).parentNode.parentNode;
    parentFormId = parentForm.id;
    parentFormPrefix = parentForm.id.split("-")[0];
    return parentFormPrefix
}


function validateForm(){
    let formprefix = findFormPrefix(".instruction-n")
    let title = document.querySelector(`#${formprefix}-recipe-title`)
    if (title.value == ""){
        alert("You need to add a title")
        return false
    } else if ( title.value.length < 5 || title.value.length > 50) {
        alert("Your Title must be between 5 and 50 charachters long")
        return false
    } 

    let ingredients = document.querySelectorAll(".ingredient-n input")
    console.log(ingredients[0].value)
    if(ingredients[0].value === "" || !ingredients[0].value){
        alert("You need at least one ingredient")
        return false
    }

    let instructions = document.querySelectorAll(".instruction-n textarea")
    console.log(instructions[0].value)
    if(instructions[0].value === "" || !instructions[0].value){
        alert("You need at least one instruction")
        return false
    }

    let prepTime = document.querySelector(`#${formprefix}-recipe-prep-time`)
    if(prepTime.value === ""){
        alert("You need add estimated preparation time")
        return false
    }

    let cookTime = document.querySelector(`#${formprefix}-recipe-cook-time`)
    if(cookTime.value === ""){
        alert("You need add estimated cooking time")
        return false
    }

    let category = document.querySelector(`#${formprefix}-recipe-category`)
    if(category.value === ""){
        alert("Please select a category")
        return false
    }

    let cuisine = document.querySelector(`#${formprefix}-recipe-cuisine`)
    if(cuisine.value === ""){
        alert("Please select the closest cuisine")
        return false
    } 

    return true
}

/**
 * Animation to provide feedback that form has been submitted
 * @param {*} event 
 */
function takeOff(event){
    event.preventDefault();
    if (validateForm() === false) {
        return false
    }
    const spinner = document.querySelector(`#${this.id} i`)
    spinner.classList.add("take-off")
    
    form = this.parentNode.parentNode
    form.submit();
}

