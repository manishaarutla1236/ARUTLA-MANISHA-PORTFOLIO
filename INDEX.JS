document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburgerBtn.addEventListener('click', () => {
        const isDisplayed = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isDisplayed ? 'none' : 'flex';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });

    // 2. Testimonial Carousel Mechanics
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsNav = document.getElementById('carousel-dots');

    let currentIndex = 0;

    // Create Carousel Dots Dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots[currentIndex].classList.remove('active');
        dots[index].classList.add('active');
        currentIndex = index;
    };

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });

    // Auto-advance Carousel every 6 seconds
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    }, 6000);

    // 3. Dynamic Footer Year Update
    document.getElementById('year').textContent = new Date().getFullYear();
});