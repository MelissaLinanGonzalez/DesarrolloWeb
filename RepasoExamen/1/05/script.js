function cambiarTamanio(){
    let imagen = document.getElementById("imagen")
    let ancho = "100px"
    let alto = "100px"

    imagen.setAttribute("style", `width: ${ancho}; height: ${alto};`)
}