function comprobarTexto(){
    let textos = document.getElementsByTagName("input")

    let errores = document.querySelectorAll(".error");
    errores.forEach(span => span.remove());

    for(let texto of textos){
        if((!isNaN(texto.value)) || (texto.value === " ")){
            texto.style.backgroundColor = "red"
            let span = document.createElement("span")
            span.textContent = "El campo es requerido o es un número"
            span.classList.add("error")
            texto.insertAdjacentElement("afterend", span)
        } else{
            texto.style.backgroundColor = "white"
        }
    }
}