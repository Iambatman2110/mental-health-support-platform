
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Background Slider
    const hero = document.querySelector('.hero');
    if (hero) {
        const images = [
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        ];
        let currentImageIndex = 0;

        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        const cycleBackground = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            hero.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        };

        // Change image every 5 seconds
        setInterval(cycleBackground, 5000);

        // Add transition to hero background
        hero.style.transition = 'background-image 1s ease-in-out';
    }

    // 2. Quote Slider Logic
    const slides = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    if (slides.length > 0) {
        const updateSlider = (index) => {
            // Remove active classes
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => {
                if (dot) dot.classList.remove('active');
            });

            // Add active class to current
            if (slides[index]) slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide++;
            if (currentSlide >= slides.length) currentSlide = 0;
            updateSlider(currentSlide);
        };

        const prevSlide = () => {
            currentSlide--;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            updateSlider(currentSlide);
        };

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider(currentSlide);
            });
        });

        // Auto slide every 6 seconds
        setInterval(nextSlide, 6000);
    }
});
