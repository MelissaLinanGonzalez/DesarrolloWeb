const banners = [
    "imagenes/banner1.jpg",
    "imagenes/banner2.jpg",
    "imagenes/banner3.jpg",
    "imagenes/banner4.jpg",
];

let indice = 0;

function cambiarImagen(){
    let img = document.getElementById("imagen");
    img.src = banners[indice];
    indice = (indice + 1) % banners.length;
}

window.onload = function(){
    document.getElementById("imagen").src = banners[0];
    setInterval(cambiarImagen,3000);
}