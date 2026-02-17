// Autor: Mario Segura Abad
// Fecha: 08/10/2025


// Se define una clase base llamada 'UsuarioBase'
class UsuarioBase {
    // El constructor se ejecuta cuando se crea un nuevo objeto con 'new UsuarioBase(...)'
    constructor(nombre, apellidos) {
        // Se inicializan las propiedades 'nombre' y 'apellidos' del objeto
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    // Método 'saludar' definido dentro de la clase
    // No pertenece a cada objeto directamente, sino al prototipo de la clase 'UsuarioBase'
    saludar() {
        console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
    }
}

// Se crea una nueva clase llamada 'UsuarioEspecial' que hereda de 'UsuarioBase'
class UsuarioEspecial extends UsuarioBase {

    // Método 'cantar' definido dentro de 'UsuarioEspecial'
    cantar() {
        console.log("Yo también sé cantar");
    }
}

// Se crea un nuevo objeto a partir de la clase 'UsuarioEspecial'
let usuario = new UsuarioEspecial("David", "Pérez");

// JavaScript busca el método 'saludar' en el objeto 'usuario':
// 1. Primero busca en el propio objeto ('usuario') y no lo encuentra.
// 2. Luego busca en su prototipo, que es 'UsuarioEspecial.prototype', y tampoco lo encuentra.
// 3. Finalmente busca en el prototipo 'UsuarioEspecial', que es 'UsuarioBase.prototype', donde sí lo encuentra.
// Por tanto, se ejecutará el método 'saludar' de la clase 'UsuarioBase'
usuario.saludar(); // Me llamo David Pérez

// JavaScript busca el método 'cantar' en el objeto 'usuario':
// 1. No está en el propio objeto ('usuario').
// 2. A continuación lo busca en su prototipo, 'UsuarioEspecial.prototype', y allí lo encuentra.
// Por tanto, se ejecuta el método 'cantar' definido en 'UsuarioEspecial'.
usuario.cantar(); // Yo también sé cantar