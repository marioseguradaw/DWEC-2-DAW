// Autor: Mario Segura Abad
// Fecha: 23/11/2025


// 4.3. Templates
let plantilla = document.getElementById('mi-boton'); // Elemento <template>
let plantillaContenido = plantilla.content; // Contenido de la plantilla (nodo tipo 'DocumentFragment')
document.body.append(plantillaContenido.cloneNode(true)); // Se añade a <body> una COPIA de la plantilla
document.body.append(plantillaContenido.cloneNode(true)); // Se añade a <body> una segunda COPIA de la plantilla