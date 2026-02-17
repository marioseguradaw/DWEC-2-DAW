// Autor: Mario Segura Abad
// Fecha: 25/11/2025


// Filtrar números de teléfono
var tel1 = "612-443-355";
var tel2 = "612 44 33 55";
var tel3 = "(612) 44 33 55";
var regTel = /\d/g; // Se buscan caracteres numéricos

// 'match' devuelve un array con las coincidencias; 'join' combina los elementos de un array
// con el delimitador indicado
tel1.match(regTel).join(""); // '612443355'
tel2.match(regTel).join(""); // '612443355'
tel3.match(regTel).join(""); // '612443355'

// Otra opción con 'replace'. '\D' hace referencia a dígitos no numéricos
// Se reemplazan los dígitos no numéricos con el carácter vacío
var regTel2 = /\D/g; // Se buscan caracteres numéricos
tel1.replace(regTel2, ""); // '612443355'
tel2.replace(regTel2, ""); // '612443355'
tel3.replace(regTel2, ""); // '612443355'