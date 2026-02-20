// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.3. Inconvenientes de los "callbacks"
var resultado = "";

setTimeout(function() {
    resultado = "hola";
}, 2000);

console.log(resultado); // Cadena vacía: 'resultado' se actualiza cuando se ejecute el callback