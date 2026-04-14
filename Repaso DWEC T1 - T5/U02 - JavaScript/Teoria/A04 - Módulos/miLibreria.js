// Autor: Mario Segura Abad
// Fecha: 08/04/2026


// 4.2. Import y export

function saludar(usuario) {
    console.log(`Hola, ${usuario}`);
}
function secreto() {
    console.log("Ssssshh... es un secreto...");
}
function despedir(usuario) {
    secreto();
    console.log(`Adiós, ${usuario}`);
}
// Exportación de objetos.
// Se exporta un objeto con dos propiedades.
// Cada propiedad hace referencia a una de las funciones definidas arriba.
// La función 'secreto' no se exporta, por lo que es visible fuera del módulo;
// sin embargo, dentro del módulo sí que puede utilizarse.
export {
    saludar,
    despedir
}