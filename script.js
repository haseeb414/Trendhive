let slides = document.querySelector(".slides");
let index = 0;

function autoSlide() {
    index++;
    if (index > 2) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 4000);
