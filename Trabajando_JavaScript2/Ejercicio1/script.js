function limpiarLabel(){
    let texto = document.getElementById('numero');
    //window.alert('El resultado de unir ambos textos es: ' + texto);
    texto.addEventListener('input', function(){
        if (/\D/.test(this.value)){ // Aquí comprobamos que cada vez que introducimos algo lo compara para saber si es letra o digito
            this.value = ''; // Si lo introducido es una letra, borramos el contenido
        }
    })

}