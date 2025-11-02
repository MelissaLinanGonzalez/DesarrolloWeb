const banners = [
    "imagenes/rojo.jpg",
    "imagenes/verde.png",
    "imagenes/amarillo.jpg"
];

let indice = 0;
let semaforo;
let parado = false;

function cambiarImagen(){
    let img = document.getElementById("imagen");
    img.src = banners[indice];
    indice++;
    if (indice >= banners.length){
        indice = 0;
    }
}

window.onload = function(){
    document.getElementById("imagen").src = banners[0];
    semaforo = setInterval(cambiarImagen,3000);
}

function pararSecuencia(){
    if (parado){
        semaforo = setInterval(cambiarImagen,3000);
        parado = false;
    } else {
        clearInterval(semaforo);
        parado = true;
    }
}