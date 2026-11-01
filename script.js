
const sampleRestaurants = [
    {
        id: 1,
        name: "Sate Khas Senayan Bandung",
        location: "Jl. Merdeka No. 123, Bandung",
        rating: 4.7,
        priceRange: "$$",
        cuisines: ["Indonesian", "Sate", "Grill"],
        description: "Authentic Bandung-style satay with secret family recipes passed down for generations.",
        hours: "10:00 AM - 10:00 PM",
        contact: "(022) 1234567",
        popularDishes: [
            { name: "Sate Ayam", price: "Rp 35,000" },
            { name: "Sate Kambing", price: "Rp 45,000" },
            { name: "Nasi Putih", price: "Rp 10,000" }
        ],
        imageColor: "#e74c3c"
    },
    {
        id: 2,
        name: "Warung Nasi Ampera",
        location: "Jl. Asia Afrika No. 56, Bandung",
        rating: 4.5,
        priceRange: "$",
        cuisines: ["Sundanese", "Traditional", "Rice"],
        description: "Classic Sundanese cuisine in a cozy traditional setting with affordable prices.",
        hours: "8:00 AM - 9:00 PM",
        contact: "(022) 7654321",
        popularDishes: [
            { name: "Nasi Liwet", price: "Rp 25,000" },
            { name: "Ayam Goreng", price: "Rp 30,000" },
            { name: "Sayur Asem", price: "Rp 15,000" }
        ],
        imageColor: "#3498db"
    },
    {
        id: 3,
        name: "Bakso Malang Favorit",
        location: "Jl. Cihampelas No. 89, Bandung",
        rating: 4.8,
        priceRange: "$",
        cuisines: ["Indonesian", "Soup", "Street Food"],
        description: "Famous Malang-style meatballs with rich broth and various toppings.",
        hours: "9:00 AM - 11:00 PM",
        contact: "(022) 9876543",
        popularDishes: [
            { name: "Bakso Special", price: "Rp 30,000" },
            { name: "Mie Bakso", price: "Rp 35,000" },
            { name: "Es Teh", price: "Rp 8,000" }
        ],
        imageColor: "#2ecc71"
    },
    {
        id: 4,
        name: "Restoran Padang Sederhana",
        location: "Jl. Dago No. 45, Bandung",
        rating: 4.6,
        priceRange: "$$",
        cuisines: ["Padang", "Spicy", "Rice"],
        description: "Authentic Padang cuisine with rich flavors and traditional serving style.",
        hours: "10:00 AM - 10:00 PM",
        contact: "(022) 4567890",
        popularDishes: [
            { name: "Rendang Daging", price: "Rp 45,000" },
            { name: "Ayam Pop", price: "Rp 35,000" },
            { name: "Nasi Padang", price: "Rp 20,000" }
        ],
        imageColor: "#9b59b6"
    },
    {
        id: 5,
        name: "Mie Kocok Bandung",
        location: "Jl. Braga No. 78, Bandung",
        rating: 4.4,
        priceRange: "$",
        cuisines: ["Bandung", "Noodle", "Soup"],
        description: "Traditional Bandung-style noodle soup with beef broth and crackers.",
        hours: "7:00 AM - 8:00 PM",
        contact: "(022) 2345678",
        popularDishes: [
            { name: "Mie Kocok Special", price: "Rp 28,000" },
            { name: "Mie Kocok Komplit", price: "Rp 35,000" },
            { name: "Krupuk", price: "Rp 5,000" }
        ],
        imageColor: "#e67e22"
    },
    {
        id: 6,
        name: "Es Campur Surya",
        location: "Jl. Setiabudi No. 34, Bandung",
        rating: 4.9,
        priceRange: "$",
        cuisines: ["Dessert", "Ice", "Traditional"],
        description: "Iconic Bandung mixed ice dessert with various toppings and sweet syrup.",
        hours: "11:00 AM - 10:00 PM",
        contact: "(022) 3456789",
        popularDishes: [
            { name: "Es Campur Special", price: "Rp 25,000" },
            { name: "Es Teler", price: "Rp 30,000" },
            { name: "Es Buah", price: "Rp 28,000" }
        ],
        imageColor: "#1abc9c"
    }
];

const sampleDiscoveries = [
    {
        id: 1,
        title: "Hidden Gem: Authentic Sundanese Breakfast",
        author: "Sarah M.",
        date: "2 days ago",
        dish: "Nasi Tutug Oncom",
        restaurant: "Warung Nasi Ampera",
        price: "Rp 25,000",
        review: "Found this amazing traditional breakfast spot! The nasi tutug oncom is perfectly seasoned with just the right amount of spice. The portion is generous and the atmosphere feels truly authentic.",
        icon: "fa-bowl-rice"
    },
    {
        id: 2,
        title: "Best Sate in Town!",
        author: "Ahmad R.",
        date: "1 week ago",
        dish: "Sate Ayam Madura",
        restaurant: "Sate Khas Senayan Bandung",
        price: "Rp 35,000",
        review: "The sate here is absolutely incredible! Perfectly grilled with that smoky flavor, and the peanut sauce is rich and creamy. Definitely worth the wait during peak hours.",
        icon: "fa-drumstick-bite"
    },
    {
        id: 3,
        title: "Late Night Bakso Heaven",
        author: "Budi W.",
        date: "3 days ago",
        dish: "Bakso Special",
        restaurant: "Bakso Malang Favorit",
        price: "Rp 30,000",
        review: "Perfect spot for late-night cravings! The broth is rich and flavorful, and the meatballs are springy and delicious. Great value for money.",
        icon: "fa-bowl-food"
    }
];


const restaurantsGrid = document.getElementById('restaurantsGrid');
const discoveriesGrid = document.getElementById('discoveriesGrid');
const restaurantModal = document.getElementById('restaurantModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const startCompareBtn = document.getElementById('startCompareBtn');
const comparePlaceholder = document.getElementById('comparePlaceholder');
const compareResults = document.getElementById('compareResults');


let selectedRestaurants = [];


document.addEventListener('DOMContentLoaded', () => {
    initializeRestaurants();
    initializeDiscoveries();
    setupEventListeners();
    setupMobileNavigation();
});


function initializeRestaurants() {
    restaurantsGrid.innerHTML = '';
    
    sampleRestaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        restaurantsGrid.appendChild(restaurantCard);
    });
}


function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.dataset.id = restaurant.id;
    
    
    const stars = '★'.repeat(Math.floor(restaurant.rating)) + '☆'.repeat(5 - Math.floor(restaurant.rating));
    
    card.innerHTML = `
        <div class="restaurant-image" style="background: linear-gradient(135deg, ${restaurant.imageColor}20, ${restaurant.imageColor}40);">
            <i class="fas fa-utensils"></i>
            <div class="restaurant-rating">
                <i class="fas fa-star"></i>
                <span>${restaurant.rating}</span>
            </div>
        </div>
        <div class="restaurant-content">
            <h3>${restaurant.name}</h3>
            <div class="restaurant-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${restaurant.location}</span>
            </div>
            <div class="restaurant-cuisines">
                ${restaurant.cuisines.map(cuisine => `<span class="cuisine-tag">${cuisine}</span>`).join('')}
            </div>
            <div class="restaurant-pricing">
                <div class="price-range">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>${restaurant.priceRange}</span>
                </div>
                <button class="btn btn-outline compare-btn" data-id="${restaurant.id}">
                    <i class="fas fa-plus"></i>
                    Compare
                </button>
            </div>
        </div>
    `;
    

    card.addEventListener('click', (e) => {
        if (!e.target.closest('.compare-btn')) {
            showRestaurantDetails(restaurant);
        }
    });
    
    
    const compareBtn = card.querySelector('.compare-btn');
    compareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleRestaurantForComparison(restaurant);
    });
    
    return card;
}


function initializeDiscoveries() {
    discoveriesGrid.innerHTML = '';
    
    sampleDiscoveries.forEach(discovery => {
        const discoveryCard = createDiscoveryCard(discovery);
        discoveriesGrid.appendChild(discoveryCard);
    });
}


function createDiscoveryCard(discovery) {
    const card = document.createElement('div');
    card.className = 'discovery-card';
    
    card.innerHTML = `
        <div class="discovery-header">
            <h3>${discovery.title}</h3>
            <div class="discovery-author">
                <i class="fas fa-user"></i>
                <span>${discovery.author} • ${discovery.date}</span>
            </div>
        </div>
        <div class="discovery-content">
            <div class="discovery-dish">
                <div class="dish-icon">
                    <i class="fas ${discovery.icon}"></i>
                </div>
                <div class="dish-info">
                    <h4>${discovery.dish}</h4>
                    <p>at ${discovery.restaurant}</p>
                    <div class="dish-price">${discovery.price}</div>
                </div>
            </div>
            <p class="discovery-review">${discovery.review}</p>
        </div>
    `;
    
    return card;
}


function showRestaurantDetails(restaurant) {
    // Generate star rating display
    const fullStars = '★'.repeat(Math.floor(restaurant.rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(restaurant.rating));
    const starDisplay = fullStars + emptyStars;
    
    modalBody.innerHTML = `
        <div class="restaurant-details">
            <div class="restaurant-header" style="background: linear-gradient(135deg, ${restaurant.imageColor}30, ${restaurant.imageColor}60);">
                <h2>${restaurant.name}</h2>
                <div class="restaurant-meta">
                    <div class="rating-display">
                        <span class="stars">${starDisplay}</span>
                        <span class="rating-number">${restaurant.rating}/5.0</span>
                    </div>
                    <div class="price-display">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>${restaurant.priceRange}</span>
                    </div>
                </div>
            </div>
            
            <div class="restaurant-info-grid">
                <div class="info-section">
                    <h3><i class="fas fa-info-circle"></i> About</h3>
                    <p>${restaurant.description}</p>
                </div>
                
                <div class="info-section">
                    <h3><i class="fas fa-map-marker-alt"></i> Location</h3>
                    <p>${restaurant.location}</p>
                </div>
                
                <div class="info-section">
                    <h3><i class="fas fa-clock"></i> Hours</h3>
                    <p>${restaurant.hours}</p>
                </div>
                
                <div class="info-section">
                    <h3><i class="fas fa-phone"></i> Contact</h3>
                    <p>${restaurant.contact}</p>
                </div>
            </div>
            
            <div class="menu-section">
                <h3><i class="fas fa-utensils"></i> Popular Dishes</h3>
                <div class="menu-items">
                    ${restaurant.popularDishes.map(dish => `
                        <div class="menu-item">
                            <div class="dish-name">${dish.name}</div>
                            <div class="dish-price">${dish.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="cuisine-section">
                <h3><i class="fas fa-tags"></i> Cuisines</h3>
                <div class="cuisine-tags">
                    ${restaurant.cuisines.map(cuisine => `<span class="cuisine-tag">${cuisine}</span>`).join('')}
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="btn btn-outline" id="addToCompare">
                    <i class="fas fa-balance-scale"></i>
                    Add to Comparison
                </button>
                <button class="btn btn-primary" id="viewFullMenu">
                    <i class="fas fa-book-open"></i>
                    View Full Menu
                </button>
            </div>
        </div>
    `;
    
    restaurantModal.style.display = 'flex';
    
    
    document.getElementById('addToCompare').addEventListener('click', () => {
        toggleRestaurantForComparison(restaurant);
        restaurantModal.style.display = 'none';
    });
    
    document.getElementById('viewFullMenu').addEventListener('click', () => {
        alert(`Full menu for ${restaurant.name} would be displayed here. This is a demo.`);
    });
}


function toggleRestaurantForComparison(restaurant) {
    const index = selectedRestaurants.findIndex(r => r.id === restaurant.id);
    
    if (index === -1) {
        if (selectedRestaurants.length < 3) {
            selectedRestaurants.push(restaurant);
            showNotification(`${restaurant.name} added to comparison`);
            updateComparisonUI();
        } else {
            showNotification('Maximum 3 restaurants can be compared at once', 'error');
        }
    } else {
        selectedRestaurants.splice(index, 1);
        showNotification(`${restaurant.name} removed from comparison`);
        updateComparisonUI();
    }
    
    
    updateCompareButtons();
}


function updateComparisonUI() {
    if (selectedRestaurants.length > 0) {
        comparePlaceholder.classList.add('hidden');
        compareResults.classList.remove('hidden');
        compareResults.innerHTML = createComparisonTable();
    } else {
        comparePlaceholder.classList.remove('hidden');
        compareResults.classList.add('hidden');
    }
}

// Create Comparison Table
function createComparisonTable() {
    const features = ['Name', 'Rating', 'Price Range', 'Location', 'Popular Dishes'];
    
    let tableHTML = `
        <div class="comparison-table">
            <div class="comparison-header">
                <h3>Restaurant Comparison</h3>
                <button class="btn btn-outline" id="clearComparison">
                    <i class="fas fa-trash"></i>
                    Clear All
                </button>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            ${selectedRestaurants.map(r => `<th>${r.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    
    features.forEach(feature => {
        tableHTML += '<tr>';
        tableHTML += `<td><strong>${feature}</strong></td>`;
        
        selectedRestaurants.forEach(restaurant => {
            let value = '';
            switch(feature) {
                case 'Name':
                    value = restaurant.name;
                    break;
                case 'Rating':
                    value = `${restaurant.rating} ★`;
                    break;
                case 'Price Range':
                    value = restaurant.priceRange;
                    break;
                case 'Location':
                    value = restaurant.location;
                    break;
                case 'Popular Dishes':
                    value = restaurant.popularDishes.map(d => d.name).join(', ');
                    break;
            }
            tableHTML += `<td>${value}</td>`;
        });
        
        tableHTML += '</tr>';
    });
    
    tableHTML += `
                    </tbody>
                </table>
            </div>
            <div class="comparison-summary">
                <p>Comparing ${selectedRestaurants.length} restaurant(s)</p>
                <div class="summary-tips">
                    <h4><i class="fas fa-lightbulb"></i> Tips:</h4>
                    <ul>
                        <li>Consider distance from your location</li>
                        <li>Check operating hours before visiting</li>
                        <li>Read recent reviews for updated information</li>
                        <li>Compare menu prices for your budget</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    return tableHTML;
}


function updateCompareButtons() {
    document.querySelectorAll('.compare-btn').forEach(btn => {
        const restaurantId = parseInt(btn.dataset.id);
        const isSelected = selectedRestaurants.some(r => r.id === restaurantId);
        
        if (isSelected) {
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
            btn.classList.add('btn-primary');
            btn.classList.remove('btn-outline');
        } else {
            btn.innerHTML = '<i class="fas fa-plus"></i> Compare';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline');
        }
    });
}


function setupEventListeners() {

    modalClose.addEventListener('click', () => {
        restaurantModal.style.display = 'none';
    });
    
    
    window.addEventListener('click', (e) => {
        if (e.target === restaurantModal) {
            restaurantModal.style.display = 'none';
        }
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });
    

    searchInput.addEventListener('input', debounce(searchRestaurants, 300));
    

    startCompareBtn.addEventListener('click', () => {
        if (selectedRestaurants.length === 0) {
            showNotification('Please add restaurants to compare first', 'error');
            return;
        }
        updateComparisonUI();
    });
    
    
    document.addEventListener('click', (e) => {
        if (e.target.id === 'clearComparison' || e.target.closest('#clearComparison')) {
            selectedRestaurants = [];
            updateComparisonUI();
            updateCompareButtons();
            showNotification('Comparison cleared');
        }
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                
                if (mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                }
            }
        });
    });
    
    
    document.getElementById('loginBtn').addEventListener('click', () => {
        alert('Login functionality would be implemented here. This is a demo.');
    });
    
   
    document.getElementById('locationBtn').addEventListener('click', () => {
        alert('Location services would be enabled here. This is a demo.');
    });
}


function setupMobileNavigation() {
    menuToggle.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });
    
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
    
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
}


function searchRestaurants() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        initializeRestaurants();
        return;
    }
    
    const filteredRestaurants = sampleRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchTerm)) ||
        restaurant.location.toLowerCase().includes(searchTerm) ||
        restaurant.description.toLowerCase().includes(searchTerm)
    );
    
    restaurantsGrid.innerHTML = '';
    
    if (filteredRestaurants.length === 0) {
        restaurantsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No restaurants found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }
    
    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        restaurantsGrid.appendChild(restaurantCard);
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 4000;
        animation: slideIn 0.3s ease-out;
    `;
    
   
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
   
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        
       
        const slideOutStyle = document.createElement('style');
        slideOutStyle.textContent = `
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(slideOutStyle);
        
        setTimeout(() => {
            notification.remove();
            style.remove();
            slideOutStyle.remove();
        }, 300);
    }, 3000);
}

// Initialize active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem;
        color: var(--text-light);
    }
    
    .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--text-light);
    }
    
    .restaurant-details {
        max-width: 100%;
    }
    
    .restaurant-header {
        padding: 2rem;
        border-radius: var(--border-radius);
        margin-bottom: 2rem;
    }
    
    .restaurant-meta {
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
    }
    
    .rating-display {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .stars {
        font-size: 1.5rem;
        color: var(--accent-color);
    }
    
    .restaurant-info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .info-section {
        padding: 1.5rem;
        background: var(--background-light);
        border-radius: var(--border-radius);
    }
    
    .info-section h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 1rem;
        color: var(--text-dark);
    }
    
    .menu-section {
        margin-bottom: 2rem;
    }
    
    .menu-items {
        background: var(--background-light);
        border-radius: var(--border-radius);
        padding: 1.5rem;
    }
    
    .menu-item {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .menu-item:last-child {
        border-bottom: none;
    }
    
    .dish-name {
        font-weight: 500;
    }
    
    .dish-price {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    .cuisine-section {
        margin-bottom: 2rem;
    }
    
    .cuisine-tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .action-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .comparison-table {
        width: 100%;
    }
    
    .comparison-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .table-container {
        overflow-x: auto;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: var(--shadow-light);
    }
    
    th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid var(--border-color);
    }
    
    th {
        background: var(--background-light);
        font-weight: 600;
        color: var(--text-dark);
    }
    
    tr:hover {
        background: rgba(231, 76, 60, 0.05);
    }
    
    .comparison-summary {
        margin-top: 2rem;
        padding: 1.5rem;
        background: var(--background-light);
        border-radius: var(--border-radius);
    }
    
    .summary-tips {
        margin-top: 1rem;
        padding: 1rem;
        background: white;
        border-radius: var(--border-radius);
    }
    
    .summary-tips ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0 0;
    }
    
    .summary-tips li {
        padding: 0.5rem 0;
        color: var(--text-light);
        position: relative;
        padding-left: 1.5rem;
    }
    
    .summary-tips li:before {
        content: '•';
        color: var(--primary-color);
        position: absolute;
        left: 0;
    }
    
    @media (max-width: 768px) {
        .restaurant-info-grid {
            grid-template-columns: 1fr;
        }
        
        .action-buttons {
            flex-direction: column;
        }
        
        table {
            font-size: 0.9rem;
        }
        
        th, td {
            padding: 0.75rem;
        }
    }
`;
document.head.appendChild(notificationStyles);


function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <span>Loading...</span>
        </div>
    `;
}


window.CulinaryApp = {
    sampleRestaurants,
    sampleDiscoveries,
    showRestaurantDetails,
    toggleRestaurantForComparison,
    searchRestaurants
};