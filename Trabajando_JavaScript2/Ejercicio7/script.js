function crearTablaNumerosPares(){
    const numero = parseInt(document.getElementById('numero').value);
    const contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = "";

    const tabla = document.createElement('table');
    tabla.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";

    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0){
            const fila = document.createElement('tr');
            const celda = document.createElement('td');

            celda.textContent = i;
            fila.appendChild(celda);
            tabla.appendChild(fila);
        }
        contenedor.appendChild(tabla);

    }
}