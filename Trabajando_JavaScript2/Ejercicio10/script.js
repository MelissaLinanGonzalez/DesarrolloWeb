function mostrarTabla(){
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;

    const contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = "";

    const tabla = document.createElement('table');

    tabla.style.borderCollapse = "collapse";

    for (let i = 1; i <= filas; i++) {
        const fila = document.createElement("tr");
        if (i % 2 === 0) {
            fila.classList.add("filaPar");
        } else {
            fila.classList.add("filaImpar");
        }
        for (let j = 0; j < columnas; j++) {
            const col = document.createElement("td");
            col.textContent = `(${i}, ${j + 1})`;
            fila.appendChild(col);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}