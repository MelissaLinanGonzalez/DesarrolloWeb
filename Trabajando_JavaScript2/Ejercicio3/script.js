function enfoque(cuadro){
    cuadro.style.backgroundColor = "lightgray";
    cuadro.style.color = "blue";
}

function desenfoque(cuadro){
    cuadro.style.backgroundColor = "white";
    cuadro.style.color = "black";
}

function borrar(){
    const cuadroTexto = document.getElementsByTagName("input")
    for (let i = 0; i < cuadroTexto.length; i++) {
        cuadroTexto[i].value = "";
    }
}