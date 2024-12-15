let currentBannerIndex = 0;

function updateBannerTransform() {
  const bannerSlides = document.getElementById('banner-slider');
  const totalBanners = bannerSlides.children.length;
  const bannerWidth = bannerSlides.children[0].offsetWidth;

  // Loop through banners
  if (currentBannerIndex < 0) {
    currentBannerIndex = totalBanners - 1;
  } else if (currentBannerIndex >= totalBanners) {
    currentBannerIndex = 0;
  }

  // Translate to the current banner
  bannerSlides.style.transform = `translateX(-${currentBannerIndex * bannerWidth}px)`;
}

function prevBannerSlide() {
  currentBannerIndex--;
  updateBannerTransform();
}

function nextBannerSlide() {
  currentBannerIndex++;
  updateBannerTransform();
}

// Automatically adjust slide on window resize
window.addEventListener('resize', updateBannerTransform);






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

 


// JavaScript for Women's Fashion Slider
let womenSlideIndex = 0;

function showSlides(slidesId, index) {
  const slides = document.querySelector(`#${slidesId}`);
  const totalSlides = slides.children.length;

  // Reset index if out of bounds
  if (index < 0) womenSlideIndex = totalSlides - 1;
  else if (index >= totalSlides) womenSlideIndex = 0;

  // Calculate and apply transform
  slides.style.transform = `translateX(-${womenSlideIndex * 33.33}%)`; // Adjust for visible items
}

function prevSlide(section) {
  if (section === 'women') {
    womenSlideIndex--;
    showSlides('women-slides', womenSlideIndex);
  }
}

function nextSlide(section) {
  if (section === 'women') {
    womenSlideIndex++;
    showSlides('women-slides', womenSlideIndex);
  }
}


 



// JavaScript for Kids Fashion Slider
let kidsSlideIndex = 0;

function showSlides(slidesId, index) {
  const slides = document.querySelector(`#${slidesId}`);
  const totalSlides = slides.children.length;

  // Reset index if out of bounds
  if (index < 0) kidsSlideIndex = totalSlides - 1;
  else if (index >= totalSlides) kidsSlideIndex = 0;

  // Calculate and apply transform
  slides.style.transform = `translateX(-${kidsSlideIndex * 33.33}%)`; // Adjust based on visible items
}

function prevSlide(section) {
  if (section === 'kids') {
    kidsSlideIndex--;
    showSlides('kids-slides', kidsSlideIndex);
  }
}

function nextSlide(section) {
  if (section === 'kids') {
    kidsSlideIndex++;
    showSlides('kids-slides', kidsSlideIndex);
  }
}





// Select elements
const jewelrySlider = document.querySelector('#jewelry-slider .product-slides');
const jewelryNextBtn = document.querySelector('#jewelry-slider .next-btn');
const jewelryPrevBtn = document.querySelector('#jewelry-slider .prev-btn');

let jewelryIndex = 0; // Initial slide index
const jewelrySlideCount = jewelrySlider.children.length;
const slideWidth = jewelrySlider.children[0].getBoundingClientRect().width;

// Event listeners for navigation buttons
jewelryNextBtn.addEventListener('click', () => {
  jewelryIndex = (jewelryIndex + 1) % jewelrySlideCount; // Loop back to first slide
  updateJewelrySlider();
});

jewelryPrevBtn.addEventListener('click', () => {
  jewelryIndex = (jewelryIndex - 1 + jewelrySlideCount) % jewelrySlideCount; // Loop back to last slide
  updateJewelrySlider();
});

// Function to update the slider position
function updateJewelrySlider() {
  const offset = jewelryIndex * slideWidth * -1;
  jewelrySlider.style.transform = `translateX(${offset}px)`;
}


 
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







let uniqueKidsSlideIndex = 0;

function showUniqueSlides(slidesId, index) {
  const slides = document.querySelector(`#${slidesId}`);
  const totalSlides = slides.children.length;

  // Reset index if out of bounds
  if (index < 0) uniqueKidsSlideIndex = totalSlides - 1;
  else if (index >= totalSlides) uniqueKidsSlideIndex = 0;

  // Calculate and apply transform
  slides.style.transform = `translateX(-${uniqueKidsSlideIndex * 33.33}%)`; // Adjust based on visible items
}

function prevUniqueSlide(section) {
  if (section === 'kids') {
    uniqueKidsSlideIndex--;
    showUniqueSlides('unique-kids-slides', uniqueKidsSlideIndex);
  }
}

function nextUniqueSlide(section) {
  if (section === 'kids') {
    uniqueKidsSlideIndex++;
    showUniqueSlides('unique-kids-slides', uniqueKidsSlideIndex);
  }
}

 

 // loginpage
// Show/Hide Password
function togglePassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
}
// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    alert(`Login successful!\nEmail/Phone: ${email}\nPassword: ${password}`);
  } else {
    alert('Please fill out all fields.');
  }
});


// my_account//
function toggleUniquePassword() {
  const passwordInput = document.getElementById('unique-password-xyz');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
  } else {
      passwordInput.type = 'password';
  }
}




//   signup
// Handle Form Submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  const phoneNumber = document.getElementById('phone-number').value;
  const termsAccepted = document.getElementById('agree-terms').checked;

  if (phoneNumber && termsAccepted) {
    alert(`Code sent to: ${phoneNumber}`);
  } else if (!termsAccepted) {
    alert('You must agree to the terms and conditions.');
  } else {
    alert('Please fill out the phone number.');
  }
});



