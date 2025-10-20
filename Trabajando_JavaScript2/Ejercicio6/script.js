const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

function cambiarImagenes(){
    const aux = imagen1.src;
    imagen1.src = imagen2.src;
    imagen2.src = aux;
}
