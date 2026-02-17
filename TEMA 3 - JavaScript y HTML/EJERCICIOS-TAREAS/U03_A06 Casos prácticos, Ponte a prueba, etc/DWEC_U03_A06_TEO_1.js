// Autor: Mario Segura Abad
// Fecha: 01/12/2025


// 6.2. Cookies

// Supongamos que el documet.cookie = "cookie1=valor1; cookie2=valor2"

document.cookie = "cookie1=valorNuevo";
console.log(document.cookie); // "cookie1=valorNuevo; cookie2=valor2"

document.cookie = "cookie3=valor3";
console.log(document.cookie); // "cookie1=valorNuevo; cookie2=valor2; cookie3=valor3"

// Cookie con un tiempo de vida de una hora
document.cookie = "cookie1=valorNuevo; max-age=3600";