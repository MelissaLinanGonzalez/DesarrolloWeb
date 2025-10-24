let contador = 0; //segundos
let minutos=0;
let horas=0;
function tiempoVisitadoRedireccion(){

    contador++;
    if(contador === 60){
        contador=0;
        minutos++;
    }

    if(minutos === 60){
        minutos=0;
        horas++;
    }

    if (minutos === 2){
        window.location.href="https://iesantoniogala.es/";
    }

    let cadena = "Tiempo de visita: " + horas + "h: " + minutos + "m: " + contador + "s";
    document.getElementById("contador").innerHTML = cadena;
}