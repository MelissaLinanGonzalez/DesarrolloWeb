function cambiarImagen(){
    let im1 = document.getElementById("imagen1")
    let im2 = document.getElementById("imagen2")
    
    let aux = im1.src
    im1.src = im2.src
    im2.src = aux
}