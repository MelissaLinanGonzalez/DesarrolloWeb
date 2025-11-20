function comprobarTexto(){
    let textos = document.getElementsByTagName("input")
    for(let texto of textos){
        if((!isNaN(texto.value)) || (texto.value === " ")){
            texto.style.backgroundColor = "red"
        } else{
            texto.style.backgroundColor = "white"
        }
    }
}