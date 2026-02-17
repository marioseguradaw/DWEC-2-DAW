// Autor: Mario Segura Abad
// Fecha: 01/10/2025

function calcularMedia(...numeros) {
  // El parámetro 'numeros' es un array que contiene el listado
  // de los parámetros pasados en la llamada a la función
  // Ejemplo: calcularMedia(4,5,6) --> numeros = [4,5,6]

  let suma = 0; // Inicializamos acumulador
  let cantidad = numeros.length; // Cantidad de números recibidos

  if (cantidad == 0) return 0; // Caso especial: si no pasan números, devolvemos 0

  // Recorremos el array 'numeros' sumando cada elemento
  for (let num of numeros) {
    suma += num;
  }

  // Calculamos la media dividiendo la suma total entre la cantidad
  return suma / cantidad;
}

// --- Ejemplos de uso ---

let media1 = calcularMedia(4, 6, 5); // 5
let media2 = calcularMedia(20, 40, 80, 60); // 50
let media3 = calcularMedia(3, 16, 22, 98, 16, 40); //32.5