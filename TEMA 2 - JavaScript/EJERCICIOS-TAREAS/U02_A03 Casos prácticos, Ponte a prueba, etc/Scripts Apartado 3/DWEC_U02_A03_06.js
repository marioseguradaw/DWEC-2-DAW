// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// ------------------------------------------------------------
// FUNCIÓN CONSTRUCTORA
// ------------------------------------------------------------


// En JavaScript, una función constructora sirve para crear múltiples objetos
// del mismo "tipo". Por convención, se escribe con la primera letra en mayúscula.
function Usuario(nombre, apellidos) {

    // Las propiedades definidas con 'this' se asignan al nuevo objeto que se cree
    this.nombre = nombre;
    this.apellidos = apellidos;

    // Se define también un método (función) como propiedad del objeto
    this.saludar = function() {
	    console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
    }

    // 'nombre', 'apellidos' y 'saludar' se convierten en propiedades propias
    // de cada objeto creado con 'newUsuario(...)'
}


// -----------------------------------------------------------
// CREACIÓN DE OBJETOS A PARTIR DE LA FUNCIÓN CONSTRUCTORA
// -----------------------------------------------------------


// El operador 'new' crea un nuevo objeto vacío, lo vincula a Usuario.prototype,
// y ejecuta la función constructora asignando 'this' a ese nuevo objeto.

let usuario1 = new Usuario("David", "Pérez");
usuario1.saludar(); // Hola, soy David Pérez

let usuario2 = new Usuario("Jorge", "López");
usuario2.saludar(); // Hola, soy Jorge López


// -----------------------------------------------------------
// AÑADIR MÉTODOS AL PROTOTIPO
// -----------------------------------------------------------


// Las funciones constructoras tienen una propiedad llamada 'prototype'.
// Todas las instancias (objetos creados con 'new') comparten este prototipo.
// Esto permite añadir métodos comunes sin duplicar código en cada objeto.

Usuario.prototype.despedir = function() {
    console.log(`${this.nombre} ${this.apellidos} se despide`);
}

// Aunque el método 'despedir' se añadió después de crear los objetos,
// ambos (usuario1 y usuario2) lo pueden usar, por que acceden a él a través
// de su cadena de prototipos.
usuario1.despedir(); // David Pérez se despide
usuario2.despedir(); // Jorge López se despide


// ----------------------------------------------------------
// AÑADIR PROPIEDADES AL PROTOTIPO
// ----------------------------------------------------------


Usuario.prototype.direccion = "Desconocida";

// Todos los objetos creados con 'Usuario' tienen acceso a esta propiedad 
// (si no la tienen definida ellos mismos).
console.log(usuario1.direccion); // Desconocida
console.log(usuario2.direccion); // Desconocida


// ---------------------------------------------------------
// SOMBRA DE PROPIEDADES (SHADOWING)
// ---------------------------------------------------------


// Si asignamos una propiedad con el mismo nombre en un objeto concreto,
// esa propiedad "oculta" (o sombrea) la del prototipo.

usuario1.direccion = "Calle Nueva";

// Ahora 'usuario1' tiene su propia propiedad 'dirección'
console.log(usuario1.direccion); // Calle Nueva

// Pero 'usuario2' no la tiene definida, así que JS busca en el prototipo
console.log(usuario2.direccion); // Desconocida


// ---------------------------------------------------------
// EXPLICACIÓN FINAL
// ---------------------------------------------------------


// 'usuario1' y 'usuario2' tienen sus propias propiedades únicas:
// nombre, apellidos, saludar, y (solo usuario1) dirección.
//
// Comparten las propiedades definidas en Usuario.prototype:
// despedir y dirección (si no se ha sobreescrito en el objeto)
//
// El acceso a propiedades en JS sigue la "cadena de prototipos":
//  1. Busca en el propio objeto.
//  2. Si no la encuentra, busca en su prototipo (Usuario.prototype).
//  3. Si no, sigue buscando hacia arriba (Object.prototype), y así sucesivamente.
//
// Esto permite que los métodos definidos en el prototipo sean compartidos,
// ahorrando memoria y evitando duplicaciones.