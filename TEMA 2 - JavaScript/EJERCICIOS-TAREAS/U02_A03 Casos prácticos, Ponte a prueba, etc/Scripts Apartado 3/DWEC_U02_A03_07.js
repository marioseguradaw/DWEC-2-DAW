// Autor: Mario Segura Abad
// Fecha: 08/10/2025


// -------------------------------------------------------
// 1. OBJETO BASE (PROTOTIPO)
// -------------------------------------------------------


// Se crea un objeto normal que servirá como prototipo de otros objetos
let Usuario = {
    nombre: "",
    apellido: ""
}


// -------------------------------------------------------
// 2. MÉTODOS DEFINIDOS EN EL PROTOTIPO
// -------------------------------------------------------


// Método para inicializar los datos del usuario
Usuario.setDatos = function(nombre, apellidos) {
    this.nombre = nombre;       // 'this' hace referencia al objeto que lo llama
    this.apellidos = apellidos;
}

// Método para saludar
Usuario.saludar = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
}


// ------------------------------------------------------
// 3. CREACIÓN DE OBJETOS BASADOS EN EL PROTOTIPO
// ------------------------------------------------------


// Object.create(obj) -> crea un nuevo objeto cuyo prototipo es 'obj'
let usuario1 = Object.create(Usuario);
let usuario2 = Object.create(Usuario);

// Ambos objetos comparten el mismo prototipo 'Usuario',
// pero tiene sus propias propiedades individuales


// ------------------------------------------------------
// 4. INICIALIZAR LOS DATOS DE CADA OBJETO
// ------------------------------------------------------
usuario1.setDatos("David", "Pérez");
usuario2.setDatos("Jorge", "López");

// Cada uno guarda sus propios valores en sus propiedades personales
usuario1.saludar(); // Hola, soy David Pérez
usuario2.saludar(); // Hola, soy Jorge López


// -----------------------------------------------------
// 5. AÑADIR UNA NUEVA FUNCIÓN AL PROTOTIPO
// -----------------------------------------------------


// Si añadimos una propiedad o método al prototipo original,
// todos los objetos creados a partir de él también podrán accederla.
Usuario.despedir = function() {
    console.log(`${this.nombre} ${this.apellidos} se despide`);
}

// Ambos objetos heredan la nueva función automáticamente
usuario1.despedir(); // David Pérez se despide
usuario2.despedir(); // Jorge López se despide


// -----------------------------------------------------
// 6. AÑADIR UNA NUEVA PROPIEDAD AL PROTOTIPO
// -----------------------------------------------------
Usuario.direccion = "Desconocida";

// Si un objeto no tiene su propia propiedad 'dirección',
// JavaScript la buscará en su prototipo (Usuario)
console.log(usuario1.direccion); // Desconocida
console.log(usuario2.direccion); // Desconocida


// -----------------------------------------------------
// 7. SOMBRA DE PROPIEDADES (SHADOWING)
// -----------------------------------------------------


// Si añadimos o modificamos una propiedad con el mismo nombre
// es un objeto concreto, ésta "oculta" (sombrea) la del prototipo.
usuario1.direccion = "Calle Nueva";

// Ahora 'usuario1' tiene su propia propiedad 'dirección'
console.log(usuario1.direccion); // Calle Nueva

// Pero 'usuario2' no la tiene, así que JS busca en el prototipo
console.log(usuario2.direccion); // Desconocida


// --------------------------------------------------------
// EXPLICACIÓN GENERAL
// --------------------------------------------------------


// 'Usuario' actúa como prototipo (modelo base).
// 'usuario1' y 'usuario2' son objetos independientes,
// pero heredan todas las propiedades y métodos de 'Usuario'.

// Cuando accedemos a una propiedad o método:
// 1. JS busca primero en el propio objeto.
// 2. Si no la encuentra, busca en su prototipo (Usuario).
// 3. Si tampoco está ahí, sube al prototipo de Usuario (Object.prototype).

// Esto es el "encadenamiento del prototipo" o "prototype chain".