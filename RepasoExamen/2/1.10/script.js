function crearTabla(){
    let filas = parseInt(document.getElementById("filas").value)
    let columnas = parseInt(document.getElementById("columnas").value)
    let contenido = document.getElementById("tabla")
    contenido.innerHTML = ""

    let tabla = document.createElement("table")

    for(let i = 1; i <= filas; i++){
        let f = document.createElement("tr")
        for(let j = 1; j <= columnas; j++){
            let c = document.createElement("td")
            c.textContent = `fila ${i}, columna ${j}`
            f.appendChild(c)
        }

        if(i % 2 == 0){
            f.style.backgroundColor = "violet"
        }
        tabla.appendChild(f)
    }

    contenido.appendChild(tabla)
}