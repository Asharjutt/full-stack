const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-btn');

// Toggle nav menu on hamburger click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close nav menu on close button click
closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
});

















const carouselImages = document.querySelector('.carousel-images');
let currentIndex = 0;

function autoSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.children.length) {
    currentIndex = 0;
  }
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically slide every 3 seconds
setInterval(autoSlide, 3000);











// Set the target time for 1 day from now
const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day countdown

// Update the timer every second
const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the time remaining
  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // If the timer runs out, stop the interval
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
