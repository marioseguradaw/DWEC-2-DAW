// Autor: Mario Segura Abad
// Fecha: 08/04/2026


// 3.7. Prototipos y herencia
let usuario = {
    nombre: "David"
}

// El método 'toLocaleString' funciona, pese a no haberlo definido
// Esta función está definida en 'Object.prototype'
usuario.toLocaleString(); // '[object Object]'