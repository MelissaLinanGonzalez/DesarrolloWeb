function detectarLetra() {
    let texto = document.getElementById("texto").value
    let ultimoCaracter = texto.charAt(texto.length -1)

    if(isNaN(ultimoCaracter)){
        document.getElementById("texto").value = " "
    }
}