let contador = 0
let contenido = document.getElementById("contador")
let minutos = 0

function mostrarTiempo(){
    contador++;

    if(contador === 60){
        minutos += 1
        contador = 0
    }
    contenido.innerHTML = `Tiempo visitado: ${minutos}m: ${contador}s`

    if(minutos === 2){
        window.location.href = 'https://iesantoniogala.es/'
    }
}