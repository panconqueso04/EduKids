function openModal(url) {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('modalFrame');
    iframe.src = url; // Carga la página en el iframe
    modal.style.display = 'flex'; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('modalFrame');
    iframe.src = ''; // Limpia el iframe
    modal.style.display = 'none'; // Oculta el modal
}