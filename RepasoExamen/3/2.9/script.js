let banners = [
    "imagenes/banner1.jpg",
    "imagenes/banner2.jpg",
    "imagenes/banner3.jpg",
    "imagenes/banner4.jpg",
]

let seguir = true

let indice = 0

let intervalo

window.onload = function(){
    document.getElementById("imagen").src = banners[0];
    intervalo = setInterval(cambiarImagen,3000);
}

function cambiarImagen(){
    let imagen = document.getElementById("imagen")
    imagen.src = banners[indice]
    indice = (indice + 1) % banners.length
}

function parar(){
    if(seguir == true){
        seguir = false
        clearInterval(intervalo)
    } else{
        seguir = true
        intervalo = setInterval(cambiarImagen, 3000)
    }
}