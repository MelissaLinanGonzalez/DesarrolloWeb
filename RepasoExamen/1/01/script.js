function crearTablaEj1(){
    let tabla = document.createElement("table");
    let contenido = document.getElementById("tabla");

    contenido.innerHTML = ``;
    for (let i = 1; i <= 2; i++) {
        let fila = document.createElement("tr");
        for (let j = 1; j <= 1; j++) {
            let columna = document.createElement("td");
            columna.textContent = `Fila ${i}, Columna ${j}`
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }

    contenido.appendChild(tabla);
}