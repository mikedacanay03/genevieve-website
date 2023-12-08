const slider = document.querySelector(".slider"); //grand child container

// targeting all items
const slides = document.querySelectorAll(".slide");

// targeting prev button
const prevBtn = document.querySelector(".prev");

//targeting next button
const nextBtn = document.querySelector(".next");

// setting a variable index = 0
let slideIndex = 0;
slides[slideIndex].classList.add("active");

//setting an addEventListener for the buttons
prevBtn.addEventListener("click", prevslide);
nextBtn.addEventListener("click", nextSlide);

// function for the buttons
function prevslide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function nextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
