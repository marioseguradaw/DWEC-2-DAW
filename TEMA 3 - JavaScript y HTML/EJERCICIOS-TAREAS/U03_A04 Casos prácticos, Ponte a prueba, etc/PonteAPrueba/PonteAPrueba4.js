// Autor: Mario Segura Abad
// Fecha: 24/11/2025

class MiContador extends HTMLElement {
    constructor() {
        super();

        // Inicializamos Shadow DOM
        this.attachShadow({ mode: "open" });

        // Valor inicial (se leerá de atributo en connectedCallback)
        this.cuenta = 0;
    }

    connectedCallback() {
        // Leer el atributo "iniciar"
        const valorInicial = this.getAttribute("iniciar");

        // Si existe, convertirlo a número. Si no, dejar en 0.
        this.cuenta = valorInicial ? parseInt(valorInicial) : 0;

        // Crear el botón
        const boton = document.createElement("button");
        boton.textContent = this.cuenta;

        // Evento de incremento
        boton.addEventListener("click", () => {
            this.cuenta++;
            boton.textContent = this.cuenta;
        });

        // Añadir al Shadow DOM
        this.shadowRoot.appendChild(boton);
    }
}

customElements.define("mi-contador", MiContador);