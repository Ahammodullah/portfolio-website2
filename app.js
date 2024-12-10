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




// menulist
// Select the menu and the toggle button
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

// Counter to track clicks
let clickCount = 0;

// Add a click event listener to the toggle button
menuToggle.addEventListener("click", () => {
  clickCount++;

  // First two clicks: Show/hide menu normally
  if (clickCount <= 2) {
    menu.classList.toggle("show");
  }

  // Third click: Force vertical list display
  if (clickCount === 3) {
    menu.classList.add("show");
    menu.style.flexDirection = "column";
  }

  // Fourth click: Reset to initial state
  if (clickCount > 3) {
    clickCount = 0;
    menu.classList.remove("show");
    menu.style.flexDirection = "";
  }
});

 
//   foooter
// Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.className = "scroll-top";
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

 
