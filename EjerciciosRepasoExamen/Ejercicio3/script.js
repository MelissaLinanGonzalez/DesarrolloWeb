let dado = document.getElementById('imagen');

let imagenes = [
    "imagenes/dado1.png",
    "imagenes/dado2.png",
    "imagenes/dado3.png",
    "imagenes/dado4.png",
    "imagenes/dado5.png",
    "imagenes/dado6.png"
]
function tirarDado(){
    let numRandom = Math.floor(Math.random()*6);

    dado.src = imagenes[numRandom];
}