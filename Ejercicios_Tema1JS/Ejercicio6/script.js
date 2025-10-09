function redimensionar(){
    let imagen = document.getElementById('samoyedo');
    let ancho = document.getElementById('ancho').value;
    let alto = document.getElementById('alto').value;

    // Convertimos a número
    let anchoNum = parseFloat(ancho);
    let altoNum = parseFloat(alto);

    // Comprobamos que lo introducido sean valores válidos
    if (isNaN(anchoNum) || isNaN(altoNum)){
        alert("Introduzca un valor numérico válido");
        return;
    }

    imagen.style.width = anchoNum + 'px';
    imagen.style.height = altoNum + 'px';

}