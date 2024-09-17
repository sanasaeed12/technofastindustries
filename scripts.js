// scripts.js

let currentSlide = 0;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}
// JavaScript to handle sidebar toggle



function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides[currentSlide].clientWidth;
    const slideContainer = document.getElementById('slideContainer');
    slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide change every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

//section 3
//window.addEventListener('scroll', function() {
    //const section = document.getElementById('animatedSection');
    //const sectionPosition = section.getBoundingClientRect().top;
    //const screenPosition = window.innerHeight / 1.5;

   // if (sectionPosition < screenPosition) {
       // section.classList.add('show');
   // }
//});
window.addEventListener('scroll', function() {
    var section = document.querySelector('.section-container');
    var sectionPosition = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('show');
    }
});


//product section 

let currentCustomSlide = 0;
const customSlides = document.querySelectorAll('.custom-slide');

function showCustomSlide(index) {
    customSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(0)';
            slide.style.left = '0';
            // Re-trigger the animations by resetting them
            slide.querySelector('img').style.animation = 'none';
            slide.querySelector('.custom-slide-content').style.animation = 'none';
            slide.querySelector('.custom-cta-button').style.animation = 'none';
            // Force a reflow to reset the animation
            void slide.offsetWidth;
            // Re-apply the animations
            slide.querySelector('img').style.animation = 'imgSlideIn 1s ease forwards';
            slide.querySelector('.custom-slide-content').style.animation = 'contentSlideIn 1s ease forwards';
            slide.querySelector('.custom-cta-button').style.animation = 'fadeIn 2s ease forwards 1s';
        } else {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
            slide.style.left = '100%';
        }
    });
}

function nextCustomSlide() {
    currentCustomSlide = (currentCustomSlide + 1) % customSlides.length;
    showCustomSlide(currentCustomSlide);
}

// Automatically switch slides every 5 seconds
setInterval(nextCustomSlide, 5000);

// Optional: add hover effect for images
customSlides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

//mision vision code

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.content-box');

    const observerOptions = {
        threshold: 0.5
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    boxes.forEach(box => observer.observe(box));
});

// icon for techno fast industries

// Adding scroll-based animations
document.addEventListener('scroll', function () {
    const factors = document.querySelectorAll('.techno-factor');
    const screenPosition = window.innerHeight / 1.3;

    factors.forEach((factor) => {
        const factorPosition = factor.getBoundingClientRect().top;
        if (factorPosition < screenPosition) {
            factor.style.opacity = '1';
            factor.style.transform = 'translateY(0)';
        }
    });
});

//contact us option

document.querySelector('.phone-btn').addEventListener('click', function() {
    alert('Calling Techno Fast Industries!');
});

document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    alert('Opening WhatsApp!');
});

//footer design

document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#002244'; // Change to deep blue on hover
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.color = '#ff6600'; // Back to bright orange
        icon.style.transform = 'scale(1)';
    });
});

//whatsapp us fix button

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


//product section

function showProProduct(productId) {
    // Remove active class from all product items
    document.querySelectorAll('.pro-product-item').forEach(item => {
        item.classList.remove('pro-active');
    });

    // Hide all product contents
    document.querySelectorAll('.pro-product-content').forEach(content => {
        content.classList.remove('pro-active');
    });

    // Add active class to clicked product and corresponding content
    document.getElementById(productId).classList.add('pro-active');
    document.querySelector(`.pro-product-item[onclick="showProProduct('${productId}')"]`).classList.add('pro-active');
}

// About us menu section

// Fade in the heading
document.querySelector('.fade-in').style.animation = 'fadeIn 2.0s ease-out forwards';

//contact us menu section

document.addEventListener('DOMContentLoaded', function() {
    const smsBtn = document.querySelector('.contactformmenu-send-sms-btn');
    const contactNowBtn = document.querySelector('.contactformmenu-now-btn');

    // Adding animation on button click
    smsBtn.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => this.style.transform = 'scale(1)', 200);
    });

    contactNowBtn.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => this.style.transform = 'scale(1)', 200);
    });
});

//get call on id

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactformmenu-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const mobileNumber = document.getElementById('mobile-number').value;
        const requirement = document.getElementById('requirement').value;

        // Simulate sending data to a server
        if (mobileNumber && requirement) {
            successMessage.textContent = "Thank you for contacting us! We will get back to you shortly.";
            successMessage.style.display = 'block'; // Show success message
            
            // Optionally, reset form fields
            form.reset();
        } else {
            successMessage.textContent = "Please fill out all fields.";
            successMessage.style.display = 'block';
            successMessage.style.color = 'red'; // Show error message
        }
    });
});


//for hero section menu design


  



  