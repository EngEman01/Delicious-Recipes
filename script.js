const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('.front .navbar ul');

menuToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('active'); // Toggle the 'active' class
    menuToggle.classList.toggle('active'); // Toggle the 'active' class on the menu-toggle too if needed
});

// Close the menu if a link is clicked (optional)
const navLinks = document.querySelectorAll('.front .navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 767) { // Only close on mobile
            navbarUl.classList.remove('active');
            menuToggle.classList.remove('active'); // Hide the toggle icon if you want
        }
    });
});