document.addEventListener('DOMContentLoaded', function() {
    // Hero section text animation
    const heroContent = document.querySelector('.hero-content');
    
    // Add animation classes with delays
    const heroElements = heroContent.children;
    Array.from(heroElements).forEach((el, index) => {
        el.classList.add('animate-pop-in');
        el.style.animationDelay = `${0.5 + (index * 0.2)}s`;
    });
    
    // Scroll down arrow animation
    const scrollDown = document.querySelector('.scroll-down');
    setTimeout(() => {
        scrollDown.style.opacity = '1';
    }, 2000);
    
    // Smooth scroll for navigation buttons/links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Button click effect
            this.classList.add('click-effect');
            setTimeout(() => {
                this.classList.remove('click-effect');
            }, 300);
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll down arrow functionality
    if (scrollDown) {
        scrollDown.addEventListener('click', function(e) {
            e.preventDefault();
            const nextSection = document.querySelector('.theme-section');
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Section entrance animations with more advanced effects
    const sections = document.querySelectorAll('.theme-section');
    
    function animateSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Animate when section is 100px from the bottom of the viewport
            if(sectionTop < windowHeight - 100) {
                section.classList.add('section-visible');
                
                const textContent = section.querySelector('.text-content');
                const mediaContent = section.querySelector('.media-content');
                
                if(textContent && !textContent.classList.contains('animate-slide-left')) {
                    textContent.classList.add('animate-slide-left');
                }
                
                if(mediaContent && !mediaContent.classList.contains('animate-slide-right')) {
                    mediaContent.classList.add('animate-slide-right');
                }
                
                // Animate cards and other elements within sections
                const cards = section.querySelectorAll('.feature-card, .tribe-card, .species-card, .prep-card, .period-card, .figure-card');
                cards.forEach((card, index) => {
                    if(!card.classList.contains('animate-zoom-in')) {
                        card.style.animationDelay = `${index * 0.1}s`;
                        card.classList.add('animate-zoom-in');
                    }
                });
                
                // Timeline animations
                const timelineEvents = section.querySelectorAll('.timeline-event, .history-item');
                if(timelineEvents.length > 0) {
                    timelineEvents.forEach((event, index) => {
                        if(!event.classList.contains('animate-slide-up')) {
                            event.style.animationDelay = `${index * 0.2}s`;
                            event.classList.add('animate-slide-up');
                        }
                    });
                }
                
                // Stats animations
                const stats = section.querySelectorAll('.stat-card, .eco-stat, .bio-stat');
                stats.forEach((stat, index) => {
                    if(!stat.classList.contains('animate-pop-in')) {
                        stat.style.animationDelay = `${index * 0.1}s`;
                        stat.classList.add('animate-pop-in');
                    }
                });
            }
            
            // Parallax effect for sections with background images
            if(section.classList.contains('parallax-section')) {
                const parallaxValue = (windowHeight - sectionTop) * 0.5;
                section.style.backgroundPositionY = `${parallaxValue}px`;
            }
        });
    }
    
    // Initial check
    animateSections();
    
    // Check on scroll with throttle for performance
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(animateSections, 50);
    }, false);
    
    // Sport card hover effects
    const sportCards = document.querySelectorAll('.sport-card');
    
    sportCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.sport-overlay').style.opacity = '0.7';
            this.querySelector('.sport-content').style.transform = 'translateY(-20px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.sport-overlay').style.opacity = '0.8';
            this.querySelector('.sport-content').style.transform = 'translateY(0)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.classList.add('click-effect');
            setTimeout(() => {
                this.classList.remove('click-effect');
            }, 300);
        });
    });
    
    // Genre card hover effects
    const genreCards = document.querySelectorAll('.genre-card');
    
    genreCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.genre-content').style.transform = 'translateY(-20px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.genre-content').style.transform = 'translateY(0)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.classList.add('click-effect');
            setTimeout(() => {
                this.classList.remove('click-effect');
            }, 300);
        });
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});