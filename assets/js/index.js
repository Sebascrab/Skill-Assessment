

let slideIndex = 1;
showSlides(slideIndex);

function moveNext(){
    showSlides(slideIndex += 1);
    

}

function movePrevious(){
    showSlides(slideIndex -= 1)
    


}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}




document.querySelector("#next-button").addEventListener("click", moveNext)
document.querySelector("#previous-button").addEventListener("click", movePrevious)