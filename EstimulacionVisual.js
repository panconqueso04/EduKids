function expandirColor(elemento) {
    // Cambia el color del bloque al azar
    const colores = ['#ff6347', '#ffb6c1', '#7fff00', '#4682b4', '#32cd32', '#8a2be2', '#ff69b4', '#00fa9a','#ff0000', '#0000ff', '#ffff00'];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = nuevoColor;

    // Expande el bloque
    elemento.style.transform = 'scale(1.5)';

    // Reproduce el sonido de clic
    const audio = new Audio('Soni-Estimulacion/Visual.mp3'); // Ruta al archivo de sonido
    audio.play(); // Reproduce el sonido


    // Vuelve a su tamaño original después de 0.3 segundos
    setTimeout(() => {
        elemento.style.transform = 'scale(1)';
    }, 300);
}
