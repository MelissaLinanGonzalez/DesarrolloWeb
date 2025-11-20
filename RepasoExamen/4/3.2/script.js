class Alumno{
    constructor(nombre, calificaciones){
        this.nombre = nombre
        this.calificaciones = calificaciones
    }

    media(){
        let suma = 0
        let total = 0
        for(let asignatura in calificaciones){
            suma += this.calificaciones[asignatura]
            total++
        }
        return suma / total
    }
}

let calificaciones = {
    DIN: 10,
    AaD: 8.75,
    Opt: 9.9,
    IPE: 10,
    Ingles: 9.5
}

let alumno = new Alumno("Melissa", calificaciones);

function mostrarInfo(){
    let salida = `Alumno: ${alumno.nombre} <br>`
    for(let asignatura in alumno.calificaciones){
        salida += `${asignatura}: ${alumno.calificaciones[asignatura]} <br>`
    }
    document.getElementById("contenido").innerHTML = salida
    document.getElementById("media").innerHTML = `Nota media: ${alumno.media()}`
}