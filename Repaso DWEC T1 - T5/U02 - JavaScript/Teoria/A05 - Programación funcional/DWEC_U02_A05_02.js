// Autor: Mario Segura Abad
// Fecha: 02/06/2026


// 5.2. Find
let usuarios = [
    {nombre: "David", apellido: "Pérez", nif: 1},
    {nombre: "Juan", apellido: "Martínez", nif: 2},
    {nombre: "José", apellido: "Fernández", nif: 3}
]

let usuariosConNif2 = usuarios.find(item => item.nif == 2);
console.log(usuariosConNif2); // {nombre: "Juan", apellido: "Martínez", nif: 2},