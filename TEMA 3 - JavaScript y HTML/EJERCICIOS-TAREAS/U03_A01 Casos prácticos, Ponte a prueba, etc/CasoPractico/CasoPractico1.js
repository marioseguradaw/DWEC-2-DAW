// Autor: Mario Segura Abad
// Fecha: 13/11/2025


// Crear el contenedor principal
const tarjeta = document.createElement('div');
tarjeta.className = 'tarjeta';

// Crear el título
const divTitulo = document.createElement('div');
divTitulo.className = 'tarjeta-titulo';
const h2 = document.createElement('h2');
h2.textContent = 'Datos de contacto';
divTitulo.appendChild(h2);

// Crear el cuerpo
const divCuerpo = document.createElement('div');
divCuerpo.className = 'tarjeta-cuerpo';

// Función auxiliar para crear un párrafo con etiqueta y valor
function crearParrafo(clase, etiqueta, valor) {
    const p = document.createElement('p');
    p.className = clase;
    
    const span = document.createElement('span');
    span.className = 'negrita';
    span.textContent = etiqueta;

    p.appendChild(span);
    p.appendChild(document.createTextNode('' + valor));

    return p;
}

// Añadir párrafos al cuerpo
divCuerpo.appendChild(crearParrafo('tarjeta-nombre', 'Nombre:', 'Laura Pérez'));
divCuerpo.appendChild(crearParrafo('tarjeta-email', 'Email:', 'laura@noexiste.com'));
divCuerpo.appendChild(crearParrafo('tarjeta-telefono', 'Teléfono:', '612123123'));

// Añadir todo a la tarjeta
tarjeta.appendChild(divTitulo);
tarjeta.appendChild(divCuerpo);

// Insertar en el documento
document.body.appendChild(tarjeta);