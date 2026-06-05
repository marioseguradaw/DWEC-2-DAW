// Autor: Mario Segura Abad
// Fecha: 04/06/2026


// Array de objetos inicial
let coches = [
    {id: 1, marca: "Seat", modelo: "Ibiza", precio: 10000},
    {id: 2, marca: "Seat", modelo: "Ateca", precio: 18000},
    {id: 3, marca: "Volkswagen", modelo: "Golf", precio: 21000},
    {id: 4, marca: "Kia", modelo: "Niro", precio: 30000},
];

// 1. Obtener los coches de la marca "Seat"
const cochesSeat = coches.filter(cro => cro.marca === "Seat");

// 2. Obtener los coches cuyo precio sea menor que 25 000
const cochesMenores25000 = coches.filter(cro => cro.precio < 25000);

// 3. Encuentra el primer coche cuyo precio sea mayor que 20 000
const primerCocheMayor2000 = coches.find(cro => cro.precio > 20000);

// 4. Transformar el array añadiendo el campo 'premium' (true si precio > 20000)
const cochesPremium = coches.map(cro => ({
    ...cro,
    premium: cro.precio > 20000
}));

// 5. Calcular el precio medio de los coches Seat usando un reduce para obtener totales
const seatStats = cochesSeat.reduce((acc, cro) => {
    acc.total += cro.precio;
    acc.cuenta += cro.precio;
    acc.cuenta += 1;
    return acc;
}, { total: 0, cuenta: 0 });

const precioMedio = seatStats.total / seatStats.cuenta;

// ==========================================
// MUESTRA EN CONSOLA
// ==========================================
// ---- Bloque Inicial de comprobación directa ----
console.log("2DAW2  17/10/2025");
console.log(cochesSeat);
console.log(cochesMenores25000);
console.log(primerCocheMayor2000);
console.log(cochesPremium);
console.log(seatStats);

// ---- Bloque Formateando con Encabezados ----
console.log("2DAW2  17/10/2025");

console.log("\n     Coches Seat:");
console.log(cochesSeat);
cochesSeat.forEach(c => console.log(c));

console.log("\n     Coches Menores que 25000");
console.log(cochesMenores25000);
cochesMenores25000.forEach(c => console.log(c));

console.log("\n     1º Coche Mayor que 20000");
console.log(primerCocheMayor2000);
console.log(primerCocheMayor2000.id);
console.log(primerCocheMayor2000.marca);
console.log(primerCocheMayor2000.modelo);
console.log(primerCocheMayor2000.precio);

console.log("\n     Coches con Premium:");
console.log(cochesPremium);
cochesPremium.forEach(c => console.log(c));

console.log("\n     Total y Cuenta Seat:");
// Al concatenar el objeto con un String, JS fuerza la salida exacta '[object Object]' que se ve en la captura
console.log(seatStats + " , precio medio: " + precioMedio);
console.log(seatStats.total);
console.log(seatStats.cuenta);