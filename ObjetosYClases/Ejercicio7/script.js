class Ficha{
    constructor(nombre) {
        this.nombre = nombre;
        this.distancia = 0;
        this.sesiones = [];
    }

    anotar(kilometros){
        if (kilometros > 0){
            this.distancia = kilometros;
            this.sesiones.push(kilometros);
            return `Se han registrado ${kilometros} km para ${this.nombre}`;
        } else {
            return "Introduce un válido";
        }
    }

    media(){
        if (this.sesiones.length === 0){
            return 0;
        }
        let suma = 0;
        for (let i = 0; i < this.sesiones.length; i++){
            suma += this.sesiones[i];
        }
        return suma / this.sesiones.length;
    }
}

let ficha;
function crearFicha(){
    let nombre = document.getElementById("nombre").value;
    if (nombre === ""){
        alert("Introduce un nombre");
    }

    ficha = new Ficha(nombre);
    document.getElementById("resultado").innerHTML = `Ficha con nombre ${nombre}, creada correctamente`;
    document.getElementById("nombre").value = "";
}

function anotarSesion(){
    if (!ficha){
        alert("Es necesario crear la ficha");
        return;
    }

    let kmEntrada = parseFloat(document.getElementById("km").value);
    let mensaje = ficha.anotar(kmEntrada);
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("km").value = "";
}

function mostrarMedia(){
    if (!ficha){
        alert("Es necesario crear la ficha");
        return;
    }

    let media = ficha.media();
    document.getElementById("resultado").innerHTML = `Media de kilómetros de ${ficha.nombre}: ${media}`;
}