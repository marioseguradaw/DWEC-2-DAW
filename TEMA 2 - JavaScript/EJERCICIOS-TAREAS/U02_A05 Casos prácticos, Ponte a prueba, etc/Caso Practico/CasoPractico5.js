// Autor: Mario Segura Abad
// Fecha: 24/10/2025

let coches = [
    {id: 1, marca: "Seat", modelo: "Ibiza", precio: 10000},
    {id: 2, marca: "Seat", modelo: "Ateca", precio: 18000},
    {id: 3, marca: "Volkswagen", modelo: "Golf", precio: 21000},
    {id: 4, marca: "Kia", modelo: "Niro", precio: 30000}
];

// ==============================
// 1. Coches de la marca "Seat"
// ==============================
let cochesMarcaSeat = coches.filter(coches => coches.marca === "Seat");
console.log("2DAW2\t 24/10/2025\n");
console.log(cochesMarcaSeat);
console.log(); // salto de línea entre coches

// ===============================
// 2. Coches con precio menor que 25.000
// ===============================
let cochesMenoresQue25000 = coches.filter(coches => coches.precio < 25000);
console.log(cochesMenoresQue25000);
console.log();

// ================================
// 3. Primer coche con preceio mayor que 20.000
// ================================
let cocheMayorQue20000 = coches.find(coches => coches.precio > 20000);
console.log(cocheMayorQue20000);
console.log();

// =================================
// 4. Array con campo adicional "premium"
// =================================
let cochesPremium = coches.map(coches => ({
    ...coches,
    premium: coches.precio > 20000
}));
console.log(cochesPremium);
console.log();

// ==================================
// 5. Calcular el precio medio de los coches "Seat"
// ==================================
let datosCochesSeat = coches
    .filter(coches => coches.marca === "Seat")
    .reduce((acumulador, coches) => {
        acumulador.total += coches.precio;
        acumulador.cuenta++;
        return acumulador;
    }, {total: 0, cuenta: 0}); // el acumulador se debe iniciar a 0

console.log(datosCochesSeat);
console.log("\n");

// ==================================
// Salida por consola como pide el ejercicio
// ==================================

console.log("2DAW2\t 24/10/2025\n");

// ---- Coches Seat ----
console.log("Coches Seat:\n");
console.log(cochesMarcaSeat);
cochesMarcaSeat.forEach(coches => console.log(coches));
console.log();

// ---- Coches menores que 25000 ----
console.log("Coches Menores que 25000:\n");
console.log(cochesMenoresQue25000);
cochesMenoresQue25000.forEach(coches => console.log(coches));
console.log();

// ---- Primer coche mayor que 20000 ----
console.log("1º Coche Mayor que 20000:\n");
console.log(cocheMayorQue20000);
console.log(cocheMayorQue20000.id);
console.log(cocheMayorQue20000.marca);
console.log(cocheMayorQue20000.modelo);
console.log(cocheMayorQue20000.precio);
console.log();

// ---- Coches con Premium ----
console.log("Coches con Premium:\n");
console.log(cochesPremium);
cochesPremium.forEach(coches => console.log(coches));
console.log();

// --- Total y Cuenta Seat ---
console.log("Total y Cuenta Seat\n");
console.log(datosCochesSeat, ", precio medio:", datosCochesSeat.total / datosCochesSeat.cuenta);
console.log(datosCochesSeat.total);
console.log(datosCochesSeat.cuenta);