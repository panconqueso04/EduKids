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

// Abre el modal y carga el juego en el iframe
function openGame(gameUrl) {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    gameFrame.src = gameUrl; // Carga el juego
    modal.style.display = 'flex'; // Muestra el modal
}

// Cierra el modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    gameFrame.src = ''; // Limpia el iframe
    modal.style.display = 'none'; // Oculta el modal
}
