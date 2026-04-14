// Autor: Mario Segura Abad
// Fecha: 08/04/2026


// 3.6. This
let usuario = {
    nombre: "David",
    saluda: function() { // Lugar de definición de "saluda"
        return this.nombre;
    }
}

// Lugar de ejecución de "saluda"
// Se llama a la función sobre el objeto
usuario.saluda(); // David

// Lugar de ejecución de "saluda"
// Se llama a la función sin referencia al objeto
let intentaSaludar = usuario.saluda;
intentaSaludar(); // undefined

/* Las funciones flecha no definen su propio "this" */
let usuario2 = {
    nombre: "David",
    saluda: () => { // Función 'saluda' definida como función flecha
        return this.nombre;
    }
}

// Lugar de ejecución de "saluda"
// Se llama a la función sobre el objeto
// 'this' no está definido, por ser una función flecha
usuario2.saluda(); // undefined

/* Ejemplo con función setTimeout */
let usuario3 = {
    nombre: "David",
    saludaConRetardo: function() {
        setTimeout( function() {
            // Intenta mostrar el nombre del usuario
            console.log(this.nombre);
        }, 1000); // Retardo de 1000ms (1s)
    }
}

usuario3.saludaConRetardo(); // undefined

/* Enlace explícito (bind) dentro del método saludaConRetardo, this */
let usuario4 = {
    nombre: "David",
    saludaConRetardo: function() {
        setTimeout(function() {
            console.log(this.nombre);
        }.bind(this), 1000);
        // Mediante 'bind(this)', conseguimos que la funcion
        // 'setTimeOut' tenga como contexto el mismo objeto
        // que la función 'saludaConRetardo'

    }
}

// 'saludaConRetardo' tiene como contexto 'usuario' por enlace implícito en su ejecución
// Como hemos utilizado 'bind', 'setTimeOut' también tendrá el mismo contexto.
// Por tanto, 'this.nombre' apuntará a 'usuario.nombre', tal como queremos
usuario4.saludaConRetardo(); // David

/* Utilizando una función flecha */
let usuario5 = {
    nombre: "David",
    saludaConRetardo: function() {
        setTimeout( () => {
            // Al utilizar una función flecha, 'setTimeOut'
            // no define su propio 'this'. JavaScript busca entonces
            // 'this' en el ámbito exterior (ámbito léxico), es decir,
            // el cuerpo de la función 'saludaConRetardo',
            // que es justo lo que queremos
            console.log(this.nombre);
        }, 1000);
    }
}

usuario5.saludaConRetardo(); // David