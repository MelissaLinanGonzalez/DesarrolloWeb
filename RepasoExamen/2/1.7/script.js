function crearTablaPar(){
    let numero = parseInt(document.getElementById("num").value)
    let tabla = document.createElement("table")
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = " "
    if(isNaN(numero)){
        alert("Introduce un número")
    } else {
        for(let i = 0; i <= numero; i++){
            if(i % 2 === 0){
                let fila = document.createElement("tr")
                for(let j = 0; j < 1; j++){
                    let columna = document.createElement("td")
                    columna.textContent = i
                    fila.appendChild(columna)
                }
                tabla.appendChild(fila)
            }
        }
        contenido.appendChild(tabla)
    }
}