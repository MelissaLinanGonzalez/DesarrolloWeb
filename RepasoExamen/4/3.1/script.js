function Alumno(nombre, calificaciones){
    this.nombre = nombre
    this.calificaciones = calificaciones
    this.media = function(){
        let suma = 0
        let contador = 0
        for(let asignatura in calificaciones){
            suma += this.calificaciones[asignatura]
            contador++   
        }
        return suma / contador
    }
}

let calificaciones = [
    DIN = 10,
    AaD = 8.75,
    Opt = 9.9,
    IPE = 10,
    Inglés = 9.5
]

let alumno = new Alumno("Melissa", calificaciones)

function mostrarInfo(){
    let salida = `Alumno: ${alumno.nombre} <br>`

    for(let asignatura in calificaciones){
        salida += `${asignatura}: ${alumno.calificaciones[asignatura]} <br>`
    }

    document.getElementById("contenido").innerHTML = salida;
    document.getElementById("media").innerHTML = `Nota media: ${alumno.media()}`

}