// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// --------------------------------------------------------------
// FUNCIÓN CON 'this' Y PARÁMETROS
// --------------------------------------------------------------


// Esta función recibe dos parámetros y usa 'this' para acceder a una propiedad
function saludar(mensajeInicio, mensajeFinal) {
    return mensajeInicio + this.nombre + mensajeFinal;
    // 'this' hace referencia al objeto que esté "vinculado" en el momento de la llamada
}


// ---------------------------------------------------------------
// CREAMOS UN OBJETO PAARA HACER PRUEBAS
// ---------------------------------------------------------------
let usuario1 = {nombre: "David"};


// ---------------------------------------------------------------
// 1. LLAMADA NORMAL SIN VINCULAR 'this'
// ---------------------------------------------------------------
saludar("Hola ", ", ¿qué tal estás?"); // Hola undefined, ¿qué tal estás?
// Explicación:
//  - Como no se ha pasado ningún objeto, 'this' no apunta a 'usuario1'.
//  - En modo estricto, 'this' sería undefined.
//  - Por tanto, 'this.nombre' no existe -> devuelve undefined.


// ---------------------------------------------------------------
// 2. LLAMADA CON 'call'
// ---------------------------------------------------------------


// call(objeto, arg1, arg2, ...)
// Permite llamar a una función indicando explícitamente cuál será asu 'this'
// Los argumentos se pasan como lista normal.
saludar.call(usuario1, "Hola ", ", ¿qué tal estás?"); // Hola David, ¿qué tal estás?
// Explicación:
//  - 'this' apunta a 'usuario1'
//  - 'this.nombre' = "David"


// ---------------------------------------------------------------
// 3. LLAMADA CON 'apply'
// ---------------------------------------------------------------


// aply(objeto, [arg1, arg2, ...])
// Igual que call(), pero los argumentos se pasan en un array.
saludar.apply(usuario1, ["Hola ", ", ¿qué tal estás?"]); // Hola David, ¿qué tal estás?
// Explicación:
//  - 'this' también apunta a 'usuario1'
//  - Es útil cuando los parámetros están ya en un array


// ---------------------------------------------------------------
// 4. ENLACE EXPLÍCITO CON 'bind'
// ---------------------------------------------------------------


// bind(objeto) -> Devuelve una NUEVA FUNCIÓN
// En la que 'this' siempre apuntará al objeto indicado (en este caso, 'usuario1')
let saludaADavid = saludar.bind(usuario1);

// Ahora, aunque llamemos a la nueva fución sin pasar 'this' explícitamente,
// éste ya quedó vinculado de forma permanente a 'usuario1'
saludaADavid("Hola ", ", ¿qué tal estás?");  // Hola David, ¿qué tal estás?