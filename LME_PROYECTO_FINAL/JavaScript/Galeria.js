document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carrusel-track');
    const slides = document.querySelectorAll('.carrusel-track img');
    const btnPrev = document.querySelector('.carrusel-btn.prev');
    const btnNext = document.querySelector('.carrusel-btn.next');

    let index = 0;

    function updateCarousel() {
        const width = slides[0].clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    btnNext.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    btnPrev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});
const track = document.querySelector(".carrusel-track");
const btnPrev = document.querySelector(".carrusel-btn.prev");
const btnNext = document.querySelector(".carrusel-btn.next");
const slides = document.querySelectorAll(".carrusel-track img");

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
