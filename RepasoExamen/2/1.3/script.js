function enfoque(elemento){
    elemento.style.color = "blue";
    elemento.style.backgroundColor = "lightgrey";
}

function restaurar(elemento){
    elemento.style.color = "";
    elemento.style.backgroundColor = "";
}

function borrarContenido(){
    let cuadros = document.getElementsByTagName("input")

    for(let cuadro of cuadros){
        cuadro.value = " "
    }
}