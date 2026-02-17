// Autor: Mario Segura Abad
// Fecha: 21/10/2025


// Declaración de las variables globales
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

// Función para iniciar el cronómetro
function inicio() {
    control = setInterval(cronometro, 10);
    document.getElementById("inicio").disabled = true; // Disabled = true permitirá que, una vez arrancado el cronómetro, dicho botón esté deshabilitado
    document.getElementById("parar").disabled = false; // Disabled = false permitirá que, una vez arrancado el cronómetro, el botón "parar" esté habilitado
    document.getElementById("continuar").disabled = true; // Más de lo mismo
    document.getElementById("reinicio").disabled = false; // Más de lo mismo
}

// Función para detener/parar el cronómetro
function parar() {
    clearInterval(control);
    document.getElementById("parar").disabled = true; // Disabled = true nos muestra el botón "parar" deshabilitado, pues no necesitamos pulsar "parar" de nuevo
    document.getElementById("continuar").disabled = false; // Disabled = false nos muestra el botón "continuar" habilitado, pues necesitaremos pulsar "continuar" de nuevo
    document.getElementById("reinicio").disabled = false; // OPCIONAL: pero, ¿y si quiero, una vez parado reiniciarlo del todo?
}

// Función para reiniciar el cronómetro
function reinicio() {
    clearInterval(control);
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Milisegundos.innerHTML = "00";
    Segundos.innerHTML = "00:";
    Minutos.innerHTML = "00:";
    Horas.innerHTML = "00:";

    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}

// Función que muestra el ciclo del propio cronómetro
function cronometro() {
    if(milisegundos < 99) {
        milisegundos++;
        if(milisegundos < 10) {
            milisegundos = "0"+milisegundos; // Gracias a esto, se muestra por pantalla: ':01, :02', etc en vez de: ':1, :2', etc
        }
        Milisegundos.innerHTML = milisegundos;
    }
    if(milisegundos == 99) {
        milisegundos = -1; // Se suele utilizar como "truco" para que al sumar después, vuelva a 0 justo en la siguiente vuelta del cronómetro
    }
    if(milisegundos == 0) {
        segundos++;
        if(segundos < 10) {
            segundos = "0"+segundos;
        }
        Segundos.innerHTML = segundos+":";
    }
    if(segundos == 59) {
        segundos = -1;
    }
    if(milisegundos == 0 && segundos == 0) {
        minutos++;
        if(minutos < 10) {
            minutos = "0"+minutos;
        }
        Minutos.innerHTML = minutos+":";
    }
    if(minutos == 59) {
        minutos = -1;
    }
    if(milisegundos == 0 && segundos == 0 && minutos == 0) {
        horas++;
        if(horas < 10) {
            horas = "0"+horas;
        }
        Horas.innerHTML = horas+":";
    }
}