// Autor: Mario Segura Abad
// Fecha: 04/05/2026


// ---- SINTAX CLASS ----
class Enemigo {
    constructor() {
        this.energia = 7;
    }

    mover() {
        console.log("El enemigo se está moviendo. ¡Cuidado!");
    }
}

class Orco extends Enemigo {
    constructor() {
        super();
        this.fuerza = 15;
    }

    disparar() {
        console.log("El orco ha disparado. ¡A cubierto!");
    }
}

class Troll extends Enemigo {
    constructor() {
        super();
        this.fuerza = 20;
    }

    golpear() {
        console.log("El troll ha golpeado con fuerza. ¡Espabila!");
    }
}

// Pruebas creando objeto
const enemigo = new Enemigo();
const orco = new Orco();
const troll = new Troll();

// Imprimiendo propiedades de 'Orco'
console.log(orco.energia); // 7
console.log(orco.fuerza);  // 15
orco.mover();              // Método heredado de 'Enemigo'
orco.disparar();           // Método propio de 'Orco'

// Imprimiendo propiedades de 'Troll'
console.log(troll.energia); // 7
console.log(troll.fuerza);  // 20
troll.mover();              // Método heredado de 'Enemigo'
troll.golpear();            // Método propio de 'Troll'


// ---- FUNCIONES CONSTRUCTORAS ----
function Enemigo() {
    this.energia = 7
}

Enemigo.prototype.mover = function() {
    console.log("El enemigo se está moviendo. ¡Cuidado!")
};

function Orco() {
    // Hereda las propiedades de 'Enemigo'
    Enemigo.call(this);
    this.fuerza = 15;
}

// Orco como instancia de Enemigo
Orco.prototype = new Enemigo();
Orco.prototype.constructor = Orco;

Orco.prototype.disparar = function() {
    console.log("El orco ha disparado. ¡A cubierto!");
};

function Troll() {
    Enemigo.call(this);
    this.fuerza = 20;
}

// Troll como instancia de Enemigo
Troll.prototype = new Enemigo();
Troll.prototype.constructor = Troll;

Troll.prototype.golpear = function() {
    console.log("El troll ha golpeado con fuerza. ¡Espabila!");
};

// Pruebas con el 'Orco'
const orco2 = new Orco();
console.log("Energía del orco:", orco2.energia); // 7
console.log("Fuerza del orco:", orco2.fuerza); // 15
orco2.mover();
orco2.disparar();

// Pruebas con el 'Troll'
const troll2 = new Troll();
console.log("Energía del troll:", troll2.energia); // 7
console.log("Fuerza del troll:", troll2.fuerza); // 20
troll2.mover();
troll2.golpear();