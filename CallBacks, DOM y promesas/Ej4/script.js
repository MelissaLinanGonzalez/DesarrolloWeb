function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    if (num2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}

function realizarOperacion(num1, num2, funcionCallback){
    return funcionCallback(num1, num2);
}

function llamarCallback(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let contenedor = document.getElementById("resultado");
    let resultado = "";
    let tabla = document.getElementById("tabla");
    let operacionElegida;

    if (operacion === "sumar"){
        operacionElegida = suma;
    } else if (operacion === "restar"){
        operacionElegida = resta;
    } else if (operacion === "multiplicar"){
        operacionElegida = multiplicacion;
    } else if (operacion === "dividir"){
        operacionElegida = division;
    }

    resultado = realizarOperacion(num1, num2, operacionElegida);

    let fila = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.textContent = num1;
    let col2 = document.createElement("td");
    col2.textContent = num2;
    let col3 = document.createElement("td");
    col3.textContent = operacion;
    let col4 = document.createElement("td");
    col4.textContent = resultado;

    fila.appendChild(col1);
    fila.appendChild(col2);
    fila.appendChild(col3);
    fila.appendChild(col4);

    tabla.appendChild(fila);
}