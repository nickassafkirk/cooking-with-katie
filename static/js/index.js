const recipeCards = document.querySelectorAll(".top-recipes");
recipeCards.forEach(card => card.addEventListener("mouseover", viewRecipe));
/* recipeCards.forEach(card => card.addEventListener("mouseout", hideRecipe)); */

function viewRecipe() {
    
    let cardId = this["id"];
    console.log(cardId);
    let revealIcon = document.querySelector(`#${cardId} .recipe-thumnail__view`)
    revealIcon.classList.remove("d-none");
    let hideTitle = document.querySelector(`#${cardId} .recipe-thumnail__title`)
    hideTitle.classList.add("d-none");
}

/* function hideRecipe() {
    console.log("hello");
    thisCardIcon = document.querySelector(".recipe-thumnail-overlay");
    thisCardIcon.classList.remove("d-none");
} */