window.addEventListener("load", clipParagraph(".recipe-intro", 200));

/**
 * Clips inner text of selected dom Element/s
 * To specified number of charachters.
 * @param {string} selector add ".", "#" etc.. for class, ID etc..
 * @param {number} maxLength  max # characters in selector's innerText
 */
function clipParagraph(selector, maxLength) {
    let focusElements = document.querySelectorAll(selector);
    for (i = 0; i < focusElements.length; i++) {
        let singleElement = focusElements[i];
        text = singleElement.innerText;
         if (text.length > maxLength) {
           let clippedElement = text.substr(0, maxLength) + " ...";
           singleElement.innerText = clippedElement;
        }; 
    };
};        
  