const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navbar.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navbar.classList.remove('active');
        menuOpen = false;
    }
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navbar.classList.remove('active');
        menuOpen = false;
    });
});
// Selecciona el menú hamburguesa y el menú de navegación
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    // Agrega un evento de clic al menú hamburguesa
    mobileMenu.addEventListener('click', () => {
        // Alterna la clase 'active' en el menú de navegación
        navbar.classList.toggle('active');
    });