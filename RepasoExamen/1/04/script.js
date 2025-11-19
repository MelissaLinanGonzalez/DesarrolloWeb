let resultado = document.getElementById("resultado")

function mostrarTextoEnTabla(){
    let t1 = document.getElementById("texto1").value
    let t2 = document.getElementById("texto2").value

    resultado.innerHTML = `<table>
        <tr>
            <td>${t1}</td>
        </tr>
        <tr>
            <td>${t2}</td>
        </tr>
    </table>`
}