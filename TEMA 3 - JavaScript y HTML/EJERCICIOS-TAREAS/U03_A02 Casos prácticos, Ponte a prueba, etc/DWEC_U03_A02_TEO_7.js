// Autor: Mario Segura Abad
// Fecha: 16/11/2025

let personas = [
    {
        nombre: "Ana",
        apellido: "López"
    },
    {
        nombre: "Inés",
        apellido: "García"
    }
];

let editarPersona = {
    handleEvent: function(evento) {
        alert(`Editando datos de ${this.datosPersona.nombre} ${this.datosPersona.apellido}`);
        }
    }

    let borrarPersona = {
        handleEvent: function(evento) {
        alert(`Borrando datos de ${this.datosPersona.nombre} ${this.datosPersona.apellido}`);
    }
}