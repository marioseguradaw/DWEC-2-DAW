// Autor: Mario Segura Abad
// Fecha: 04/06/2026


// 1.2. El DOM: introducción y navegación

// 'getElementById' solo puede ejecutarse sobre 'document'
// La variable 'principal' apunta al elemento con 'id = principal'
let principal = document.getElementById("principal");

// Obtenemos todos los párrafos del documento
let parrafos = document.getElementsByTagName("p");

// 'primerImportante' apunta al primer elemento de los que cumpla la condición
// dada por el selector CSS
let primerImportante = document.querySelector("#principal p.importante");


// 'querySelectorAll' puede ejecutarse sobre 'document' o sobre otro elemento
// Estas dos líneas realizan la misma búsqueda
let importantes1 = document.querySelectorAll("#principal p.importante"); // Se busca en todo el documento
let importantes2 = principal.querySelectorAll("p.importante"); // Se busca dentro de '#principal'

// 'querySelectorAll' devuelve una colección.
// Recorremos dicha colección
for (let importante of importantes1) {
    console.log(importante);
}