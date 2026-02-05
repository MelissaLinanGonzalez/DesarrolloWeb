// Crea una función que recoja una cadena de operaciones matemáticas básicas
// (suma, resta, multiplicación y división) y paréntesis y te devuelva el resultado de la cadena.

let cadenaOperaciones = "1 + 3 * 4 - (6 / 2)"; 

// function calcular(cadenaOperaciones){
//     //return eval(cadenaOperaciones); // PELIGROSO.

//     // alternativa al anterior, crea una funcion temporal que devuelve el resultado de la cadena.
//     return new Function('return ' + cadenaOperaciones)(); 
// }

// console.log(calcular(cadenaOperaciones))

function calcularConPromesa(cadena){
    let promesa = new Promise((resolver, rechazar) => {

        try{
            let resultado = new Function('return ' + cadena)();
            if (isNaN(resultado)){
                rechazar("Error: El resultado no es un número válido");
            } else{
                resolver(resultado);
            }
        } catch(error){
            rechazar("Error en la sintaxis de la operación: " + error.message);
        }
        
    });
    return promesa;
}

calcularConPromesa(cadenaOperaciones)
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.error(error));
