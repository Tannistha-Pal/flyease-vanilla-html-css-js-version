// Tour packages data (updated with days, nights, maxPeople)
const tourPackages = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Bali Paradise',
        description: 'Experience the magical beauty of Bali with pristine beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure.',
        price: 80000,
        currency: '₹',
        days: 7,
        nights: 6,
        maxPeople: 10
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Swiss Alps Adventure',
        description: 'Breathtaking mountain views, crystal-clear lakes, and charming villages await you in the heart of Switzerland.',
        price: 115000,
        currency: '₹',
        days: 5,
        nights: 4,
        maxPeople: 8
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Thailand Islands',
        description: 'From the serene temples of Chiang Mai to the turquoise waters of Phuket, Thailand offers an unforgettable journey.',
        price: 96000,
        currency: '₹',
        days: 10,
        nights: 9,
        maxPeople: 12
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Vive La France',
        description: 'Experience a masterpiece: the art of the Louvre, the history of Notre-Dame, and the romance of the Eiffel Tower.',
        price: 105000,
        currency: '₹',
        days: 6,
        nights: 5,
        maxPeople: 15
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Maldives Luxury',
        description: 'Ultimate tropical paradise with overwater bungalows, crystal-clear lagoons, and world-class diving experiences.',
        price: 165000,
        currency: '₹',
        days: 4,
        nights: 3,
        maxPeople: 6
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
        destination: 'Bella Italia',
        description: 'Discover a tapestry of cultures and flavors, where breathtaking architecture meets Mediterranean charm.',
        price: 70000,
        currency: '₹',
        days: 8,
        nights: 7,
        maxPeople: 10
    }
];

// Traveler photos data
const travelerPhotos = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'Emma Thompson',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'New York'
        },
        likes: 342,
        comments: 28
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'James Wilson',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'London'
        },
        likes: 528,
        comments: 45
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'Sofia Rodriguez',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'Madrid'
        },
        likes: 419,
        comments: 33
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'Alex Chen',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'Singapore'
        },
        likes: 276,
        comments: 19
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'Maya Patel',
            avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'Mumbai'
        },
        likes: 634,
        comments: 52
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
        traveler: {
            name: 'Lucas Anderson',
            avatar: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=100',
            location: 'Sydney'
        },
        likes: 387,
        comments: 24
    }
];

// Function to create package cards
function createPackageCard(pkg) {
    return `
        <div class="package-card" data-package-id="${pkg.id}">
            <img src="${pkg.image}" alt="${pkg.destination}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="destination-name">${pkg.destination}</h3>
                <p class="description">${pkg.description}</p>
                <div class="package-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        ${pkg.days}D / ${pkg.nights}N
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        Max People: ${pkg.maxPeople}
                    </div>
                </div>
                <div class="price-section">
                    <div class="price-details">
                        <div class="price">
                            ${pkg.currency}${pkg.price}
                        </div>
                        <span class="price-label">per person</span>
                    </div>
                    <button class="book-btn" onclick="window.location.href='Booknow.html'">
                        <span>Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to create photo cards 
function createPhotoCard(photo) {
    return `
    
        <div class="photo-card" data-photo-id="${photo.id}">
            <img src="${photo.image}" alt="${photo.traveler.name}" class="photo-image" loading="lazy">
            
            <div class="photo-info">
                <div class="traveler-info">
                    <img src="${photo.traveler.avatar}" alt="${photo.traveler.name}" class="traveler-avatar" loading="lazy">
                    <div>
                        <div class="traveler-name">${photo.traveler.name}</div>
                        <div class="traveler-location">${photo.traveler.location}</div>
                    </div>
                </div>
                <div class="photo-stats">
                    <div class="stat">
                        <i class="fas fa-heart"></i>
                        ${photo.likes}
                    </div>
                    <div class="stat">
                        <i class="fas fa-comment"></i>
                        ${photo.comments}
                    </div>
                </div>
            </div>
        </div>
    `;
}


// Render functions
function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    grid.innerHTML = tourPackages.map(pkg => createPackageCard(pkg)).join('');
}

function renderPhotos() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = travelerPhotos.map(photo => createPhotoCard(photo)).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Expanding panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
    });

    renderPackages();
    renderPhotos();

    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Initially hide cards for animation
    setTimeout(() => {
        const cards = document.querySelectorAll('.package-card, .photo-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
            card.style.transitionDelay = `${(index % 3) * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});
