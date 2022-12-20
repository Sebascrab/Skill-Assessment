
// initializing slide index. 
let slideIndex = 1;
showSlides(slideIndex);


function moveNext(){
    showSlides(slideIndex += 1);
    

}

function movePrevious(){
    showSlides(slideIndex -= 1)
    


}

function currentSlide(card) {
    showSlides(slideIndex = card)
}

// main function to dictate slide change based on index. 
function showSlides(card) {
    let i;
    let slides = document.getElementsByClassName('slide');

    if (card > slides.length) {
        slideIndex = 1
    }
    if (card < 1) {
        slideIndex = slides.length
    }
    
    // slide display 
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}



// click event listeners to move between slides:
document.querySelector("#next-button").addEventListener("click", moveNext)
document.querySelector("#previous-button").addEventListener("click", movePrevious)