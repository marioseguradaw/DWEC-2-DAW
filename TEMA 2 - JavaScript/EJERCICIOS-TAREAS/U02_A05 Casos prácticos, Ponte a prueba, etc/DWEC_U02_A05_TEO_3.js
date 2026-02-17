// Autor: Mario Segura Abad
// Fecha: 23/10/2025


// 5.3. "ForEach"
let datos = ["a", "b", "c", "d"];
datos.forEach(alert);


datos.forEach(function(item, indice, array) {
    console.log(`Procesando el elemento ${item}, en la posición ${indice}. El array es ${array}`);
});

// Resultado:
// Procesando el elemento a, en la posición 0. El array es a,b,c,d.
// Procesando el elemento b, en la posición 1. El array es a,b,c,d.
// Procesando el elemento c, en la posición 2. El array es a,b,c,d.
// Procesando el elemento d, en la posición 3. El array es a,b,c,d.