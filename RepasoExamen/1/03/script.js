

function calcularSuma(){
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    if (!isNaN(n1) && !isNaN(n2)){
        let suma = n1 + n2;

        alert(`${n1} + ${n2} = ${suma}`)
    } else {
        alert("Introduce un valor numérico");
    }
}