// Autor: Mario Segura Abad
// Fecha: 07/02/2026


// 1. CÓDIGO DE LA TEORÍA: Importación de la libreria
import Chart from 'chart.js/auto';

// 2. PRUEBA DE AUTORÍA (Consola)
console.log("Ejecutando proyecto Webpack del Apartado 1. Autor: Mario Segura");

// 3. EJECUCIÓN: Código para probar que la librería se ha importado bien.
const ctx = document.getElementById('grafica').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Rosa'],
        datasets: [{
            label: '# de Votos',
            data: [12, 9, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(45, 162, 235, 1)'
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});