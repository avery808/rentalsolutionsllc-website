// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
let mobileNav = document.querySelector('.nav-mobile');

if (!mobileNav) {
  mobileNav = document.createElement('div');
  mobileNav.className = 'nav-mobile';
  mobileNav.innerHTML = `
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#veterans">Veterans</a>
    <a href="#contact">Get Started</a>
  `;
  document.body.appendChild(mobileNav);
}

toggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.10)' : '0 1px 8px rgba(0,0,0,0.06)';
});
