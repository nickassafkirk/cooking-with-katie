
function clipParagraph(selector, maxLength) {
    let focusElement = document.querySelectorAll(selector);
    for (i = 0; i < focusElement.length; i++) {
        let singleElement = focusElement[i];
        text = singleElement.innerText;
         if (text.length > maxLength) {
           let clippedElement = text.substr(0, maxLength) + " ...";
           singleElement.innerText = clippedElement;
        }; 
    };
};        
  
clipParagraph(".recipe-intro", 200)