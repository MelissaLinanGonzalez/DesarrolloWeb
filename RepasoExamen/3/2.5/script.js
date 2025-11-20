let contador = 0
let contenido = document.getElementById("contenido")
let gif = document.getElementById("gif")

let posicion = 0 // Posición actual 
let velocidad = 10 // pixeles por intervalo
let direccion = 1 // 1: derecha; -1: izquierda

let intervalo = setInterval(moverGif, 100)

function cambiarGif(){
    contador++

    if(contador === 30){
        clearInterval(intervalo)
        contenido.innerHTML = ""
        let tabla = document.createElement("table")
        for(let i = 1; i <= 5; i++){
            let f = document.createElement("tr")
            for(let j = 1; j <= 5; j++){
                let c = document.createElement("td")
                c.textContent = `(${i}, ${j})`
                f.appendChild(c)
            }
            tabla.appendChild(f)
        }
        contenido.appendChild(tabla)

    }
}

function moverGif(){
    let anchoG = gif.offsetWidth
    let anchoT = window.innerWidth

    posicion += velocidad * direccion
    gif.style.left = posicion + "px"

    if(posicion + anchoG >= anchoT){
        direccion = -1
    } else if(posicion <= 0){
        direccion = 1
    }

}