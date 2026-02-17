// Autor: Mario Segura Abad
// Fecha: 08/10/2025

// ----------------------------------------
// SINTAXIS CLASS
// ----------------------------------------
class Enemigo {
    constructor(energia = 10) {
        this.energia = energia;
    }

    mover() {
        console.log(`Propiedad de Enemigo: ${this.energia}`);
    }
}

// Clase derivada (Orco) que hereda de Enemigo
class Orco extends Enemigo {
    constructor(energia = 10, fuerza = 15) {
        super(energia); // Llama al constructor de Enemigo
        this.fuerza = fuerza;
    }

    disparar() {
        console.log(`Propiedad de Orco: ${this.fuerza}`);
    }
}

// Clase derivada (Troll) que hereda de Enemigo
class Troll extends Enemigo {
    constructor(energia = 10, fuerza = 20) {
        super(energia); // Llama al constructor de Enemigo
        this.fuerza = fuerza;
    }

    golpear() {
        console.log(`Propiedad de Troll: ${this.fuerza}`);
    }
}

// Crear objetos de cada clase
let enemigo = new Enemigo(10);
let orco = new Orco(10, 15);
let troll = new Troll(10, 20);

// Probar métodos
enemigo.mover(); // Propiedad de Enemigo: 10
orco.mover();    // Propiedad de Enemigo: 10
orco.disparar(); // Propiedad de Orco: 15
troll.mover();   // Propiedad de Enemigo: 10
troll.golpear(); // Propiedad de Troll: 20