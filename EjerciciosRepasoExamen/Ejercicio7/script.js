let contenido = document.getElementById('contenido');
let contenidoTiempo = document.getElementById('tiempo');
let contador = 0;
let tabla = null;

function crear() {
    contador++;
    contenidoTiempo.innerHTML = `Tiempo transcurrido: ${contador} s`;

    if (contador % 5 === 0) {
        // Si aún no existe la tabla, la creamos
        if (!tabla) {
            tabla = document.createElement('table');
            tabla.style.borderCollapse = 'collapse';
            tabla.style.marginTop = '10px';
            contenido.appendChild(tabla);
        }

        // Creamos una fila nueva
        let fila = document.createElement('tr');
        let celda = document.createElement('td');
        celda.textContent = `Fila ${tabla.rows.length + 1}`; // número de fila
        celda.style.border = '1px solid black';
        celda.style.padding = '5px';

        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
}