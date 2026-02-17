// Autor: Mario Segura Abad
// Fecha: 10/10/2025

const ctx = document.getElementById('gastosChart').getContext('2d');
let gastosChart = null;

function actualizarGrafico() {
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    const categorias = ['Alimentación', 'Transporte', 'Ocio', 'Vivienda', 'Otros'];
    const totales = categorias.map(cat =>
        gastos.filter(g => g.categoria === cat)
              .reduce((sum, g) => sum + parseFloat(g.importe), 0)
    );

    if (gastosChart) {
        gastosChart.data.datasets[0].data = totales;
        gastosChart.update();
    } else {
        gastosChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categorias,
                datasets: [{
                    label: 'Gastos (€)',
                    data: totales,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false }, title: { display: true, text: 'Gastos por categoría' } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
}

// Inicializar gráfico
actualizarGrafico();

// Escuchar evento para actualizar automáticamente
document.addEventListener('gastoActualizado', actualizarGrafico);