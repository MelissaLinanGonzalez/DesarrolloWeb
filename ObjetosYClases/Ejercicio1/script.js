function Alumno(nombre, calificaciones){
    this.nombre = nombre;
    this.calificaciones = calificaciones;
    this.notaMedia = function(){
        let suma = 0;
        let total = 0;
        for (let asignatura in this.calificaciones){
            suma += this.calificaciones[asignatura];
            total++;
        }
        return suma / total;
    }
}

let calificaciones = {
    DIN: 8,
    AaD: 9,
    Opt: 8.75,
    IPE: 8.5,
    Ingles: 9.5
}

let alumno = new Alumno("Melissa", calificaciones);

function mostrarNotas(){
    let salida = `Alumno: ${alumno.nombre} <br>`;

    for (let asignatura in calificaciones){
        salida += `${asignatura}: ${alumno.calificaciones[asignatura]} <br>`;
    }

    document.getElementById("notas").innerHTML = salida;

    document.getElementById("notaMedia").innerHTML = `Nota media:  ${alumno.notaMedia()}`
}