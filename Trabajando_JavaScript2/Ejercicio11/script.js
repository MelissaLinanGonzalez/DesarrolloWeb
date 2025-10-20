function mostrarTablaColumnas(){
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;

    const contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = "";

    const tabla = document.createElement('table');

    tabla.style.borderCollapse = "collapse";

    for (let i = 1; i <= filas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= columnas; j++) {
            const col = document.createElement("td");
            col.textContent = `(${i}, ${j + 1})`;
            if (j % 2 === 0) {
                col.classList.add("filaPar");
            } else {
                col.classList.add("filaImpar");
            }
            fila.appendChild(col);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}