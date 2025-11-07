function comprobar(){
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let operacion = document.getElementById('operacion').value.toLowerCase();

    if (operacion === "sumar"){
        sumarNum(num1, num2);
    } else if (operacion === "restar") {
        restar(num1, num2);
    } else if (operacion === "multiplicar") {
        multiplicar(num1, num2);
    } else if (operacion === "dividir") {
        dividir(num1, num2);
    } else {
        document.getElementById('resultado').innerText = "Operación no reconocida";
    }
}

function sumarNum(num1, num2){

    let total = num1 + num2;
    let contenedor = document.getElementById('resultado');
    contenedor.innerText = "Resultado suma: " + total;
}

function restar(num1, num2){

    let total = num1 - num2;
    let contenedor = document.getElementById('resultado');
    contenedor.innerText = "Resultado resta: " + total;
}

function multiplicar(num1, num2){

    let total = num1 * num2;
    let contenedor = document.getElementById('resultado');
    contenedor.innerText = "Resultado multiplicación: " + total;
}

function dividir(num1, num2){

    let total;
    let resto;
    if (num2 > 0){
        total = parseInt(num1 / num2);
        resto = num1 % num2;
    }
    let contenedor = document.getElementById('resultado');
    contenedor.innerText = "Resultado división: " + total + " resto: " + resto;
}