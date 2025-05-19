// Initialize AOS (scroll animations)
// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Scroll Event: Back-to-Top Button
const backToTopButton = document.getElementById('backToTop');

// Show/Hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Skill Bars Animation
window.addEventListener('scroll', () => {
  const skillsTop = document.querySelector('.skills').getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.85;

  if (skillsTop < triggerPoint) {
    document.querySelectorAll('.progress').forEach(bar => {
      if (bar.style.width) return; // Avoid resetting the width multiple times
      if (bar.classList.contains('python')) {
        bar.style.width = '90%';
      } else if (bar.classList.contains('java')) {
        bar.style.width = '80%';
      } else if (bar.classList.contains('html')) {
        bar.style.width = '85%';
      } else if (bar.classList.contains('sql')) {
        bar.style.width = '70%';
      } else if (bar.classList.contains('ml')) {
        bar.style.width = '80%';
      } else {
        bar.style.width = '75%';
      }
    });
  }
});

// Contact Form Mock Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('msg').style.display = 'block';
  e.target.reset();
});


