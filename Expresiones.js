function playEmotion(emotion) {
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
  
    // Forzar la carga del audio
    audio.load();
    
    // Reproducir el audio
    audio.play();
  }
  