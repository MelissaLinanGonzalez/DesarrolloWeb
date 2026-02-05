let tareaAEditar = null; // Asegúrate de que el nombre coincida abajo
const newTaskInput = document.getElementById('entradaTexto');
const addTaskBtn = document.getElementById('anyadir');
const taskList = document.getElementById('listaTareas');

function anyadirTarea() {
  let textoTarea = newTaskInput.value.trim();

  if (textoTarea === "") return; // Si está vacío, no hacemos nada

  // --- CASO 1: ESTAMOS EDITANDO ---
  if (tareaAEditar !== null) {
    tareaAEditar.textContent = textoTarea; // Actualizamos el span
    tareaAEditar = null; 
    addTaskBtn.textContent = "Agregar tarea"; 
  } 
  // --- CASO 2: ESTAMOS CREANDO UNA NUEVA ---
  else {
    let taskItem = document.createElement('li');

    // IMPORTANTE: Ponemos el texto en un span para no borrar los botones luego
    let spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteBtn');
    deleteButton.onclick = () => taskItem.remove();

    let modifButton = document.createElement('button');
    modifButton.textContent = 'Modificar';
    modifButton.classList.add('modifBtn');

    // Al pulsar Modificar, el texto sube al input
    modifButton.onclick = () => {
      newTaskInput.value = spanTexto.textContent; // Sube el texto
      tareaAEditar = spanTexto;                  // Guardamos la referencia
      addTaskBtn.textContent = "Guardar";       // Cambiamos el botón principal
      newTaskInput.focus();
    };

    taskItem.appendChild(spanTexto);
    taskItem.appendChild(modifButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }

  // Limpiar input siempre al final
  newTaskInput.value = '';
}