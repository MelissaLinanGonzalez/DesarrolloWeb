function crearTabla() {
    const tabla = document.querySelector('#tabla');
    const estilo = "color: blue; font-size: 12pt;";
    tabla.setAttribute('style', estilo);
    tabla.innerHTML = `
        <tr>
            <td>Palma del Río</td>
        </tr>
        <tr>
            <td>Córdoba</td>
        </tr>
    `

}