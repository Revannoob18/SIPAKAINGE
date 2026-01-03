// ============================================
// MAIN JAVASCRIPT FOR MINDCARE WEBSITE
// ============================================

// DOM Elements
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const pageTransition = document.getElementById('pageTransition');

// ============================================
// PAGE TRANSITION
// ============================================
function initPageTransition() {
    const pt = document.getElementById('pageTransition');
    if (pt) {
        // Hide loader after page loads
        setTimeout(function() {
            pt.classList.remove('active');
        }, 300);
    }
    
    // Show loader before navigating away
    window.addEventListener('beforeunload', function() {
        if (pt) {
            pt.classList.add('active');
        }
    });
    
    // Also intercept link clicks to show loader
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        if (link) {
            const href = link.getAttribute('href');
            // Only for internal navigation (not anchors, external links, or javascript)
            if (href && 
                !href.startsWith('#') && 
                !href.startsWith('javascript:') && 
                !href.startsWith('http://') && 
                !href.startsWith('https://') &&
                !href.startsWith('mailto:') &&
                !href.startsWith('tel:')) {
                
                e.preventDefault();
                if (pt) {
                    pt.classList.add('active');
                }
                setTimeout(function() {
                    window.location.href = href;
                }, 400);
            }
        }
    });
}

// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add rotation animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
let navbarVisible = true;
let navbarTimeout = null;
let lastInteractionTime = 0;
const HIDE_DELAY = 1000; // 1 second

function showNavbar() {
    const now = Date.now();
    // Throttle: only respond to interactions at least 100ms apart
    if (now - lastInteractionTime < 100) return;
    lastInteractionTime = now;
    
    if (navbar) {
        navbar.style.transform = 'translateY(0)';
        navbarVisible = true;
    }
    if (navbarTimeout) clearTimeout(navbarTimeout);
    
    // Auto-hide after 3s on all devices
    navbarTimeout = setTimeout(hideNavbar, HIDE_DELAY);
}

function hideNavbar() {
    // Hide navbar
    if (navbar && window.pageYOffset > 50) {
        navbar.style.transform = 'translateY(-100%)';
        navbarVisible = false;
    }
}

// Start auto-hide timer on page load
document.addEventListener('DOMContentLoaded', () => {
    navbarTimeout = setTimeout(hideNavbar, HIDE_DELAY);
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show navbar on scroll
        showNavbar();
    }
    lastScroll = currentScroll;
});

// Show navbar on touch (mobile)
document.addEventListener('touchstart', showNavbar, { passive: true });

// Show navbar when hovering near top of screen (desktop)
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 80) {
        showNavbar();
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (!href || href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                MobileMenu.close();
                
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with slide-up class
document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// ============================================
// FORM VALIDATION
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = 'var(--danger-color)';
    errorElement.style.fontSize = '14px';
    errorElement.style.marginTop = '4px';
    input.style.borderColor = 'var(--danger-color)';
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 24px;
            background: ${type === 'success' ? 'var(--success-color)' : type === 'info' ? 'var(--primary-color)' : 'var(--danger-color)'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            min-width: 300px;
        ">
            <div style="display: flex; align-items: center; gap: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${type === 'success'
                        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
                        : type === 'info'
                        ? '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/><path d="M12 16v-4"/>'
                        : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'}
                </svg>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Teks berhasil disalin!', 'success');
    }).catch(() => {
        showNotification('Gagal menyalin teks', 'error');
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const createScrollToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"/>
        </svg>
    `;
    button.style.cssText = `
        position: fixed;
        bottom: 180px;
        right: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        z-index: 998;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'all';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });
    
    document.body.appendChild(button);
};

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize page transition
    initPageTransition();
    
    // Setup smooth scroll for anchor links
    setupSmoothScroll();
    
    // Create scroll to top button
    createScrollToTop();
    
    // Update active nav link on scroll
    updateActiveNavLink();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🧠 MindCare Website Initialized Successfully!');
});

// ============================================
// PREVENT FORMS FROM SUBMITTING (Demo Mode)
// ============================================
document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.tagName === 'FORM' && !form.hasAttribute('data-real-submit')) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form Data:', data);
        showNotification('Data berhasil dikirim! (Demo Mode)', 'success');
        
        // Reset form after 1 second
        setTimeout(() => form.reset(), 1000);
    }
});

// ============================================
// EXPORT FUNCTIONS FOR OTHER SCRIPTS
// ============================================
window.MindCare = {
    showNotification,
    validateEmail,
    validatePhone,
    showError,
    clearError,
    Storage,
    copyToClipboard
};
