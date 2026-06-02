// Autor: Mario Segura Abad
// Fecha: 02/06/2026


// 5.1. Fundamentos: la función filter
let datos = [14, 22, 16, 3, 35];

// Obtener los elementos menores que 15
let resultado = [];
for (let dato of datos) {
    if (dato < 15) {
        resultado.push(dato);
    }
}

console.log(resultado); // [14, 3]

/* Alternativa funcional */
let datos2 = [14, 22, 16, 3, 35];

// Obtener los elementos menores que 15
let resultado2 = datos2.filter(function (dato2) {
    return dato2 < 15;
});

console.log(resultado2); // [14, 3]

/* Tercera version */
let datos3 = [14, 22, 16, 3, 35];

// Función que comprueba si un dato es menor que 15
// Se ha utilizado una función flecha en este caso
// Como solo tiene un parámetro, se pueden omitir los paréntesis
// Como solo tiene una línea en el cuerpo, se pueden omitir las llaves y el 'return'
// Devuelve true si se cumple la condición y false en caso contrario
let menorQue15 = dato3 => dato3 < 15;

// Obtener los elementos menores que 15
let resultado3 = datos3.filter(menorQue15);

console.log(resultado3); // [14, 3]