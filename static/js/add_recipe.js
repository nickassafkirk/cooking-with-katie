


const addIngredientsButton = document.querySelector("#add-ingredients-button");
addIngredientsButton?.addEventListener("click", addMoreRows);

const editIngredientsButton = document.querySelector("#edit-ingredients-button");
editIngredientsButton?.addEventListener("click", addMoreRows);

function addMoreRows() {
    let numberOfIngredients = document.querySelectorAll(".ingredient-n").length;
    let selectOptions = document.querySelector("[name=unit-1]");
    let newSelect = selectOptions.innerHTML;
    let newIngredientRow = document.createElement("div");
    newIngredientRow.setAttribute("class", "ingredient-n row");
    newIngredientRow.innerHTML= `
                    <div class="col-12 delete-row">
                        <span class="delete-button">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                        <span class="reorder-button my-handle"><i class="fas fa-arrows-alt"></i></span>
                    </div>
                    <div class="col-12 col-lg-4">
                        <label for="ingredient-${numberOfIngredients + 1}" class="form-label">Ingredient ${numberOfIngredients + 1}</label>
                        <input type="text" name="ingredient-${numberOfIngredients + 1}">
                    </div>
                    <div class="col-6 col-lg-4">
                        <label for="quantity-${numberOfIngredients + 1}" class="form-label">Quantity</label>
                        <input type="text" name="quantity-${numberOfIngredients + 1}" placeholder="Optional">
                    </div>
                    <div class="col-6 col-lg-4">
                        <label for="unit-${numberOfIngredients + 1}" class="form-label">Unit</label>
                        <select name="unit-${numberOfIngredients + 1}">
                            ${newSelect}
                        </select>
                    </div>`;  
    let ingredientsContainer = document.querySelector(`.ingredients-container`);
    ingredientsContainer.insertBefore(newIngredientRow, document.querySelector(`.button-container`));
    enableDeleteButton(".ingredients-container", "click")
};

const addInstructionsButton = document.querySelector("#add-instructions-button");
addInstructionsButton?.addEventListener("click", addInstructionRows);

const editInstructionsButton = document.querySelector('#edit-instructions-button')
editInstructionsButton?.addEventListener("click", addInstructionRows);

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
                        <div class="instruction-area">
                        <label for="step-${numberOfInstructions + 1}" class="instructions-n__label">Step ${numberOfInstructions + 1}:</label>
                        <textarea name="step-${numberOfInstructions + 1}" cols="50" rows="1"></textarea>
                    </div>`
        

    const instructionsContainer = document.querySelector(".instructions-container");
    instructionsContainer.insertBefore(newInstructionRow, document.querySelector(".instructions-container .button-container"));
    enableDeleteButton(".instructions-container", "click")
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

enableDragSorting(".instructions-container", ".instruction-n")
enableDragSorting(".ingredients-container", ".ingredient-n")

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

function reorderLabels(targetElements) {
    let allTargetElements = document.querySelectorAll(targetElements);
    let targetChildren;
    if (targetElements == ".instruction-n") {
        for (i = 0; i < allTargetElements.length; i++) {
            targetChildren = allTargetElements[i];
            let targetLabel = allTargetElements[i].children[1].children[0];
            targetLabel.innerText = `Step ${i + 1}`;
            targetLabel.setAttribute('for', `Step-${i + 1}`)
            let targetInput = allTargetElements[i].children[1].children[1];
            targetInput.setAttribute('name', `Step-${i + 1}`);
            targetInput.setAttribute('id', `Step-${i + 1}`);
        }
    } else if (targetElements == ".ingredient-n"){
        for (i = 0; i < allTargetElements.length; i++) {
            targetChildren = allTargetElements[i];
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
    let firstIngredientDeleteButton = document.getElementById("add-ingredient-delete-button-1")
    firstIngredientDeleteButton.remove();

    let firstInstructionDeleteButton = document.getElementById("add-instruction-delete-button-1")
    firstInstructionDeleteButton.remove();
}

const addRecipeSubmitButton = document.querySelector("#add-recipe__submit-button")
addRecipeSubmitButton?.addEventListener('click', takeOff);

const editRecipeSubmitButton = document.querySelector("#edit-recipe__submit-button")
editRecipeSubmitButton?.addEventListener('click', takeOff);

function takeOff(event){
    event.preventDefault();
    const spinner = document.querySelector(`#${this.id} i`)
    spinner.classList.add("take-off")
    
    form = this.parentNode.parentNode
    form.submit();
}