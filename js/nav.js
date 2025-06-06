// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('toggleNav');
    const navMenu = document.getElementById('navMenu');
    const navWrapper = document.querySelector('.floating-nav-wrapper');
    
    // Variables for scroll functionality
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Minimum scroll amount to trigger hide/show
    
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
    
    // Hide/show navigation on scroll
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if user has scrolled enough to trigger the effect
        if (Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) {
            return;
        }
        
        // Scrolling down - hide nav
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            navWrapper.classList.add('nav-hidden');
        } 
        // Scrolling up - show nav
        else if (currentScrollTop < lastScrollTop) {
            navWrapper.classList.remove('nav-hidden');
        }
        
        lastScrollTop = currentScrollTop;
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