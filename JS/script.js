// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeWebsite();
    setupSmoothScrolling();
    setupDestinationCards();
    setupMobileMenu(); // ✅ Added new function
    setupAnimations(); // ✅ Added new function

    // Add loading animation
    document.body.classList.add('loaded');

    // Initialize hero slider (autoplay + controls)
    initHeroSlider();
});

// Initialize all website functionality
function initializeWebsite() {
    setupSearchForm();
    setupDropdowns();
    setupNewsletterForm();
    setupCounterAnimation();
}

// Setup the search form functionality
function setupSearchForm() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            handleSearch();
        });
    }

    // Add change event to all select dropdowns in the search form
    document.querySelectorAll('.search-form select').forEach(select => {
        select.addEventListener('change', updateSearchButton);
    });
}

// Validate the search form before running search
function validateSearchForm() {
    const destination = document.getElementById('destination');
    const duration = document.getElementById('duration');
    const price = document.getElementById('price');

    let isValid = true;

    // Remove previous error styles
    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));

    // Check if each select box has a value selected (index 0 = default placeholder)
    if (destination.selectedIndex === 0) {
        destination.closest('.form-group').classList.add('error');
        isValid = false;
    }
    if (duration.selectedIndex === 0) {
        duration.closest('.form-group').classList.add('error');
        isValid = false;
    }
    if (price.selectedIndex === 0) {
        price.closest('.form-group').classList.add('error');
        isValid = false;
    }

    // Show alert if form is invalid
    if (!isValid) alert('Please fill in all search fields');
    return isValid;
}

// Handle search button click
function handleSearch() {
    const destination = document.getElementById('destination').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;

    // Stop if the form is not valid
    if (!validateSearchForm()) return;

    // Show alert with selected values
    alert(
        `Searching for:\n\n` +
        `Destination: ${destination}\n` +
        `Duration: ${duration}\n` +
        `Price: ${price}`
    );

    // Reset the form fields after the alert is closed
    resetSearchForm();
}

// Update search button opacity based on whether all fields are selected
function updateSearchButton() {
    const selects = document.querySelectorAll('.search-form select');
    const searchBtn = document.querySelector('.search-btn');
    const allSelected = [...selects].every(select => select.selectedIndex !== 0);
    if (searchBtn) searchBtn.style.opacity = allSelected ? '1' : '0.8';
}

// Reset all dropdowns in the search form to default (first option)
function resetSearchForm() {
    document.querySelectorAll('.search-form select').forEach(select => {
        select.selectedIndex = 0; // Reset to the first option (usually placeholder)
    });
    updateSearchButton(); // Also update button opacity after reset
}

function setupNewsletterForm() {
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterEmail = document.getElementById('newsletter-email');

    if (newsletterBtn && newsletterEmail) {
        newsletterBtn.addEventListener('click', function (e) {
            e.preventDefault();
            handleNewsletterSubscription();
        });

        newsletterEmail.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleNewsletterSubscription();
            }
        });
    }
}

function handleNewsletterSubscription() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (!email) return alert('Please enter your email address');
    if (!isValidEmail(email)) return alert('Please enter a valid email address');

    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            dropdowns.forEach(other => { if (other !== this) other.classList.remove('active'); });
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) dropdowns.forEach(drop => drop.classList.remove('active'));
    });
}

function setupCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    if (isNaN(target)) return;

    let current = 0;
    const increment = target / (2000 / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

function setupSmoothScrolling() {
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));
            if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupDestinationCards() {
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('click', function () {
            const destination = this.querySelector('h3').textContent;
            alert(`Exploring ${destination}...`);
        });
    });
}

// --- Hero Slider Autoplay + Controls + Content Animation
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = Array.from(document.querySelectorAll('.hero-slider .slide'));
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const heroContent = document.querySelector('.hero-content');

    if (!heroSlider || !heroSlides.length || !heroContent) return;

    if (!heroSlides.some(s => s.classList.contains('active'))) {
        heroSlides[0].classList.add('active');
    }

    let current = heroSlides.findIndex(s => s.classList.contains('active'));
    if (current < 0) current = 0;

    let autoTimer = null;
    const DELAY = 2000;

    function showHeroSlide(index) {
        index = (index + heroSlides.length) % heroSlides.length;
        heroSlides.forEach((s, i) => s.classList.toggle('active', i === index));

        heroContent.classList.remove('animate');
        void heroContent.offsetWidth;
        heroContent.classList.add('animate');

        current = index;
    }

    function nextSlide() { showHeroSlide(current + 1); }
    function prevSlide() { showHeroSlide(current - 1); }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(nextSlide, DELAY);
    }

    function stopAuto() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAuto(); });

    heroSlider.addEventListener('mouseenter', stopAuto);
    heroSlider.addEventListener('mouseleave', startAuto);

    showHeroSlide(current);
    setTimeout(() => heroContent.classList.add('animate'), 80);
    startAuto();
}

// --- Mobile Menu Toggle
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// --- Scroll / Fade-in Animations
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.destination-card, .testimonial-card, .about-text, .why-choose-text')
        .forEach(el => observer.observe(el));

    setTimeout(() => {
        const searchForm = document.querySelector('.search-form');
        if (searchForm) searchForm.classList.add('fade-in');
    }, 500);

    const scrollIndicators = document.querySelector('.scroll-indicators');
    if (scrollIndicators) setTimeout(() => scrollIndicators.classList.add('slide-in-right'), 1000);
}

// Export functions if needed externally
window.FlyEaseWebsite = {
    handleSearch,
    validateSearchForm,
    setupAnimations,
    handleNewsletterSubscription
};
