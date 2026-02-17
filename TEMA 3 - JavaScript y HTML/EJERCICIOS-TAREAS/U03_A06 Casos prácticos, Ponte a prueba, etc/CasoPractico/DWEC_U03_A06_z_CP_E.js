// Autor: Mario Segura Abad
// Fecha: 01/12/2025


// ===== Constructor =====
function Coche(marca, color) {
    this.marca = marca;
    this.color = color;

    this.arrancar = function() {
	console.log(`Arrancando un coche ${this.marca} de color ${this.color}`);
    }
}

// ===== 1. Crear tres coches =====
let coche1 = new Coche("Mercedes-Benz", "Marrón");
let coche2 = new Coche("Citroën", "Blanco");
let coche3 = new Coche("Hyundai", "Negro");

// ===== 2. Guardarlos en un array =====
let listaCoches = [coche1, coche2, coche3];

// ===== 3. Guardarlos en localStorage =====
localStorage.setItem("coches", JSON.stringify(listaCoches));

console.log(">>> Coches guardados en localStorage");

// ===== 4. Recuperar desde localStorage =====
let datos = JSON.parse(localStorage.getItem("coches"));

console.log(">>> Datos recuperados:", datos);

// ===== 5. Reconstruir objetos funcionales =====
// (volver a convertir cada objeto en un Coche con métodos)
let cochesRecuperados = datos.map(obj => new Coche(obj.marca, obj.color));

console.log(">>> Coches reconstruidos:", cochesRecuperados);

// ===== 6. Probar que funcionan =====
cochesRecuperados.forEach(coche => coche.arrancar());