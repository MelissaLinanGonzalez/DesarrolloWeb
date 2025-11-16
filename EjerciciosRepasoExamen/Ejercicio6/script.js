let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");

function detectarNumeros(cadena){
    return cadena.replace(/\D/g, '');
}

texto1.addEventListener('input', () => {
    texto2.value = detectarNumeros(texto1.value);
});

texto1.addEventListener('focus', () => {
    texto1.classList.add('resaltado');
    texto2.classList.add('dim');
});

texto1.addEventListener('blur', () => {
    texto1.classList.remove('resaltado');
    texto2.classList.remove('dim');
});

function borrarContenido(){
    texto1.value = '';
    texto2.value = '';
    texto1.focus();
}