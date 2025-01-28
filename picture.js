const viewport = document.querySelector('.viewport');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');

let currentIndex = 0;

function scrollToSlide(index) {
    const slideWidth = slides[0].offsetWidth; 
    viewport.scrollLeft = index * slideWidth; 
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToSlide(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        scrollToSlide(currentIndex);
    }
});

viewport.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        scrollToSlide(currentIndex);
    } else if (event.key === 'ArrowRight' && currentIndex < slides.length - 1) {
        currentIndex++;
        scrollToSlide(currentIndex);
    }
});
