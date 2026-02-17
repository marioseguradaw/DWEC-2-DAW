// Autor: Mario Segura Abad
// Fecha: 26/09/2025

/* Función suma */
function suma(a, b) {
	return a + b;
};

/* Función resta */
function resta(a, b) {
	return a - b;
};

function multiplicacion(a, b) {
    return a * b;
}

/* Función división */
function division(a, b) {
    if(b === 0) {
        return "Error. No se puede dividir por cero.";
    }
    return a / b;
}

/* Función mcd */
function mcd(a, b) {
    while(b != 0) {
        aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}

/* Función mcm */
function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
    multiplicacion,
    division,
    mcd,
    mcm
}