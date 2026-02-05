function procesar() {
    let texto = document.getElementById("texto").value;
    let contenedor = document.getElementById("contenedor");

    let elementos = texto.split(' ').filter(el => el.trim() !== '');

    let tabla = document.createElement("table");

    for (let i = 0; i < elementos.length; i++) {
        let actual = elementos[i];
        
        let fila = document.createElement("tr");

        let celdaLetras = document.createElement("td");
        let celdaNumeros = document.createElement("td");

        if (!isNaN(actual)) {

            celdaNumeros.textContent = actual;
            celdaNumeros.style.backgroundColor = "lightblue";
            celdaLetras.textContent = "-"; 
        } else {

            celdaLetras.textContent = actual;
            celdaLetras.style.backgroundColor = "lightgreen";
            celdaNumeros.textContent = "-";
        }

        fila.appendChild(celdaLetras);
        fila.appendChild(celdaNumeros);

        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}