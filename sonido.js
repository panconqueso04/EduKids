// Función para reproducir el sonido cuando se hace clic en la imagen
function reproducirSonido(idSonido) {
    var sonido = document.getElementById(idSonido);
    sonido.currentTime = 0; // Reiniciar el sonido en caso de que ya se esté reproduciendo
    sonido.play();
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

