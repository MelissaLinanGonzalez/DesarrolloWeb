let contador = 0;
let intervalo;

function iniciar() {
    intervalo = setInterval(mostrarGif, 1000);
}


function mostrarGif(){
    contador++;
    document.getElementById("contador").textContent = contador + " segundos";
    const imagen = document.getElementById('miImagen');
    let posicionActual = 0;
    const intervalo = setInterval(() => {
        posicionActual += 10; // Mueve 5 píxeles cada intervalo
        imagen.style.left = posicionActual + 'px';
        // Detener la animación cuando llega a un cierto punto (opcional)
        if (posicionActual >= 500) {
            clearInterval(intervalo);
        }
    }, 100);

    if (contador === 5) {
        clearInterval(intervalo); // Detenemos el intervalo
        crearTabla2();
    }
}

function crearTabla2() {
    const filas = 5;
    const columnas = 5;
    let contenedor = document.getElementById("contenido");

    contenedor.innerHTML = ""; // Quitamos el GIF

    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";

    for (let i = 1; i <= filas; i++) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= columnas; j++) {
            const col = document.createElement("td");
            col.textContent = `${i},${j}`;
            col.style.border = "1px solid black";
            col.style.padding = "10px";
            fila.appendChild(col);
        }

        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
}



