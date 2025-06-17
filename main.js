// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const lightboxLinks = document.querySelectorAll('.lightbox-link');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  let lastFocused = null;

  if (!modal || !modalImg || !closeBtn) return; // Safety check

  // Open lightbox
  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      lastFocused = document.activeElement;
      modalImg.src = this.href;
      modalImg.alt = this.querySelector('img').alt || '';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      modalImg.focus();
    });
  });

  // Focus trap
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      closeBtn.focus();
    }
  });

  // Close lightbox
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    if (lastFocused) lastFocused.focus();
  }
  closeBtn.onclick = closeModal;
  closeBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') closeModal();
  });
  modal.onclick = function(e) {
    if (e.target === modal) closeModal();
  };
  document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('open') && e.key === 'Escape') closeModal();
  });
});