let contador = 0
let contenido = document.getElementById("contenido")

function cambiarGif(){
    contador++
    if(contador === 5){
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