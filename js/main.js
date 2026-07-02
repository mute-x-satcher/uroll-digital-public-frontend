/* ============================================
   UROLL DIGITAL — main.js
   ============================================ */

/* ---------- Navbar scroll effect ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- Mobile menu ---------- */
const toggle  = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---------- Scroll-reveal (IntersectionObserver) ---------- */
const revealEls = document.querySelectorAll('.reveal, .reveal-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ---------- Contact form ---------- */
const form    = document.getElementById('contact-form');
const formWrap = document.getElementById('form-wrap');
const success = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formWrap.style.display = 'none';
  success.classList.add('show');
});
