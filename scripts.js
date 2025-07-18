document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Mobile Menu Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav__list--open');
  });

  // Modal Functionality
  const modal = document.getElementById('apply-modal');
  const modalButtons = document.querySelectorAll('[data-modal]');
  const closeModal = document.querySelector('.modal__close');

  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Keyboard Accessibility for Modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});
