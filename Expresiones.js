let currentAudio = null; // Variable para rastrear el audio actual

function playEmotion(emotion) {
    // Detener el audio actual si está sonando
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reinicia el audio a su inicio
    }

    // Crear un nuevo objeto de audio
    const audio = new Audio();

    // Asignar la fuente de audio según la emoción
    switch (emotion) {
        case 'feliz':
            audio.src = 'Soni-Estimulacion/Alegria.mp3';
            break;
        case 'asco':
            audio.src = 'Soni-Estimulacion/Asco.mp3';
            break;
        case 'enojado':
            audio.src = 'Soni-Estimulacion/Enojo.mp3';
            break;
        case 'miedo':
            audio.src = 'Soni-Estimulacion/Asombro.mp3';
            break;
        case 'triste':
            audio.src = 'Soni-Estimulacion/Tristeza.mp3';
            break;
        default:
            console.log('Emoción no encontrada');
            return;
    }

    // Guardar el nuevo audio como el audio actual
    currentAudio = audio;

    // Reproducir el nuevo audio
    audio.play();
}
