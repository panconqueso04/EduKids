// JavaScript para el funcionamiento del menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelector('.navbar ul');

// Alterna la clase 'show' al hacer clic en el ícono de hamburguesa
menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});

// Luces Interactivas
function lightUp(circle) {
    circle.classList.toggle('active');
    setTimeout(() => {
        circle.classList.remove('active');
    }, 500);  // Desactivar después de 500ms
}

// Carrusel de Colores
function changeColor() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
        item.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    const colors = ['#e74c3c', '#8e44ad', '#f1c40f', '#1abc9c', '#2ecc71'];
    return colors[Math.floor(Math.random() * colors.length)];
}
