let contador = 0
let contenido = document.getElementById("contador")

function mostrarTiempo(){
    contador++;

    contenido.innerHTML = `Tiempo visitado: ${contador}`
}