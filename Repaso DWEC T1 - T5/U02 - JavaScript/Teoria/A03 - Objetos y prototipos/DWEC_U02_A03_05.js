// Autor: Mario Segura Abad
// Fecha: 08/04/2026


// 3.9. Clases

//Definición de clase
class Usuario {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    // No hay comas entre las definiciones de los métodos

    saludar() {
        console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
    }
}

// Creación de un objreto basado en la clase
// (En realidad, es un objeto cuyo prototipo es el objeto Usuario)
let usuario = new Usuario("David", "Pérez");
usuario.saludar(); // Me llamo David Pérez