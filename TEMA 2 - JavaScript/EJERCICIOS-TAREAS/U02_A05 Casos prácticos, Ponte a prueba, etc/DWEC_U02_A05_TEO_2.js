// Autor: Mario Segura Abad
// Fecha: 23/10/2025


// 5.2. "Find"
let usuarios = [
    {nombre: "David", apellido: "Pérez", nif: 1},
    {nombre: "Juan", apellido: "Martínez", nif: 2},
    {nombre: "José", apellido: "Fernández", nif: 3}
]

let usuarioConNif2 = usuarios.find(item => item.nif == 2);
console.log(usuarioConNif2); // {nombre: "Juan", apellido: "Martínez", nif: 2},