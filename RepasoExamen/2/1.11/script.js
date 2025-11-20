function crearTablaM(){
    let filas = parseInt(document.getElementById("filas").value)
    let columnas = parseInt(document.getElementById("columnas").value)

    let contenido = document.getElementById("tabla")
    contenido.innerHTML = ""
    let tabla = document.createElement("table")

    for(let i = 1; i <= filas; i++){
        let f = document.createElement("tr")
        for(let j = 1; j <= columnas; j++){
            let c = document.createElement("td")
            c.textContent = `(${i}, ${j})`
            if(j % 2 == 0){
                c.style.backgroundColor = "aqua"
            }
            f.appendChild(c)
        }
        tabla.appendChild(f)
    }
    contenido.appendChild(tabla)
}