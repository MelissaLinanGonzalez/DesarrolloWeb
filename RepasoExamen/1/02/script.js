function generarTablaColor(){
    let tabla = document.createElement("table")
    let estilo = "color: blue; font-size: 12px;"
    tabla.setAttribute("style", estilo);
    let contenido = document.getElementById("contenido")
    for (let i = 1; i <=2 ; i++) {
        let fila = document.createElement("tr")
        for (let j = 1; j <= 1; j++) {
            let columna = document.createElement("td")
            columna.textContent = `Fila ${i}, Columna ${j}`
            fila.appendChild(columna)
        }
        tabla.appendChild(fila)
    }

    contenido.appendChild(tabla)
}