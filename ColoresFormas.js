

function playSound(shape, color) {
    // Mostrar el mensaje en el cuadro de mensaje
    let messageBox = document.getElementById('message-box');
    let messageText = document.getElementById('message-text');
  
    messageText.innerText = "¡Has tocado un " + shape + " de color " + color + "!";
    messageBox.style.display = 'block'; // Hacer visible el cuadro de mensaje
    
    // Aquí puedes agregar sonidos reales si lo deseas.
    let audio = new Audio('path_to_your_audio_file.mp3');
    audio.play();
  }
  
  function closeMessage() {
    let messageBox = document.getElementById('message-box');
    messageBox.style.animation = 'fadeOut 0.5s ease-out forwards'; // Animación de cierre
    setTimeout(function() {
      messageBox.style.display = 'none'; // Ocultar el cuadro de mensaje después de la animación
    }, 500); // Tiempo de espera antes de ocultarlo
  }
  