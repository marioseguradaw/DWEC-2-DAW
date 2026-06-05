// Autor: Mario Segura Abad
// Fecha: 03/06/2026


// Clase base
export class Enemigo {
    constructor() {
        this.energia = 7;
    }

    mover() {
        console.log("El enemigo se está moviendo. ¡Cuidado!");
    }
}

// Subclase Orco
export class Orco extends Enemigo {
    constructor() {
        super();
        this.fuerza = 15;
    }

    disparar() {
        console.log("El orco ha disparado. ¡A cubierto!");
    }
}

// Subclase Troll
export class Troll extends Enemigo {
    constructor() {
        super();
        this.fuerza = 20;
    }

    golpear() {
        console.log("El troll ha golpeado con fuerza. ¡Espabila!");
    }
}