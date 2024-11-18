const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-left');
const nextButton = document.querySelector('.carousel-button-right');

let currentIndex = 0;

// Function to update the carousel's position
const updateCarousel = () => {
  const itemWidth = items[0].offsetWidth;
  container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

// Show previous item
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

// Show next item
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Ensure carousel adjusts on window resize
window.addEventListener('resize', updateCarousel);