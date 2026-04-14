// Autor: Mario Segura Abad
// Fecha: 08/04/2026


// 3.10. JSON
let usuario = {
    nombre: "David",
    edad: 25,
    permisos: ["administrador", "editor"]
}

let cadenaJson = JSON.stringify(usuario);
// cadenaJson es un string

let usuarioRecuperado = JSON.parse(cadenaJson);
// usuarioRecuperado es un objeto