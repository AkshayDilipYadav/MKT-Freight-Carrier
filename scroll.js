

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Add scroll event listener
window.addEventListener('scroll', () => {
  let current = '';
  
  // Determine which section is in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  
  // Remove active class from all links and add to the current one
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



const headerLogoName = document.querySelector('.headerLogoName');
const headerName = document.querySelector('.headerName');
const section1 = document.querySelector('#section1');


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const sectionHeight = section1.clientHeight;// Height of the viewport
    const triggerHeight =sectionHeight * 0.3; // 60% of the viewport height

    // Transition headerLogoName upwards as the user scrolls
    if (scrollY < triggerHeight) {
        const offset = Math.max(0, 200 - (scrollY / triggerHeight) * 200); // Calculate remaining offset
        headerLogoName.style.transform = `translateY(${offset}px)`; // Move upward dynamically
        headerLogoName.classList.remove('stopped'); // Ensure "stopped" class is removed
    } else {
        // Stop movement and fix headerLogoName in place
        headerLogoName.style.transform = `translateY(0)`; // Final position
        headerLogoName.classList.add('stopped');
    }

    // Show headerName when scrolling down and hide it when scrolling up
    if (scrollY >= triggerHeight) {
        headerName.classList.add('visible'); // Show headerName
    } else {
        headerName.classList.remove('visible'); // Hide headerName
    }
});

const quoteButton = document.getElementById('quoteButton');
const quoteContainer = document.querySelector('.getAQuoteContainer');

// Track the toggle state
let isExpanded = false;

// Add click event listener to the button
quoteButton.addEventListener('click', () => {
  if (isExpanded) {
    // Collapse the container
    quoteContainer.style.left = '-350%'; // Reset to center of the button
    quoteContainer.style.transform = 'translate(-50%, -60%) scale(1)'; // Shrink back to point
  } else {
    // Expand the container
    quoteContainer.style.left = '350%'; // Move to the right of the button
    quoteContainer.style.transform = 'translate(-50%, -60%) scale(1)'; // Expand to full size
  }
  // Toggle the state
  isExpanded = !isExpanded;
});