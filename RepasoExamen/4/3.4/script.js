let calificaciones = {
    DIN: 10,
    AaD: 8.75,
    Opt: 9.9,
    IPE: 10,
    Inglés: 9.5
}

let calificaciones2 = {
    DIN: 10,
    AaD: 8.75,
    Opt: 9.9,
    IPE: 10,
    Inglés: 9.5
}

let calificaciones3 = {
    DIN: 10,
    AaD: 8.75,
    Opt: 9.9,
    IPE: 10,
    Inglés: 9.5
}

let a1 = new Alumno("Melissa", calificaciones)
let a2 = new Alumno("Amparo", calificaciones2)
let a3 = new Alumno("Dolores", calificaciones3)

let alumnos = [a1, a2, a3]

let clase = new Clase("2º DAM", alumnos)

function mostrarInfoCurso(){
    let contenido = document.getElementById("contenido")

    contenido.innerHTML = clase.mostrarAlumnos()
}

function buscarAlumnoNombre(){
    let nombre = document.getElementById("nombre").value
    let alumnoBuscado = document.getElementById("alumnoBuscado")
    alumnoBuscado.innerHTML = clase.buscarAlumno(nombre)
}