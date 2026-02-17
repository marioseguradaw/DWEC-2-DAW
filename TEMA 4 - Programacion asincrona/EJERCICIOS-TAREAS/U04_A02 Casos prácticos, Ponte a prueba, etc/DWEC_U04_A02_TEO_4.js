// Autor: Mario Segura Abad
// Fecha: 18/12/2025


// 2.3. Encadenamiento de promesas
let prom = miPromesa.then().then().then();
prom instanceof Promise; // true

miPromesa.then((res1) => {
    // 'res' es el resultado de la resolución de 'miPromesa'
    // Se devuelve una segunda promesa
    return miSegundaPromesa;
}).then((res2) => {
    // 'res2' es el resultado de la resolución de 'miSegundaPromesa'
    // Se devuelve un número
    return 50;
}).then((res3) => {
    // A pesar de que en el callback del anterior 'then' se devuelve un número,
    // es posible ejecutar de nuevo 'then' sobre el resultado
    // El número se convierte en una promesa cuyo valor de resolución es el mismo número
    console.log(res3); // 50
});