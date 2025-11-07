function numFactorial(){
    let num = parseInt(document.getElementById('numeroFactorial').value);
    let total = 1;
    let resultado = document.getElementById('resultadoFactorial');
    for(let i = 1; i <= num; i++){
        total *= i;
    }

    resultado.innerText = "Resultado: " + total;

}