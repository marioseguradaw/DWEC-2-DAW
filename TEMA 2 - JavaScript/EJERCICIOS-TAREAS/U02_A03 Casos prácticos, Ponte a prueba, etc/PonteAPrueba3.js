// Autor: Mario Segura Abad
// Fecha: 09/10/2025


// ---------------------------------------------
// EJERCICIO: Ponte a Prueba 3
// ---------------------------------------------

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    // Método saludar: muestra el nombre y apellido del objeto que llame al método
    this.saludar = function () {
        return `${this.nombre} ${this.apellido}`;
    }
}

// Creamos tres objetos Persona
let persona1 = new Persona("Ana", "Pérez");
let persona2 = new Persona("Lucía", "Martínez");
let persona3 = new Persona("Inés", "González");


// ---------------------------------------------
// bind(): crea una nueva función donde "this"
// queda vinculado permanentemente al objeto indicado.
// En este caso, "this" apuntará SIEMPRE a persona3
//----------------------------------------------
let saludo1 = persona1.saludar.bind(persona3);

// Aquí simplemente guardamos la función sin "bind".
// Por tanto, cuando se ejecute fuera del objeto,
// perderá la referencia a "this".
let saludo2 = persona2.saludar;


// ---------------------------------------------
// Llamadas y Resultados
// ---------------------------------------------


// 1. "this" apunta a persona1 (objeto que llama al método)
// Resultado: "Ana Pérez"
persona1.saludar();

// 2. "this" apunta a persona2
// Resultado: Lucía Martínez
persona2.saludar();

// 3. Usamos .call(persona3): forzamos que "this" sea persona3
// Resultado: "Inés González"
persona1.saludar.call(persona3);

// 4. Usamos .apply(persona2): igual que call, pero con argumentos en arraya
// Resultado: "Lucía Martínez"
persona1.saludar.apply(persona2);

// 5. saludo1() fue creado con bind(persona3), así que "this" siempre será persona3
// Resultado: "Inés González"
saludo1();

// 6. saludo2() fue copiado sin bind, por lo que al ejecutarse sin objeto pierde el "this"
// En modo estricto -> da error porque this = undefined
// En modo no estricto (por defecto en navegadores) -> this = window
// window no tiene propiedades "nombre" ni "apellido"
// Resultado: "undefined undefined"
saludo2();