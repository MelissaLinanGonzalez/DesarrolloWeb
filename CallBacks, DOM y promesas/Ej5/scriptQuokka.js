// EJ5 Crea una función, que haciendo uso de las callbacks te devuelva
// si una cadena es numérica, alfabética o alfanumérica.

// Para comprobarlo tienes que tener la extensión de Quokka y el Quokka StatusBar

function imprimir(mensaje){
    console.log(mensaje);
}


function comprobar(texto, funcionCallback){
    let tieneLetras = false;
    let tieneNumeros = false;

    for(let i = 0; i < texto.length; i++){
        let caracter = texto[i];

        if (caracter === " ") continue;
        
        if(!isNaN(caracter)){
            tieneNumeros = true;
        } else{
            tieneLetras = true;
        }
    }

    if(tieneNumeros && !tieneLetras){
        funcionCallback(`El texto es numérico`);
    } else if (tieneLetras && !tieneNumeros){
        funcionCallback(`El texto es alfabético`);
    } else if(tieneLetras && tieneNumeros){
        funcionCallback(`El texto es alfanumérico`);
    } else{
        funcionCallback(`El texto contiene caracteres especiales o espaciones`);
    }
}

comprobar("123", imprimir);
comprobar("hola", imprimir);
comprobar("hola123", imprimir);