let segundos = 0; //segundos
let minutos=0;
let horas=0;
let semaforo="";

function iniciarCrono(){

    segundos++;
    if(segundos === 60){
        segundos=0;
        minutos++;
    }

    if(minutos === 60){
        minutos=0;
        horas++;
    }

    let tiempo = horas + "h: " + minutos + "m: " + segundos + "s";
    document.getElementById("contador").innerHTML = tiempo;
}

// semaforo da la opción de reanudar el intervalor para que el crono funcione, si está vacío inicia el crono
function contar(){
    if(semaforo === "") {
        semaforo = setInterval(iniciarCrono, 1000);
    }
}

/* El botón de parar elimina el intervalo del semáforo, por lo que el valor del crono no se actualiza y asigna cadena
vacía a la variable semáforo, para que cuando le volvamos a dar al boton iniciar, sigua cronometrándo por donde iba.
Esto no afecta al contenido existende del crono, es decir, no afecta a las horas, minutos, segundos.
 */
function parar(){
    clearInterval(semaforo);
    semaforo="";
    let tiempos = horas + "h: " + minutos + "m: " + segundos + "s";
    document.getElementById("tiempos").innerHTML += tiempos + "<br>";
}

function resetear(){
    clearInterval(semaforo);
    semaforo="";
    segundos = 0;
    minutos = 0;
    horas = 0;

    let tiempo = horas + "h: " + minutos + "m: " + segundos + "s";
    document.getElementById("contador").innerHTML = tiempo;
}