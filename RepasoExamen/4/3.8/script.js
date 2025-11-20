let contenido = document.getElementById("contenido");
let conductor;
function crearConcutor(){
    let nombreConductor = document.getElementById("nombreConductor").value;
    let licencia = document.getElementById("licenciaConductor").value;
    conductor = new Conductor(nombreConductor, licencia);
    contenido.innerHTML = "Conductor añadido correctamente";
    document.getElementById("nombreConductor").value = "";
    document.getElementById("licenciaConductor").value = "";
}


let autobus;
function crearAutobus(){
    let capacidad = parseInt(document.getElementById("capacidad").value);
    autobus = new Autobus(capacidad, conductor);
    contenido.innerHTML = `Autobús creado correctamente con capacidad ${capacidad} y conductor: ${conductor.nombre}`;
    document.getElementById("capacidad").value = "";
}



function subirPasajero(){
    let numPasajeros = parseInt(document.getElementById("pasajeros").value);
    contenido.innerHTML = autobus.subir(numPasajeros);
    document.getElementById("pasajeros").value = "";
}

function bajarPasajero(){
    let numPasajeros = parseInt(document.getElementById("pasajeros").value);
    contenido.innerHTML = autobus.bajar(numPasajeros);
    document.getElementById("pasajeros").value = "";
}