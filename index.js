    // Selecciona el menú hamburguesa y el menú de navegación
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    // Agrega un evento de clic al menú hamburguesa
    mobileMenu.addEventListener('click', () => {
        // Alterna la clase 'active' en el menú de navegación
        navbar.classList.toggle('active');
    });