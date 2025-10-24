let contador = 0; //segundos

function tiempoVisitado(){
    contador++;
    document.getElementById("contador").innerHTML = "Tiempo de visita: " + contador + "s";

}