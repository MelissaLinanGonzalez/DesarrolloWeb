// Crea una función que recoja una cadena de operaciones matemáticas básicas
// (suma, resta, multiplicación y división) y paréntesis y te devuelva el resultado de la cadena.

let cadenaOperaciones = "1 + 3 * 4 - (6 / 2)"; 

function calcular(cadenaOperaciones){
    let numeros = [];
    let i=0;
    let esparentesis=false;
    let pivaux;
    while(i<cadenaOperaciones.lenght){
        if(cadenaOperaciones[i] === "(" && esparentesis === false || cadenaOperaciones[i] === ")" && esparentesis === true){
            if(cadenaOperaciones[i] === "(" ){
                esparentesis=true;
                pivaux=i;
            }
        }else if(cadenaOperaciones[i] != isNaN && esparentesis === false){

        }


    }
    for(let i of cadenaOperaciones){
        numeros.push(parseFloat(i));
        console.log(i);
    }
}


calcular(cadenaOperaciones);
console.log("hola")