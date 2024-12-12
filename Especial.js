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

function mostrarModal(event) {
    event.preventDefault(); 
    document.getElementById('modal').style.display = 'flex';
}

function aceptar() {
    window.location.href = "Especial.html";
}

function cancelar() {
    document.getElementById('modal').style.display = 'none';
}