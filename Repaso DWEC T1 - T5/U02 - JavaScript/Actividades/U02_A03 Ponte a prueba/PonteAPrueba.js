// Autor: Mario Segura Abad
// Fecha: 02/06/2026

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function () {
        return `${this.nombre} ${this.apellido}`;
    }
}

let persona1 = new Persona("Ana", "Pérez");
let persona2 = new Persona("Lucía", "Martínez");
let persona3 = new Persona("Inés", "González");

let saludo1 = persona1.saludar.bind(persona3);
let saludo2 = persona2.saludar;

persona1.saludar(); // Ana Pérez
persona2.saludar(); // Lucía Martínez
persona1.saludar.call(persona3); // Inés González
persona1.saludar.apply(persona2); // Lucía Martínez
saludo1(); // Inés González
saludo2(); // undefined unfefined (se pierde el contexto de 'this' al separar el método del objeto)