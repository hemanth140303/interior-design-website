// Navigation hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    try {
        // Send data to server
        const response = await fetch('http://localhost:8001/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        });

        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }
});

// Scroll-based navigation highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === currentSection) {
            item.classList.add('active');
        }
    });
});
