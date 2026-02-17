// Autor: Mario Segura Abad
// Fecha: 18/01/2026


// 3.3. Promesas frente a async/await
function programaPrincipal() {
    fetch("https://api.github.com/users/vuejs").then(respuesta => {
        return respuesta.json();
    }).then(datos => {
        console.log(datos.login);
    });
}

programaPrincipal();