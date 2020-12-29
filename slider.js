let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__content');
const totalSlides = slides.length;

document.getElementById('btn-prev').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('btn-next').addEventListener("click", function() {
    movetoPrevSlide();
});

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('carousel__content--visible');
        slide.classList.add('carousel__content--hidden');
    }

    slides[slidePosition].classList.add('carousel__content--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function movetoPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}