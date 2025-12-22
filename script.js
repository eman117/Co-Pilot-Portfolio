document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE MENU LOGIC ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // --- LIGHTBOX LOGIC ---
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const lightboxLinks = document.querySelectorAll('.lightbox-link');
    const closeBtn = document.querySelector('.lightbox-close');

    lightboxLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Get the image source from the link's href or the image inside it
            const imgSrc = link.getAttribute('href') || link.querySelector('img').src;
            
            modalImg.src = imgSrc;
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Stop page scrolling
        });
    });

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Resume scrolling
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close if clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
