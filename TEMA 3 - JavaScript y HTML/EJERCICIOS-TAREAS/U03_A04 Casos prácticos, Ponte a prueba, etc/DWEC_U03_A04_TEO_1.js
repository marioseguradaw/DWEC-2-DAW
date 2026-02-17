// Autor: Mario Segura Abad
// Fecha: 23/11/2025


// 4.2. Shadow DOM
class MiElemento extends HTMLElement {

    constructor() {
        super();

        // Inicializamos la cuenta
        this.cuenta = 0;
    }
    
    connectedCallback() {
        // Añadimos el Shadow DOM al elemento
        const shadow = this.attachShadow({mode: 'open'});

        let boton = document.createElement("button");
        boton.textContent = this.cuenta;
        boton.addEventListener("click", () => {
            this.contar();
            boton.textContent = this.cuenta;
        });

        // Añadimos el botón al Shadow DOM del elemento, en lugar de
        // añadirlo al elemento directamente
        shadow.append(boton);
    }

    contar() {
        this.cuenta++;
    }
}

// Registramos el componente personalizado
customElements.define("mi-elemento", MiElemento);