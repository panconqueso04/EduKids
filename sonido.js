// Función para reproducir el sonido cuando se hace clic en la imagen
function reproducirSonido(idSonido) {
    // Detener cualquier sonido que esté reproduciéndose
    detenerSonidos();

    // Reproducir el sonido seleccionado
    var sonido = document.getElementById(idSonido);
    sonido.currentTime = 0; // Reiniciar el sonido
    sonido.play();
}

// Función para detener todos los sonidos
function detenerSonidos() {
    // Seleccionar todos los elementos de audio en la página
    var sonidos = document.querySelectorAll('audio');
    sonidos.forEach(function(sonido) {
        sonido.pause(); // Pausar el sonido
        sonido.currentTime = 0; // Reiniciar el tiempo del sonido
    });
}

// Asociar los eventos de clic a cada imagen
document.getElementById('img-gato').addEventListener('click', function() {
    reproducirSonido('sonido-gato');
});

document.getElementById('img-perro').addEventListener('click', function() {
    reproducirSonido('sonido-perro');
});

document.getElementById('img-pollo').addEventListener('click', function() {
    reproducirSonido('sonido-pollo');
});

document.getElementById('img-pato').addEventListener('click', function() {
    reproducirSonido('sonido-pato');
});

document.getElementById('img-vaca').addEventListener('click', function() {
    reproducirSonido('sonido-vaca');
});

document.getElementById('img-oveja').addEventListener('click', function() {
    reproducirSonido('sonido-oveja');
});
