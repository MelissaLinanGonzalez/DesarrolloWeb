function crearTablaConLabel() {
    const tabla = document.querySelector('#tabla');
    let texto1 = document.getElementById('text3').value;
    let texto2 = document.getElementById('text4').value;

    tabla.innerHTML = `
        <tr>
            <td>${texto1}</td>
        </tr>
        <tr>
            <td>${texto2}</td>
        </tr>
`
}