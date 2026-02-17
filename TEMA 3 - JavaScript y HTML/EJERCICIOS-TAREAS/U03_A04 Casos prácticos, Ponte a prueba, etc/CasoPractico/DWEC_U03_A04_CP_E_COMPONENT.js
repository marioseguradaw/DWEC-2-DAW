// Autor: Mario Segura Abad
// Fecha: 24/11/2025

class MiChiste extends HTMLElement {
    constructor() {
        super();

        this.datos = null; // aquí se guardará el objeto {enunciado, respuesta}

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const tpl = document.getElementById("tpl-chiste");
        const contenido = tpl.content.cloneNode(true);

        // Insertar en el Shadow DOM
        this.shadowRoot.appendChild(contenido);

        // Añadir enunciado
        this.shadowRoot.querySelector(".enunciado").textContent = this.datos.enunciado;

        // Botón
        const boton = this.shadowRoot.querySelector("button");

        // Evento
        boton.addEventListener("click", () => {
            alert(this.datos.respuesta);
        });
    }
}

customElements.define("mi-chiste", MiChiste);