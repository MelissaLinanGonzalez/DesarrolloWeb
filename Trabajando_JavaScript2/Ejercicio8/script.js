function comprobar(){
    const entradas = document.querySelectorAll('input[type="text"]')

    entradas.forEach(element => {
        const valor = element.value.trim();
        const tieneDigito = /\d/.test(valor);

        if (valor === '' || tieneDigito) {
            element.classList.add('inputError');
        } else {
            element.classList.remove('inputError');
        }
    })

}