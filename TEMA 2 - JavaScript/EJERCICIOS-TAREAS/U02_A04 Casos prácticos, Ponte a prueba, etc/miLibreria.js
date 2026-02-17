// Autor: Mario Segura Abad
// Fecha: 16/10/2025


// 4.2. Import y expot

// Fichero miLibreria.js
function saludar(usuario) {
    console.log(`Hola, ${usuario}`);
}
 
function secreto() {
    console.log("Sssss... es un secreto...");
}

function despedir(usuario) {
    secreto();
    console.log(`Adiós, ${usuario}`);
}
// Exportación de objetos.
// Se exporta un objeto con dos propiedades.
// Cada propiedad hace referencia a una de las funciones definidas arriba.
// La función 'secreto' no se exporta, por lo que no es visible fuera del módulo;
// sin embargo, dentro del módulo sí que puede utilizarse.
export {

    saludar,
    despedir
}