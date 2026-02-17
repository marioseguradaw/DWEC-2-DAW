// Autor: Mario Segura Abad
// Fecha: 23/10/2025


// 5.1. Fundamentos: la función "filter"
let datos = [14, 22, 16, 3, 35];

// Obtener los elementos menores que 15
let resultado = [];
for(let dato of datos) {
    if(dato < 15) {
        resultado.push(dato);
    }
}

console.log(resultado); // [14, 3]s


let resultado2 = datos.filter(function (dato) {
    return dato < 15;
});

console.log(resultado); // [14, 3]


// Función que comprueba si un dato es menor que 15
// Se ha utilizado una función flecha en este caso
// Como solo tiene un parametro, se pueden omitir los paréntesis
// Como solo tiene una línea en el cuerpo, se pueden omitir las llaves y el 'return'
// Devuelve true si se cumple la condición y false en caso contrario
let menorQue15 = dato => dato < 15;

console.log(resultado); // [14, 3]