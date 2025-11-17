let contador = 0;
let intervalo = null;
function iniciarTiempo(){
    contador++;

    let tiempo = document.getElementById('tiempo');
    tiempo.innerHTML = contador;
    if (contador === 10){
        let contenido = document.getElementById('contenido');

        contenido.innerHTML = "<h1>Este texto es generado a los 10 segundos</h1>"
        clearInterval(intervalo);
        intervalo = null;
    }
}

function iniciarCronometro(){
    contador = 0;
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = "";
    if (!intervalo){
        intervalo = setInterval(iniciarTiempo, 1000);
    }
}