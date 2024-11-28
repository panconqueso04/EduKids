// Variables globales
let mediaRecorder;
let audioChunks = [];

// Inicia la grabación para un trabalenguas específico
function startRecording(id) {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = document.getElementById(`audio${id}`);
                audio.src = audioUrl;
                audio.hidden = false;
                document.getElementById(`play${id}`).disabled = false;
                
                // Quita el efecto de grabación cuando se detiene
                document.getElementById(`record${id}`).classList.remove("recording");
            });

            // Activa el efecto de grabación
            document.getElementById(`record${id}`).classList.add("recording");

            document.getElementById(`record${id}`).disabled = true;
            document.getElementById(`stop${id}`).disabled = false;
            audioChunks = [];
        })
        .catch(error => {
            console.error("Error al acceder al micrófono:", error);
        });
}

// Detiene la grabación para un trabalenguas específico
function stopRecording(id) {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        document.getElementById(`record${id}`).disabled = false;
        document.getElementById(`stop${id}`).disabled = true;
        
        // Quita el efecto de grabación
        document.getElementById(`record${id}`).classList.remove("recording");
    }
}

// Reproduce la grabación para un trabalenguas específico
function playRecording(id) {
    const audio = document.getElementById(`audio${id}`);
    audio.play();
}
