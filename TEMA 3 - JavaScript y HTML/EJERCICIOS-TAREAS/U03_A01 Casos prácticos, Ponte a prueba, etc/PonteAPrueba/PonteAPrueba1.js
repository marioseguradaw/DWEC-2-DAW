// Autor: Mario Segura Abad
// Fecha: 13/11/2025

function conmutarActivado() {
    // Seleccionamos todos los div con clase "item"
    const elementos = document.querySelectorAll('div.item');

    // Recorremos cada elemento y conmutamos la clase "activado"
    elementos.forEach(div => {
        div.classList.toggle('activado');
    });
}