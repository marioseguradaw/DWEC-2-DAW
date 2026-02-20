// Autor: Mario Segura Abad
// Fecha: 18/01/2026


// 3.3. Promesas frente a async/await
async function programaPrincipal() {
    // 'fetch()' devuelve una promesa
    let respuesta = await fetch("https://api.github.com/users/vuejs");
    // 'json()' devuelve otra promesa
    respuesta.json().then(datos => {
        console.log(datos.login)
    });
}

programaPrincipal();