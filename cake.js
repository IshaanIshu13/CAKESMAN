// Script for toggling mobile menu (future use)
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#fff';
    link.style.backgroundColor = '#d94f00';
    link.style.borderRadius = '20px';
    link.style.transition = '0.3s';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = 'white';
    link.style.backgroundColor = 'transparent';
  });
});

// Search bar functionality (for future search filtering)
const searchInput = document.querySelector('.search-bar input');

searchInput.addEventListener('focus', () => {
  searchInput.style.borderColor = '#d94f00';
});

searchInput.addEventListener('blur', () => {
  searchInput.style.borderColor = '#ccc';
});

// Clickable categories
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    alert(`You clicked on "${category.querySelector('p').innerText}"!`);
  });
});
// FOR OTHER PRODUCTS LEFT RIGHT BUTTON


// Addons Slider Navigation

const slider = document.querySelector('.addons-slider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Scroll left when left button is clicked
leftBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: -220,
    behavior: 'smooth'
  });
});

// Scroll right when right button is clicked
rightBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: 220,
    behavior: 'smooth'
  });
});
