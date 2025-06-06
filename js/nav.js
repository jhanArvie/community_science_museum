// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('toggleNav');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-nav');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('show-nav')) {
            navMenu.classList.remove('show-nav');
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('show-nav')) {
            navMenu.classList.remove('show-nav');
        }
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});