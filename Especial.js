function mostrarModal(event) {
    event.preventDefault(); 
    document.getElementById('modal').style.display = 'flex';
}

function aceptar() {
    window.location.href = "Especial.html";
}

function cancelar() {
    document.getElementById('modal').style.display = 'none';
}