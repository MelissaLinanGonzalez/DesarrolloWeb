let numRandom = Math.floor(Math.random()*50) + 1;
let numAl = document.getElementById('numeroAleatorio');
numAl.innerHTML = numRandom;
function comprobarNum(){
    let num = document.getElementById('num').value;

    let resultado = document.getElementById('resultado');


    if (num < numRandom){
        resultado.innerHTML = "El número introducido es MENOR al número pensado";
    } else if (num > numRandom){
        resultado.innerHTML = "El número introducido es MAYOR al número pensado";
    } else if (num == numRandom){
        resultado.innerHTML = "CORRECTO";
    }
}