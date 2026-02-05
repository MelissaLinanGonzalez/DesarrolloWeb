let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");

// Evento cuando se hace click en el botón de enviar
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    let nota = {
        titulo: document.getElementById("titulo").value,
        cuerpo: document.getElementById("cuerpo").value,
        autor: document.getElementById("autor").value
    };

    crearNota(nota); // Llama a la función para insertar la nota en el DOM
    formulario.reset(); // Se limpia el formulario una vez enviado

});

function crearNota(nota) {
    let divNota = document.createElement("div");
    divNota.classList.add('nota');

    divNota.innerHTML = `
        <h3>Título: ${nota.titulo}</h3>
        <p>Cuerpo: ${nota.cuerpo}</p>
        <p><em>Autor: ${nota.autor}</em></p>
        <br><br>
        <button class="btn-borrar">Borrar objeto</button>
    `;

    let botonBorrar = divNota.querySelector('.btn-borrar');
    botonBorrar.onclick = function(){
        divNota.remove();
    }

    contenedor.appendChild(divNota);
}


