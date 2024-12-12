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

function mostrarDetalles(cardId) {
    const detallesContainer = document.getElementById('detalles-container');
    let detalleHtml = '';

    switch(cardId) {
        case 'card1':
            detalleHtml = `
                <div class="detalles-tarjeta">
                    <span class="close-btn" onclick="cerrarDetalles()">x</span>
                    <h3>Misión</h3>
                    <br>
                    <p>En <b>EduKids </b> , nuestra misión es fomentar el aprendizaje temprano a través de juegos interactivos y materiales didácticos diseñados para el desarrollo integral del lenguaje en los niños. Nos enfocamos en crear un entorno inclusivo que atienda las necesidades de neurodiversidad, como dislexia, TEA y TDAH, ofreciendo recursos accesibles y divertidos para que cada niño pueda aprender a su propio ritmo y de forma divertida. </p>
                    <br> 
                    <h3>Visión</h3>
                    <br>
                    <p>Ser la plataforma líder en educación infantil inclusiva, donde todos los niños, independientemente de sus habilidades o necesidades, puedan disfrutar aprendiendo a través del juego. Aspiramos a ser una referencia en el desarrollo de recursos didácticos que impulsen el crecimiento cognitivo y emocional de los pequeños, promoviendo la comprensión y aceptación de la neurodiversidad. </p>
                    <br> 
                </div>`;
            break;
        case 'card2':
            detalleHtml = `
                <div class="detalles-tarjeta">
                    <span class="close-btn" onclick="cerrarDetalles()">x</span>
                    <h3>Valores</h3>
                    <br>
                    <ul>
                     <li><b> Inclusión:</b>Valoramos la diversidad y creemos que cada niño merece la oportunidad de aprender de manera personalizada y adaptada a sus necesidades.</li>
                     <br>
                     <li> <b class="negrita"> Innovación:</b> Nos esforzamos por desarrollar materiales y herramientas educativas que hagan del aprendizaje una experiencia emocionante y dinámica.</li>
                    <br>
                    <li><b> Compromiso:</b> Estamos comprometidos con la calidad educativa y con el desarrollo de contenidos que realmente impacten de manera positiva en la vida de los niños. </p>
                    <br>                    
                    <li><b> Empatía: </b> Entendemos los desafíos que enfrentan los niños neurodivergentes y trabajamos para brindarles un entorno de apoyo y comprensión. </p>
                    <br>
                    <li><b> Diversión: </b> Creemos que el juego es la mejor herramienta de aprendizaje, y nos esforzamos por hacerlo parte de cada experiencia educativa. </p>
                    <br>
                    </ul>
                    </div>`;                  
            break;
        case 'card3':
            detalleHtml = `
                <div class="detalles-tarjeta">
                    <span class="close-btn" onclick="cerrarDetalles()">x</span>
                    <h3>Conoce a Nuestro Equipo</h3>
                    <br>
                    <p><b>EduKids </b> es un proyecto apasionado liderado por Amparito Maximiliano. Como fundadora, mi misión es proporcionar a los niños herramientas para aprender jugando, con un enfoque especial en aquellos que necesitan apoyo adicional para desarrollar sus habilidades lingüísticas. Mi experiencia y dedicación en el campo de la educación me impulsan a crear un espacio donde cada niño pueda florecer, respetando su ritmo y sus particularidades.</p>
                </div>`;
            break;
    }

    detallesContainer.innerHTML = detalleHtml;
    detallesContainer.classList.add('show'); // Añade la clase para mostrar
}

function cerrarDetalles() {
    const detallesContainer = document.getElementById('detalles-container');
    detallesContainer.classList.remove('show'); // Elimina la clase para ocultar
    setTimeout(() => {
        detallesContainer.innerHTML = ''; // Limpia el contenido después de ocultar
    }, 300); // Espera el tiempo de la transición antes de limpiar
}
