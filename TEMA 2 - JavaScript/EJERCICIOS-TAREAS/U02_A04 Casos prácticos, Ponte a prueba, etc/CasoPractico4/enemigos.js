// Autor: Mario Segura Abad
// Fecha: 16/10/2025


// ------------------------------
// Definición de clases
// ------------------------------

export class Enemigo {
    constructor(energia = 10) {
        this.energia = energia;
    }

    mover() {
        console.log(`Propiedades de Enemigo: ${this.energia}`);
    }
}

// Clase derivada (Orco) que hereda de Enemigo
export class Orco extends Enemigo {
    constructor(energia = 10, fuerza = 15) {
        super(energia); // Llama al constructor de Enemigo
        this.fuerza = fuerza;
    }

    disparar() {
        console.log(`Propiedad de Orco: ${this.fuerza}`);
    }
}

// Clase derivada (Troll) que hereda de Enemigo
export class Troll extends Enemigo {
    constructor(energia = 10, fuerza = 20) {
        super(energia); // Llama al constructor de Enemigo
        this.fuerza = fuerza;
    }

    golpear() {
        console.log(`Propiedad de Troll: ${this.fuerza}`);
    }
}