// Autor: Mario Segura Abad
// Fecha: 23/11/2025


// 4.2. Shadow DOM
document.getElementById("p1"); // Devuelve el primer párrafo
document.getElementById("p4"); // undefined (está en el Shadow DOM)

let miElemento = document.getElementById("elem1");
miElemento.shadowRoot.getElementById("p1"); // Devuelve el párrafo 3 (accedemos a través del Shadow DOM)

document.querySelectorAll("p"); // Devuelve los dos primeros párrafos
miElemento.shadowRoot.querySelectorAll("p"); // Devuelve los dos últimos párrafos