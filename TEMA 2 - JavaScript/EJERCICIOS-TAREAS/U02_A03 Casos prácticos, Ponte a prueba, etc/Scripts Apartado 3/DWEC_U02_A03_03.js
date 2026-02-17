// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// Creamos un objeto con una propiedad 'nombre'
let objeto1 = {nombre: "David"}; // Se crea un objeto
// En este momento, 'objeto1' guarda una REFERENCIA al objeto {nombre: "David"} en memoria

// Asignamos 'objeto1' a 'objeto2'
let objeto2 = objeto1;
// Aquí NO se crea un nuevo objeto
// Ambos ('objeto1' y 'objeto2') apuntan al MISMO objeto en memoria

// Creamos dos nuevos objetos vacíos (cada uno ocupa su propio espacio en memoria)
let objeto3 = {}; // objeto3 apunta a un nuevo objeto vacío
let objeto4 = {}; // objeto4 apunta a otro nuevo objeto vacío

// Copiamos las propiedades de 'objeto1' dentro de 'objeto3'
// Object.assign(destino, origen) -> copia los pares clave: del origen al destino
Object.assign(objeto3, objeto1);

// Copiamos las propiedades de 'objeto1' dentro de 'objeto4' y además añadimos 'apellido: "Pérez"'
Object.assign(objeto4, objeto1, {apellido: "Pérez"}); // Copia de 'objeto1' a 'objeto4' junto con una propiedad adicional
// Resultado: objeto4 = {nombre: "David", apellido: "Pérez"}

// Cambiamos el valor de la propiedad 'nombre' en 'objeto1'
objeto1.nombre = "Juan";
// Este cambio también afecta a 'objeto2', porque ambos apuntan al mismo objeto

// Cambiamos el valor de 'nombre' solo en 'objeto4'
objeto4.nombre = "Pablo";
// Este cambio NO afecta a 'objeto1' ni 'objeto2', porque 'objeto4' es un objetivo distinto

// Mostramos resultados:
console.log( objeto2.nombre ); // Juan ('objeto2' apunta al mismo objeto que 'objeto1')
console.log( objeto3.nombre ); // David ('objeto3' apunta a un objeto distinto)

// Ahora anulamos las referencias
objeto1 = null; // 'objeto1' ya no apunta al objeto. El objeto sigue existiendo.
objeto2 = null; // 'objeto2' ya no apunta al objeto. El primer objeto se elimina porque ya no está referenciado

// En este momento:
// El objto original {nombre: "Juan"} ya no tiene ninguna variable que lo referencie
// Por tanto, el recolector de basura (garabage collector) lo eliminará automáticamente
// porque ya no es accesible desde el código