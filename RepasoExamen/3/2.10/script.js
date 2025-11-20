
let div = document.getElementById("semaforo")

let colores = [
    "green",
    "yellow",
    "red"
]

let indice = 0
let intervalo

window.onload = function(){
    div.style.backgroundColor = colores[0]
    intervalo = setInterval(semaforo, 3000)
}

function semaforo(){
    div.style.backgroundColor = colores[indice]
    indice = (indice + 1) % colores.length
    
}
