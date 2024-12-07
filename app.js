let currentIndex = 0;

// Select all slides
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Navigate to the previous slide
function prevSlide() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlidePosition();
}

// Navigate to the next slide
function nextSlide() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
}

// Update the slide position
function updateSlidePosition() {
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
