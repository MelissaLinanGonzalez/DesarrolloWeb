function mostrarVentana(){
    let texto1 = document.getElementById('text1').value;
    let texto2 = document.getElementById('text2').value;

    let resultado = texto1 + " " + texto2;
    window.alert('El resultado de unir ambos textos es: ' + resultado);
}