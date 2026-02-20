// Autor: Mario Segura Abad
// Fecha: 18/01/2026


// 3.3. Promesas frente a async/await
async function programaPrincipal() {
    let respuesta = await fetch("https://api.github.com/users/vuejs");
    let datos = await respuesta.json();
    console.log(datos.login);
}

programaPrincipal();