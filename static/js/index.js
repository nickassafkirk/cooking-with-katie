const recipeCards = document.querySelectorAll(".top-recipes");
recipeCards.forEach(card => card.addEventListener("mouseover", viewRecipe));
recipeCards.forEach(card => card.addEventListener("mouseout", hideRecipe)); 

function viewRecipe() {
    let cardId = this["id"];
    let revealIcon = document.querySelector(`#${cardId} .recipe-thumnail__view`)
    revealIcon.classList.remove("d-none");
    let hideTitle = document.querySelector(`#${cardId} .recipe-thumnail__title`)
    hideTitle.classList.add("d-none");
}

function hideRecipe() {
    let cardId = this["id"];
    let revealIcon = document.querySelector(`#${cardId} .recipe-thumnail__view`)
    revealIcon.classList.add("d-none");
    let hideTitle = document.querySelector(`#${cardId} .recipe-thumnail__title`)
    hideTitle.classList.remove("d-none");
} 