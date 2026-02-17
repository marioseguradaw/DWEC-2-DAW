// Autor: Mario Segura Abad
// Fecha: 10/10/2025

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formGasto');
    const lista = document.getElementById('listaGastos');
    const totalSpan = document.getElementById('total');

    // Array de gastos
    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // ----------------------------
    // Añadir nuevo gasto
    // ----------------------------
    form.addEventListener('submit', e => {
        e.preventDefault();

        const descripcion = document.getElementById('descripcion').value.trim();
        const importe = document.getElementById('importe').value;
        const categoria = document.getElementById('categoria').value;

        if (!descripcion || !importe || importe <= 0) {
            alert("Por favor, introduce una descripción y un importe válido.");
            return;
        }

        const gasto = {
            id: Date.now(),
            descripcion,
            importe: parseFloat(importe),
            categoria,
            fecha: new Date()
        };

        gastos.push(gasto);
        localStorage.setItem('gastos', JSON.stringify(gastos));

        actualizarLista();
        actualizarTotal();
        form.reset();

        document.dispatchEvent(new Event('gastoActualizado'));
    });

    // ----------------------------
    // Mostrar lista y total
    // ----------------------------
    function actualizarLista() {
        lista.innerHTML = '';
        gastos.forEach(g => {
            const li = document.createElement('li');
            li.textContent = `${new Date(g.fecha).toLocaleDateString()} - ${g.descripcion} (${g.categoria}): ${g.importe.toFixed(2)} €`;
            li.addEventListener('dblclick', () => {
                if (confirm('¿Está seguro de que quiere eliminar este gasto?')) {
                    gastos = gastos.filter(x => x.id !== g.id);
                    localStorage.setItem('gastos', JSON.stringify(gastos));
                    actualizarLista();
                    actualizarTotal();
                    document.dispatchEvent(new Event('gastoActualizado'));
                }
            });
            lista.appendChild(li);
        });
    }

    function actualizarTotal() {
        const total = gastos.reduce((suma, g) => suma + parseFloat(g.importe), 0);
        totalSpan.textContent = total.toFixed(2);
    }

    // Inicializar
    actualizarLista();
    actualizarTotal();
});