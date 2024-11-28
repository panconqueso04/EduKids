// Definimos los audios en JavaScript
const sounds = {
    mama: new Audio('Soni-Estimulacion/Mamá.mp3'),
    papa: new Audio('Soni-Estimulacion/Papá.mp3'),
    pelota: new Audio('Soni-Estimulacion/pelota.mp3'),
    agua: new Audio('Soni-Estimulacion/agua.mp3'),
    leche: new Audio('Soni-Estimulacion/leche.mp3'),
    pan: new Audio('Soni-Estimulacion/pan.m4a')
};

// Función para reproducir el sonido correspondiente
function playSound(word) {
    if (sounds[word]) {
        sounds[word].play();
    }
}
