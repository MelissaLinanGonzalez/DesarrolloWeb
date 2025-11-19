function cambiar(){
    let ancho = parseFloat(document.getElementById("ancho").value)
    let alto = parseFloat(document.getElementById("alto").value)

    if(isNaN(ancho) || isNaN(alto)){
        alert("Introduce números, NO TEXTO")
    }
    let imagen = document.getElementById("imagen")
    imagen.setAttribute("style", `width: ${ancho}px; height: ${alto}px;`)
}