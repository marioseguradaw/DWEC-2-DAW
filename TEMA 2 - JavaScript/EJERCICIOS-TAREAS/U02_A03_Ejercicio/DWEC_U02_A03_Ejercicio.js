// Autor: Mario Segura Abad
// Fecha: 12/10/2025


// Clase base Animal
function Animal(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Animal.prototype.comer = function () {
    console.log("El animal está comiendo");
};

// Clase hija Perro que hereda de Animal
function Perro(nombre, edad, raza) {
    Animal.call(this, nombre, edad); // Hereda propiedades
    this.raza = raza;
}

// Herencia prototípica
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

// Método específico de Perro
Perro.prototype.ladrar = function () {
    console.log("¡Guau!");
};

// Crear una instancia de Perro
const miPerro = new Perro("Firulais", 3, "Labrador");

// Usar los métodos
miPerro.comer(); // Hereda de Animal
miPerro.ladrar(); // Propio de Perro

// Consultar propiedades
console.log("Nombre:", miPerro.nombre);
console.log("Edad:", miPerro.edad);
console.log("Raza:", miPerro.raza);